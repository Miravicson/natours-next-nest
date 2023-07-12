import { TourDifficulty } from '@/common/db/mongoose-schemas/tour/constant';
import { CreateTourDto } from '@/tour/dto/create-tour.dto';

export const CreateTourDtoStub = (): CreateTourDto => {
  return {
    difficulty: TourDifficulty.difficult,
    duration: 1,
    maxGroupSize: 1,
    name: 'Test Tour With More than 10 characters',
    images: ['image1.jpg'],
    imageCover: 'image1.jpg',
    summary: 'This is a test tour',
    price: 225,
  };
};
