import bankList from './bank-list';

export const PAY_STACK_BANK_LIST = bankList;

export interface IPayStackAccountNumberData {
  account_number: string;
  account_name: string;
  bank_Id: number;
}
export interface IPayStackAccountNumberResolveSuccess {
  status: boolean;
  message: string;
  data: IPayStackAccountNumberData;
}

export enum PayStackUrlEnum {
  ResolveBankUrl = '/bank/resolve',
  VerifyTransactionUrl = `/transaction/verify/:reference`,
  InitializeTransactionUrl = `/transaction/initialize`,
}

export enum PayStackCacheKeyEnum {
  ResolveBankUrl = 'paystack:resolveBankUrl:',
}

export type PaystackSuccessResponse = {
  reference: string;
  trans?: string;
  status?: 'success';
  message?: 'Approved';
  transaction?: string;
  trxref?: string;
  redirecturl?: string;
};

export type IPaystackInitializeTransactionSuccess = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};
