import {
  createReference,
  initializeMarasoft,
  ussdCodePayload,
} from './account.test';

describe('ussd', () => {
  it('banks', async () => {
    const result = await initializeMarasoft.ussd.banks();
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('success', true);
    expect(result.data).toHaveProperty('data');
    result.data.data.forEach(
      (bank: { bank_code: string; bank_name: string }) => {
        expect(bank).toHaveProperty('bank_code');
        expect(bank).toHaveProperty('bank_name');
      },
    );
  });
  it('gets ussd code', async () => {
    const result = await initializeMarasoft.ussd.ussdCode(
      ussdCodePayload(createReference()),
    );
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status');
    expect(result.data.status).toBe('success');
    expect(result.data).toHaveProperty('ussd_code');
    expect(result.data).toHaveProperty('recipient_bank');
  });
});
