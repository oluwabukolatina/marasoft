import { Axios } from 'axios';
import * as url from '../url';
import * as type from '../interface';
import FormData from 'form-data';

class Tool {
  private readonly marasoftClient: Axios;

  private readonly encryptionKey: string;

  constructor(marasoftClient: Axios, encryptionKey: string) {
    this.marasoftClient = marasoftClient;
    this.encryptionKey = encryptionKey;
  }

  async banks() {
    try {
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      return await this.marasoftClient.post(url.GET_BANKS, data);
    } catch (e) {
      return e;
    }
  }

  async resolveBank(params: type.ResolveBankAccountInterface) {
    try {
      const { bank_code, account_number } = params;
      const data = new FormData();
      data.append('account_number', account_number);
      data.append('bank_code', bank_code);
      data.append('enc_key', this.encryptionKey);
      return await this.marasoftClient.post(url.RESOLVE_BANK_ACCOUNT, data);
    } catch (e) {
      return e;
    }
  }

  async transactionStatus(
    params: type.CheckTransactionOrTransferStatusInterface,
  ) {
    try {
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('transaction_ref', params.transaction_ref);
      return await this.marasoftClient.post(url.CHECK_TRANSACTION_STATUS, data);
    } catch (e) {
      return e;
    }
  }

  async transferStatus(params: type.CheckTransactionOrTransferStatusInterface) {
    try {
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('transaction_ref', params.transaction_ref);
      return await this.marasoftClient.post(url.CHECK_TRANSFER_STATUS, data);
    } catch (e) {
      return e;
    }
  }
}
export default Tool;
