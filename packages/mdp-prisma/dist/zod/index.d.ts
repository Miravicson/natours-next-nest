import { z } from 'zod';
import { Prisma } from '@prisma/client';
export type NullableJsonInput =
  | Prisma.JsonValue
  | null
  | 'JsonNull'
  | 'DbNull'
  | Prisma.NullTypes.DbNull
  | Prisma.NullTypes.JsonNull;
export declare const transformJsonNull: (
  v?: NullableJsonInput,
) =>
  | string
  | number
  | true
  | Prisma.JsonObject
  | Prisma.JsonArray
  | Prisma.NullTypes.DbNull
  | Prisma.NullTypes.JsonNull;
export declare const JsonValueSchema: z.ZodType<Prisma.JsonValue>;
export type JsonValueType = z.infer<typeof JsonValueSchema>;
export declare const NullableJsonValue: z.ZodEffects<
  z.ZodNullable<
    z.ZodUnion<
      [
        z.ZodType<Prisma.JsonValue, z.ZodTypeDef, Prisma.JsonValue>,
        z.ZodLiteral<'DbNull'>,
        z.ZodLiteral<'JsonNull'>,
      ]
    >
  >,
  | string
  | number
  | true
  | Prisma.JsonObject
  | Prisma.JsonArray
  | Prisma.NullTypes.DbNull
  | Prisma.NullTypes.JsonNull,
  Prisma.JsonValue
>;
export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;
export declare const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue>;
export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;
export declare const DecimalJsLikeSchema: z.ZodType<Prisma.DecimalJsLike>;
export declare const DECIMAL_STRING_REGEX: RegExp;
export declare const isValidDecimalInput: (
  v?: null | string | number | Prisma.DecimalJsLike,
) => v is string | number | Prisma.DecimalJsLike;
export declare const TransactionIsolationLevelSchema: z.ZodEnum<
  ['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']
>;
export declare const UserScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'email',
    'password',
    'role',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'passwordChangedAt',
    'refreshToken',
    'passwordResetToken',
    'passwordResetExpires',
    'emailConfirmToken',
    'emailConfirmedAt',
    'otp',
    'otpExpires',
    'otpConfirmed',
    'isConfirmedUser',
    'isDeleted',
    'isActive',
  ]
>;
export declare const StoreOwnerScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'userId', 'fullName', 'createdAt', 'updatedAt']
>;
export declare const AdminScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'userId', 'fullName', 'createdAt', 'updatedAt']
>;
export declare const CustomerScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'userId', 'fullName', 'createdAt', 'updatedAt']
>;
export declare const ActivityLogScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'userId',
    'action',
    'timestamp',
    'ipAddress',
    'storeId',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const WalletScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'customerId', 'balance', 'createdAt', 'updatedAt']
>;
export declare const WalletTransactionScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'walletId',
    'storeId',
    'amount',
    'type',
    'status',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const StoreScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'ownerId',
    'name',
    'status',
    'subscriptionId',
    'logoUrl',
    'themeColor',
    'customDomain',
    'settings',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const StoreAnalyticsScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'storeId', 'totalSales', 'createdAt', 'updatedAt']
>;
export declare const ProductScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'name',
    'description',
    'basePrice',
    'categoryId',
    'subCategoryId',
    'createdAt',
    'updatedAt',
    'productRating',
    'numberSold',
    'discountId',
  ]
>;
export declare const ProductCategoryScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'title',
    'cardImage',
    'storeId',
    'createdAt',
    'updatedAt',
    'parentCategoryId',
  ]
>;
export declare const ProductVariantScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'productId',
    'price',
    'stock',
    'sku',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const ProductVariantAttributeScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'variantId',
    'storeId',
    'name',
    'value',
    'priceFactor',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const ProductImageScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'productId', 'storeId', 'url', 'createdAt', 'updatedAt']
>;
export declare const ProductVariantImageScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'variantId', 'storeId', 'url', 'createdAt', 'updatedAt']
>;
export declare const OrderScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'customerId',
    'totalPrice',
    'status',
    'discountId',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const OrderItemScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'orderId',
    'variantId',
    'quantity',
    'price',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const ProductRatingScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'productId',
    'customerId',
    'rating',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const ProductReviewScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'productId',
    'customerId',
    'reviewText',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const ProductReviewImageScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'reviewId', 'storeId', 'url', 'createdAt', 'updatedAt']
>;
export declare const TransactionScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'orderId',
    'stripePaymentId',
    'amount',
    'status',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const DiscountScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'code',
    'discountType',
    'amount',
    'minOrderValue',
    'appliesTo',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const DiscountProductScalarFieldEnumSchema: z.ZodEnum<
  ['id', 'storeId', 'discountId', 'productId', 'createdAt', 'updatedAt']
>;
export declare const SubscriptionScalarFieldEnumSchema: z.ZodEnum<
  [
    'id',
    'storeId',
    'plan',
    'expiresAt',
    'stripeSubscriptionId',
    'createdAt',
    'updatedAt',
  ]
>;
export declare const SortOrderSchema: z.ZodEnum<['asc', 'desc']>;
export declare const NullableJsonNullValueInputSchema: z.ZodEffects<
  z.ZodEnum<['DbNull', 'JsonNull']>,
  Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull,
  'JsonNull' | 'DbNull'
>;
export declare const QueryModeSchema: z.ZodEnum<['default', 'insensitive']>;
export declare const NullsOrderSchema: z.ZodEnum<['first', 'last']>;
export declare const JsonNullValueFilterSchema: z.ZodEffects<
  z.ZodEnum<['DbNull', 'JsonNull', 'AnyNull']>,
  Prisma.NullTypes.JsonNull | Prisma.NullTypes.AnyNull,
  'JsonNull' | 'DbNull' | 'AnyNull'
>;
export declare const UserRoleSchema: z.ZodEnum<
  ['ADMIN', 'STORE_OWNER', 'CUSTOMER']
