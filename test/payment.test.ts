import {initializeMarasoft} from "./account.test";

describe('payment', () => {
  it('generateDynamicAccount', async () => {
    const result = await initializeMarasoft.payment.generateDynamicAccount({
      amount: '900',
      transaction_ref: 'MSF-67ica4b5abbw03aaabb',
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status');
    expect(result.data.status).toBe(true);
    expect(result.data).toHaveProperty('amount_to_pay');
    expect(result.data).toHaveProperty('account_number');
    expect(result.data).toHaveProperty('account_name');
    expect(result.data).toHaveProperty('bank_name');
  });
});
