export interface GetUssdCodeInterface {
  amount: string;
  email_address: string;
  phone_number: string;
  redirect_url: string;
  request_type: string;
  user_bear_charge: string;
  merchant_ref: string;
  name: string;
  currency: string;
  description: string;
  ref_id: string;
  user_bank_code: string;
}
export interface GenerateDynamicAccountInterface {
  transaction_ref: string;
  amount: string;
}
export interface ResolveBankAccountInterface {
  bank_code: string;
  account_number: string;
}

export interface AccountHistoryInterface {
  start_date: string;
  end_date: string;
}
export interface CreateTransferInterface {
  account_number: string;
  amount: string;
  bank_code: string;
  currency: string;
  description?: string;
  transactionRef?: string;
}
export interface CheckTransactionOrTransferStatusInterface {
  transaction_ref: string;
}
