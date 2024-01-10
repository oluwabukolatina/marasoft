import { Marasoft } from '../src';

export const initializeMarasoft = new Marasoft('your encryption key here');
export const createReference = () =>
  `PEN-${Math.random().toString(36).substring(2, 20)}`;

const accountQuery = {
  start_date: '01-01-2024',
  end_date: '20-01-2024',
};
export const transferPayload = (reference: string) => ({
  account_number: '0691660675',
  amount: '100',
  bank_code: '044',
  currency: 'NGN',
  transactionRef: reference,
});
export const ussdCodePayload = (reference: string) => ({
  amount: '900',
  email_address: '090333443@penpay.com.ng',
  phone_number: '090333443',
  redirect_url: 'http://localhost:1801/api/v1/payment/verify',
  request_type: 'live',
  user_bear_charge: 'yes',
  merchant_ref: reference,
  name: 'Penpay Customer',
  currency: 'NGN',
  description:
    'pen-pay payment for pension id PEN210102222439 for micro pension funding for ',
  ref_id: reference,
  user_bank_code: '035',
});

describe('account', () => {
  it('gets balance', async () => {
    const result = await initializeMarasoft.account.balance();
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('available_balance');
    expect(result.data).toHaveProperty('ledger_balance');
  });
  it('gets statement', async () => {
    const result = await initializeMarasoft.account.statement(accountQuery);
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('request_status', true);
    expect(result.data).toHaveProperty('transactions');
  });
  it('transfers', async () => {
    const result = await initializeMarasoft.account.transfers(accountQuery);
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('request_status', true);
    expect(result.data).toHaveProperty('transactions');
    result.data.transactions.forEach(
      (transaction: {
        transaction_ref: string;
        msft_reference: string;
        description: string;
        beneficiary_account_number: string;
        beneficiary_account_name: string;
        beneficiary_bank_code: string;
        currency: string;
        amount: string;
        transaction_status: string;
        created_at: string;
      }) => {
        expect(transaction).toHaveProperty('transaction_ref');
        expect(transaction).toHaveProperty('msft_reference');
        expect(transaction).toHaveProperty('description');
        expect(transaction).toHaveProperty('beneficiary_account_number');
        expect(transaction).toHaveProperty('currency');
        expect(transaction).toHaveProperty('beneficiary_bank_code');
        expect(transaction).toHaveProperty('beneficiary_account_name');
        expect(transaction).toHaveProperty('amount');
        expect(transaction).toHaveProperty('transaction_status');
        expect(transaction).toHaveProperty('created_at');
      },
    );
  });
  it('transactions', async () => {
    const result = await initializeMarasoft.account.transactions(accountQuery);
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('request_status', true);
    expect(result.data).toHaveProperty('transactions');
    result.data.transactions.forEach(
      (transaction: {
        transaction_ref: string;
        msft_reference: string;
        currency: string;
        expected_amount: string;
        amount_paid: string;
        transaction_amount: string;
        amount_settled: string;
        settled_amount: string;
        transaction_status: string;
        status: string;
        created_at: string;
      }) => {
        expect(transaction).toHaveProperty('transaction_ref');
        expect(transaction).toHaveProperty('msft_reference');
        expect(transaction).toHaveProperty('currency');
        expect(transaction).toHaveProperty('expected_amount');
        expect(transaction).toHaveProperty('amount_paid');
        expect(transaction).toHaveProperty('transaction_amount');
        expect(transaction).toHaveProperty('amount_settled');
        expect(transaction).toHaveProperty('settled_amount');
        expect(transaction).toHaveProperty('transaction_status');
        expect(transaction).toHaveProperty('status');
        expect(transaction).toHaveProperty('created_at');
      },
    );
  });
});
