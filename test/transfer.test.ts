import {
  createReference,
  initializeMarasoft,
  transferPayload,
} from './account.test';

describe('transfer', () => {
  it('initiate', async () => {
    const result = await initializeMarasoft.transfer.initiate(
      transferPayload(createReference()),
    );
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('available_balance');
    expect(result.data).toHaveProperty('ledger_balance');
  });
});
