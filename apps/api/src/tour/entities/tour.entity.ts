import { Location, Tour } from '@/common/db/mongoose-schemas/tour/tour.schema';
import { User } from '@/common/db/mongoose-schemas/user/user.schema';
import { PaginationResult } from '@/common/db/query-features';
import { ObjectIdToString } from '@/common/decorators/object-id-to-string.decorator';
import { PaginatedResponse } from '@/common/dto/paginated-result.dto';
import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Types } from 'mongoose';

export class TourEntity implements Tour {
  name: string;
  slug: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: Date[];
  secretTour: boolean;
  startLocation: string;
  locations: Location;
  guides: User[] | Types.ObjectId[];

  @ApiHideProperty()
  @Exclude()
  createdAt: Date;

  @ApiHideProperty()
  @Exclude()
  updatedAt: Date;

  @ObjectIdToString()
  _id: Types.ObjectId;

  constructor(entity: Partial<TourEntity> | null) {
    if (entity != null) {
      Object.assign(this, entity);
    }
  }

  static paginate(
    paginatedData: PaginationResult<TourEntity>,
  ): PaginatedResponse<TourEntity> {
    const { docs, info } = paginatedData;
    return {
      data: docs.map((item) => new this(item)),
      meta: {
        ...info,
      },
    };
  }

  static one(entity: Partial<TourEntity> | null) {
    return new TourEntity(entity);
  }

  static many(entities: Partial<TourEntity>[]) {
    return entities.map((entity) => TourEntity.one(entity));
  }
}
