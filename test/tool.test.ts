import {
  createReference,
  initializeMarasoft,
  transferPayload,
  ussdCodePayload,
} from './account.test';

describe('tool', () => {
  it('resolveBank', async () => {
    const result = await initializeMarasoft.tool.resolveBank({
      bank_code: '044',
      account_number: '0691660675',
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('data');
    expect(result.data.data).toHaveProperty('account_name');
    expect(result.data.data).toHaveProperty('account_number');
  });
  it('banks', async () => {
    const result = await initializeMarasoft.tool.banks();
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', 'success');
    expect(result.data).toHaveProperty('data');
    expect(result.data.data).toHaveProperty('banks');
  });
  it('transactionStatus', async () => {
    const reference = createReference();
    await initializeMarasoft.ussd.ussdCode(ussdCodePayload(reference));
    const result = await initializeMarasoft.tool.transactionStatus({
      transaction_ref: reference,
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('transaction_status');
    expect(result.data).toHaveProperty('type');
    expect(result.data).toHaveProperty('account_number');
    expect(result.data).toHaveProperty('amount_received');
    expect(result.data).toHaveProperty('created_at');
    expect(result.data).toHaveProperty('msft_ref');
    expect(result.data).toHaveProperty('merchant_ref');
    expect(result.data).toHaveProperty('charge');
    expect(result.data).toHaveProperty('settled_amount');
    expect(result.data).toHaveProperty('expected_amount');
    expect(result.data).toHaveProperty('transaction_amount');
  });
  it('transferStatus', async () => {
    const reference = createReference();
    await initializeMarasoft.transfer.initiate(transferPayload(reference));
    const result = await initializeMarasoft.tool.transferStatus({
      transaction_ref: reference,
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
  });
});
