import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const SignupCredentialsDto = z
  .object({
    name: z.string().min(2).max(255),
    username: z.string().max(255).optional(),
    role: z.enum(['user', 'guide', 'lead-guide', 'admin']),
    email: z.string().max(255).email(),
    password: z.string(),
    passwordConfirm: z.string(),
  })
  .passthrough();
const LoginDto = z.object({ email: z.string().email(), password: z.string() }).passthrough();
const UserEntity = z
  .object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    photo: z.string(),
    phone: z.string(),
    role: z.string(),
  })
  .passthrough();
const ConfirmEmailDto = z.object({ token: z.string() }).passthrough();
const ForgotPasswordDto = z.object({ email: z.string().max(255).email() }).passthrough();
const ResetPasswordDto = z.object({ token: z.string() }).passthrough();
const UpdatePasswordDto = z
  .object({ passwordCurrent: z.string().min(8).max(32), passwordConfirm: z.string() })
  .passthrough();
const UpdateLoggedInUserDto = z
  .object({ name: z.string().min(2).max(255), email: z.string().max(255).email(), username: z.string().max(255) })
  .partial()
  .passthrough();
const CreateBookingDto = z
  .object({ tour: z.object({}).partial().passthrough(), user: z.object({}).partial().passthrough(), price: z.number() })
  .passthrough();
const UpdateBookingDto = z.object({ paid: z.boolean() }).partial().passthrough();
const CreateTourDto = z
  .object({
    name: z.string().min(10).max(40),
    duration: z.number().gte(1),
    maxGroupSize: z.number().gte(1),
    difficulty: z.enum(['easy', 'medium', 'difficult']),
    price: z.number().gte(1),
    summary: z.string().max(255),
    imageCover: z.string().optional(),
    images: z.array(z.string()),
  })
  .passthrough();
const CreateReviewDto = z
  .object({
    tour: z.object({}).partial().passthrough().optional(),
    user: z.object({}).partial().passthrough().optional(),
    review: z.string(),
    rating: z.number().gte(1).lte(5),
  })
  .passthrough();
const UpdateTourDto = z.object({ price: z.number().gte(1) }).passthrough();
const UpdateReviewDto = z
  .object({ review: z.string(), rating: z.number().gte(1).lte(5) })
  .partial()
  .passthrough();

export const schemas = {
  SignupCredentialsDto,
  LoginDto,
  UserEntity,
  ConfirmEmailDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  UpdatePasswordDto,
  UpdateLoggedInUserDto,
  CreateBookingDto,
  UpdateBookingDto,
  CreateTourDto,
  CreateReviewDto,
  UpdateTourDto,
  UpdateReviewDto,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/',
    alias: 'root',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/confirm-email',
    alias: 'confirmEmail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ token: z.string() }).passthrough(),
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/forgot-password',
    alias: 'sendForgotPasswordEmail',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ email: z.string().max(255).email() }).passthrough(),
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/login',
    alias: 'login',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: LoginDto,
      },
    ],
    response: UserEntity,
  },
  {
    method: 'patch',
    path: '/api/v1/auth/my-password',
    alias: 'updateCurrentUserPassword',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdatePasswordDto,
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/resend-confirm-email',
    alias: 'resendConfirmEmail',
    requestFormat: 'json',
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/reset-password',
    alias: 'resetPassword',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ token: z.string() }).passthrough(),
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/sign-out',
    alias: 'signOut',
    requestFormat: 'json',
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/signup',
    alias: 'signup',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: SignupCredentialsDto,
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'post',
    path: '/api/v1/auth/verify-reset-password/:token',
    alias: 'verifyResetToken',
    requestFormat: 'json',
    parameters: [
      {
        name: 'token',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/booking',
    alias: 'createBookings[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateBookingDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/booking',
    alias: 'getAllBookings[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/booking/:id',
    alias: 'getBookingById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/booking/:id',
    alias: 'deleteTourById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/booking/:id',
    alias: 'updateBookingById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ paid: z.boolean() }).partial().passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/booking/checkout-session/:tourId',
    alias: 'getCheckoutSession[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/bookings',
    alias: 'createBookings[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateBookingDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/bookings',
    alias: 'getAllBookings[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/bookings/:id',
    alias: 'getBookingById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/bookings/:id',
    alias: 'deleteTourById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/bookings/:id',
    alias: 'updateBookingById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ paid: z.boolean() }).partial().passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/bookings/checkout-session/:tourId',
    alias: 'getCheckoutSession[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/review',
    alias: 'getAllReviews[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/review',
    alias: 'createReview[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateReviewDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/review/:id',
    alias: 'getReviewById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/review/:id',
    alias: 'updateReviewById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateReviewDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'reviewId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/review/:id',
    alias: 'deleteReviewById[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/reviews',
    alias: 'getAllReviews[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/reviews',
    alias: 'createReview[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateReviewDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/reviews/:id',
    alias: 'getReviewById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/reviews/:id',
    alias: 'updateReviewById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateReviewDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'reviewId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/reviews/:id',
    alias: 'deleteReviewById[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/tours',
    alias: 'createTour',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateTourDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours',
    alias: 'getAllTours',
    requestFormat: 'json',
    parameters: [
      {
        name: 'duration',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/:id',
    alias: 'getTourById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/tours/:id',
    alias: 'updateTourById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ price: z.number().gte(1) }).passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/tours/:id',
    alias: 'deleteTourById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/:tourId/booking',
    alias: 'getAllBookingOnTour[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/:tourId/bookings',
    alias: 'getAllBookingOnTour[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/:tourId/review',
    alias: 'getAllReviewsOnTour[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/tours/:tourId/review',
    alias: 'createReviewOnTour[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateReviewDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/:tourId/reviews',
    alias: 'getAllReviewsOnTour[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/tours/:tourId/reviews',
    alias: 'createReviewOnTour[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateReviewDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'tourId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/distances/:latLng/unit/:unit',
    alias: 'getDistanceOfToursFromPoint',
    requestFormat: 'json',
    parameters: [
      {
        name: 'latLng',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'unit',
        type: 'Path',
        schema: z.enum(['mi', 'km']),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/monthly-plan/:year',
    alias: 'getMonthlyPlanByYear',
    requestFormat: 'json',
    parameters: [
      {
        name: 'year',
        type: 'Path',
        schema: z.number(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/top-5-cheap',
    alias: 'getTopFiveCheap',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/tour-stats',
    alias: 'getTourStats',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/tours/tours-within/:distance/center/:latLng/unit/:unit',
    alias: 'getToursWithinDistance',
    requestFormat: 'json',
    parameters: [
      {
        name: 'distance',
        type: 'Path',
        schema: z.number(),
      },
      {
        name: 'unit',
        type: 'Path',
        schema: z.enum(['mi', 'km']),
      },
      {
        name: 'latLng',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users',
    alias: 'getAllUsers',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/:id',
    alias: 'getUserById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/users/:id',
    alias: 'updateUserById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateLoggedInUserDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'delete',
    path: '/api/v1/users/:id',
    alias: 'deleteUserById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
  },
  {
    method: 'patch',
    path: '/api/v1/users/:id/activate',
    alias: 'activateUser',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/:userId/booking',
    alias: 'getUserBookings[1]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/:userId/bookings',
    alias: 'getUserBookings[0]',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sort',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'fields',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().gte(0),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().gte(1),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/me',
    alias: 'getCurrentUserDetails',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'patch',
    path: '/api/v1/users/me',
    alias: 'updateCurrentUserNonLoginInfo',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: UpdateLoggedInUserDto,
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/users/me',
    alias: 'deleteSignedInUser',
    requestFormat: 'json',
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