>;
export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`;
export declare const StoreStatusSchema: z.ZodEnum<
  ['PENDING', 'APPROVED', 'SUSPENDED']
>;
export type StoreStatusType = `${z.infer<typeof StoreStatusSchema>}`;
export declare const OrderStatusSchema: z.ZodEnum<
  ['PENDING', 'COMPLETED', 'CANCELLED']
>;
export type OrderStatusType = `${z.infer<typeof OrderStatusSchema>}`;
export declare const TransactionStatusSchema: z.ZodEnum<
  ['PENDING', 'COMPLETED', 'FAILED']
>;
export type TransactionStatusType =
  `${z.infer<typeof TransactionStatusSchema>}`;
export declare const DiscountTypeSchema: z.ZodEnum<
  ['PERCENTAGE', 'FIXED_AMOUNT']
>;
export type DiscountTypeType = `${z.infer<typeof DiscountTypeSchema>}`;
export declare const DiscountScopeSchema: z.ZodEnum<['ORDER', 'PRODUCT']>;
export type DiscountScopeType = `${z.infer<typeof DiscountScopeSchema>}`;
export declare const WalletTransactionTypeSchema: z.ZodEnum<['FUND', 'SPEND']>;
export type WalletTransactionTypeType =
  `${z.infer<typeof WalletTransactionTypeSchema>}`;
export declare const PlanTypeSchema: z.ZodEnum<['FREE', 'BASIC', 'PREMIUM']>;
export type PlanTypeType = `${z.infer<typeof PlanTypeSchema>}`;
export declare const UserSchema: z.ZodObject<
  {
    role: z.ZodEnum<['ADMIN', 'STORE_OWNER', 'CUSTOMER']>;
    id: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    deletedAt: z.ZodNullable<z.ZodDate>;
    passwordChangedAt: z.ZodNullable<z.ZodDate>;
    refreshToken: z.ZodNullable<z.ZodString>;
    passwordResetToken: z.ZodNullable<z.ZodString>;
    passwordResetExpires: z.ZodNullable<z.ZodDate>;
    emailConfirmToken: z.ZodNullable<z.ZodString>;
    emailConfirmedAt: z.ZodNullable<z.ZodDate>;
    otp: z.ZodNullable<z.ZodString>;
    otpExpires: z.ZodNullable<z.ZodDate>;
    otpConfirmed: z.ZodBoolean;
    isConfirmedUser: z.ZodBoolean;
    isDeleted: z.ZodBoolean;
    isActive: z.ZodBoolean;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'STORE_OWNER' | 'CUSTOMER';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    passwordChangedAt: Date | null;
    refreshToken: string | null;
    passwordResetToken: string | null;
    passwordResetExpires: Date | null;
    emailConfirmToken: string | null;
    emailConfirmedAt: Date | null;
    otp: string | null;
    otpExpires: Date | null;
    otpConfirmed: boolean;
    isConfirmedUser: boolean;
    isDeleted: boolean;
    isActive: boolean;
  },
  {
    id: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'STORE_OWNER' | 'CUSTOMER';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    passwordChangedAt: Date | null;
    refreshToken: string | null;
    passwordResetToken: string | null;
    passwordResetExpires: Date | null;
    emailConfirmToken: string | null;
    emailConfirmedAt: Date | null;
    otp: string | null;
    otpExpires: Date | null;
    otpConfirmed: boolean;
    isConfirmedUser: boolean;
    isDeleted: boolean;
    isActive: boolean;
  }
>;
export type User = z.infer<typeof UserSchema>;
export declare const StoreOwnerSchema: z.ZodObject<
  {
    id: z.ZodString;
    userId: z.ZodString;
    fullName: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  }
>;
export type StoreOwner = z.infer<typeof StoreOwnerSchema>;
export declare const AdminSchema: z.ZodObject<
  {
    id: z.ZodString;
    userId: z.ZodString;
    fullName: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  }
>;
export type Admin = z.infer<typeof AdminSchema>;
export declare const CustomerSchema: z.ZodObject<
  {
    id: z.ZodString;
    userId: z.ZodString;
    fullName: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    fullName: string | null;
  }
>;
export type Customer = z.infer<typeof CustomerSchema>;
export declare const ActivityLogSchema: z.ZodObject<
  {
    id: z.ZodNumber;
    userId: z.ZodNullable<z.ZodString>;
    action: z.ZodString;
    timestamp: z.ZodDate;
    ipAddress: z.ZodNullable<z.ZodString>;
    storeId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    action: string;
    timestamp: Date;
    ipAddress: string | null;
    storeId: string | null;
  },
  {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    action: string;
    timestamp: Date;
    ipAddress: string | null;
    storeId: string | null;
  }
>;
export type ActivityLog = z.infer<typeof ActivityLogSchema>;
export declare const WalletSchema: z.ZodObject<
  {
    id: z.ZodString;
    customerId: z.ZodString;
    balance: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    customerId: string;
    balance: Prisma.Decimal;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    customerId: string;
    balance: Prisma.Decimal;
  }
>;
export type Wallet = z.infer<typeof WalletSchema>;
export declare const WalletTransactionSchema: z.ZodObject<
  {
    type: z.ZodEnum<['FUND', 'SPEND']>;
    status: z.ZodEnum<['PENDING', 'COMPLETED', 'FAILED']>;
    id: z.ZodString;
    walletId: z.ZodString;
    storeId: z.ZodNullable<z.ZodString>;
    amount: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    walletId: string;
    amount: Prisma.Decimal;
    type: 'FUND' | 'SPEND';
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    walletId: string;
    amount: Prisma.Decimal;
    type: 'FUND' | 'SPEND';
  }
>;
export type WalletTransaction = z.infer<typeof WalletTransactionSchema>;
export declare const StoreSchema: z.ZodObject<
  {
    status: z.ZodEnum<['PENDING', 'APPROVED', 'SUSPENDED']>;
    id: z.ZodString;
    ownerId: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    subscriptionId: z.ZodNullable<z.ZodString>;
    logoUrl: z.ZodNullable<z.ZodString>;
    themeColor: z.ZodNullable<z.ZodString>;
    customDomain: z.ZodNullable<z.ZodString>;
    settings: z.ZodNullable<
      z.ZodType<Prisma.JsonValue, z.ZodTypeDef, Prisma.JsonValue>
    >;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: 'PENDING' | 'APPROVED' | 'SUSPENDED';
    ownerId: string | null;
    subscriptionId: string | null;
    logoUrl: string | null;
    themeColor: string | null;
    customDomain: string | null;
    settings: Prisma.JsonValue;
  },
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: 'PENDING' | 'APPROVED' | 'SUSPENDED';
    ownerId: string | null;
    subscriptionId: string | null;
    logoUrl: string | null;
    themeColor: string | null;
    customDomain: string | null;
    settings: Prisma.JsonValue;
  }
>;
export type Store = z.infer<typeof StoreSchema>;
export declare const StoreAnalyticsSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    totalSales: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    totalSales: Prisma.Decimal;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    totalSales: Prisma.Decimal;
  }
>;
export type StoreAnalytics = z.infer<typeof StoreAnalyticsSchema>;
export declare const ProductSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    basePrice: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    categoryId: z.ZodString;
    subCategoryId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    productRating: z.ZodNumber;
    numberSold: z.ZodNumber;
    discountId: z.ZodNullable<z.ZodString>;
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    productRating: number;
    discountId: string | null;
    description: string | null;
    basePrice: Prisma.Decimal;
    categoryId: string;
    subCategoryId: string | null;
    numberSold: number;
  },
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    productRating: number;
    discountId: string | null;
    description: string | null;
    basePrice: Prisma.Decimal;
    categoryId: string;
    subCategoryId: string | null;
    numberSold: number;
  }
>;
export type Product = z.infer<typeof ProductSchema>;
export declare const ProductCategorySchema: z.ZodObject<
  {
    id: z.ZodString;
    title: z.ZodString;
    cardImage: z.ZodNullable<z.ZodString>;
    storeId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    parentCategoryId: z.ZodNullable<z.ZodString>;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    title: string;
    cardImage: string | null;
    parentCategoryId: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    title: string;
    cardImage: string | null;
    parentCategoryId: string | null;
  }
>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export declare const ProductVariantSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    productId: z.ZodString;
    price: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    stock: z.ZodNumber;
    sku: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    productId: string;
    price: Prisma.Decimal;
    stock: number;
    sku: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    productId: string;
    price: Prisma.Decimal;
    stock: number;
    sku: string;
  }
>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export declare const ProductVariantAttributeSchema: z.ZodObject<
  {
    id: z.ZodString;
    variantId: z.ZodString;
    storeId: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
    priceFactor: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    variantId: string;
    value: string;
    priceFactor: Prisma.Decimal;
  },
  {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    variantId: string;
    value: string;
    priceFactor: Prisma.Decimal;
  }
>;
export type ProductVariantAttribute = z.infer<
  typeof ProductVariantAttributeSchema
>;
export declare const ProductImageSchema: z.ZodObject<
  {
    id: z.ZodString;
    productId: z.ZodString;
    storeId: z.ZodString;
    url: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    productId: string;
    url: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    productId: string;
    url: string;
  }
>;
export type ProductImage = z.infer<typeof ProductImageSchema>;
export declare const ProductVariantImageSchema: z.ZodObject<
  {
    id: z.ZodString;
    variantId: z.ZodString;
    storeId: z.ZodString;
    url: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    url: string;
    variantId: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    url: string;
    variantId: string;
  }
>;
export type ProductVariantImage = z.infer<typeof ProductVariantImageSchema>;
export declare const OrderSchema: z.ZodObject<
  {
    status: z.ZodEnum<['PENDING', 'COMPLETED', 'CANCELLED']>;
    id: z.ZodString;
    storeId: z.ZodString;
    customerId: z.ZodString;
    totalPrice: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    discountId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    totalPrice: Prisma.Decimal;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
    discountId: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    totalPrice: Prisma.Decimal;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
    discountId: string | null;
  }
>;
export type Order = z.infer<typeof OrderSchema>;
export declare const OrderItemSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    orderId: z.ZodString;
    variantId: z.ZodString;
    quantity: z.ZodNumber;
    price: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    orderId: string;
    variantId: string;
    quantity: number;
    price: Prisma.Decimal;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    orderId: string;
    variantId: string;
    quantity: number;
    price: Prisma.Decimal;
  }
>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
export declare const ProductRatingSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    productId: z.ZodString;
    customerId: z.ZodString;
    rating: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    productId: string;
    rating: number;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    productId: string;
    rating: number;
  }
>;
export type ProductRating = z.infer<typeof ProductRatingSchema>;
export declare const ProductReviewSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    productId: z.ZodString;
    customerId: z.ZodString;
    reviewText: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    productId: string;
    reviewText: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    customerId: string;
    productId: string;
    reviewText: string;
  }
>;
export type ProductReview = z.infer<typeof ProductReviewSchema>;
export declare const ProductReviewImageSchema: z.ZodObject<
  {
    id: z.ZodString;
    reviewId: z.ZodString;
    storeId: z.ZodString;
    url: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    reviewId: string;
    url: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    reviewId: string;
    url: string;
  }
>;
export type ProductReviewImage = z.infer<typeof ProductReviewImageSchema>;
export declare const TransactionSchema: z.ZodObject<
  {
    status: z.ZodEnum<['PENDING', 'COMPLETED', 'FAILED']>;
    id: z.ZodString;
    storeId: z.ZodString;
    orderId: z.ZodNullable<z.ZodString>;
    stripePaymentId: z.ZodString;
    amount: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    amount: Prisma.Decimal;
    orderId: string | null;
    stripePaymentId: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    amount: Prisma.Decimal;
    orderId: string | null;
    stripePaymentId: string;
  }
>;
export type Transaction = z.infer<typeof TransactionSchema>;
export declare const DiscountSchema: z.ZodObject<
  {
    discountType: z.ZodEnum<['PERCENTAGE', 'FIXED_AMOUNT']>;
    appliesTo: z.ZodEnum<['ORDER', 'PRODUCT']>;
    id: z.ZodString;
    storeId: z.ZodNullable<z.ZodString>;
    code: z.ZodString;
    amount: z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>;
    minOrderValue: z.ZodNullable<
      z.ZodType<Prisma.Decimal, z.ZodTypeDef, Prisma.Decimal>
    >;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    amount: Prisma.Decimal;
    code: string;
    discountType: 'PERCENTAGE' | 'FIXED_AMOUNT';
    minOrderValue: Prisma.Decimal | null;
    appliesTo: 'ORDER' | 'PRODUCT';
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string | null;
    amount: Prisma.Decimal;
    code: string;
    discountType: 'PERCENTAGE' | 'FIXED_AMOUNT';
    minOrderValue: Prisma.Decimal | null;
    appliesTo: 'ORDER' | 'PRODUCT';
  }
>;
export type Discount = z.infer<typeof DiscountSchema>;
export declare const DiscountProductSchema: z.ZodObject<
  {
    id: z.ZodString;
    storeId: z.ZodString;
    discountId: z.ZodString;
    productId: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    discountId: string;
    productId: string;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    discountId: string;
    productId: string;
  }
>;
export type DiscountProduct = z.infer<typeof DiscountProductSchema>;
export declare const SubscriptionSchema: z.ZodObject<
  {
    plan: z.ZodEnum<['FREE', 'BASIC', 'PREMIUM']>;
    id: z.ZodString;
    storeId: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodDate>;
    stripeSubscriptionId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    plan: 'FREE' | 'BASIC' | 'PREMIUM';
    expiresAt: Date | null;
    stripeSubscriptionId: string | null;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    storeId: string;
    plan: 'FREE' | 'BASIC' | 'PREMIUM';
    expiresAt: Date | null;
    stripeSubscriptionId: string | null;
  }
>;
export type Subscription = z.infer<typeof SubscriptionSchema>;
export declare const UserIncludeSchema: z.ZodType<Prisma.UserInclude>;
export declare const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs>;
export declare const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs>;
export declare const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect>;
export declare const UserSelectSchema: z.ZodType<Prisma.UserSelect>;
export declare const StoreOwnerIncludeSchema: z.ZodType<Prisma.StoreOwnerInclude>;
export declare const StoreOwnerArgsSchema: z.ZodType<Prisma.StoreOwnerDefaultArgs>;
export declare const StoreOwnerSelectSchema: z.ZodType<Prisma.StoreOwnerSelect>;
export declare const AdminIncludeSchema: z.ZodType<Prisma.AdminInclude>;
export declare const AdminArgsSchema: z.ZodType<Prisma.AdminDefaultArgs>;
export declare const AdminSelectSchema: z.ZodType<Prisma.AdminSelect>;
export declare const CustomerIncludeSchema: z.ZodType<Prisma.CustomerInclude>;
export declare const CustomerArgsSchema: z.ZodType<Prisma.CustomerDefaultArgs>;
export declare const CustomerCountOutputTypeArgsSchema: z.ZodType<Prisma.CustomerCountOutputTypeDefaultArgs>;
export declare const CustomerCountOutputTypeSelectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect>;
export declare const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect>;
export declare const ActivityLogIncludeSchema: z.ZodType<Prisma.ActivityLogInclude>;
export declare const ActivityLogArgsSchema: z.ZodType<Prisma.ActivityLogDefaultArgs>;
export declare const ActivityLogSelectSchema: z.ZodType<Prisma.ActivityLogSelect>;
export declare const WalletIncludeSchema: z.ZodType<Prisma.WalletInclude>;
export declare const WalletArgsSchema: z.ZodType<Prisma.WalletDefaultArgs>;
export declare const WalletCountOutputTypeArgsSchema: z.ZodType<Prisma.WalletCountOutputTypeDefaultArgs>;
export declare const WalletCountOutputTypeSelectSchema: z.ZodType<Prisma.WalletCountOutputTypeSelect>;
export declare const WalletSelectSchema: z.ZodType<Prisma.WalletSelect>;
export declare const WalletTransactionIncludeSchema: z.ZodType<Prisma.WalletTransactionInclude>;
export declare const WalletTransactionArgsSchema: z.ZodType<Prisma.WalletTransactionDefaultArgs>;
export declare const WalletTransactionSelectSchema: z.ZodType<Prisma.WalletTransactionSelect>;
export declare const StoreIncludeSchema: z.ZodType<Prisma.StoreInclude>;
export declare const StoreArgsSchema: z.ZodType<Prisma.StoreDefaultArgs>;
export declare const StoreCountOutputTypeArgsSchema: z.ZodType<Prisma.StoreCountOutputTypeDefaultArgs>;
export declare const StoreCountOutputTypeSelectSchema: z.ZodType<Prisma.StoreCountOutputTypeSelect>;
export declare const StoreSelectSchema: z.ZodType<Prisma.StoreSelect>;
export declare const StoreAnalyticsIncludeSchema: z.ZodType<Prisma.StoreAnalyticsInclude>;
export declare const StoreAnalyticsArgsSchema: z.ZodType<Prisma.StoreAnalyticsDefaultArgs>;
export declare const StoreAnalyticsSelectSchema: z.ZodType<Prisma.StoreAnalyticsSelect>;
export declare const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude>;
export declare const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs>;
export declare const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs>;
export declare const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export declare const ProductSelectSchema: z.ZodType<Prisma.ProductSelect>;
export declare const ProductCategoryIncludeSchema: z.ZodType<Prisma.ProductCategoryInclude>;
export declare const ProductCategoryArgsSchema: z.ZodType<Prisma.ProductCategoryDefaultArgs>;
export declare const ProductCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCategoryCountOutputTypeDefaultArgs>;
export declare const ProductCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCategoryCountOutputTypeSelect>;
export declare const ProductCategorySelectSchema: z.ZodType<Prisma.ProductCategorySelect>;
export declare const ProductVariantIncludeSchema: z.ZodType<Prisma.ProductVariantInclude>;
export declare const ProductVariantArgsSchema: z.ZodType<Prisma.ProductVariantDefaultArgs>;
export declare const ProductVariantCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductVariantCountOutputTypeDefaultArgs>;
export declare const ProductVariantCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductVariantCountOutputTypeSelect>;
export declare const ProductVariantSelectSchema: z.ZodType<Prisma.ProductVariantSelect>;
export declare const ProductVariantAttributeIncludeSchema: z.ZodType<Prisma.ProductVariantAttributeInclude>;
export declare const ProductVariantAttributeArgsSchema: z.ZodType<Prisma.ProductVariantAttributeDefaultArgs>;
export declare const ProductVariantAttributeSelectSchema: z.ZodType<Prisma.ProductVariantAttributeSelect>;
export declare const ProductImageIncludeSchema: z.ZodType<Prisma.ProductImageInclude>;
export declare const ProductImageArgsSchema: z.ZodType<Prisma.ProductImageDefaultArgs>;
export declare const ProductImageSelectSchema: z.ZodType<Prisma.ProductImageSelect>;
export declare const ProductVariantImageIncludeSchema: z.ZodType<Prisma.ProductVariantImageInclude>;
export declare const ProductVariantImageArgsSchema: z.ZodType<Prisma.ProductVariantImageDefaultArgs>;
export declare const ProductVariantImageSelectSchema: z.ZodType<Prisma.ProductVariantImageSelect>;
export declare const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude>;
export declare const OrderArgsSchema: z.ZodType<Prisma.OrderDefaultArgs>;
export declare const OrderCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderCountOutputTypeDefaultArgs>;
export declare const OrderCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect>;
export declare const OrderSelectSchema: z.ZodType<Prisma.OrderSelect>;
export declare const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude>;
export declare const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemDefaultArgs>;
export declare const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect>;
export declare const ProductRatingIncludeSchema: z.ZodType<Prisma.ProductRatingInclude>;
export declare const ProductRatingArgsSchema: z.ZodType<Prisma.ProductRatingDefaultArgs>;
export declare const ProductRatingSelectSchema: z.ZodType<Prisma.ProductRatingSelect>;
export declare const ProductReviewIncludeSchema: z.ZodType<Prisma.ProductReviewInclude>;
export declare const ProductReviewArgsSchema: z.ZodType<Prisma.ProductReviewDefaultArgs>;
export declare const ProductReviewCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductReviewCountOutputTypeDefaultArgs>;
export declare const ProductReviewCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductReviewCountOutputTypeSelect>;
export declare const ProductReviewSelectSchema: z.ZodType<Prisma.ProductReviewSelect>;
export declare const ProductReviewImageIncludeSchema: z.ZodType<Prisma.ProductReviewImageInclude>;
export declare const ProductReviewImageArgsSchema: z.ZodType<Prisma.ProductReviewImageDefaultArgs>;
export declare const ProductReviewImageSelectSchema: z.ZodType<Prisma.ProductReviewImageSelect>;
export declare const TransactionIncludeSchema: z.ZodType<Prisma.TransactionInclude>;
export declare const TransactionArgsSchema: z.ZodType<Prisma.TransactionDefaultArgs>;
export declare const TransactionSelectSchema: z.ZodType<Prisma.TransactionSelect>;
export declare const DiscountIncludeSchema: z.ZodType<Prisma.DiscountInclude>;
export declare const DiscountArgsSchema: z.ZodType<Prisma.DiscountDefaultArgs>;
export declare const DiscountCountOutputTypeArgsSchema: z.ZodType<Prisma.DiscountCountOutputTypeDefaultArgs>;
export declare const DiscountCountOutputTypeSelectSchema: z.ZodType<Prisma.DiscountCountOutputTypeSelect>;
export declare const DiscountSelectSchema: z.ZodType<Prisma.DiscountSelect>;
export declare const DiscountProductIncludeSchema: z.ZodType<Prisma.DiscountProductInclude>;
export declare const DiscountProductArgsSchema: z.ZodType<Prisma.DiscountProductDefaultArgs>;
export declare const DiscountProductSelectSchema: z.ZodType<Prisma.DiscountProductSelect>;
export declare const SubscriptionIncludeSchema: z.ZodType<Prisma.SubscriptionInclude>;
export declare const SubscriptionArgsSchema: z.ZodType<Prisma.SubscriptionDefaultArgs>;
export declare const SubscriptionSelectSchema: z.ZodType<Prisma.SubscriptionSelect>;
export declare const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput>;
export declare const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput>;
export declare const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput>;
export declare const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export declare const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export declare const StoreOwnerWhereInputSchema: z.ZodType<Prisma.StoreOwnerWhereInput>;
export declare const StoreOwnerOrderByWithRelationInputSchema: z.ZodType<Prisma.StoreOwnerOrderByWithRelationInput>;
export declare const StoreOwnerWhereUniqueInputSchema: z.ZodType<Prisma.StoreOwnerWhereUniqueInput>;
export declare const StoreOwnerOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoreOwnerOrderByWithAggregationInput>;
export declare const StoreOwnerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoreOwnerScalarWhereWithAggregatesInput>;
export declare const AdminWhereInputSchema: z.ZodType<Prisma.AdminWhereInput>;
export declare const AdminOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminOrderByWithRelationInput>;
export declare const AdminWhereUniqueInputSchema: z.ZodType<Prisma.AdminWhereUniqueInput>;
export declare const AdminOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminOrderByWithAggregationInput>;
export declare const AdminScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdminScalarWhereWithAggregatesInput>;
export declare const CustomerWhereInputSchema: z.ZodType<Prisma.CustomerWhereInput>;
export declare const CustomerOrderByWithRelationInputSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput>;
export declare const CustomerWhereUniqueInputSchema: z.ZodType<Prisma.CustomerWhereUniqueInput>;
export declare const CustomerOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput>;
export declare const CustomerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CustomerScalarWhereWithAggregatesInput>;
export declare const ActivityLogWhereInputSchema: z.ZodType<Prisma.ActivityLogWhereInput>;
export declare const ActivityLogOrderByWithRelationInputSchema: z.ZodType<Prisma.ActivityLogOrderByWithRelationInput>;
export declare const ActivityLogWhereUniqueInputSchema: z.ZodType<Prisma.ActivityLogWhereUniqueInput>;
export declare const ActivityLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.ActivityLogOrderByWithAggregationInput>;
export declare const ActivityLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ActivityLogScalarWhereWithAggregatesInput>;
export declare const WalletWhereInputSchema: z.ZodType<Prisma.WalletWhereInput>;
export declare const WalletOrderByWithRelationInputSchema: z.ZodType<Prisma.WalletOrderByWithRelationInput>;
export declare const WalletWhereUniqueInputSchema: z.ZodType<Prisma.WalletWhereUniqueInput>;
export declare const WalletOrderByWithAggregationInputSchema: z.ZodType<Prisma.WalletOrderByWithAggregationInput>;
export declare const WalletScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WalletScalarWhereWithAggregatesInput>;
export declare const WalletTransactionWhereInputSchema: z.ZodType<Prisma.WalletTransactionWhereInput>;
export declare const WalletTransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.WalletTransactionOrderByWithRelationInput>;
export declare const WalletTransactionWhereUniqueInputSchema: z.ZodType<Prisma.WalletTransactionWhereUniqueInput>;
export declare const WalletTransactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.WalletTransactionOrderByWithAggregationInput>;
export declare const WalletTransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WalletTransactionScalarWhereWithAggregatesInput>;
export declare const StoreWhereInputSchema: z.ZodType<Prisma.StoreWhereInput>;
export declare const StoreOrderByWithRelationInputSchema: z.ZodType<Prisma.StoreOrderByWithRelationInput>;
export declare const StoreWhereUniqueInputSchema: z.ZodType<Prisma.StoreWhereUniqueInput>;
export declare const StoreOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoreOrderByWithAggregationInput>;
export declare const StoreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoreScalarWhereWithAggregatesInput>;
export declare const StoreAnalyticsWhereInputSchema: z.ZodType<Prisma.StoreAnalyticsWhereInput>;
export declare const StoreAnalyticsOrderByWithRelationInputSchema: z.ZodType<Prisma.StoreAnalyticsOrderByWithRelationInput>;
export declare const StoreAnalyticsWhereUniqueInputSchema: z.ZodType<Prisma.StoreAnalyticsWhereUniqueInput>;
export declare const StoreAnalyticsOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoreAnalyticsOrderByWithAggregationInput>;
export declare const StoreAnalyticsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoreAnalyticsScalarWhereWithAggregatesInput>;
export declare const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput>;
export declare const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export declare const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput>;
export declare const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput>;
export declare const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export declare const ProductCategoryWhereInputSchema: z.ZodType<Prisma.ProductCategoryWhereInput>;
export declare const ProductCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductCategoryOrderByWithRelationInput>;
export declare const ProductCategoryWhereUniqueInputSchema: z.ZodType<Prisma.ProductCategoryWhereUniqueInput>;
export declare const ProductCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductCategoryOrderByWithAggregationInput>;
export declare const ProductCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductCategoryScalarWhereWithAggregatesInput>;
export declare const ProductVariantWhereInputSchema: z.ZodType<Prisma.ProductVariantWhereInput>;
export declare const ProductVariantOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductVariantOrderByWithRelationInput>;
export declare const ProductVariantWhereUniqueInputSchema: z.ZodType<Prisma.ProductVariantWhereUniqueInput>;
export declare const ProductVariantOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductVariantOrderByWithAggregationInput>;
export declare const ProductVariantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductVariantScalarWhereWithAggregatesInput>;
export declare const ProductVariantAttributeWhereInputSchema: z.ZodType<Prisma.ProductVariantAttributeWhereInput>;
export declare const ProductVariantAttributeOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductVariantAttributeOrderByWithRelationInput>;
export declare const ProductVariantAttributeWhereUniqueInputSchema: z.ZodType<Prisma.ProductVariantAttributeWhereUniqueInput>;
export declare const ProductVariantAttributeOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductVariantAttributeOrderByWithAggregationInput>;
export declare const ProductVariantAttributeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductVariantAttributeScalarWhereWithAggregatesInput>;
export declare const ProductImageWhereInputSchema: z.ZodType<Prisma.ProductImageWhereInput>;
export declare const ProductImageOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductImageOrderByWithRelationInput>;
export declare const ProductImageWhereUniqueInputSchema: z.ZodType<Prisma.ProductImageWhereUniqueInput>;
export declare const ProductImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductImageOrderByWithAggregationInput>;
export declare const ProductImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductImageScalarWhereWithAggregatesInput>;
export declare const ProductVariantImageWhereInputSchema: z.ZodType<Prisma.ProductVariantImageWhereInput>;
export declare const ProductVariantImageOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductVariantImageOrderByWithRelationInput>;
export declare const ProductVariantImageWhereUniqueInputSchema: z.ZodType<Prisma.ProductVariantImageWhereUniqueInput>;
export declare const ProductVariantImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductVariantImageOrderByWithAggregationInput>;
export declare const ProductVariantImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductVariantImageScalarWhereWithAggregatesInput>;
export declare const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput>;
export declare const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput>;
export declare const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput>;
export declare const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput>;
export declare const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput>;
export declare const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput>;
export declare const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput>;
export declare const OrderItemWhereUniqueInputSchema: z.ZodType<Prisma.OrderItemWhereUniqueInput>;
export declare const OrderItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput>;
export declare const OrderItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput>;
export declare const ProductRatingWhereInputSchema: z.ZodType<Prisma.ProductRatingWhereInput>;
export declare const ProductRatingOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductRatingOrderByWithRelationInput>;
export declare const ProductRatingWhereUniqueInputSchema: z.ZodType<Prisma.ProductRatingWhereUniqueInput>;
export declare const ProductRatingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductRatingOrderByWithAggregationInput>;
export declare const ProductRatingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductRatingScalarWhereWithAggregatesInput>;
export declare const ProductReviewWhereInputSchema: z.ZodType<Prisma.ProductReviewWhereInput>;
export declare const ProductReviewOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductReviewOrderByWithRelationInput>;
export declare const ProductReviewWhereUniqueInputSchema: z.ZodType<Prisma.ProductReviewWhereUniqueInput>;
export declare const ProductReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductReviewOrderByWithAggregationInput>;
export declare const ProductReviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductReviewScalarWhereWithAggregatesInput>;
export declare const ProductReviewImageWhereInputSchema: z.ZodType<Prisma.ProductReviewImageWhereInput>;
export declare const ProductReviewImageOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductReviewImageOrderByWithRelationInput>;
export declare const ProductReviewImageWhereUniqueInputSchema: z.ZodType<Prisma.ProductReviewImageWhereUniqueInput>;
export declare const ProductReviewImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductReviewImageOrderByWithAggregationInput>;
export declare const ProductReviewImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductReviewImageScalarWhereWithAggregatesInput>;
export declare const TransactionWhereInputSchema: z.ZodType<Prisma.TransactionWhereInput>;
export declare const TransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionOrderByWithRelationInput>;
export declare const TransactionWhereUniqueInputSchema: z.ZodType<Prisma.TransactionWhereUniqueInput>;
export declare const TransactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionOrderByWithAggregationInput>;
export declare const TransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput>;
export declare const DiscountWhereInputSchema: z.ZodType<Prisma.DiscountWhereInput>;
export declare const DiscountOrderByWithRelationInputSchema: z.ZodType<Prisma.DiscountOrderByWithRelationInput>;
export declare const DiscountWhereUniqueInputSchema: z.ZodType<Prisma.DiscountWhereUniqueInput>;
export declare const DiscountOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiscountOrderByWithAggregationInput>;
export declare const DiscountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput>;
export declare const DiscountProductWhereInputSchema: z.ZodType<Prisma.DiscountProductWhereInput>;
export declare const DiscountProductOrderByWithRelationInputSchema: z.ZodType<Prisma.DiscountProductOrderByWithRelationInput>;
export declare const DiscountProductWhereUniqueInputSchema: z.ZodType<Prisma.DiscountProductWhereUniqueInput>;
export declare const DiscountProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiscountProductOrderByWithAggregationInput>;
export declare const DiscountProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiscountProductScalarWhereWithAggregatesInput>;
export declare const SubscriptionWhereInputSchema: z.ZodType<Prisma.SubscriptionWhereInput>;
export declare const SubscriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithRelationInput>;
export declare const SubscriptionWhereUniqueInputSchema: z.ZodType<Prisma.SubscriptionWhereUniqueInput>;
export declare const SubscriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput>;
export declare const SubscriptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput>;
export declare const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput>;
export declare const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput>;
export declare const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput>;
export declare const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput>;
export declare const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput>;
export declare const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput>;
export declare const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput>;
export declare const StoreOwnerCreateInputSchema: z.ZodType<Prisma.StoreOwnerCreateInput>;
export declare const StoreOwnerUncheckedCreateInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedCreateInput>;
export declare const StoreOwnerUpdateInputSchema: z.ZodType<Prisma.StoreOwnerUpdateInput>;
export declare const StoreOwnerUncheckedUpdateInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedUpdateInput>;
export declare const StoreOwnerCreateManyInputSchema: z.ZodType<Prisma.StoreOwnerCreateManyInput>;
export declare const StoreOwnerUpdateManyMutationInputSchema: z.ZodType<Prisma.StoreOwnerUpdateManyMutationInput>;
export declare const StoreOwnerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedUpdateManyInput>;
export declare const AdminCreateInputSchema: z.ZodType<Prisma.AdminCreateInput>;
export declare const AdminUncheckedCreateInputSchema: z.ZodType<Prisma.AdminUncheckedCreateInput>;
export declare const AdminUpdateInputSchema: z.ZodType<Prisma.AdminUpdateInput>;
export declare const AdminUncheckedUpdateInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateInput>;
export declare const AdminCreateManyInputSchema: z.ZodType<Prisma.AdminCreateManyInput>;
export declare const AdminUpdateManyMutationInputSchema: z.ZodType<Prisma.AdminUpdateManyMutationInput>;
export declare const AdminUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateManyInput>;
export declare const CustomerCreateInputSchema: z.ZodType<Prisma.CustomerCreateInput>;
export declare const CustomerUncheckedCreateInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateInput>;
export declare const CustomerUpdateInputSchema: z.ZodType<Prisma.CustomerUpdateInput>;
export declare const CustomerUncheckedUpdateInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateInput>;
export declare const CustomerCreateManyInputSchema: z.ZodType<Prisma.CustomerCreateManyInput>;
export declare const CustomerUpdateManyMutationInputSchema: z.ZodType<Prisma.CustomerUpdateManyMutationInput>;
export declare const CustomerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateManyInput>;
export declare const ActivityLogCreateInputSchema: z.ZodType<Prisma.ActivityLogCreateInput>;
export declare const ActivityLogUncheckedCreateInputSchema: z.ZodType<Prisma.ActivityLogUncheckedCreateInput>;
export declare const ActivityLogUpdateInputSchema: z.ZodType<Prisma.ActivityLogUpdateInput>;
export declare const ActivityLogUncheckedUpdateInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateInput>;
export declare const ActivityLogCreateManyInputSchema: z.ZodType<Prisma.ActivityLogCreateManyInput>;
export declare const ActivityLogUpdateManyMutationInputSchema: z.ZodType<Prisma.ActivityLogUpdateManyMutationInput>;
export declare const ActivityLogUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateManyInput>;
export declare const WalletCreateInputSchema: z.ZodType<Prisma.WalletCreateInput>;
export declare const WalletUncheckedCreateInputSchema: z.ZodType<Prisma.WalletUncheckedCreateInput>;
export declare const WalletUpdateInputSchema: z.ZodType<Prisma.WalletUpdateInput>;
export declare const WalletUncheckedUpdateInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateInput>;
export declare const WalletCreateManyInputSchema: z.ZodType<Prisma.WalletCreateManyInput>;
export declare const WalletUpdateManyMutationInputSchema: z.ZodType<Prisma.WalletUpdateManyMutationInput>;
export declare const WalletUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateManyInput>;
export declare const WalletTransactionCreateInputSchema: z.ZodType<Prisma.WalletTransactionCreateInput>;
export declare const WalletTransactionUncheckedCreateInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedCreateInput>;
export declare const WalletTransactionUpdateInputSchema: z.ZodType<Prisma.WalletTransactionUpdateInput>;
export declare const WalletTransactionUncheckedUpdateInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateInput>;
export declare const WalletTransactionCreateManyInputSchema: z.ZodType<Prisma.WalletTransactionCreateManyInput>;
export declare const WalletTransactionUpdateManyMutationInputSchema: z.ZodType<Prisma.WalletTransactionUpdateManyMutationInput>;
export declare const WalletTransactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateManyInput>;
export declare const StoreCreateInputSchema: z.ZodType<Prisma.StoreCreateInput>;
export declare const StoreUncheckedCreateInputSchema: z.ZodType<Prisma.StoreUncheckedCreateInput>;
export declare const StoreUpdateInputSchema: z.ZodType<Prisma.StoreUpdateInput>;
export declare const StoreUncheckedUpdateInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateInput>;
export declare const StoreCreateManyInputSchema: z.ZodType<Prisma.StoreCreateManyInput>;
export declare const StoreUpdateManyMutationInputSchema: z.ZodType<Prisma.StoreUpdateManyMutationInput>;
export declare const StoreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateManyInput>;
export declare const StoreAnalyticsCreateInputSchema: z.ZodType<Prisma.StoreAnalyticsCreateInput>;
export declare const StoreAnalyticsUncheckedCreateInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedCreateInput>;
export declare const StoreAnalyticsUpdateInputSchema: z.ZodType<Prisma.StoreAnalyticsUpdateInput>;
export declare const StoreAnalyticsUncheckedUpdateInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedUpdateInput>;
export declare const StoreAnalyticsCreateManyInputSchema: z.ZodType<Prisma.StoreAnalyticsCreateManyInput>;
export declare const StoreAnalyticsUpdateManyMutationInputSchema: z.ZodType<Prisma.StoreAnalyticsUpdateManyMutationInput>;
export declare const StoreAnalyticsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedUpdateManyInput>;
export declare const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput>;
export declare const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput>;
export declare const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput>;
export declare const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput>;
export declare const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput>;
export declare const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput>;
export declare const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput>;
export declare const ProductCategoryCreateInputSchema: z.ZodType<Prisma.ProductCategoryCreateInput>;
export declare const ProductCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateInput>;
export declare const ProductCategoryUpdateInputSchema: z.ZodType<Prisma.ProductCategoryUpdateInput>;
export declare const ProductCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateInput>;
export declare const ProductCategoryCreateManyInputSchema: z.ZodType<Prisma.ProductCategoryCreateManyInput>;
export declare const ProductCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductCategoryUpdateManyMutationInput>;
export declare const ProductCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateManyInput>;
export declare const ProductVariantCreateInputSchema: z.ZodType<Prisma.ProductVariantCreateInput>;
export declare const ProductVariantUncheckedCreateInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateInput>;
export declare const ProductVariantUpdateInputSchema: z.ZodType<Prisma.ProductVariantUpdateInput>;
export declare const ProductVariantUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateInput>;
export declare const ProductVariantCreateManyInputSchema: z.ZodType<Prisma.ProductVariantCreateManyInput>;
export declare const ProductVariantUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductVariantUpdateManyMutationInput>;
export declare const ProductVariantUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateManyInput>;
export declare const ProductVariantAttributeCreateInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateInput>;
export declare const ProductVariantAttributeUncheckedCreateInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedCreateInput>;
export declare const ProductVariantAttributeUpdateInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateInput>;
export declare const ProductVariantAttributeUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateInput>;
export declare const ProductVariantAttributeCreateManyInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyInput>;
export declare const ProductVariantAttributeUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyMutationInput>;
export declare const ProductVariantAttributeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateManyInput>;
export declare const ProductImageCreateInputSchema: z.ZodType<Prisma.ProductImageCreateInput>;
export declare const ProductImageUncheckedCreateInputSchema: z.ZodType<Prisma.ProductImageUncheckedCreateInput>;
export declare const ProductImageUpdateInputSchema: z.ZodType<Prisma.ProductImageUpdateInput>;
export declare const ProductImageUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateInput>;
export declare const ProductImageCreateManyInputSchema: z.ZodType<Prisma.ProductImageCreateManyInput>;
export declare const ProductImageUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductImageUpdateManyMutationInput>;
export declare const ProductImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateManyInput>;
export declare const ProductVariantImageCreateInputSchema: z.ZodType<Prisma.ProductVariantImageCreateInput>;
export declare const ProductVariantImageUncheckedCreateInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedCreateInput>;
export declare const ProductVariantImageUpdateInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateInput>;
export declare const ProductVariantImageUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateInput>;
export declare const ProductVariantImageCreateManyInputSchema: z.ZodType<Prisma.ProductVariantImageCreateManyInput>;
export declare const ProductVariantImageUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyMutationInput>;
export declare const ProductVariantImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateManyInput>;
export declare const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput>;
export declare const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput>;
export declare const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput>;
export declare const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput>;
export declare const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput>;
export declare const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput>;
export declare const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput>;
export declare const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput>;
export declare const OrderItemUncheckedCreateInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput>;
export declare const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput>;
export declare const OrderItemUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateInput>;
export declare const OrderItemCreateManyInputSchema: z.ZodType<Prisma.OrderItemCreateManyInput>;
export declare const OrderItemUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderItemUpdateManyMutationInput>;
export declare const OrderItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyInput>;
export declare const ProductRatingCreateInputSchema: z.ZodType<Prisma.ProductRatingCreateInput>;
export declare const ProductRatingUncheckedCreateInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateInput>;
export declare const ProductRatingUpdateInputSchema: z.ZodType<Prisma.ProductRatingUpdateInput>;
export declare const ProductRatingUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateInput>;
export declare const ProductRatingCreateManyInputSchema: z.ZodType<Prisma.ProductRatingCreateManyInput>;
export declare const ProductRatingUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyMutationInput>;
export declare const ProductRatingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyInput>;
export declare const ProductReviewCreateInputSchema: z.ZodType<Prisma.ProductReviewCreateInput>;
export declare const ProductReviewUncheckedCreateInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateInput>;
export declare const ProductReviewUpdateInputSchema: z.ZodType<Prisma.ProductReviewUpdateInput>;
export declare const ProductReviewUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateInput>;
export declare const ProductReviewCreateManyInputSchema: z.ZodType<Prisma.ProductReviewCreateManyInput>;
export declare const ProductReviewUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyMutationInput>;
export declare const ProductReviewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyInput>;
export declare const ProductReviewImageCreateInputSchema: z.ZodType<Prisma.ProductReviewImageCreateInput>;
export declare const ProductReviewImageUncheckedCreateInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedCreateInput>;
export declare const ProductReviewImageUpdateInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateInput>;
export declare const ProductReviewImageUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateInput>;
export declare const ProductReviewImageCreateManyInputSchema: z.ZodType<Prisma.ProductReviewImageCreateManyInput>;
export declare const ProductReviewImageUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyMutationInput>;
export declare const ProductReviewImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateManyInput>;
export declare const TransactionCreateInputSchema: z.ZodType<Prisma.TransactionCreateInput>;
export declare const TransactionUncheckedCreateInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateInput>;
export declare const TransactionUpdateInputSchema: z.ZodType<Prisma.TransactionUpdateInput>;
export declare const TransactionUncheckedUpdateInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateInput>;
export declare const TransactionCreateManyInputSchema: z.ZodType<Prisma.TransactionCreateManyInput>;
export declare const TransactionUpdateManyMutationInputSchema: z.ZodType<Prisma.TransactionUpdateManyMutationInput>;
export declare const TransactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyInput>;
export declare const DiscountCreateInputSchema: z.ZodType<Prisma.DiscountCreateInput>;
export declare const DiscountUncheckedCreateInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateInput>;
export declare const DiscountUpdateInputSchema: z.ZodType<Prisma.DiscountUpdateInput>;
export declare const DiscountUncheckedUpdateInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateInput>;
export declare const DiscountCreateManyInputSchema: z.ZodType<Prisma.DiscountCreateManyInput>;
export declare const DiscountUpdateManyMutationInputSchema: z.ZodType<Prisma.DiscountUpdateManyMutationInput>;
export declare const DiscountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyInput>;
export declare const DiscountProductCreateInputSchema: z.ZodType<Prisma.DiscountProductCreateInput>;
export declare const DiscountProductUncheckedCreateInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateInput>;
export declare const DiscountProductUpdateInputSchema: z.ZodType<Prisma.DiscountProductUpdateInput>;
export declare const DiscountProductUncheckedUpdateInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateInput>;
export declare const DiscountProductCreateManyInputSchema: z.ZodType<Prisma.DiscountProductCreateManyInput>;
export declare const DiscountProductUpdateManyMutationInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyMutationInput>;
export declare const DiscountProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyInput>;
export declare const SubscriptionCreateInputSchema: z.ZodType<Prisma.SubscriptionCreateInput>;
export declare const SubscriptionUncheckedCreateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateInput>;
export declare const SubscriptionUpdateInputSchema: z.ZodType<Prisma.SubscriptionUpdateInput>;
export declare const SubscriptionUncheckedUpdateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateInput>;
export declare const SubscriptionCreateManyInputSchema: z.ZodType<Prisma.SubscriptionCreateManyInput>;
export declare const SubscriptionUpdateManyMutationInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyMutationInput>;
export declare const SubscriptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyInput>;
export declare const StringFilterSchema: z.ZodType<Prisma.StringFilter>;
export declare const EnumUserRoleFilterSchema: z.ZodType<Prisma.EnumUserRoleFilter>;
export declare const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter>;
export declare const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter>;
export declare const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter>;
export declare const BoolFilterSchema: z.ZodType<Prisma.BoolFilter>;
export declare const ActivityLogListRelationFilterSchema: z.ZodType<Prisma.ActivityLogListRelationFilter>;
export declare const CustomerNullableScalarRelationFilterSchema: z.ZodType<Prisma.CustomerNullableScalarRelationFilter>;
export declare const StoreOwnerNullableScalarRelationFilterSchema: z.ZodType<Prisma.StoreOwnerNullableScalarRelationFilter>;
export declare const AdminNullableScalarRelationFilterSchema: z.ZodType<Prisma.AdminNullableScalarRelationFilter>;
export declare const StoreNullableScalarRelationFilterSchema: z.ZodType<Prisma.StoreNullableScalarRelationFilter>;
export declare const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput>;
export declare const ActivityLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ActivityLogOrderByRelationAggregateInput>;
export declare const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export declare const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export declare const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export declare const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter>;
export declare const EnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter>;
export declare const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter>;
export declare const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter>;
export declare const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter>;
export declare const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter>;
export declare const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter>;
export declare const StoreOwnerCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoreOwnerCountOrderByAggregateInput>;
export declare const StoreOwnerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoreOwnerMaxOrderByAggregateInput>;
export declare const StoreOwnerMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoreOwnerMinOrderByAggregateInput>;
export declare const AdminCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdminCountOrderByAggregateInput>;
export declare const AdminMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdminMaxOrderByAggregateInput>;
export declare const AdminMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdminMinOrderByAggregateInput>;
export declare const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter>;
export declare const ProductRatingListRelationFilterSchema: z.ZodType<Prisma.ProductRatingListRelationFilter>;
export declare const ProductReviewListRelationFilterSchema: z.ZodType<Prisma.ProductReviewListRelationFilter>;
export declare const WalletNullableScalarRelationFilterSchema: z.ZodType<Prisma.WalletNullableScalarRelationFilter>;
export declare const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput>;
export declare const ProductRatingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductRatingOrderByRelationAggregateInput>;
export declare const ProductReviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductReviewOrderByRelationAggregateInput>;
export declare const CustomerCountOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerCountOrderByAggregateInput>;
export declare const CustomerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerMaxOrderByAggregateInput>;
export declare const CustomerMinOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerMinOrderByAggregateInput>;
export declare const IntFilterSchema: z.ZodType<Prisma.IntFilter>;
export declare const UserNullableScalarRelationFilterSchema: z.ZodType<Prisma.UserNullableScalarRelationFilter>;
export declare const ActivityLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityLogCountOrderByAggregateInput>;
export declare const ActivityLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityLogAvgOrderByAggregateInput>;
export declare const ActivityLogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityLogMaxOrderByAggregateInput>;
export declare const ActivityLogMinOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityLogMinOrderByAggregateInput>;
export declare const ActivityLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityLogSumOrderByAggregateInput>;
export declare const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter>;
export declare const DecimalFilterSchema: z.ZodType<Prisma.DecimalFilter>;
export declare const CustomerScalarRelationFilterSchema: z.ZodType<Prisma.CustomerScalarRelationFilter>;
export declare const WalletTransactionListRelationFilterSchema: z.ZodType<Prisma.WalletTransactionListRelationFilter>;
export declare const WalletTransactionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WalletTransactionOrderByRelationAggregateInput>;
export declare const WalletCountOrderByAggregateInputSchema: z.ZodType<Prisma.WalletCountOrderByAggregateInput>;
export declare const WalletAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WalletAvgOrderByAggregateInput>;
export declare const WalletMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WalletMaxOrderByAggregateInput>;
export declare const WalletMinOrderByAggregateInputSchema: z.ZodType<Prisma.WalletMinOrderByAggregateInput>;
export declare const WalletSumOrderByAggregateInputSchema: z.ZodType<Prisma.WalletSumOrderByAggregateInput>;
export declare const DecimalWithAggregatesFilterSchema: z.ZodType<Prisma.DecimalWithAggregatesFilter>;
export declare const EnumWalletTransactionTypeFilterSchema: z.ZodType<Prisma.EnumWalletTransactionTypeFilter>;
export declare const EnumTransactionStatusFilterSchema: z.ZodType<Prisma.EnumTransactionStatusFilter>;
export declare const WalletScalarRelationFilterSchema: z.ZodType<Prisma.WalletScalarRelationFilter>;
export declare const WalletTransactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.WalletTransactionCountOrderByAggregateInput>;
export declare const WalletTransactionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WalletTransactionAvgOrderByAggregateInput>;
export declare const WalletTransactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WalletTransactionMaxOrderByAggregateInput>;
export declare const WalletTransactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.WalletTransactionMinOrderByAggregateInput>;
export declare const WalletTransactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.WalletTransactionSumOrderByAggregateInput>;
export declare const EnumWalletTransactionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWalletTransactionTypeWithAggregatesFilter>;
export declare const EnumTransactionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionStatusWithAggregatesFilter>;
export declare const EnumStoreStatusFilterSchema: z.ZodType<Prisma.EnumStoreStatusFilter>;
export declare const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter>;
export declare const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter>;
export declare const StoreAnalyticsNullableScalarRelationFilterSchema: z.ZodType<Prisma.StoreAnalyticsNullableScalarRelationFilter>;
export declare const SubscriptionNullableScalarRelationFilterSchema: z.ZodType<Prisma.SubscriptionNullableScalarRelationFilter>;
export declare const DiscountProductListRelationFilterSchema: z.ZodType<Prisma.DiscountProductListRelationFilter>;
export declare const DiscountListRelationFilterSchema: z.ZodType<Prisma.DiscountListRelationFilter>;
export declare const ProductReviewImageListRelationFilterSchema: z.ZodType<Prisma.ProductReviewImageListRelationFilter>;
export declare const TransactionListRelationFilterSchema: z.ZodType<Prisma.TransactionListRelationFilter>;
export declare const OrderItemListRelationFilterSchema: z.ZodType<Prisma.OrderItemListRelationFilter>;
export declare const ProductVariantImageListRelationFilterSchema: z.ZodType<Prisma.ProductVariantImageListRelationFilter>;
export declare const ProductImageListRelationFilterSchema: z.ZodType<Prisma.ProductImageListRelationFilter>;
export declare const ProductVariantAttributeListRelationFilterSchema: z.ZodType<Prisma.ProductVariantAttributeListRelationFilter>;
export declare const ProductVariantListRelationFilterSchema: z.ZodType<Prisma.ProductVariantListRelationFilter>;
export declare const ProductCategoryListRelationFilterSchema: z.ZodType<Prisma.ProductCategoryListRelationFilter>;
export declare const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput>;
export declare const DiscountProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DiscountProductOrderByRelationAggregateInput>;
export declare const DiscountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DiscountOrderByRelationAggregateInput>;
export declare const ProductReviewImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductReviewImageOrderByRelationAggregateInput>;
export declare const TransactionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionOrderByRelationAggregateInput>;
export declare const OrderItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput>;
export declare const ProductVariantImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductVariantImageOrderByRelationAggregateInput>;
export declare const ProductImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductImageOrderByRelationAggregateInput>;
export declare const ProductVariantAttributeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeOrderByRelationAggregateInput>;
export declare const ProductVariantOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductVariantOrderByRelationAggregateInput>;
export declare const ProductCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductCategoryOrderByRelationAggregateInput>;
export declare const StoreCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoreCountOrderByAggregateInput>;
export declare const StoreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoreMaxOrderByAggregateInput>;
export declare const StoreMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoreMinOrderByAggregateInput>;
export declare const EnumStoreStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStoreStatusWithAggregatesFilter>;
export declare const JsonNullableWithAggregatesFilterSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter>;
export declare const StoreScalarRelationFilterSchema: z.ZodType<Prisma.StoreScalarRelationFilter>;
export declare const StoreAnalyticsCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoreAnalyticsCountOrderByAggregateInput>;
export declare const StoreAnalyticsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StoreAnalyticsAvgOrderByAggregateInput>;
export declare const StoreAnalyticsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoreAnalyticsMaxOrderByAggregateInput>;
export declare const StoreAnalyticsMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoreAnalyticsMinOrderByAggregateInput>;
export declare const StoreAnalyticsSumOrderByAggregateInputSchema: z.ZodType<Prisma.StoreAnalyticsSumOrderByAggregateInput>;
export declare const ProductCategoryScalarRelationFilterSchema: z.ZodType<Prisma.ProductCategoryScalarRelationFilter>;
export declare const ProductCategoryNullableScalarRelationFilterSchema: z.ZodType<Prisma.ProductCategoryNullableScalarRelationFilter>;
export declare const DiscountNullableScalarRelationFilterSchema: z.ZodType<Prisma.DiscountNullableScalarRelationFilter>;
export declare const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput>;
export declare const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export declare const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput>;
export declare const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput>;
export declare const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput>;
export declare const ProductCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCategoryCountOrderByAggregateInput>;
export declare const ProductCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCategoryMaxOrderByAggregateInput>;
export declare const ProductCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCategoryMinOrderByAggregateInput>;
export declare const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter>;
export declare const ProductVariantCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantCountOrderByAggregateInput>;
export declare const ProductVariantAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAvgOrderByAggregateInput>;
export declare const ProductVariantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantMaxOrderByAggregateInput>;
export declare const ProductVariantMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantMinOrderByAggregateInput>;
export declare const ProductVariantSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantSumOrderByAggregateInput>;
export declare const ProductVariantScalarRelationFilterSchema: z.ZodType<Prisma.ProductVariantScalarRelationFilter>;
export declare const ProductVariantAttributeCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeCountOrderByAggregateInput>;
export declare const ProductVariantAttributeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeAvgOrderByAggregateInput>;
export declare const ProductVariantAttributeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeMaxOrderByAggregateInput>;
export declare const ProductVariantAttributeMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeMinOrderByAggregateInput>;
export declare const ProductVariantAttributeSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantAttributeSumOrderByAggregateInput>;
export declare const ProductImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductImageCountOrderByAggregateInput>;
export declare const ProductImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductImageMaxOrderByAggregateInput>;
export declare const ProductImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductImageMinOrderByAggregateInput>;
export declare const ProductVariantImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantImageCountOrderByAggregateInput>;
export declare const ProductVariantImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantImageMaxOrderByAggregateInput>;
export declare const ProductVariantImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductVariantImageMinOrderByAggregateInput>;
export declare const EnumOrderStatusFilterSchema: z.ZodType<Prisma.EnumOrderStatusFilter>;
export declare const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput>;
export declare const OrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput>;
export declare const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput>;
export declare const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput>;
export declare const OrderSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput>;
export declare const EnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrderStatusWithAggregatesFilter>;
export declare const OrderScalarRelationFilterSchema: z.ZodType<Prisma.OrderScalarRelationFilter>;
export declare const OrderItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput>;
export declare const OrderItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput>;
export declare const OrderItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput>;
export declare const OrderItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMinOrderByAggregateInput>;
export declare const OrderItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput>;
export declare const ProductRatingCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingCountOrderByAggregateInput>;
export declare const ProductRatingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingAvgOrderByAggregateInput>;
export declare const ProductRatingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingMaxOrderByAggregateInput>;
export declare const ProductRatingMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingMinOrderByAggregateInput>;
export declare const ProductRatingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductRatingSumOrderByAggregateInput>;
export declare const ProductReviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewCountOrderByAggregateInput>;
export declare const ProductReviewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewMaxOrderByAggregateInput>;
export declare const ProductReviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewMinOrderByAggregateInput>;
export declare const ProductReviewScalarRelationFilterSchema: z.ZodType<Prisma.ProductReviewScalarRelationFilter>;
export declare const ProductReviewImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewImageCountOrderByAggregateInput>;
export declare const ProductReviewImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewImageMaxOrderByAggregateInput>;
export declare const ProductReviewImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductReviewImageMinOrderByAggregateInput>;
export declare const OrderNullableScalarRelationFilterSchema: z.ZodType<Prisma.OrderNullableScalarRelationFilter>;
export declare const TransactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionCountOrderByAggregateInput>;
export declare const TransactionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionAvgOrderByAggregateInput>;
export declare const TransactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionMaxOrderByAggregateInput>;
export declare const TransactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionMinOrderByAggregateInput>;
export declare const TransactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionSumOrderByAggregateInput>;
export declare const EnumDiscountTypeFilterSchema: z.ZodType<Prisma.EnumDiscountTypeFilter>;
export declare const DecimalNullableFilterSchema: z.ZodType<Prisma.DecimalNullableFilter>;
export declare const EnumDiscountScopeFilterSchema: z.ZodType<Prisma.EnumDiscountScopeFilter>;
export declare const DiscountCountOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountCountOrderByAggregateInput>;
export declare const DiscountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountAvgOrderByAggregateInput>;
export declare const DiscountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountMaxOrderByAggregateInput>;
export declare const DiscountMinOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountMinOrderByAggregateInput>;
export declare const DiscountSumOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountSumOrderByAggregateInput>;
export declare const EnumDiscountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDiscountTypeWithAggregatesFilter>;
export declare const DecimalNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DecimalNullableWithAggregatesFilter>;
export declare const EnumDiscountScopeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDiscountScopeWithAggregatesFilter>;
export declare const DiscountScalarRelationFilterSchema: z.ZodType<Prisma.DiscountScalarRelationFilter>;
export declare const DiscountProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountProductCountOrderByAggregateInput>;
export declare const DiscountProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountProductMaxOrderByAggregateInput>;
export declare const DiscountProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountProductMinOrderByAggregateInput>;
export declare const EnumPlanTypeFilterSchema: z.ZodType<Prisma.EnumPlanTypeFilter>;
export declare const SubscriptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionCountOrderByAggregateInput>;
export declare const SubscriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMaxOrderByAggregateInput>;
export declare const SubscriptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMinOrderByAggregateInput>;
export declare const EnumPlanTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPlanTypeWithAggregatesFilter>;
export declare const ActivityLogCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogCreateNestedManyWithoutUserInput>;
export declare const CustomerCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutUserInput>;
export declare const StoreOwnerCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerCreateNestedOneWithoutUserInput>;
export declare const AdminCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateNestedOneWithoutUserInput>;
export declare const StoreCreateNestedOneWithoutOwnerInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutOwnerInput>;
export declare const ActivityLogUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput>;
export declare const CustomerUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput>;
export declare const StoreOwnerUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedCreateNestedOneWithoutUserInput>;
export declare const AdminUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedCreateNestedOneWithoutUserInput>;
export declare const StoreUncheckedCreateNestedOneWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUncheckedCreateNestedOneWithoutOwnerInput>;
export declare const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput>;
export declare const EnumUserRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput>;
export declare const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export declare const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput>;
export declare const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;
export declare const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export declare const ActivityLogUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ActivityLogUpdateManyWithoutUserNestedInput>;
export declare const CustomerUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutUserNestedInput>;
export declare const StoreOwnerUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StoreOwnerUpdateOneWithoutUserNestedInput>;
export declare const AdminUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AdminUpdateOneWithoutUserNestedInput>;
export declare const StoreUpdateOneWithoutOwnerNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutOwnerNestedInput>;
export declare const ActivityLogUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput>;
export declare const CustomerUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput>;
export declare const StoreOwnerUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedUpdateOneWithoutUserNestedInput>;
export declare const AdminUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput>;
export declare const StoreUncheckedUpdateOneWithoutOwnerNestedInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateOneWithoutOwnerNestedInput>;
export declare const UserCreateNestedOneWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStoreOwnerProfileInput>;
export declare const UserUpdateOneRequiredWithoutStoreOwnerProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStoreOwnerProfileNestedInput>;
export declare const UserCreateNestedOneWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAdminProfileInput>;
export declare const UserUpdateOneRequiredWithoutAdminProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAdminProfileNestedInput>;
export declare const UserCreateNestedOneWithoutCustomerInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCustomerInput>;
export declare const OrderCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCustomerInput>;
export declare const ProductRatingCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutCustomerInput>;
export declare const ProductReviewCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewCreateNestedManyWithoutCustomerInput>;
export declare const WalletCreateNestedOneWithoutCustomerInputSchema: z.ZodType<Prisma.WalletCreateNestedOneWithoutCustomerInput>;
export declare const OrderUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput>;
export declare const ProductRatingUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateNestedManyWithoutCustomerInput>;
export declare const ProductReviewUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateNestedManyWithoutCustomerInput>;
export declare const WalletUncheckedCreateNestedOneWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUncheckedCreateNestedOneWithoutCustomerInput>;
export declare const UserUpdateOneRequiredWithoutCustomerNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput>;
export declare const OrderUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutCustomerNestedInput>;
export declare const ProductRatingUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithoutCustomerNestedInput>;
export declare const ProductReviewUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithoutCustomerNestedInput>;
export declare const WalletUpdateOneWithoutCustomerNestedInputSchema: z.ZodType<Prisma.WalletUpdateOneWithoutCustomerNestedInput>;
export declare const OrderUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutCustomerNestedInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutCustomerNestedInput>;
export declare const WalletUncheckedUpdateOneWithoutCustomerNestedInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateOneWithoutCustomerNestedInput>;
export declare const StoreCreateNestedOneWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutActivityLogsInput>;
export declare const UserCreateNestedOneWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutActivityLogsInput>;
export declare const StoreUpdateOneWithoutActivityLogsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutActivityLogsNestedInput>;
export declare const UserUpdateOneWithoutActivityLogsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutActivityLogsNestedInput>;
export declare const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export declare const CustomerCreateNestedOneWithoutWalletInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutWalletInput>;
export declare const WalletTransactionCreateNestedManyWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionCreateNestedManyWithoutWalletInput>;
export declare const WalletTransactionUncheckedCreateNestedManyWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedCreateNestedManyWithoutWalletInput>;
export declare const DecimalFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DecimalFieldUpdateOperationsInput>;
export declare const CustomerUpdateOneRequiredWithoutWalletNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutWalletNestedInput>;
export declare const WalletTransactionUpdateManyWithoutWalletNestedInputSchema: z.ZodType<Prisma.WalletTransactionUpdateManyWithoutWalletNestedInput>;
export declare const WalletTransactionUncheckedUpdateManyWithoutWalletNestedInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput>;
export declare const WalletCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletCreateNestedOneWithoutTransactionsInput>;
export declare const StoreCreateNestedOneWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutWalletTransanctionsInput>;
export declare const EnumWalletTransactionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWalletTransactionTypeFieldUpdateOperationsInput>;
export declare const EnumTransactionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionStatusFieldUpdateOperationsInput>;
export declare const WalletUpdateOneRequiredWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.WalletUpdateOneRequiredWithoutTransactionsNestedInput>;
export declare const StoreUpdateOneWithoutWalletTransanctionsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutWalletTransanctionsNestedInput>;
export declare const UserCreateNestedOneWithoutUserStoreInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserStoreInput>;
export declare const ProductCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutStoreInput>;
export declare const OrderCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutStoreInput>;
export declare const StoreAnalyticsCreateNestedOneWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsCreateNestedOneWithoutStoreInput>;
export declare const WalletTransactionCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionCreateNestedManyWithoutStoreInput>;
export declare const SubscriptionCreateNestedOneWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutStoreInput>;
export declare const DiscountProductCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductCreateNestedManyWithoutStoreInput>;
export declare const DiscountCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountCreateNestedManyWithoutStoreInput>;
export declare const ProductReviewImageCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageCreateNestedManyWithoutStoreInput>;
export declare const TransactionCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutStoreInput>;
export declare const ProductReviewCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewCreateNestedManyWithoutStoreInput>;
export declare const ProductRatingCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutStoreInput>;
export declare const OrderItemCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantImageCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageCreateNestedManyWithoutStoreInput>;
export declare const ProductImageCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantAttributeCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantCreateNestedManyWithoutStoreInput>;
export declare const ActivityLogCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogCreateNestedManyWithoutStoreInput>;
export declare const ProductCategoryCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryCreateNestedManyWithoutStoreInput>;
export declare const ProductUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutStoreInput>;
export declare const OrderUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutStoreInput>;
export declare const StoreAnalyticsUncheckedCreateNestedOneWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedCreateNestedOneWithoutStoreInput>;
export declare const WalletTransactionUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedCreateNestedManyWithoutStoreInput>;
export declare const SubscriptionUncheckedCreateNestedOneWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedOneWithoutStoreInput>;
export declare const DiscountProductUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateNestedManyWithoutStoreInput>;
export declare const DiscountUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductReviewImageUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedCreateNestedManyWithoutStoreInput>;
export declare const TransactionUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductReviewUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductRatingUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateNestedManyWithoutStoreInput>;
export declare const OrderItemUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantImageUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductImageUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantAttributeUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductVariantUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ActivityLogUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUncheckedCreateNestedManyWithoutStoreInput>;
export declare const ProductCategoryUncheckedCreateNestedManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateNestedManyWithoutStoreInput>;
export declare const EnumStoreStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStoreStatusFieldUpdateOperationsInput>;
export declare const UserUpdateOneWithoutUserStoreNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUserStoreNestedInput>;
export declare const ProductUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutStoreNestedInput>;
export declare const OrderUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutStoreNestedInput>;
export declare const StoreAnalyticsUpdateOneWithoutStoreNestedInputSchema: z.ZodType<Prisma.StoreAnalyticsUpdateOneWithoutStoreNestedInput>;
export declare const WalletTransactionUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.WalletTransactionUpdateManyWithoutStoreNestedInput>;
export declare const SubscriptionUpdateOneWithoutStoreNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateOneWithoutStoreNestedInput>;
export declare const DiscountProductUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithoutStoreNestedInput>;
export declare const DiscountUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.DiscountUpdateManyWithoutStoreNestedInput>;
export declare const ProductReviewImageUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyWithoutStoreNestedInput>;
export declare const TransactionUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutStoreNestedInput>;
export declare const ProductReviewUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithoutStoreNestedInput>;
export declare const ProductRatingUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithoutStoreNestedInput>;
export declare const OrderItemUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantImageUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyWithoutStoreNestedInput>;
export declare const ProductImageUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductImageUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantAttributeUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantUpdateManyWithoutStoreNestedInput>;
export declare const ActivityLogUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ActivityLogUpdateManyWithoutStoreNestedInput>;
export declare const ProductCategoryUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductCategoryUpdateManyWithoutStoreNestedInput>;
export declare const ProductUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const OrderUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const StoreAnalyticsUncheckedUpdateOneWithoutStoreNestedInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedUpdateOneWithoutStoreNestedInput>;
export declare const WalletTransactionUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const SubscriptionUncheckedUpdateOneWithoutStoreNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateOneWithoutStoreNestedInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const DiscountUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductReviewImageUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const TransactionUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const OrderItemUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantImageUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductImageUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantAttributeUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductVariantUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ActivityLogUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const ProductCategoryUncheckedUpdateManyWithoutStoreNestedInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateManyWithoutStoreNestedInput>;
export declare const StoreCreateNestedOneWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutAnalyticsInput>;
export declare const StoreUpdateOneRequiredWithoutAnalyticsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutAnalyticsNestedInput>;
export declare const ProductCategoryCreateNestedOneWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateNestedOneWithoutCategoryProductsInput>;
export declare const ProductCategoryCreateNestedOneWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateNestedOneWithoutSubCategoryProductsInput>;
export declare const StoreCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductsInput>;
export declare const DiscountCreateNestedOneWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutDiscountedProductsInput>;
export declare const ProductVariantCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantCreateNestedManyWithoutProductInput>;
export declare const ProductImageCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductImageCreateNestedManyWithoutProductInput>;
export declare const ProductReviewCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewCreateNestedManyWithoutProductInput>;
export declare const ProductRatingCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutProductInput>;
export declare const DiscountProductCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductCreateNestedManyWithoutProductInput>;
export declare const ProductVariantUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
export declare const ProductImageUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput>;
export declare const ProductReviewUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateNestedManyWithoutProductInput>;
export declare const ProductRatingUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateNestedManyWithoutProductInput>;
export declare const DiscountProductUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateNestedManyWithoutProductInput>;
export declare const ProductCategoryUpdateOneRequiredWithoutCategoryProductsNestedInputSchema: z.ZodType<Prisma.ProductCategoryUpdateOneRequiredWithoutCategoryProductsNestedInput>;
export declare const ProductCategoryUpdateOneWithoutSubCategoryProductsNestedInputSchema: z.ZodType<Prisma.ProductCategoryUpdateOneWithoutSubCategoryProductsNestedInput>;
export declare const StoreUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutProductsNestedInput>;
export declare const DiscountUpdateOneWithoutDiscountedProductsNestedInputSchema: z.ZodType<Prisma.DiscountUpdateOneWithoutDiscountedProductsNestedInput>;
export declare const ProductVariantUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductVariantUpdateManyWithoutProductNestedInput>;
export declare const ProductImageUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductImageUpdateManyWithoutProductNestedInput>;
export declare const ProductReviewUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithoutProductNestedInput>;
export declare const ProductRatingUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithoutProductNestedInput>;
export declare const DiscountProductUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithoutProductNestedInput>;
export declare const ProductVariantUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
export declare const ProductImageUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutProductNestedInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutProductNestedInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutProductNestedInput>;
export declare const StoreCreateNestedOneWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductCategoriesInput>;
export declare const ProductCategoryCreateNestedOneWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
export declare const ProductCategoryCreateNestedManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
export declare const ProductCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoryInput>;
export declare const ProductCreateNestedManyWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutSubCategoryInput>;
export declare const ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
export declare const ProductUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCategoryInput>;
export declare const ProductUncheckedCreateNestedManyWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutSubCategoryInput>;
export declare const StoreUpdateOneWithoutProductCategoriesNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutProductCategoriesNestedInput>;
export declare const ProductCategoryUpdateOneWithoutSubCategoriesNestedInputSchema: z.ZodType<Prisma.ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
export declare const ProductCategoryUpdateManyWithoutParentCategoryNestedInputSchema: z.ZodType<Prisma.ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
export declare const ProductUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCategoryNestedInput>;
export declare const ProductUpdateManyWithoutSubCategoryNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutSubCategoryNestedInput>;
export declare const ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
export declare const ProductUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
export declare const ProductUncheckedUpdateManyWithoutSubCategoryNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutSubCategoryNestedInput>;
export declare const ProductCreateNestedOneWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutVariantsInput>;
export declare const ProductVariantAttributeCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateNestedManyWithoutVariantInput>;
export declare const ProductVariantImageCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageCreateNestedManyWithoutVariantInput>;
export declare const StoreCreateNestedOneWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductVariantsInput>;
export declare const OrderItemCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutVariantInput>;
export declare const ProductVariantAttributeUncheckedCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedCreateNestedManyWithoutVariantInput>;
export declare const ProductVariantImageUncheckedCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedCreateNestedManyWithoutVariantInput>;
export declare const OrderItemUncheckedCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutVariantInput>;
export declare const ProductUpdateOneRequiredWithoutVariantsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput>;
export declare const ProductVariantAttributeUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyWithoutVariantNestedInput>;
export declare const ProductVariantImageUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyWithoutVariantNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductVariantsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductVariantsNestedInput>;
export declare const OrderItemUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutVariantNestedInput>;
export declare const ProductVariantAttributeUncheckedUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateManyWithoutVariantNestedInput>;
export declare const ProductVariantImageUncheckedUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateManyWithoutVariantNestedInput>;
export declare const OrderItemUncheckedUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutVariantNestedInput>;
export declare const ProductVariantCreateNestedOneWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutAttributesInput>;
export declare const StoreCreateNestedOneWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductVariantAttributesInput>;
export declare const ProductVariantUpdateOneRequiredWithoutAttributesNestedInputSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutAttributesNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductVariantAttributesNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductVariantAttributesNestedInput>;
export declare const ProductCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutImagesInput>;
export declare const StoreCreateNestedOneWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductImagesInput>;
export declare const ProductUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutImagesNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductImagesNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductImagesNestedInput>;
export declare const ProductVariantCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutImagesInput>;
export declare const StoreCreateNestedOneWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductVariantImagesInput>;
export declare const ProductVariantUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutImagesNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductVariantImagesNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductVariantImagesNestedInput>;
export declare const OrderItemCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutOrderInput>;
export declare const TransactionCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutOrderInput>;
export declare const StoreCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutOrdersInput>;
export declare const CustomerCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutOrdersInput>;
export declare const DiscountCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutOrdersInput>;
export declare const OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput>;
export declare const TransactionUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutOrderInput>;
export declare const EnumOrderStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOrderStatusFieldUpdateOperationsInput>;
export declare const OrderItemUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutOrderNestedInput>;
export declare const TransactionUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutOrderNestedInput>;
export declare const StoreUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutOrdersNestedInput>;
export declare const CustomerUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput>;
export declare const DiscountUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.DiscountUpdateOneWithoutOrdersNestedInput>;
export declare const OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput>;
export declare const TransactionUncheckedUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutOrderNestedInput>;
export declare const StoreCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutOrderItemsInput>;
export declare const OrderCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutItemsInput>;
export declare const ProductVariantCreateNestedOneWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutOrderItemInput>;
export declare const StoreUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutOrderItemsNestedInput>;
export declare const OrderUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput>;
export declare const ProductVariantUpdateOneRequiredWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutOrderItemNestedInput>;
export declare const StoreCreateNestedOneWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductRatinsInput>;
export declare const ProductCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutRatingsInput>;
export declare const CustomerCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutRatingsInput>;
export declare const StoreUpdateOneRequiredWithoutProductRatinsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductRatinsNestedInput>;
export declare const ProductUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutRatingsNestedInput>;
export declare const CustomerUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutRatingsNestedInput>;
export declare const ProductReviewImageCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageCreateNestedManyWithoutReviewInput>;
export declare const StoreCreateNestedOneWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductReviewsInput>;
export declare const ProductCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutReviewsInput>;
export declare const CustomerCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutReviewsInput>;
export declare const ProductReviewImageUncheckedCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedCreateNestedManyWithoutReviewInput>;
export declare const ProductReviewImageUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyWithoutReviewNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductReviewsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductReviewsNestedInput>;
export declare const ProductUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput>;
export declare const CustomerUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput>;
export declare const ProductReviewImageUncheckedUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateManyWithoutReviewNestedInput>;
export declare const ProductReviewCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewCreateNestedOneWithoutImagesInput>;
export declare const StoreCreateNestedOneWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutProductReviewImagesInput>;
export declare const ProductReviewUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.ProductReviewUpdateOneRequiredWithoutImagesNestedInput>;
export declare const StoreUpdateOneRequiredWithoutProductReviewImagesNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutProductReviewImagesNestedInput>;
export declare const StoreCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutTransactionsInput>;
export declare const OrderCreateNestedOneWithoutTransactionInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutTransactionInput>;
export declare const StoreUpdateOneRequiredWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutTransactionsNestedInput>;
export declare const OrderUpdateOneWithoutTransactionNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneWithoutTransactionNestedInput>;
export declare const StoreCreateNestedOneWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutDiscountsInput>;
export declare const DiscountProductCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductCreateNestedManyWithoutDiscountInput>;
export declare const ProductCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutDiscountInput>;
export declare const OrderCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutDiscountInput>;
export declare const DiscountProductUncheckedCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateNestedManyWithoutDiscountInput>;
export declare const ProductUncheckedCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutDiscountInput>;
export declare const OrderUncheckedCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutDiscountInput>;
export declare const EnumDiscountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDiscountTypeFieldUpdateOperationsInput>;
export declare const NullableDecimalFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDecimalFieldUpdateOperationsInput>;
export declare const EnumDiscountScopeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDiscountScopeFieldUpdateOperationsInput>;
export declare const StoreUpdateOneWithoutDiscountsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneWithoutDiscountsNestedInput>;
export declare const DiscountProductUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithoutDiscountNestedInput>;
export declare const ProductUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutDiscountNestedInput>;
export declare const OrderUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutDiscountNestedInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutDiscountNestedInput>;
export declare const ProductUncheckedUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDiscountNestedInput>;
export declare const OrderUncheckedUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutDiscountNestedInput>;
export declare const StoreCreateNestedOneWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutDiscountProductsInput>;
export declare const DiscountCreateNestedOneWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutApplicableProductsInput>;
export declare const ProductCreateNestedOneWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutDiscountProductsInput>;
export declare const StoreUpdateOneRequiredWithoutDiscountProductsNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutDiscountProductsNestedInput>;
export declare const DiscountUpdateOneRequiredWithoutApplicableProductsNestedInputSchema: z.ZodType<Prisma.DiscountUpdateOneRequiredWithoutApplicableProductsNestedInput>;
export declare const ProductUpdateOneRequiredWithoutDiscountProductsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutDiscountProductsNestedInput>;
export declare const StoreCreateNestedOneWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutSubscriptionInput>;
export declare const EnumPlanTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPlanTypeFieldUpdateOperationsInput>;
export declare const StoreUpdateOneRequiredWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutSubscriptionNestedInput>;
export declare const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter>;
export declare const NestedEnumUserRoleFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter>;
export declare const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter>;
export declare const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter>;
export declare const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter>;
export declare const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter>;
export declare const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter>;
export declare const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter>;
export declare const NestedEnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter>;
export declare const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export declare const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter>;
export declare const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter>;
export declare const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter>;
export declare const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter>;
export declare const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter>;
export declare const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter>;
export declare const NestedDecimalFilterSchema: z.ZodType<Prisma.NestedDecimalFilter>;
export declare const NestedDecimalWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDecimalWithAggregatesFilter>;
export declare const NestedEnumWalletTransactionTypeFilterSchema: z.ZodType<Prisma.NestedEnumWalletTransactionTypeFilter>;
export declare const NestedEnumTransactionStatusFilterSchema: z.ZodType<Prisma.NestedEnumTransactionStatusFilter>;
export declare const NestedEnumWalletTransactionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWalletTransactionTypeWithAggregatesFilter>;
export declare const NestedEnumTransactionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTransactionStatusWithAggregatesFilter>;
export declare const NestedEnumStoreStatusFilterSchema: z.ZodType<Prisma.NestedEnumStoreStatusFilter>;
export declare const NestedEnumStoreStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStoreStatusWithAggregatesFilter>;
export declare const NestedJsonNullableFilterSchema: z.ZodType<Prisma.NestedJsonNullableFilter>;
export declare const NestedEnumOrderStatusFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusFilter>;
export declare const NestedEnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusWithAggregatesFilter>;
export declare const NestedEnumDiscountTypeFilterSchema: z.ZodType<Prisma.NestedEnumDiscountTypeFilter>;
export declare const NestedDecimalNullableFilterSchema: z.ZodType<Prisma.NestedDecimalNullableFilter>;
export declare const NestedEnumDiscountScopeFilterSchema: z.ZodType<Prisma.NestedEnumDiscountScopeFilter>;
export declare const NestedEnumDiscountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDiscountTypeWithAggregatesFilter>;
export declare const NestedDecimalNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDecimalNullableWithAggregatesFilter>;
export declare const NestedEnumDiscountScopeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDiscountScopeWithAggregatesFilter>;
export declare const NestedEnumPlanTypeFilterSchema: z.ZodType<Prisma.NestedEnumPlanTypeFilter>;
export declare const NestedEnumPlanTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPlanTypeWithAggregatesFilter>;
export declare const ActivityLogCreateWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogCreateWithoutUserInput>;
export declare const ActivityLogUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUncheckedCreateWithoutUserInput>;
export declare const ActivityLogCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogCreateOrConnectWithoutUserInput>;
export declare const ActivityLogCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ActivityLogCreateManyUserInputEnvelope>;
export declare const CustomerCreateWithoutUserInputSchema: z.ZodType<Prisma.CustomerCreateWithoutUserInput>;
export declare const CustomerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutUserInput>;
export declare const CustomerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutUserInput>;
export declare const StoreOwnerCreateWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerCreateWithoutUserInput>;
export declare const StoreOwnerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedCreateWithoutUserInput>;
export declare const StoreOwnerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerCreateOrConnectWithoutUserInput>;
export declare const AdminCreateWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateWithoutUserInput>;
export declare const AdminUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedCreateWithoutUserInput>;
export declare const AdminCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutUserInput>;
export declare const StoreCreateWithoutOwnerInputSchema: z.ZodType<Prisma.StoreCreateWithoutOwnerInput>;
export declare const StoreUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutOwnerInput>;
export declare const StoreCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutOwnerInput>;
export declare const ActivityLogUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUpsertWithWhereUniqueWithoutUserInput>;
export declare const ActivityLogUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUpdateWithWhereUniqueWithoutUserInput>;
export declare const ActivityLogUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUpdateManyWithWhereWithoutUserInput>;
export declare const ActivityLogScalarWhereInputSchema: z.ZodType<Prisma.ActivityLogScalarWhereInput>;
export declare const CustomerUpsertWithoutUserInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutUserInput>;
export declare const CustomerUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutUserInput>;
export declare const CustomerUpdateWithoutUserInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutUserInput>;
export declare const CustomerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutUserInput>;
export declare const StoreOwnerUpsertWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUpsertWithoutUserInput>;
export declare const StoreOwnerUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUpdateToOneWithWhereWithoutUserInput>;
export declare const StoreOwnerUpdateWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUpdateWithoutUserInput>;
export declare const StoreOwnerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.StoreOwnerUncheckedUpdateWithoutUserInput>;
export declare const AdminUpsertWithoutUserInputSchema: z.ZodType<Prisma.AdminUpsertWithoutUserInput>;
export declare const AdminUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AdminUpdateToOneWithWhereWithoutUserInput>;
export declare const AdminUpdateWithoutUserInputSchema: z.ZodType<Prisma.AdminUpdateWithoutUserInput>;
export declare const AdminUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateWithoutUserInput>;
export declare const StoreUpsertWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUpsertWithoutOwnerInput>;
export declare const StoreUpdateToOneWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutOwnerInput>;
export declare const StoreUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUpdateWithoutOwnerInput>;
export declare const StoreUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutOwnerInput>;
export declare const UserCreateWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutStoreOwnerProfileInput>;
export declare const UserUncheckedCreateWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStoreOwnerProfileInput>;
export declare const UserCreateOrConnectWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStoreOwnerProfileInput>;
export declare const UserUpsertWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserUpsertWithoutStoreOwnerProfileInput>;
export declare const UserUpdateToOneWithWhereWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStoreOwnerProfileInput>;
export declare const UserUpdateWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserUpdateWithoutStoreOwnerProfileInput>;
export declare const UserUncheckedUpdateWithoutStoreOwnerProfileInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutStoreOwnerProfileInput>;
export declare const UserCreateWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutAdminProfileInput>;
export declare const UserUncheckedCreateWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAdminProfileInput>;
export declare const UserCreateOrConnectWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAdminProfileInput>;
export declare const UserUpsertWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserUpsertWithoutAdminProfileInput>;
export declare const UserUpdateToOneWithWhereWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAdminProfileInput>;
export declare const UserUpdateWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserUpdateWithoutAdminProfileInput>;
export declare const UserUncheckedUpdateWithoutAdminProfileInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAdminProfileInput>;
export declare const UserCreateWithoutCustomerInputSchema: z.ZodType<Prisma.UserCreateWithoutCustomerInput>;
export declare const UserUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCustomerInput>;
export declare const UserCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCustomerInput>;
export declare const OrderCreateWithoutCustomerInputSchema: z.ZodType<Prisma.OrderCreateWithoutCustomerInput>;
export declare const OrderUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCustomerInput>;
export declare const OrderCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCustomerInput>;
export declare const OrderCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyCustomerInputEnvelope>;
export declare const ProductRatingCreateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingCreateWithoutCustomerInput>;
export declare const ProductRatingUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutCustomerInput>;
export declare const ProductRatingCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutCustomerInput>;
export declare const ProductRatingCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.ProductRatingCreateManyCustomerInputEnvelope>;
export declare const ProductReviewCreateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewCreateWithoutCustomerInput>;
export declare const ProductReviewUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateWithoutCustomerInput>;
export declare const ProductReviewCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewCreateOrConnectWithoutCustomerInput>;
export declare const ProductReviewCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.ProductReviewCreateManyCustomerInputEnvelope>;
export declare const WalletCreateWithoutCustomerInputSchema: z.ZodType<Prisma.WalletCreateWithoutCustomerInput>;
export declare const WalletUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutCustomerInput>;
export declare const WalletCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutCustomerInput>;
export declare const UserUpsertWithoutCustomerInputSchema: z.ZodType<Prisma.UserUpsertWithoutCustomerInput>;
export declare const UserUpdateToOneWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCustomerInput>;
export declare const UserUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.UserUpdateWithoutCustomerInput>;
export declare const UserUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCustomerInput>;
export declare const OrderUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput>;
export declare const OrderUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput>;
export declare const OrderUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutCustomerInput>;
export declare const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput>;
export declare const ProductRatingUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutCustomerInput>;
export declare const ProductRatingUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutCustomerInput>;
export declare const ProductRatingUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutCustomerInput>;
export declare const ProductRatingScalarWhereInputSchema: z.ZodType<Prisma.ProductRatingScalarWhereInput>;
export declare const ProductReviewUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput>;
export declare const ProductReviewUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput>;
export declare const ProductReviewUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput>;
export declare const ProductReviewScalarWhereInputSchema: z.ZodType<Prisma.ProductReviewScalarWhereInput>;
export declare const WalletUpsertWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUpsertWithoutCustomerInput>;
export declare const WalletUpdateToOneWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutCustomerInput>;
export declare const WalletUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUpdateWithoutCustomerInput>;
export declare const WalletUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutCustomerInput>;
export declare const StoreCreateWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreCreateWithoutActivityLogsInput>;
export declare const StoreUncheckedCreateWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutActivityLogsInput>;
export declare const StoreCreateOrConnectWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutActivityLogsInput>;
export declare const UserCreateWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserCreateWithoutActivityLogsInput>;
export declare const UserUncheckedCreateWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutActivityLogsInput>;
export declare const UserCreateOrConnectWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutActivityLogsInput>;
export declare const StoreUpsertWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutActivityLogsInput>;
export declare const StoreUpdateToOneWithWhereWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutActivityLogsInput>;
export declare const StoreUpdateWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutActivityLogsInput>;
export declare const StoreUncheckedUpdateWithoutActivityLogsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutActivityLogsInput>;
export declare const UserUpsertWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserUpsertWithoutActivityLogsInput>;
export declare const UserUpdateToOneWithWhereWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutActivityLogsInput>;
export declare const UserUpdateWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserUpdateWithoutActivityLogsInput>;
export declare const UserUncheckedUpdateWithoutActivityLogsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutActivityLogsInput>;
export declare const CustomerCreateWithoutWalletInputSchema: z.ZodType<Prisma.CustomerCreateWithoutWalletInput>;
export declare const CustomerUncheckedCreateWithoutWalletInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutWalletInput>;
export declare const CustomerCreateOrConnectWithoutWalletInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutWalletInput>;
export declare const WalletTransactionCreateWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionCreateWithoutWalletInput>;
export declare const WalletTransactionUncheckedCreateWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedCreateWithoutWalletInput>;
export declare const WalletTransactionCreateOrConnectWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionCreateOrConnectWithoutWalletInput>;
export declare const WalletTransactionCreateManyWalletInputEnvelopeSchema: z.ZodType<Prisma.WalletTransactionCreateManyWalletInputEnvelope>;
export declare const CustomerUpsertWithoutWalletInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutWalletInput>;
export declare const CustomerUpdateToOneWithWhereWithoutWalletInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutWalletInput>;
export declare const CustomerUpdateWithoutWalletInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutWalletInput>;
export declare const CustomerUncheckedUpdateWithoutWalletInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutWalletInput>;
export declare const WalletTransactionUpsertWithWhereUniqueWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUpsertWithWhereUniqueWithoutWalletInput>;
export declare const WalletTransactionUpdateWithWhereUniqueWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUpdateWithWhereUniqueWithoutWalletInput>;
export declare const WalletTransactionUpdateManyWithWhereWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUpdateManyWithWhereWithoutWalletInput>;
export declare const WalletTransactionScalarWhereInputSchema: z.ZodType<Prisma.WalletTransactionScalarWhereInput>;
export declare const WalletCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletCreateWithoutTransactionsInput>;
export declare const WalletUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutTransactionsInput>;
export declare const WalletCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutTransactionsInput>;
export declare const StoreCreateWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreCreateWithoutWalletTransanctionsInput>;
export declare const StoreUncheckedCreateWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutWalletTransanctionsInput>;
export declare const StoreCreateOrConnectWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutWalletTransanctionsInput>;
export declare const WalletUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletUpsertWithoutTransactionsInput>;
export declare const WalletUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutTransactionsInput>;
export declare const WalletUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletUpdateWithoutTransactionsInput>;
export declare const WalletUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutTransactionsInput>;
export declare const StoreUpsertWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutWalletTransanctionsInput>;
export declare const StoreUpdateToOneWithWhereWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutWalletTransanctionsInput>;
export declare const StoreUpdateWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutWalletTransanctionsInput>;
export declare const StoreUncheckedUpdateWithoutWalletTransanctionsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutWalletTransanctionsInput>;
export declare const UserCreateWithoutUserStoreInputSchema: z.ZodType<Prisma.UserCreateWithoutUserStoreInput>;
export declare const UserUncheckedCreateWithoutUserStoreInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserStoreInput>;
export declare const UserCreateOrConnectWithoutUserStoreInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserStoreInput>;
export declare const ProductCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductCreateWithoutStoreInput>;
export declare const ProductUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutStoreInput>;
export declare const ProductCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutStoreInput>;
export declare const ProductCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyStoreInputEnvelope>;
export declare const OrderCreateWithoutStoreInputSchema: z.ZodType<Prisma.OrderCreateWithoutStoreInput>;
export declare const OrderUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutStoreInput>;
export declare const OrderCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutStoreInput>;
export declare const OrderCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyStoreInputEnvelope>;
export declare const StoreAnalyticsCreateWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsCreateWithoutStoreInput>;
export declare const StoreAnalyticsUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedCreateWithoutStoreInput>;
export declare const StoreAnalyticsCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsCreateOrConnectWithoutStoreInput>;
export declare const WalletTransactionCreateWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionCreateWithoutStoreInput>;
export declare const WalletTransactionUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedCreateWithoutStoreInput>;
export declare const WalletTransactionCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionCreateOrConnectWithoutStoreInput>;
export declare const WalletTransactionCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.WalletTransactionCreateManyStoreInputEnvelope>;
export declare const SubscriptionCreateWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutStoreInput>;
export declare const SubscriptionUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutStoreInput>;
export declare const SubscriptionCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutStoreInput>;
export declare const DiscountProductCreateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductCreateWithoutStoreInput>;
export declare const DiscountProductUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateWithoutStoreInput>;
export declare const DiscountProductCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductCreateOrConnectWithoutStoreInput>;
export declare const DiscountProductCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.DiscountProductCreateManyStoreInputEnvelope>;
export declare const DiscountCreateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountCreateWithoutStoreInput>;
export declare const DiscountUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutStoreInput>;
export declare const DiscountCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutStoreInput>;
export declare const DiscountCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.DiscountCreateManyStoreInputEnvelope>;
export declare const ProductReviewImageCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageCreateWithoutStoreInput>;
export declare const ProductReviewImageUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedCreateWithoutStoreInput>;
export declare const ProductReviewImageCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageCreateOrConnectWithoutStoreInput>;
export declare const ProductReviewImageCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductReviewImageCreateManyStoreInputEnvelope>;
export declare const TransactionCreateWithoutStoreInputSchema: z.ZodType<Prisma.TransactionCreateWithoutStoreInput>;
export declare const TransactionUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutStoreInput>;
export declare const TransactionCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutStoreInput>;
export declare const TransactionCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyStoreInputEnvelope>;
export declare const ProductReviewCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewCreateWithoutStoreInput>;
export declare const ProductReviewUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateWithoutStoreInput>;
export declare const ProductReviewCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewCreateOrConnectWithoutStoreInput>;
export declare const ProductReviewCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductReviewCreateManyStoreInputEnvelope>;
export declare const ProductRatingCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingCreateWithoutStoreInput>;
export declare const ProductRatingUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutStoreInput>;
export declare const ProductRatingCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutStoreInput>;
export declare const ProductRatingCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductRatingCreateManyStoreInputEnvelope>;
export declare const OrderItemCreateWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutStoreInput>;
export declare const OrderItemUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutStoreInput>;
export declare const OrderItemCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutStoreInput>;
export declare const OrderItemCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyStoreInputEnvelope>;
export declare const ProductVariantImageCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageCreateWithoutStoreInput>;
export declare const ProductVariantImageUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedCreateWithoutStoreInput>;
export declare const ProductVariantImageCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageCreateOrConnectWithoutStoreInput>;
export declare const ProductVariantImageCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantImageCreateManyStoreInputEnvelope>;
export declare const ProductImageCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageCreateWithoutStoreInput>;
export declare const ProductImageUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUncheckedCreateWithoutStoreInput>;
export declare const ProductImageCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageCreateOrConnectWithoutStoreInput>;
export declare const ProductImageCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductImageCreateManyStoreInputEnvelope>;
export declare const ProductVariantAttributeCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateWithoutStoreInput>;
export declare const ProductVariantAttributeUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedCreateWithoutStoreInput>;
export declare const ProductVariantAttributeCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateOrConnectWithoutStoreInput>;
export declare const ProductVariantAttributeCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyStoreInputEnvelope>;
export declare const ProductVariantCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantCreateWithoutStoreInput>;
export declare const ProductVariantUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutStoreInput>;
export declare const ProductVariantCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutStoreInput>;
export declare const ProductVariantCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantCreateManyStoreInputEnvelope>;
export declare const ActivityLogCreateWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogCreateWithoutStoreInput>;
export declare const ActivityLogUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUncheckedCreateWithoutStoreInput>;
export declare const ActivityLogCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogCreateOrConnectWithoutStoreInput>;
export declare const ActivityLogCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ActivityLogCreateManyStoreInputEnvelope>;
export declare const ProductCategoryCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryCreateWithoutStoreInput>;
export declare const ProductCategoryUncheckedCreateWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateWithoutStoreInput>;
export declare const ProductCategoryCreateOrConnectWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryCreateOrConnectWithoutStoreInput>;
export declare const ProductCategoryCreateManyStoreInputEnvelopeSchema: z.ZodType<Prisma.ProductCategoryCreateManyStoreInputEnvelope>;
export declare const UserUpsertWithoutUserStoreInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserStoreInput>;
export declare const UserUpdateToOneWithWhereWithoutUserStoreInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserStoreInput>;
export declare const UserUpdateWithoutUserStoreInputSchema: z.ZodType<Prisma.UserUpdateWithoutUserStoreInput>;
export declare const UserUncheckedUpdateWithoutUserStoreInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserStoreInput>;
export declare const ProductUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput>;
export declare const OrderUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutStoreInput>;
export declare const OrderUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutStoreInput>;
export declare const OrderUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutStoreInput>;
export declare const StoreAnalyticsUpsertWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUpsertWithoutStoreInput>;
export declare const StoreAnalyticsUpdateToOneWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUpdateToOneWithWhereWithoutStoreInput>;
export declare const StoreAnalyticsUpdateWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUpdateWithoutStoreInput>;
export declare const StoreAnalyticsUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.StoreAnalyticsUncheckedUpdateWithoutStoreInput>;
export declare const WalletTransactionUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUpsertWithWhereUniqueWithoutStoreInput>;
export declare const WalletTransactionUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUpdateWithWhereUniqueWithoutStoreInput>;
export declare const WalletTransactionUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUpdateManyWithWhereWithoutStoreInput>;
export declare const SubscriptionUpsertWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithoutStoreInput>;
export declare const SubscriptionUpdateToOneWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUpdateToOneWithWhereWithoutStoreInput>;
export declare const SubscriptionUpdateWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutStoreInput>;
export declare const SubscriptionUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutStoreInput>;
export declare const DiscountProductUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUpsertWithWhereUniqueWithoutStoreInput>;
export declare const DiscountProductUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithWhereUniqueWithoutStoreInput>;
export declare const DiscountProductUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithWhereWithoutStoreInput>;
export declare const DiscountProductScalarWhereInputSchema: z.ZodType<Prisma.DiscountProductScalarWhereInput>;
export declare const DiscountUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUpsertWithWhereUniqueWithoutStoreInput>;
export declare const DiscountUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUpdateWithWhereUniqueWithoutStoreInput>;
export declare const DiscountUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUpdateManyWithWhereWithoutStoreInput>;
export declare const DiscountScalarWhereInputSchema: z.ZodType<Prisma.DiscountScalarWhereInput>;
export declare const ProductReviewImageUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductReviewImageUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductReviewImageUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductReviewImageScalarWhereInputSchema: z.ZodType<Prisma.ProductReviewImageScalarWhereInput>;
export declare const TransactionUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutStoreInput>;
export declare const TransactionUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutStoreInput>;
export declare const TransactionUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutStoreInput>;
export declare const TransactionScalarWhereInputSchema: z.ZodType<Prisma.TransactionScalarWhereInput>;
export declare const ProductReviewUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductReviewUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductReviewUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductRatingUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductRatingUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductRatingUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutStoreInput>;
export declare const OrderItemUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutStoreInput>;
export declare const OrderItemUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutStoreInput>;
export declare const OrderItemUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutStoreInput>;
export declare const OrderItemScalarWhereInputSchema: z.ZodType<Prisma.OrderItemScalarWhereInput>;
export declare const ProductVariantImageUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantImageUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantImageUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductVariantImageScalarWhereInputSchema: z.ZodType<Prisma.ProductVariantImageScalarWhereInput>;
export declare const ProductImageUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductImageUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductImageUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductImageScalarWhereInputSchema: z.ZodType<Prisma.ProductImageScalarWhereInput>;
export declare const ProductVariantAttributeUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantAttributeUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantAttributeUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductVariantAttributeScalarWhereInputSchema: z.ZodType<Prisma.ProductVariantAttributeScalarWhereInput>;
export declare const ProductVariantUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductVariantUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductVariantScalarWhereInputSchema: z.ZodType<Prisma.ProductVariantScalarWhereInput>;
export declare const ActivityLogUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ActivityLogUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ActivityLogUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductCategoryUpsertWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUpsertWithWhereUniqueWithoutStoreInput>;
export declare const ProductCategoryUpdateWithWhereUniqueWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithWhereUniqueWithoutStoreInput>;
export declare const ProductCategoryUpdateManyWithWhereWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUpdateManyWithWhereWithoutStoreInput>;
export declare const ProductCategoryScalarWhereInputSchema: z.ZodType<Prisma.ProductCategoryScalarWhereInput>;
export declare const StoreCreateWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreCreateWithoutAnalyticsInput>;
export declare const StoreUncheckedCreateWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutAnalyticsInput>;
export declare const StoreCreateOrConnectWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutAnalyticsInput>;
export declare const StoreUpsertWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutAnalyticsInput>;
export declare const StoreUpdateToOneWithWhereWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutAnalyticsInput>;
export declare const StoreUpdateWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutAnalyticsInput>;
export declare const StoreUncheckedUpdateWithoutAnalyticsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutAnalyticsInput>;
export declare const ProductCategoryCreateWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateWithoutCategoryProductsInput>;
export declare const ProductCategoryUncheckedCreateWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateWithoutCategoryProductsInput>;
export declare const ProductCategoryCreateOrConnectWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateOrConnectWithoutCategoryProductsInput>;
export declare const ProductCategoryCreateWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateWithoutSubCategoryProductsInput>;
export declare const ProductCategoryUncheckedCreateWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateWithoutSubCategoryProductsInput>;
export declare const ProductCategoryCreateOrConnectWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryCreateOrConnectWithoutSubCategoryProductsInput>;
export declare const StoreCreateWithoutProductsInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductsInput>;
export declare const StoreUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductsInput>;
export declare const StoreCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductsInput>;
export declare const DiscountCreateWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountCreateWithoutDiscountedProductsInput>;
export declare const DiscountUncheckedCreateWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutDiscountedProductsInput>;
export declare const DiscountCreateOrConnectWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutDiscountedProductsInput>;
export declare const ProductVariantCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantCreateWithoutProductInput>;
export declare const ProductVariantUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
export declare const ProductVariantCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutProductInput>;
export declare const ProductVariantCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantCreateManyProductInputEnvelope>;
export declare const ProductImageCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductImageCreateWithoutProductInput>;
export declare const ProductImageUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUncheckedCreateWithoutProductInput>;
export declare const ProductImageCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductImageCreateOrConnectWithoutProductInput>;
export declare const ProductImageCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductImageCreateManyProductInputEnvelope>;
export declare const ProductReviewCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewCreateWithoutProductInput>;
export declare const ProductReviewUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateWithoutProductInput>;
export declare const ProductReviewCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewCreateOrConnectWithoutProductInput>;
export declare const ProductReviewCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductReviewCreateManyProductInputEnvelope>;
export declare const ProductRatingCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateWithoutProductInput>;
export declare const ProductRatingUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutProductInput>;
export declare const ProductRatingCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutProductInput>;
export declare const ProductRatingCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductRatingCreateManyProductInputEnvelope>;
export declare const DiscountProductCreateWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductCreateWithoutProductInput>;
export declare const DiscountProductUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateWithoutProductInput>;
export declare const DiscountProductCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductCreateOrConnectWithoutProductInput>;
export declare const DiscountProductCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.DiscountProductCreateManyProductInputEnvelope>;
export declare const ProductCategoryUpsertWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpsertWithoutCategoryProductsInput>;
export declare const ProductCategoryUpdateToOneWithWhereWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpdateToOneWithWhereWithoutCategoryProductsInput>;
export declare const ProductCategoryUpdateWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithoutCategoryProductsInput>;
export declare const ProductCategoryUncheckedUpdateWithoutCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateWithoutCategoryProductsInput>;
export declare const ProductCategoryUpsertWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpsertWithoutSubCategoryProductsInput>;
export declare const ProductCategoryUpdateToOneWithWhereWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpdateToOneWithWhereWithoutSubCategoryProductsInput>;
export declare const ProductCategoryUpdateWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithoutSubCategoryProductsInput>;
export declare const ProductCategoryUncheckedUpdateWithoutSubCategoryProductsInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateWithoutSubCategoryProductsInput>;
export declare const StoreUpsertWithoutProductsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductsInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductsInput>;
export declare const StoreUpdateWithoutProductsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductsInput>;
export declare const StoreUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductsInput>;
export declare const DiscountUpsertWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountUpsertWithoutDiscountedProductsInput>;
export declare const DiscountUpdateToOneWithWhereWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutDiscountedProductsInput>;
export declare const DiscountUpdateWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountUpdateWithoutDiscountedProductsInput>;
export declare const DiscountUncheckedUpdateWithoutDiscountedProductsInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutDiscountedProductsInput>;
export declare const ProductVariantUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductVariantUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductVariantUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput>;
export declare const ProductImageUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductImageUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductImageUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUpdateManyWithWhereWithoutProductInput>;
export declare const ProductReviewUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductReviewUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductReviewUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput>;
export declare const ProductRatingUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductRatingUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductRatingUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutProductInput>;
export declare const DiscountProductUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUpsertWithWhereUniqueWithoutProductInput>;
export declare const DiscountProductUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithWhereUniqueWithoutProductInput>;
export declare const DiscountProductUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithWhereWithoutProductInput>;
export declare const StoreCreateWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductCategoriesInput>;
export declare const StoreUncheckedCreateWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductCategoriesInput>;
export declare const StoreCreateOrConnectWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductCategoriesInput>;
export declare const ProductCategoryCreateWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryCreateWithoutSubCategoriesInput>;
export declare const ProductCategoryUncheckedCreateWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateWithoutSubCategoriesInput>;
export declare const ProductCategoryCreateOrConnectWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryCreateOrConnectWithoutSubCategoriesInput>;
export declare const ProductCategoryCreateWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryCreateWithoutParentCategoryInput>;
export declare const ProductCategoryUncheckedCreateWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedCreateWithoutParentCategoryInput>;
export declare const ProductCategoryCreateOrConnectWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
export declare const ProductCategoryCreateManyParentCategoryInputEnvelopeSchema: z.ZodType<Prisma.ProductCategoryCreateManyParentCategoryInputEnvelope>;
export declare const ProductCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoryInput>;
export declare const ProductUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoryInput>;
export declare const ProductCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCategoryInput>;
export declare const ProductCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyCategoryInputEnvelope>;
export declare const ProductCreateWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductCreateWithoutSubCategoryInput>;
export declare const ProductUncheckedCreateWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSubCategoryInput>;
export declare const ProductCreateOrConnectWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSubCategoryInput>;
export declare const ProductCreateManySubCategoryInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManySubCategoryInputEnvelope>;
export declare const StoreUpsertWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductCategoriesInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductCategoriesInput>;
export declare const StoreUpdateWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductCategoriesInput>;
export declare const StoreUncheckedUpdateWithoutProductCategoriesInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductCategoriesInput>;
export declare const ProductCategoryUpsertWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryUpsertWithoutSubCategoriesInput>;
export declare const ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput>;
export declare const ProductCategoryUpdateWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithoutSubCategoriesInput>;
export declare const ProductCategoryUncheckedUpdateWithoutSubCategoriesInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateWithoutSubCategoriesInput>;
export declare const ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
export declare const ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
export declare const ProductCategoryUpdateManyWithWhereWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;
export declare const ProductUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput>;
export declare const ProductUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput>;
export declare const ProductUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCategoryInput>;
export declare const ProductUpsertWithWhereUniqueWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutSubCategoryInput>;
export declare const ProductUpdateWithWhereUniqueWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutSubCategoryInput>;
export declare const ProductUpdateManyWithWhereWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutSubCategoryInput>;
export declare const ProductCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateWithoutVariantsInput>;
export declare const ProductUncheckedCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutVariantsInput>;
export declare const ProductCreateOrConnectWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVariantsInput>;
export declare const ProductVariantAttributeCreateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateWithoutVariantInput>;
export declare const ProductVariantAttributeUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedCreateWithoutVariantInput>;
export declare const ProductVariantAttributeCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateOrConnectWithoutVariantInput>;
export declare const ProductVariantAttributeCreateManyVariantInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyVariantInputEnvelope>;
export declare const ProductVariantImageCreateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageCreateWithoutVariantInput>;
export declare const ProductVariantImageUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedCreateWithoutVariantInput>;
export declare const ProductVariantImageCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageCreateOrConnectWithoutVariantInput>;
export declare const ProductVariantImageCreateManyVariantInputEnvelopeSchema: z.ZodType<Prisma.ProductVariantImageCreateManyVariantInputEnvelope>;
export declare const StoreCreateWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductVariantsInput>;
export declare const StoreUncheckedCreateWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductVariantsInput>;
export declare const StoreCreateOrConnectWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductVariantsInput>;
export declare const OrderItemCreateWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutVariantInput>;
export declare const OrderItemUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutVariantInput>;
export declare const OrderItemCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutVariantInput>;
export declare const OrderItemCreateManyVariantInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyVariantInputEnvelope>;
export declare const ProductUpsertWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutVariantsInput>;
export declare const ProductUpdateToOneWithWhereWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutVariantsInput>;
export declare const ProductUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutVariantsInput>;
export declare const ProductUncheckedUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutVariantsInput>;
export declare const ProductVariantAttributeUpsertWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpsertWithWhereUniqueWithoutVariantInput>;
export declare const ProductVariantAttributeUpdateWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateWithWhereUniqueWithoutVariantInput>;
export declare const ProductVariantAttributeUpdateManyWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyWithWhereWithoutVariantInput>;
export declare const ProductVariantImageUpsertWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUpsertWithWhereUniqueWithoutVariantInput>;
export declare const ProductVariantImageUpdateWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateWithWhereUniqueWithoutVariantInput>;
export declare const ProductVariantImageUpdateManyWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyWithWhereWithoutVariantInput>;
export declare const StoreUpsertWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductVariantsInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductVariantsInput>;
export declare const StoreUpdateWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductVariantsInput>;
export declare const StoreUncheckedUpdateWithoutProductVariantsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductVariantsInput>;
export declare const OrderItemUpsertWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutVariantInput>;
export declare const OrderItemUpdateWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutVariantInput>;
export declare const OrderItemUpdateManyWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutVariantInput>;
export declare const ProductVariantCreateWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantCreateWithoutAttributesInput>;
export declare const ProductVariantUncheckedCreateWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutAttributesInput>;
export declare const ProductVariantCreateOrConnectWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutAttributesInput>;
export declare const StoreCreateWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductVariantAttributesInput>;
export declare const StoreUncheckedCreateWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductVariantAttributesInput>;
export declare const StoreCreateOrConnectWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductVariantAttributesInput>;
export declare const ProductVariantUpsertWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutAttributesInput>;
export declare const ProductVariantUpdateToOneWithWhereWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutAttributesInput>;
export declare const ProductVariantUpdateWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithoutAttributesInput>;
export declare const ProductVariantUncheckedUpdateWithoutAttributesInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutAttributesInput>;
export declare const StoreUpsertWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductVariantAttributesInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductVariantAttributesInput>;
export declare const StoreUpdateWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductVariantAttributesInput>;
export declare const StoreUncheckedUpdateWithoutProductVariantAttributesInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductVariantAttributesInput>;
export declare const ProductCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductCreateWithoutImagesInput>;
export declare const ProductUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutImagesInput>;
export declare const ProductCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutImagesInput>;
export declare const StoreCreateWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductImagesInput>;
export declare const StoreUncheckedCreateWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductImagesInput>;
export declare const StoreCreateOrConnectWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductImagesInput>;
export declare const ProductUpsertWithoutImagesInputSchema: z.ZodType<Prisma.ProductUpsertWithoutImagesInput>;
export declare const ProductUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutImagesInput>;
export declare const ProductUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutImagesInput>;
export declare const ProductUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutImagesInput>;
export declare const StoreUpsertWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductImagesInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductImagesInput>;
export declare const StoreUpdateWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductImagesInput>;
export declare const StoreUncheckedUpdateWithoutProductImagesInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductImagesInput>;
export declare const ProductVariantCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantCreateWithoutImagesInput>;
export declare const ProductVariantUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutImagesInput>;
export declare const ProductVariantCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutImagesInput>;
export declare const StoreCreateWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductVariantImagesInput>;
export declare const StoreUncheckedCreateWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductVariantImagesInput>;
export declare const StoreCreateOrConnectWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductVariantImagesInput>;
export declare const ProductVariantUpsertWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutImagesInput>;
export declare const ProductVariantUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutImagesInput>;
export declare const ProductVariantUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithoutImagesInput>;
export declare const ProductVariantUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutImagesInput>;
export declare const StoreUpsertWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductVariantImagesInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductVariantImagesInput>;
export declare const StoreUpdateWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductVariantImagesInput>;
export declare const StoreUncheckedUpdateWithoutProductVariantImagesInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductVariantImagesInput>;
export declare const OrderItemCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput>;
export declare const OrderItemUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
export declare const OrderItemCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput>;
export declare const OrderItemCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInputEnvelope>;
export declare const TransactionCreateWithoutOrderInputSchema: z.ZodType<Prisma.TransactionCreateWithoutOrderInput>;
export declare const TransactionUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutOrderInput>;
export declare const TransactionCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutOrderInput>;
export declare const TransactionCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyOrderInputEnvelope>;
export declare const StoreCreateWithoutOrdersInputSchema: z.ZodType<Prisma.StoreCreateWithoutOrdersInput>;
export declare const StoreUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutOrdersInput>;
export declare const StoreCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutOrdersInput>;
export declare const CustomerCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerCreateWithoutOrdersInput>;
export declare const CustomerUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutOrdersInput>;
export declare const CustomerCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutOrdersInput>;
export declare const DiscountCreateWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountCreateWithoutOrdersInput>;
export declare const DiscountUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutOrdersInput>;
export declare const DiscountCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutOrdersInput>;
export declare const OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
export declare const OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
export declare const OrderItemUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput>;
export declare const TransactionUpsertWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutOrderInput>;
export declare const TransactionUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutOrderInput>;
export declare const TransactionUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutOrderInput>;
export declare const StoreUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.StoreUpsertWithoutOrdersInput>;
export declare const StoreUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutOrdersInput>;
export declare const StoreUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.StoreUpdateWithoutOrdersInput>;
export declare const StoreUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutOrdersInput>;
export declare const CustomerUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutOrdersInput>;
export declare const CustomerUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutOrdersInput>;
export declare const CustomerUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutOrdersInput>;
export declare const CustomerUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutOrdersInput>;
export declare const DiscountUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountUpsertWithoutOrdersInput>;
export declare const DiscountUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutOrdersInput>;
export declare const DiscountUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountUpdateWithoutOrdersInput>;
export declare const DiscountUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutOrdersInput>;
export declare const StoreCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreCreateWithoutOrderItemsInput>;
export declare const StoreUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutOrderItemsInput>;
export declare const StoreCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutOrderItemsInput>;
export declare const OrderCreateWithoutItemsInputSchema: z.ZodType<Prisma.OrderCreateWithoutItemsInput>;
export declare const OrderUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput>;
export declare const OrderCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutItemsInput>;
export declare const ProductVariantCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantCreateWithoutOrderItemInput>;
export declare const ProductVariantUncheckedCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutOrderItemInput>;
export declare const ProductVariantCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutOrderItemInput>;
export declare const StoreUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutOrderItemsInput>;
export declare const StoreUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutOrderItemsInput>;
export declare const StoreUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutOrderItemsInput>;
export declare const StoreUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutOrderItemsInput>;
export declare const OrderUpsertWithoutItemsInputSchema: z.ZodType<Prisma.OrderUpsertWithoutItemsInput>;
export declare const OrderUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput>;
export declare const OrderUpdateWithoutItemsInputSchema: z.ZodType<Prisma.OrderUpdateWithoutItemsInput>;
export declare const OrderUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutItemsInput>;
export declare const ProductVariantUpsertWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutOrderItemInput>;
export declare const ProductVariantUpdateToOneWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutOrderItemInput>;
export declare const ProductVariantUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithoutOrderItemInput>;
export declare const ProductVariantUncheckedUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutOrderItemInput>;
export declare const StoreCreateWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductRatinsInput>;
export declare const StoreUncheckedCreateWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductRatinsInput>;
export declare const StoreCreateOrConnectWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductRatinsInput>;
export declare const ProductCreateWithoutRatingsInputSchema: z.ZodType<Prisma.ProductCreateWithoutRatingsInput>;
export declare const ProductUncheckedCreateWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutRatingsInput>;
export declare const ProductCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutRatingsInput>;
export declare const CustomerCreateWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerCreateWithoutRatingsInput>;
export declare const CustomerUncheckedCreateWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutRatingsInput>;
export declare const CustomerCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutRatingsInput>;
export declare const StoreUpsertWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductRatinsInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductRatinsInput>;
export declare const StoreUpdateWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductRatinsInput>;
export declare const StoreUncheckedUpdateWithoutProductRatinsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductRatinsInput>;
export declare const ProductUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutRatingsInput>;
export declare const ProductUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRatingsInput>;
export declare const ProductUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutRatingsInput>;
export declare const ProductUncheckedUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutRatingsInput>;
export declare const CustomerUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutRatingsInput>;
export declare const CustomerUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutRatingsInput>;
export declare const CustomerUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutRatingsInput>;
export declare const CustomerUncheckedUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutRatingsInput>;
export declare const ProductReviewImageCreateWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageCreateWithoutReviewInput>;
export declare const ProductReviewImageUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedCreateWithoutReviewInput>;
export declare const ProductReviewImageCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageCreateOrConnectWithoutReviewInput>;
export declare const ProductReviewImageCreateManyReviewInputEnvelopeSchema: z.ZodType<Prisma.ProductReviewImageCreateManyReviewInputEnvelope>;
export declare const StoreCreateWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductReviewsInput>;
export declare const StoreUncheckedCreateWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductReviewsInput>;
export declare const StoreCreateOrConnectWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductReviewsInput>;
export declare const ProductCreateWithoutReviewsInputSchema: z.ZodType<Prisma.ProductCreateWithoutReviewsInput>;
export declare const ProductUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutReviewsInput>;
export declare const ProductCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewsInput>;
export declare const CustomerCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerCreateWithoutReviewsInput>;
export declare const CustomerUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutReviewsInput>;
export declare const CustomerCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutReviewsInput>;
export declare const ProductReviewImageUpsertWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUpsertWithWhereUniqueWithoutReviewInput>;
export declare const ProductReviewImageUpdateWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateWithWhereUniqueWithoutReviewInput>;
export declare const ProductReviewImageUpdateManyWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyWithWhereWithoutReviewInput>;
export declare const StoreUpsertWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductReviewsInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductReviewsInput>;
export declare const StoreUpdateWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductReviewsInput>;
export declare const StoreUncheckedUpdateWithoutProductReviewsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductReviewsInput>;
export declare const ProductUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutReviewsInput>;
export declare const ProductUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutReviewsInput>;
export declare const ProductUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutReviewsInput>;
export declare const ProductUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutReviewsInput>;
export declare const CustomerUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutReviewsInput>;
export declare const CustomerUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReviewsInput>;
export declare const CustomerUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutReviewsInput>;
export declare const CustomerUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutReviewsInput>;
export declare const ProductReviewCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewCreateWithoutImagesInput>;
export declare const ProductReviewUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewUncheckedCreateWithoutImagesInput>;
export declare const ProductReviewCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewCreateOrConnectWithoutImagesInput>;
export declare const StoreCreateWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreCreateWithoutProductReviewImagesInput>;
export declare const StoreUncheckedCreateWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutProductReviewImagesInput>;
export declare const StoreCreateOrConnectWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutProductReviewImagesInput>;
export declare const ProductReviewUpsertWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewUpsertWithoutImagesInput>;
export declare const ProductReviewUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewUpdateToOneWithWhereWithoutImagesInput>;
export declare const ProductReviewUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithoutImagesInput>;
export declare const ProductReviewUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateWithoutImagesInput>;
export declare const StoreUpsertWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreUpsertWithoutProductReviewImagesInput>;
export declare const StoreUpdateToOneWithWhereWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutProductReviewImagesInput>;
export declare const StoreUpdateWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreUpdateWithoutProductReviewImagesInput>;
export declare const StoreUncheckedUpdateWithoutProductReviewImagesInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutProductReviewImagesInput>;
export declare const StoreCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreCreateWithoutTransactionsInput>;
export declare const StoreUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutTransactionsInput>;
export declare const StoreCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutTransactionsInput>;
export declare const OrderCreateWithoutTransactionInputSchema: z.ZodType<Prisma.OrderCreateWithoutTransactionInput>;
export declare const OrderUncheckedCreateWithoutTransactionInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutTransactionInput>;
export declare const OrderCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutTransactionInput>;
export declare const StoreUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutTransactionsInput>;
export declare const StoreUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutTransactionsInput>;
export declare const StoreUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutTransactionsInput>;
export declare const StoreUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutTransactionsInput>;
export declare const OrderUpsertWithoutTransactionInputSchema: z.ZodType<Prisma.OrderUpsertWithoutTransactionInput>;
export declare const OrderUpdateToOneWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutTransactionInput>;
export declare const OrderUpdateWithoutTransactionInputSchema: z.ZodType<Prisma.OrderUpdateWithoutTransactionInput>;
export declare const OrderUncheckedUpdateWithoutTransactionInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutTransactionInput>;
export declare const StoreCreateWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreCreateWithoutDiscountsInput>;
export declare const StoreUncheckedCreateWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutDiscountsInput>;
export declare const StoreCreateOrConnectWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutDiscountsInput>;
export declare const DiscountProductCreateWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductCreateWithoutDiscountInput>;
export declare const DiscountProductUncheckedCreateWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUncheckedCreateWithoutDiscountInput>;
export declare const DiscountProductCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductCreateOrConnectWithoutDiscountInput>;
export declare const DiscountProductCreateManyDiscountInputEnvelopeSchema: z.ZodType<Prisma.DiscountProductCreateManyDiscountInputEnvelope>;
export declare const ProductCreateWithoutDiscountInputSchema: z.ZodType<Prisma.ProductCreateWithoutDiscountInput>;
export declare const ProductUncheckedCreateWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutDiscountInput>;
export declare const ProductCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDiscountInput>;
export declare const ProductCreateManyDiscountInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyDiscountInputEnvelope>;
export declare const OrderCreateWithoutDiscountInputSchema: z.ZodType<Prisma.OrderCreateWithoutDiscountInput>;
export declare const OrderUncheckedCreateWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutDiscountInput>;
export declare const OrderCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutDiscountInput>;
export declare const OrderCreateManyDiscountInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyDiscountInputEnvelope>;
export declare const StoreUpsertWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutDiscountsInput>;
export declare const StoreUpdateToOneWithWhereWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutDiscountsInput>;
export declare const StoreUpdateWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutDiscountsInput>;
export declare const StoreUncheckedUpdateWithoutDiscountsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutDiscountsInput>;
export declare const DiscountProductUpsertWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUpsertWithWhereUniqueWithoutDiscountInput>;
export declare const DiscountProductUpdateWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithWhereUniqueWithoutDiscountInput>;
export declare const DiscountProductUpdateManyWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUpdateManyWithWhereWithoutDiscountInput>;
export declare const ProductUpsertWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDiscountInput>;
export declare const ProductUpdateWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDiscountInput>;
export declare const ProductUpdateManyWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDiscountInput>;
export declare const OrderUpsertWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutDiscountInput>;
export declare const OrderUpdateWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutDiscountInput>;
export declare const OrderUpdateManyWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutDiscountInput>;
export declare const StoreCreateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreCreateWithoutDiscountProductsInput>;
export declare const StoreUncheckedCreateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutDiscountProductsInput>;
export declare const StoreCreateOrConnectWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutDiscountProductsInput>;
export declare const DiscountCreateWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountCreateWithoutApplicableProductsInput>;
export declare const DiscountUncheckedCreateWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutApplicableProductsInput>;
export declare const DiscountCreateOrConnectWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutApplicableProductsInput>;
export declare const ProductCreateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductCreateWithoutDiscountProductsInput>;
export declare const ProductUncheckedCreateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutDiscountProductsInput>;
export declare const ProductCreateOrConnectWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDiscountProductsInput>;
export declare const StoreUpsertWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreUpsertWithoutDiscountProductsInput>;
export declare const StoreUpdateToOneWithWhereWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutDiscountProductsInput>;
export declare const StoreUpdateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreUpdateWithoutDiscountProductsInput>;
export declare const StoreUncheckedUpdateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutDiscountProductsInput>;
export declare const DiscountUpsertWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountUpsertWithoutApplicableProductsInput>;
export declare const DiscountUpdateToOneWithWhereWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutApplicableProductsInput>;
export declare const DiscountUpdateWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountUpdateWithoutApplicableProductsInput>;
export declare const DiscountUncheckedUpdateWithoutApplicableProductsInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutApplicableProductsInput>;
export declare const ProductUpsertWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutDiscountProductsInput>;
export declare const ProductUpdateToOneWithWhereWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutDiscountProductsInput>;
export declare const ProductUpdateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutDiscountProductsInput>;
export declare const ProductUncheckedUpdateWithoutDiscountProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountProductsInput>;
export declare const StoreCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreCreateWithoutSubscriptionInput>;
export declare const StoreUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutSubscriptionInput>;
export declare const StoreCreateOrConnectWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutSubscriptionInput>;
export declare const StoreUpsertWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreUpsertWithoutSubscriptionInput>;
export declare const StoreUpdateToOneWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutSubscriptionInput>;
export declare const StoreUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreUpdateWithoutSubscriptionInput>;
export declare const StoreUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutSubscriptionInput>;
export declare const ActivityLogCreateManyUserInputSchema: z.ZodType<Prisma.ActivityLogCreateManyUserInput>;
export declare const ActivityLogUpdateWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUpdateWithoutUserInput>;
export declare const ActivityLogUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateWithoutUserInput>;
export declare const ActivityLogUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateManyWithoutUserInput>;
export declare const OrderCreateManyCustomerInputSchema: z.ZodType<Prisma.OrderCreateManyCustomerInput>;
export declare const ProductRatingCreateManyCustomerInputSchema: z.ZodType<Prisma.ProductRatingCreateManyCustomerInput>;
export declare const ProductReviewCreateManyCustomerInputSchema: z.ZodType<Prisma.ProductReviewCreateManyCustomerInput>;
export declare const OrderUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUpdateWithoutCustomerInput>;
export declare const OrderUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
export declare const OrderUncheckedUpdateManyWithoutCustomerInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutCustomerInput>;
export declare const ProductRatingUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithoutCustomerInput>;
export declare const ProductRatingUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateWithoutCustomerInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutCustomerInput>;
export declare const ProductReviewUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithoutCustomerInput>;
export declare const ProductReviewUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateWithoutCustomerInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutCustomerInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutCustomerInput>;
export declare const WalletTransactionCreateManyWalletInputSchema: z.ZodType<Prisma.WalletTransactionCreateManyWalletInput>;
export declare const WalletTransactionUpdateWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUpdateWithoutWalletInput>;
export declare const WalletTransactionUncheckedUpdateWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateWithoutWalletInput>;
export declare const WalletTransactionUncheckedUpdateManyWithoutWalletInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateManyWithoutWalletInput>;
export declare const ProductCreateManyStoreInputSchema: z.ZodType<Prisma.ProductCreateManyStoreInput>;
export declare const OrderCreateManyStoreInputSchema: z.ZodType<Prisma.OrderCreateManyStoreInput>;
export declare const WalletTransactionCreateManyStoreInputSchema: z.ZodType<Prisma.WalletTransactionCreateManyStoreInput>;
export declare const DiscountProductCreateManyStoreInputSchema: z.ZodType<Prisma.DiscountProductCreateManyStoreInput>;
export declare const DiscountCreateManyStoreInputSchema: z.ZodType<Prisma.DiscountCreateManyStoreInput>;
export declare const ProductReviewImageCreateManyStoreInputSchema: z.ZodType<Prisma.ProductReviewImageCreateManyStoreInput>;
export declare const TransactionCreateManyStoreInputSchema: z.ZodType<Prisma.TransactionCreateManyStoreInput>;
export declare const ProductReviewCreateManyStoreInputSchema: z.ZodType<Prisma.ProductReviewCreateManyStoreInput>;
export declare const ProductRatingCreateManyStoreInputSchema: z.ZodType<Prisma.ProductRatingCreateManyStoreInput>;
export declare const OrderItemCreateManyStoreInputSchema: z.ZodType<Prisma.OrderItemCreateManyStoreInput>;
export declare const ProductVariantImageCreateManyStoreInputSchema: z.ZodType<Prisma.ProductVariantImageCreateManyStoreInput>;
export declare const ProductImageCreateManyStoreInputSchema: z.ZodType<Prisma.ProductImageCreateManyStoreInput>;
export declare const ProductVariantAttributeCreateManyStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyStoreInput>;
export declare const ProductVariantCreateManyStoreInputSchema: z.ZodType<Prisma.ProductVariantCreateManyStoreInput>;
export declare const ActivityLogCreateManyStoreInputSchema: z.ZodType<Prisma.ActivityLogCreateManyStoreInput>;
export declare const ProductCategoryCreateManyStoreInputSchema: z.ZodType<Prisma.ProductCategoryCreateManyStoreInput>;
export declare const ProductUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductUpdateWithoutStoreInput>;
export declare const ProductUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutStoreInput>;
export declare const ProductUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutStoreInput>;
export declare const OrderUpdateWithoutStoreInputSchema: z.ZodType<Prisma.OrderUpdateWithoutStoreInput>;
export declare const OrderUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutStoreInput>;
export declare const OrderUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutStoreInput>;
export declare const WalletTransactionUpdateWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUpdateWithoutStoreInput>;
export declare const WalletTransactionUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateWithoutStoreInput>;
export declare const WalletTransactionUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.WalletTransactionUncheckedUpdateManyWithoutStoreInput>;
export declare const DiscountProductUpdateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithoutStoreInput>;
export declare const DiscountProductUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateWithoutStoreInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutStoreInput>;
export declare const DiscountUpdateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUpdateWithoutStoreInput>;
export declare const DiscountUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutStoreInput>;
export declare const DiscountUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductReviewImageUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateWithoutStoreInput>;
export declare const ProductReviewImageUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateWithoutStoreInput>;
export declare const ProductReviewImageUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateManyWithoutStoreInput>;
export declare const TransactionUpdateWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutStoreInput>;
export declare const TransactionUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutStoreInput>;
export declare const TransactionUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductReviewUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithoutStoreInput>;
export declare const ProductReviewUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateWithoutStoreInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductRatingUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithoutStoreInput>;
export declare const ProductRatingUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateWithoutStoreInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutStoreInput>;
export declare const OrderItemUpdateWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutStoreInput>;
export declare const OrderItemUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutStoreInput>;
export declare const OrderItemUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductVariantImageUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateWithoutStoreInput>;
export declare const ProductVariantImageUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateWithoutStoreInput>;
export declare const ProductVariantImageUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductImageUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUpdateWithoutStoreInput>;
export declare const ProductImageUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateWithoutStoreInput>;
export declare const ProductImageUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductVariantAttributeUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateWithoutStoreInput>;
export declare const ProductVariantAttributeUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateWithoutStoreInput>;
export declare const ProductVariantAttributeUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductVariantUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithoutStoreInput>;
export declare const ProductVariantUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutStoreInput>;
export declare const ProductVariantUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateManyWithoutStoreInput>;
export declare const ActivityLogUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUpdateWithoutStoreInput>;
export declare const ActivityLogUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateWithoutStoreInput>;
export declare const ActivityLogUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ActivityLogUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductCategoryUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithoutStoreInput>;
export declare const ProductCategoryUncheckedUpdateWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateWithoutStoreInput>;
export declare const ProductCategoryUncheckedUpdateManyWithoutStoreInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateManyWithoutStoreInput>;
export declare const ProductVariantCreateManyProductInputSchema: z.ZodType<Prisma.ProductVariantCreateManyProductInput>;
export declare const ProductImageCreateManyProductInputSchema: z.ZodType<Prisma.ProductImageCreateManyProductInput>;
export declare const ProductReviewCreateManyProductInputSchema: z.ZodType<Prisma.ProductReviewCreateManyProductInput>;
export declare const ProductRatingCreateManyProductInputSchema: z.ZodType<Prisma.ProductRatingCreateManyProductInput>;
export declare const DiscountProductCreateManyProductInputSchema: z.ZodType<Prisma.DiscountProductCreateManyProductInput>;
export declare const ProductVariantUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUpdateWithoutProductInput>;
export declare const ProductVariantUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
export declare const ProductVariantUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateManyWithoutProductInput>;
export declare const ProductImageUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUpdateWithoutProductInput>;
export declare const ProductImageUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateWithoutProductInput>;
export declare const ProductImageUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductImageUncheckedUpdateManyWithoutProductInput>;
export declare const ProductReviewUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUpdateWithoutProductInput>;
export declare const ProductReviewUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateWithoutProductInput>;
export declare const ProductReviewUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductReviewUncheckedUpdateManyWithoutProductInput>;
export declare const ProductRatingUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUpdateWithoutProductInput>;
export declare const ProductRatingUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateWithoutProductInput>;
export declare const ProductRatingUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutProductInput>;
export declare const DiscountProductUpdateWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithoutProductInput>;
export declare const DiscountProductUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateWithoutProductInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutProductInput>;
export declare const ProductCategoryCreateManyParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryCreateManyParentCategoryInput>;
export declare const ProductCreateManyCategoryInputSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput>;
export declare const ProductCreateManySubCategoryInputSchema: z.ZodType<Prisma.ProductCreateManySubCategoryInput>;
export declare const ProductCategoryUpdateWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUpdateWithoutParentCategoryInput>;
export declare const ProductCategoryUncheckedUpdateWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateWithoutParentCategoryInput>;
export declare const ProductCategoryUncheckedUpdateManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput>;
export declare const ProductUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoryInput>;
export declare const ProductUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
export declare const ProductUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
export declare const ProductUpdateWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithoutSubCategoryInput>;
export declare const ProductUncheckedUpdateWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutSubCategoryInput>;
export declare const ProductUncheckedUpdateManyWithoutSubCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutSubCategoryInput>;
export declare const ProductVariantAttributeCreateManyVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyVariantInput>;
export declare const ProductVariantImageCreateManyVariantInputSchema: z.ZodType<Prisma.ProductVariantImageCreateManyVariantInput>;
export declare const OrderItemCreateManyVariantInputSchema: z.ZodType<Prisma.OrderItemCreateManyVariantInput>;
export declare const ProductVariantAttributeUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateWithoutVariantInput>;
export declare const ProductVariantAttributeUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateWithoutVariantInput>;
export declare const ProductVariantAttributeUncheckedUpdateManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantAttributeUncheckedUpdateManyWithoutVariantInput>;
export declare const ProductVariantImageUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUpdateWithoutVariantInput>;
export declare const ProductVariantImageUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateWithoutVariantInput>;
export declare const ProductVariantImageUncheckedUpdateManyWithoutVariantInputSchema: z.ZodType<Prisma.ProductVariantImageUncheckedUpdateManyWithoutVariantInput>;
export declare const OrderItemUpdateWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutVariantInput>;
export declare const OrderItemUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutVariantInput>;
export declare const OrderItemUncheckedUpdateManyWithoutVariantInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutVariantInput>;
export declare const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput>;
export declare const TransactionCreateManyOrderInputSchema: z.ZodType<Prisma.TransactionCreateManyOrderInput>;
export declare const OrderItemUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput>;
export declare const OrderItemUncheckedUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutOrderInput>;
export declare const OrderItemUncheckedUpdateManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput>;
export declare const TransactionUpdateWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutOrderInput>;
export declare const TransactionUncheckedUpdateWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutOrderInput>;
export declare const TransactionUncheckedUpdateManyWithoutOrderInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutOrderInput>;
export declare const ProductReviewImageCreateManyReviewInputSchema: z.ZodType<Prisma.ProductReviewImageCreateManyReviewInput>;
export declare const ProductReviewImageUpdateWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUpdateWithoutReviewInput>;
export declare const ProductReviewImageUncheckedUpdateWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateWithoutReviewInput>;
export declare const ProductReviewImageUncheckedUpdateManyWithoutReviewInputSchema: z.ZodType<Prisma.ProductReviewImageUncheckedUpdateManyWithoutReviewInput>;
export declare const DiscountProductCreateManyDiscountInputSchema: z.ZodType<Prisma.DiscountProductCreateManyDiscountInput>;
export declare const ProductCreateManyDiscountInputSchema: z.ZodType<Prisma.ProductCreateManyDiscountInput>;
export declare const OrderCreateManyDiscountInputSchema: z.ZodType<Prisma.OrderCreateManyDiscountInput>;
export declare const DiscountProductUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUpdateWithoutDiscountInput>;
export declare const DiscountProductUncheckedUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateWithoutDiscountInput>;
export declare const DiscountProductUncheckedUpdateManyWithoutDiscountInputSchema: z.ZodType<Prisma.DiscountProductUncheckedUpdateManyWithoutDiscountInput>;
export declare const ProductUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUpdateWithoutDiscountInput>;
export declare const ProductUncheckedUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountInput>;
export declare const ProductUncheckedUpdateManyWithoutDiscountInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDiscountInput>;
export declare const OrderUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUpdateWithoutDiscountInput>;
export declare const OrderUncheckedUpdateWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutDiscountInput>;
export declare const OrderUncheckedUpdateManyWithoutDiscountInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutDiscountInput>;
export declare const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs>;
export declare const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs>;
export declare const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs>;
export declare const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs>;
export declare const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs>;
export declare const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs>;
export declare const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs>;
export declare const StoreOwnerFindFirstArgsSchema: z.ZodType<Prisma.StoreOwnerFindFirstArgs>;
export declare const StoreOwnerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoreOwnerFindFirstOrThrowArgs>;
export declare const StoreOwnerFindManyArgsSchema: z.ZodType<Prisma.StoreOwnerFindManyArgs>;
export declare const StoreOwnerAggregateArgsSchema: z.ZodType<Prisma.StoreOwnerAggregateArgs>;
export declare const StoreOwnerGroupByArgsSchema: z.ZodType<Prisma.StoreOwnerGroupByArgs>;
export declare const StoreOwnerFindUniqueArgsSchema: z.ZodType<Prisma.StoreOwnerFindUniqueArgs>;
export declare const StoreOwnerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoreOwnerFindUniqueOrThrowArgs>;
export declare const AdminFindFirstArgsSchema: z.ZodType<Prisma.AdminFindFirstArgs>;
export declare const AdminFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdminFindFirstOrThrowArgs>;
export declare const AdminFindManyArgsSchema: z.ZodType<Prisma.AdminFindManyArgs>;
export declare const AdminAggregateArgsSchema: z.ZodType<Prisma.AdminAggregateArgs>;
export declare const AdminGroupByArgsSchema: z.ZodType<Prisma.AdminGroupByArgs>;
export declare const AdminFindUniqueArgsSchema: z.ZodType<Prisma.AdminFindUniqueArgs>;
export declare const AdminFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdminFindUniqueOrThrowArgs>;
export declare const CustomerFindFirstArgsSchema: z.ZodType<Prisma.CustomerFindFirstArgs>;
export declare const CustomerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CustomerFindFirstOrThrowArgs>;
export declare const CustomerFindManyArgsSchema: z.ZodType<Prisma.CustomerFindManyArgs>;
export declare const CustomerAggregateArgsSchema: z.ZodType<Prisma.CustomerAggregateArgs>;
export declare const CustomerGroupByArgsSchema: z.ZodType<Prisma.CustomerGroupByArgs>;
export declare const CustomerFindUniqueArgsSchema: z.ZodType<Prisma.CustomerFindUniqueArgs>;
export declare const CustomerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CustomerFindUniqueOrThrowArgs>;
export declare const ActivityLogFindFirstArgsSchema: z.ZodType<Prisma.ActivityLogFindFirstArgs>;
export declare const ActivityLogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ActivityLogFindFirstOrThrowArgs>;
export declare const ActivityLogFindManyArgsSchema: z.ZodType<Prisma.ActivityLogFindManyArgs>;
export declare const ActivityLogAggregateArgsSchema: z.ZodType<Prisma.ActivityLogAggregateArgs>;
export declare const ActivityLogGroupByArgsSchema: z.ZodType<Prisma.ActivityLogGroupByArgs>;
export declare const ActivityLogFindUniqueArgsSchema: z.ZodType<Prisma.ActivityLogFindUniqueArgs>;
export declare const ActivityLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ActivityLogFindUniqueOrThrowArgs>;
export declare const WalletFindFirstArgsSchema: z.ZodType<Prisma.WalletFindFirstArgs>;
export declare const WalletFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WalletFindFirstOrThrowArgs>;
export declare const WalletFindManyArgsSchema: z.ZodType<Prisma.WalletFindManyArgs>;
export declare const WalletAggregateArgsSchema: z.ZodType<Prisma.WalletAggregateArgs>;
export declare const WalletGroupByArgsSchema: z.ZodType<Prisma.WalletGroupByArgs>;
export declare const WalletFindUniqueArgsSchema: z.ZodType<Prisma.WalletFindUniqueArgs>;
export declare const WalletFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WalletFindUniqueOrThrowArgs>;
export declare const WalletTransactionFindFirstArgsSchema: z.ZodType<Prisma.WalletTransactionFindFirstArgs>;
export declare const WalletTransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WalletTransactionFindFirstOrThrowArgs>;
export declare const WalletTransactionFindManyArgsSchema: z.ZodType<Prisma.WalletTransactionFindManyArgs>;
export declare const WalletTransactionAggregateArgsSchema: z.ZodType<Prisma.WalletTransactionAggregateArgs>;
export declare const WalletTransactionGroupByArgsSchema: z.ZodType<Prisma.WalletTransactionGroupByArgs>;
export declare const WalletTransactionFindUniqueArgsSchema: z.ZodType<Prisma.WalletTransactionFindUniqueArgs>;
export declare const WalletTransactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WalletTransactionFindUniqueOrThrowArgs>;
export declare const StoreFindFirstArgsSchema: z.ZodType<Prisma.StoreFindFirstArgs>;
export declare const StoreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoreFindFirstOrThrowArgs>;
export declare const StoreFindManyArgsSchema: z.ZodType<Prisma.StoreFindManyArgs>;
export declare const StoreAggregateArgsSchema: z.ZodType<Prisma.StoreAggregateArgs>;
export declare const StoreGroupByArgsSchema: z.ZodType<Prisma.StoreGroupByArgs>;
export declare const StoreFindUniqueArgsSchema: z.ZodType<Prisma.StoreFindUniqueArgs>;
export declare const StoreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoreFindUniqueOrThrowArgs>;
export declare const StoreAnalyticsFindFirstArgsSchema: z.ZodType<Prisma.StoreAnalyticsFindFirstArgs>;
export declare const StoreAnalyticsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoreAnalyticsFindFirstOrThrowArgs>;
export declare const StoreAnalyticsFindManyArgsSchema: z.ZodType<Prisma.StoreAnalyticsFindManyArgs>;
export declare const StoreAnalyticsAggregateArgsSchema: z.ZodType<Prisma.StoreAnalyticsAggregateArgs>;
export declare const StoreAnalyticsGroupByArgsSchema: z.ZodType<Prisma.StoreAnalyticsGroupByArgs>;
export declare const StoreAnalyticsFindUniqueArgsSchema: z.ZodType<Prisma.StoreAnalyticsFindUniqueArgs>;
export declare const StoreAnalyticsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoreAnalyticsFindUniqueOrThrowArgs>;
export declare const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs>;
export declare const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs>;
export declare const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs>;
export declare const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs>;
export declare const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs>;
export declare const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs>;
export declare const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs>;
export declare const ProductCategoryFindFirstArgsSchema: z.ZodType<Prisma.ProductCategoryFindFirstArgs>;
export declare const ProductCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductCategoryFindFirstOrThrowArgs>;
export declare const ProductCategoryFindManyArgsSchema: z.ZodType<Prisma.ProductCategoryFindManyArgs>;
export declare const ProductCategoryAggregateArgsSchema: z.ZodType<Prisma.ProductCategoryAggregateArgs>;
export declare const ProductCategoryGroupByArgsSchema: z.ZodType<Prisma.ProductCategoryGroupByArgs>;
export declare const ProductCategoryFindUniqueArgsSchema: z.ZodType<Prisma.ProductCategoryFindUniqueArgs>;
export declare const ProductCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductCategoryFindUniqueOrThrowArgs>;
export declare const ProductVariantFindFirstArgsSchema: z.ZodType<Prisma.ProductVariantFindFirstArgs>;
export declare const ProductVariantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantFindFirstOrThrowArgs>;
export declare const ProductVariantFindManyArgsSchema: z.ZodType<Prisma.ProductVariantFindManyArgs>;
export declare const ProductVariantAggregateArgsSchema: z.ZodType<Prisma.ProductVariantAggregateArgs>;
export declare const ProductVariantGroupByArgsSchema: z.ZodType<Prisma.ProductVariantGroupByArgs>;
export declare const ProductVariantFindUniqueArgsSchema: z.ZodType<Prisma.ProductVariantFindUniqueArgs>;
export declare const ProductVariantFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantFindUniqueOrThrowArgs>;
export declare const ProductVariantAttributeFindFirstArgsSchema: z.ZodType<Prisma.ProductVariantAttributeFindFirstArgs>;
export declare const ProductVariantAttributeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantAttributeFindFirstOrThrowArgs>;
export declare const ProductVariantAttributeFindManyArgsSchema: z.ZodType<Prisma.ProductVariantAttributeFindManyArgs>;
export declare const ProductVariantAttributeAggregateArgsSchema: z.ZodType<Prisma.ProductVariantAttributeAggregateArgs>;
export declare const ProductVariantAttributeGroupByArgsSchema: z.ZodType<Prisma.ProductVariantAttributeGroupByArgs>;
export declare const ProductVariantAttributeFindUniqueArgsSchema: z.ZodType<Prisma.ProductVariantAttributeFindUniqueArgs>;
export declare const ProductVariantAttributeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantAttributeFindUniqueOrThrowArgs>;
export declare const ProductImageFindFirstArgsSchema: z.ZodType<Prisma.ProductImageFindFirstArgs>;
export declare const ProductImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductImageFindFirstOrThrowArgs>;
export declare const ProductImageFindManyArgsSchema: z.ZodType<Prisma.ProductImageFindManyArgs>;
export declare const ProductImageAggregateArgsSchema: z.ZodType<Prisma.ProductImageAggregateArgs>;
export declare const ProductImageGroupByArgsSchema: z.ZodType<Prisma.ProductImageGroupByArgs>;
export declare const ProductImageFindUniqueArgsSchema: z.ZodType<Prisma.ProductImageFindUniqueArgs>;
export declare const ProductImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductImageFindUniqueOrThrowArgs>;
export declare const ProductVariantImageFindFirstArgsSchema: z.ZodType<Prisma.ProductVariantImageFindFirstArgs>;
export declare const ProductVariantImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantImageFindFirstOrThrowArgs>;
export declare const ProductVariantImageFindManyArgsSchema: z.ZodType<Prisma.ProductVariantImageFindManyArgs>;
export declare const ProductVariantImageAggregateArgsSchema: z.ZodType<Prisma.ProductVariantImageAggregateArgs>;
export declare const ProductVariantImageGroupByArgsSchema: z.ZodType<Prisma.ProductVariantImageGroupByArgs>;
export declare const ProductVariantImageFindUniqueArgsSchema: z.ZodType<Prisma.ProductVariantImageFindUniqueArgs>;
export declare const ProductVariantImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductVariantImageFindUniqueOrThrowArgs>;
export declare const OrderFindFirstArgsSchema: z.ZodType<Prisma.OrderFindFirstArgs>;
export declare const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs>;
export declare const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs>;
export declare const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs>;
export declare const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs>;
export declare const OrderFindUniqueArgsSchema: z.ZodType<Prisma.OrderFindUniqueArgs>;
export declare const OrderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs>;
export declare const OrderItemFindFirstArgsSchema: z.ZodType<Prisma.OrderItemFindFirstArgs>;
export declare const OrderItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindFirstOrThrowArgs>;
export declare const OrderItemFindManyArgsSchema: z.ZodType<Prisma.OrderItemFindManyArgs>;
export declare const OrderItemAggregateArgsSchema: z.ZodType<Prisma.OrderItemAggregateArgs>;
export declare const OrderItemGroupByArgsSchema: z.ZodType<Prisma.OrderItemGroupByArgs>;
export declare const OrderItemFindUniqueArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs>;
export declare const OrderItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueOrThrowArgs>;
export declare const ProductRatingFindFirstArgsSchema: z.ZodType<Prisma.ProductRatingFindFirstArgs>;
export declare const ProductRatingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductRatingFindFirstOrThrowArgs>;
export declare const ProductRatingFindManyArgsSchema: z.ZodType<Prisma.ProductRatingFindManyArgs>;
export declare const ProductRatingAggregateArgsSchema: z.ZodType<Prisma.ProductRatingAggregateArgs>;
export declare const ProductRatingGroupByArgsSchema: z.ZodType<Prisma.ProductRatingGroupByArgs>;
export declare const ProductRatingFindUniqueArgsSchema: z.ZodType<Prisma.ProductRatingFindUniqueArgs>;
export declare const ProductRatingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductRatingFindUniqueOrThrowArgs>;
export declare const ProductReviewFindFirstArgsSchema: z.ZodType<Prisma.ProductReviewFindFirstArgs>;
export declare const ProductReviewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductReviewFindFirstOrThrowArgs>;
export declare const ProductReviewFindManyArgsSchema: z.ZodType<Prisma.ProductReviewFindManyArgs>;
export declare const ProductReviewAggregateArgsSchema: z.ZodType<Prisma.ProductReviewAggregateArgs>;
export declare const ProductReviewGroupByArgsSchema: z.ZodType<Prisma.ProductReviewGroupByArgs>;
export declare const ProductReviewFindUniqueArgsSchema: z.ZodType<Prisma.ProductReviewFindUniqueArgs>;
export declare const ProductReviewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductReviewFindUniqueOrThrowArgs>;
export declare const ProductReviewImageFindFirstArgsSchema: z.ZodType<Prisma.ProductReviewImageFindFirstArgs>;
export declare const ProductReviewImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductReviewImageFindFirstOrThrowArgs>;
export declare const ProductReviewImageFindManyArgsSchema: z.ZodType<Prisma.ProductReviewImageFindManyArgs>;
export declare const ProductReviewImageAggregateArgsSchema: z.ZodType<Prisma.ProductReviewImageAggregateArgs>;
export declare const ProductReviewImageGroupByArgsSchema: z.ZodType<Prisma.ProductReviewImageGroupByArgs>;
export declare const ProductReviewImageFindUniqueArgsSchema: z.ZodType<Prisma.ProductReviewImageFindUniqueArgs>;
export declare const ProductReviewImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductReviewImageFindUniqueOrThrowArgs>;
export declare const TransactionFindFirstArgsSchema: z.ZodType<Prisma.TransactionFindFirstArgs>;
export declare const TransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TransactionFindFirstOrThrowArgs>;
export declare const TransactionFindManyArgsSchema: z.ZodType<Prisma.TransactionFindManyArgs>;
export declare const TransactionAggregateArgsSchema: z.ZodType<Prisma.TransactionAggregateArgs>;
export declare const TransactionGroupByArgsSchema: z.ZodType<Prisma.TransactionGroupByArgs>;
export declare const TransactionFindUniqueArgsSchema: z.ZodType<Prisma.TransactionFindUniqueArgs>;
export declare const TransactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TransactionFindUniqueOrThrowArgs>;
export declare const DiscountFindFirstArgsSchema: z.ZodType<Prisma.DiscountFindFirstArgs>;
export declare const DiscountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DiscountFindFirstOrThrowArgs>;
export declare const DiscountFindManyArgsSchema: z.ZodType<Prisma.DiscountFindManyArgs>;
export declare const DiscountAggregateArgsSchema: z.ZodType<Prisma.DiscountAggregateArgs>;
export declare const DiscountGroupByArgsSchema: z.ZodType<Prisma.DiscountGroupByArgs>;
export declare const DiscountFindUniqueArgsSchema: z.ZodType<Prisma.DiscountFindUniqueArgs>;
export declare const DiscountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DiscountFindUniqueOrThrowArgs>;
export declare const DiscountProductFindFirstArgsSchema: z.ZodType<Prisma.DiscountProductFindFirstArgs>;
export declare const DiscountProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DiscountProductFindFirstOrThrowArgs>;
export declare const DiscountProductFindManyArgsSchema: z.ZodType<Prisma.DiscountProductFindManyArgs>;
export declare const DiscountProductAggregateArgsSchema: z.ZodType<Prisma.DiscountProductAggregateArgs>;
export declare const DiscountProductGroupByArgsSchema: z.ZodType<Prisma.DiscountProductGroupByArgs>;
export declare const DiscountProductFindUniqueArgsSchema: z.ZodType<Prisma.DiscountProductFindUniqueArgs>;
export declare const DiscountProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DiscountProductFindUniqueOrThrowArgs>;
export declare const SubscriptionFindFirstArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstArgs>;
export declare const SubscriptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstOrThrowArgs>;
export declare const SubscriptionFindManyArgsSchema: z.ZodType<Prisma.SubscriptionFindManyArgs>;
export declare const SubscriptionAggregateArgsSchema: z.ZodType<Prisma.SubscriptionAggregateArgs>;
export declare const SubscriptionGroupByArgsSchema: z.ZodType<Prisma.SubscriptionGroupByArgs>;
export declare const SubscriptionFindUniqueArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueArgs>;
export declare const SubscriptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueOrThrowArgs>;
export declare const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs>;
export declare const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs>;
export declare const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs>;
export declare const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs>;
export declare const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs>;
export declare const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs>;
export declare const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs>;
export declare const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs>;
export declare const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs>;
export declare const StoreOwnerCreateArgsSchema: z.ZodType<Prisma.StoreOwnerCreateArgs>;
export declare const StoreOwnerUpsertArgsSchema: z.ZodType<Prisma.StoreOwnerUpsertArgs>;
export declare const StoreOwnerCreateManyArgsSchema: z.ZodType<Prisma.StoreOwnerCreateManyArgs>;
export declare const StoreOwnerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreOwnerCreateManyAndReturnArgs>;
export declare const StoreOwnerDeleteArgsSchema: z.ZodType<Prisma.StoreOwnerDeleteArgs>;
export declare const StoreOwnerUpdateArgsSchema: z.ZodType<Prisma.StoreOwnerUpdateArgs>;
export declare const StoreOwnerUpdateManyArgsSchema: z.ZodType<Prisma.StoreOwnerUpdateManyArgs>;
export declare const StoreOwnerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreOwnerUpdateManyAndReturnArgs>;
export declare const StoreOwnerDeleteManyArgsSchema: z.ZodType<Prisma.StoreOwnerDeleteManyArgs>;
export declare const AdminCreateArgsSchema: z.ZodType<Prisma.AdminCreateArgs>;
export declare const AdminUpsertArgsSchema: z.ZodType<Prisma.AdminUpsertArgs>;
export declare const AdminCreateManyArgsSchema: z.ZodType<Prisma.AdminCreateManyArgs>;
export declare const AdminCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AdminCreateManyAndReturnArgs>;
export declare const AdminDeleteArgsSchema: z.ZodType<Prisma.AdminDeleteArgs>;
export declare const AdminUpdateArgsSchema: z.ZodType<Prisma.AdminUpdateArgs>;
export declare const AdminUpdateManyArgsSchema: z.ZodType<Prisma.AdminUpdateManyArgs>;
export declare const AdminUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AdminUpdateManyAndReturnArgs>;
export declare const AdminDeleteManyArgsSchema: z.ZodType<Prisma.AdminDeleteManyArgs>;
export declare const CustomerCreateArgsSchema: z.ZodType<Prisma.CustomerCreateArgs>;
export declare const CustomerUpsertArgsSchema: z.ZodType<Prisma.CustomerUpsertArgs>;
export declare const CustomerCreateManyArgsSchema: z.ZodType<Prisma.CustomerCreateManyArgs>;
export declare const CustomerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CustomerCreateManyAndReturnArgs>;
export declare const CustomerDeleteArgsSchema: z.ZodType<Prisma.CustomerDeleteArgs>;
export declare const CustomerUpdateArgsSchema: z.ZodType<Prisma.CustomerUpdateArgs>;
export declare const CustomerUpdateManyArgsSchema: z.ZodType<Prisma.CustomerUpdateManyArgs>;
export declare const CustomerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CustomerUpdateManyAndReturnArgs>;
export declare const CustomerDeleteManyArgsSchema: z.ZodType<Prisma.CustomerDeleteManyArgs>;
export declare const ActivityLogCreateArgsSchema: z.ZodType<Prisma.ActivityLogCreateArgs>;
export declare const ActivityLogUpsertArgsSchema: z.ZodType<Prisma.ActivityLogUpsertArgs>;
export declare const ActivityLogCreateManyArgsSchema: z.ZodType<Prisma.ActivityLogCreateManyArgs>;
export declare const ActivityLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ActivityLogCreateManyAndReturnArgs>;
export declare const ActivityLogDeleteArgsSchema: z.ZodType<Prisma.ActivityLogDeleteArgs>;
export declare const ActivityLogUpdateArgsSchema: z.ZodType<Prisma.ActivityLogUpdateArgs>;
export declare const ActivityLogUpdateManyArgsSchema: z.ZodType<Prisma.ActivityLogUpdateManyArgs>;
export declare const ActivityLogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ActivityLogUpdateManyAndReturnArgs>;
export declare const ActivityLogDeleteManyArgsSchema: z.ZodType<Prisma.ActivityLogDeleteManyArgs>;
export declare const WalletCreateArgsSchema: z.ZodType<Prisma.WalletCreateArgs>;
export declare const WalletUpsertArgsSchema: z.ZodType<Prisma.WalletUpsertArgs>;
export declare const WalletCreateManyArgsSchema: z.ZodType<Prisma.WalletCreateManyArgs>;
export declare const WalletCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WalletCreateManyAndReturnArgs>;
export declare const WalletDeleteArgsSchema: z.ZodType<Prisma.WalletDeleteArgs>;
export declare const WalletUpdateArgsSchema: z.ZodType<Prisma.WalletUpdateArgs>;
export declare const WalletUpdateManyArgsSchema: z.ZodType<Prisma.WalletUpdateManyArgs>;
export declare const WalletUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WalletUpdateManyAndReturnArgs>;
export declare const WalletDeleteManyArgsSchema: z.ZodType<Prisma.WalletDeleteManyArgs>;
export declare const WalletTransactionCreateArgsSchema: z.ZodType<Prisma.WalletTransactionCreateArgs>;
export declare const WalletTransactionUpsertArgsSchema: z.ZodType<Prisma.WalletTransactionUpsertArgs>;
export declare const WalletTransactionCreateManyArgsSchema: z.ZodType<Prisma.WalletTransactionCreateManyArgs>;
export declare const WalletTransactionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WalletTransactionCreateManyAndReturnArgs>;
export declare const WalletTransactionDeleteArgsSchema: z.ZodType<Prisma.WalletTransactionDeleteArgs>;
export declare const WalletTransactionUpdateArgsSchema: z.ZodType<Prisma.WalletTransactionUpdateArgs>;
export declare const WalletTransactionUpdateManyArgsSchema: z.ZodType<Prisma.WalletTransactionUpdateManyArgs>;
export declare const WalletTransactionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WalletTransactionUpdateManyAndReturnArgs>;
export declare const WalletTransactionDeleteManyArgsSchema: z.ZodType<Prisma.WalletTransactionDeleteManyArgs>;
export declare const StoreCreateArgsSchema: z.ZodType<Prisma.StoreCreateArgs>;
export declare const StoreUpsertArgsSchema: z.ZodType<Prisma.StoreUpsertArgs>;
export declare const StoreCreateManyArgsSchema: z.ZodType<Prisma.StoreCreateManyArgs>;
export declare const StoreCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreCreateManyAndReturnArgs>;
export declare const StoreDeleteArgsSchema: z.ZodType<Prisma.StoreDeleteArgs>;
export declare const StoreUpdateArgsSchema: z.ZodType<Prisma.StoreUpdateArgs>;
export declare const StoreUpdateManyArgsSchema: z.ZodType<Prisma.StoreUpdateManyArgs>;
export declare const StoreUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreUpdateManyAndReturnArgs>;
export declare const StoreDeleteManyArgsSchema: z.ZodType<Prisma.StoreDeleteManyArgs>;
export declare const StoreAnalyticsCreateArgsSchema: z.ZodType<Prisma.StoreAnalyticsCreateArgs>;
export declare const StoreAnalyticsUpsertArgsSchema: z.ZodType<Prisma.StoreAnalyticsUpsertArgs>;
export declare const StoreAnalyticsCreateManyArgsSchema: z.ZodType<Prisma.StoreAnalyticsCreateManyArgs>;
export declare const StoreAnalyticsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreAnalyticsCreateManyAndReturnArgs>;
export declare const StoreAnalyticsDeleteArgsSchema: z.ZodType<Prisma.StoreAnalyticsDeleteArgs>;
export declare const StoreAnalyticsUpdateArgsSchema: z.ZodType<Prisma.StoreAnalyticsUpdateArgs>;
export declare const StoreAnalyticsUpdateManyArgsSchema: z.ZodType<Prisma.StoreAnalyticsUpdateManyArgs>;
export declare const StoreAnalyticsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StoreAnalyticsUpdateManyAndReturnArgs>;
export declare const StoreAnalyticsDeleteManyArgsSchema: z.ZodType<Prisma.StoreAnalyticsDeleteManyArgs>;
export declare const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs>;
export declare const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs>;
export declare const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs>;
export declare const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs>;
export declare const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs>;
export declare const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs>;
export declare const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs>;
export declare const ProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs>;
export declare const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs>;
export declare const ProductCategoryCreateArgsSchema: z.ZodType<Prisma.ProductCategoryCreateArgs>;
export declare const ProductCategoryUpsertArgsSchema: z.ZodType<Prisma.ProductCategoryUpsertArgs>;
export declare const ProductCategoryCreateManyArgsSchema: z.ZodType<Prisma.ProductCategoryCreateManyArgs>;
export declare const ProductCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCategoryCreateManyAndReturnArgs>;
export declare const ProductCategoryDeleteArgsSchema: z.ZodType<Prisma.ProductCategoryDeleteArgs>;
export declare const ProductCategoryUpdateArgsSchema: z.ZodType<Prisma.ProductCategoryUpdateArgs>;
export declare const ProductCategoryUpdateManyArgsSchema: z.ZodType<Prisma.ProductCategoryUpdateManyArgs>;
export declare const ProductCategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCategoryUpdateManyAndReturnArgs>;
export declare const ProductCategoryDeleteManyArgsSchema: z.ZodType<Prisma.ProductCategoryDeleteManyArgs>;
export declare const ProductVariantCreateArgsSchema: z.ZodType<Prisma.ProductVariantCreateArgs>;
export declare const ProductVariantUpsertArgsSchema: z.ZodType<Prisma.ProductVariantUpsertArgs>;
export declare const ProductVariantCreateManyArgsSchema: z.ZodType<Prisma.ProductVariantCreateManyArgs>;
export declare const ProductVariantCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantCreateManyAndReturnArgs>;
export declare const ProductVariantDeleteArgsSchema: z.ZodType<Prisma.ProductVariantDeleteArgs>;
export declare const ProductVariantUpdateArgsSchema: z.ZodType<Prisma.ProductVariantUpdateArgs>;
export declare const ProductVariantUpdateManyArgsSchema: z.ZodType<Prisma.ProductVariantUpdateManyArgs>;
export declare const ProductVariantUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantUpdateManyAndReturnArgs>;
export declare const ProductVariantDeleteManyArgsSchema: z.ZodType<Prisma.ProductVariantDeleteManyArgs>;
export declare const ProductVariantAttributeCreateArgsSchema: z.ZodType<Prisma.ProductVariantAttributeCreateArgs>;
export declare const ProductVariantAttributeUpsertArgsSchema: z.ZodType<Prisma.ProductVariantAttributeUpsertArgs>;
export declare const ProductVariantAttributeCreateManyArgsSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyArgs>;
export declare const ProductVariantAttributeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantAttributeCreateManyAndReturnArgs>;
export declare const ProductVariantAttributeDeleteArgsSchema: z.ZodType<Prisma.ProductVariantAttributeDeleteArgs>;
export declare const ProductVariantAttributeUpdateArgsSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateArgs>;
export declare const ProductVariantAttributeUpdateManyArgsSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyArgs>;
export declare const ProductVariantAttributeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantAttributeUpdateManyAndReturnArgs>;
export declare const ProductVariantAttributeDeleteManyArgsSchema: z.ZodType<Prisma.ProductVariantAttributeDeleteManyArgs>;
export declare const ProductImageCreateArgsSchema: z.ZodType<Prisma.ProductImageCreateArgs>;
export declare const ProductImageUpsertArgsSchema: z.ZodType<Prisma.ProductImageUpsertArgs>;
export declare const ProductImageCreateManyArgsSchema: z.ZodType<Prisma.ProductImageCreateManyArgs>;
export declare const ProductImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductImageCreateManyAndReturnArgs>;
export declare const ProductImageDeleteArgsSchema: z.ZodType<Prisma.ProductImageDeleteArgs>;
export declare const ProductImageUpdateArgsSchema: z.ZodType<Prisma.ProductImageUpdateArgs>;
export declare const ProductImageUpdateManyArgsSchema: z.ZodType<Prisma.ProductImageUpdateManyArgs>;
export declare const ProductImageUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductImageUpdateManyAndReturnArgs>;
export declare const ProductImageDeleteManyArgsSchema: z.ZodType<Prisma.ProductImageDeleteManyArgs>;
export declare const ProductVariantImageCreateArgsSchema: z.ZodType<Prisma.ProductVariantImageCreateArgs>;
export declare const ProductVariantImageUpsertArgsSchema: z.ZodType<Prisma.ProductVariantImageUpsertArgs>;
export declare const ProductVariantImageCreateManyArgsSchema: z.ZodType<Prisma.ProductVariantImageCreateManyArgs>;
export declare const ProductVariantImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantImageCreateManyAndReturnArgs>;
export declare const ProductVariantImageDeleteArgsSchema: z.ZodType<Prisma.ProductVariantImageDeleteArgs>;
export declare const ProductVariantImageUpdateArgsSchema: z.ZodType<Prisma.ProductVariantImageUpdateArgs>;
export declare const ProductVariantImageUpdateManyArgsSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyArgs>;
export declare const ProductVariantImageUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductVariantImageUpdateManyAndReturnArgs>;
export declare const ProductVariantImageDeleteManyArgsSchema: z.ZodType<Prisma.ProductVariantImageDeleteManyArgs>;
export declare const OrderCreateArgsSchema: z.ZodType<Prisma.OrderCreateArgs>;
export declare const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs>;
export declare const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs>;
export declare const OrderCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderCreateManyAndReturnArgs>;
export declare const OrderDeleteArgsSchema: z.ZodType<Prisma.OrderDeleteArgs>;
export declare const OrderUpdateArgsSchema: z.ZodType<Prisma.OrderUpdateArgs>;
export declare const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs>;
export declare const OrderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderUpdateManyAndReturnArgs>;
export declare const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs>;
export declare const OrderItemCreateArgsSchema: z.ZodType<Prisma.OrderItemCreateArgs>;
export declare const OrderItemUpsertArgsSchema: z.ZodType<Prisma.OrderItemUpsertArgs>;
export declare const OrderItemCreateManyArgsSchema: z.ZodType<Prisma.OrderItemCreateManyArgs>;
export declare const OrderItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderItemCreateManyAndReturnArgs>;
export declare const OrderItemDeleteArgsSchema: z.ZodType<Prisma.OrderItemDeleteArgs>;
export declare const OrderItemUpdateArgsSchema: z.ZodType<Prisma.OrderItemUpdateArgs>;
export declare const OrderItemUpdateManyArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyArgs>;
export declare const OrderItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyAndReturnArgs>;
export declare const OrderItemDeleteManyArgsSchema: z.ZodType<Prisma.OrderItemDeleteManyArgs>;
export declare const ProductRatingCreateArgsSchema: z.ZodType<Prisma.ProductRatingCreateArgs>;
export declare const ProductRatingUpsertArgsSchema: z.ZodType<Prisma.ProductRatingUpsertArgs>;
export declare const ProductRatingCreateManyArgsSchema: z.ZodType<Prisma.ProductRatingCreateManyArgs>;
export declare const ProductRatingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductRatingCreateManyAndReturnArgs>;
export declare const ProductRatingDeleteArgsSchema: z.ZodType<Prisma.ProductRatingDeleteArgs>;
export declare const ProductRatingUpdateArgsSchema: z.ZodType<Prisma.ProductRatingUpdateArgs>;
export declare const ProductRatingUpdateManyArgsSchema: z.ZodType<Prisma.ProductRatingUpdateManyArgs>;
export declare const ProductRatingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductRatingUpdateManyAndReturnArgs>;
export declare const ProductRatingDeleteManyArgsSchema: z.ZodType<Prisma.ProductRatingDeleteManyArgs>;
export declare const ProductReviewCreateArgsSchema: z.ZodType<Prisma.ProductReviewCreateArgs>;
export declare const ProductReviewUpsertArgsSchema: z.ZodType<Prisma.ProductReviewUpsertArgs>;
export declare const ProductReviewCreateManyArgsSchema: z.ZodType<Prisma.ProductReviewCreateManyArgs>;
export declare const ProductReviewCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductReviewCreateManyAndReturnArgs>;
export declare const ProductReviewDeleteArgsSchema: z.ZodType<Prisma.ProductReviewDeleteArgs>;
export declare const ProductReviewUpdateArgsSchema: z.ZodType<Prisma.ProductReviewUpdateArgs>;
export declare const ProductReviewUpdateManyArgsSchema: z.ZodType<Prisma.ProductReviewUpdateManyArgs>;
export declare const ProductReviewUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductReviewUpdateManyAndReturnArgs>;
export declare const ProductReviewDeleteManyArgsSchema: z.ZodType<Prisma.ProductReviewDeleteManyArgs>;
export declare const ProductReviewImageCreateArgsSchema: z.ZodType<Prisma.ProductReviewImageCreateArgs>;
export declare const ProductReviewImageUpsertArgsSchema: z.ZodType<Prisma.ProductReviewImageUpsertArgs>;
export declare const ProductReviewImageCreateManyArgsSchema: z.ZodType<Prisma.ProductReviewImageCreateManyArgs>;
export declare const ProductReviewImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductReviewImageCreateManyAndReturnArgs>;
export declare const ProductReviewImageDeleteArgsSchema: z.ZodType<Prisma.ProductReviewImageDeleteArgs>;
export declare const ProductReviewImageUpdateArgsSchema: z.ZodType<Prisma.ProductReviewImageUpdateArgs>;
export declare const ProductReviewImageUpdateManyArgsSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyArgs>;
export declare const ProductReviewImageUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductReviewImageUpdateManyAndReturnArgs>;
export declare const ProductReviewImageDeleteManyArgsSchema: z.ZodType<Prisma.ProductReviewImageDeleteManyArgs>;
export declare const TransactionCreateArgsSchema: z.ZodType<Prisma.TransactionCreateArgs>;
export declare const TransactionUpsertArgsSchema: z.ZodType<Prisma.TransactionUpsertArgs>;
export declare const TransactionCreateManyArgsSchema: z.ZodType<Prisma.TransactionCreateManyArgs>;
export declare const TransactionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TransactionCreateManyAndReturnArgs>;
export declare const TransactionDeleteArgsSchema: z.ZodType<Prisma.TransactionDeleteArgs>;
export declare const TransactionUpdateArgsSchema: z.ZodType<Prisma.TransactionUpdateArgs>;
export declare const TransactionUpdateManyArgsSchema: z.ZodType<Prisma.TransactionUpdateManyArgs>;
export declare const TransactionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TransactionUpdateManyAndReturnArgs>;
export declare const TransactionDeleteManyArgsSchema: z.ZodType<Prisma.TransactionDeleteManyArgs>;
export declare const DiscountCreateArgsSchema: z.ZodType<Prisma.DiscountCreateArgs>;
export declare const DiscountUpsertArgsSchema: z.ZodType<Prisma.DiscountUpsertArgs>;
export declare const DiscountCreateManyArgsSchema: z.ZodType<Prisma.DiscountCreateManyArgs>;
export declare const DiscountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountCreateManyAndReturnArgs>;
export declare const DiscountDeleteArgsSchema: z.ZodType<Prisma.DiscountDeleteArgs>;
export declare const DiscountUpdateArgsSchema: z.ZodType<Prisma.DiscountUpdateArgs>;
export declare const DiscountUpdateManyArgsSchema: z.ZodType<Prisma.DiscountUpdateManyArgs>;
export declare const DiscountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountUpdateManyAndReturnArgs>;
export declare const DiscountDeleteManyArgsSchema: z.ZodType<Prisma.DiscountDeleteManyArgs>;
export declare const DiscountProductCreateArgsSchema: z.ZodType<Prisma.DiscountProductCreateArgs>;
export declare const DiscountProductUpsertArgsSchema: z.ZodType<Prisma.DiscountProductUpsertArgs>;
export declare const DiscountProductCreateManyArgsSchema: z.ZodType<Prisma.DiscountProductCreateManyArgs>;
export declare const DiscountProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountProductCreateManyAndReturnArgs>;
export declare const DiscountProductDeleteArgsSchema: z.ZodType<Prisma.DiscountProductDeleteArgs>;
export declare const DiscountProductUpdateArgsSchema: z.ZodType<Prisma.DiscountProductUpdateArgs>;
export declare const DiscountProductUpdateManyArgsSchema: z.ZodType<Prisma.DiscountProductUpdateManyArgs>;
export declare const DiscountProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountProductUpdateManyAndReturnArgs>;
export declare const DiscountProductDeleteManyArgsSchema: z.ZodType<Prisma.DiscountProductDeleteManyArgs>;
export declare const SubscriptionCreateArgsSchema: z.ZodType<Prisma.SubscriptionCreateArgs>;
export declare const SubscriptionUpsertArgsSchema: z.ZodType<Prisma.SubscriptionUpsertArgs>;
export declare const SubscriptionCreateManyArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyArgs>;
export declare const SubscriptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyAndReturnArgs>;
export declare const SubscriptionDeleteArgsSchema: z.ZodType<Prisma.SubscriptionDeleteArgs>;
export declare const SubscriptionUpdateArgsSchema: z.ZodType<Prisma.SubscriptionUpdateArgs>;
export declare const SubscriptionUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionUpdateManyArgs>;
export declare const SubscriptionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SubscriptionUpdateManyAndReturnArgs>;
export declare const SubscriptionDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionDeleteManyArgs>;
//# sourceMappingURL=index.d.ts.map
