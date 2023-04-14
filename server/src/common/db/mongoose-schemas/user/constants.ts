import { PopulateOptions } from 'mongoose';

export const userSchemaPopulateOptions: PopulateOptions = {
  path: 'user',
  select: {
    _id: 1,
    email: 1,
    photo: 1,
    role: 1,
  },
};

export enum RoleEnum {
  user = 'user',
  guide = 'guide',
  leadGuide = 'lead-guide',
  admin = 'admin',
}
