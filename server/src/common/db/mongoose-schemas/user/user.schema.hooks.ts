import * as bcrypt from 'bcryptjs';
import { Schema } from 'mongoose';

async function handleModifiedPasswordHook(this: any, next: () => void) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  this.passwordConfirm = undefined;
  next();
}

async function handlePasswordChangedAtHook(this: any, next: () => void) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
}

function hideInactiveHook(this: any, next: () => void) {
  this.find({ active: { $ne: false } });
  next();
}

export class UserSchemaHook {
  public static registerWithHooks(schema: Schema) {
    schema.pre('save', handleModifiedPasswordHook);
    schema.pre('save', handlePasswordChangedAtHook);
    schema.pre(/find/, hideInactiveHook);
  }
}
