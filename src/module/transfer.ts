import { Axios } from 'axios';
import * as url from '../url';
import { CreateTransferInterface } from '../interface';

class Transfer {
  private readonly marasoftClient: Axios;

  private readonly encryptionKey: string;

  constructor(marasoftClient: Axios, encryptionKey: string) {
    this.marasoftClient = marasoftClient;
    this.encryptionKey = encryptionKey;
  }

  async initiate(params: CreateTransferInterface) {
    try {
      const {
        bank_code,
        account_number,
        amount,
        currency,
        description,
        transactionRef,
      } = params;
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('bank_code', bank_code);
      data.append('account_number', account_number);
      data.append('amount', amount);
      data.append('currency', currency);
      data.append('description', description || '');
      data.append('transactionRef', transactionRef || '');
      return await this.marasoftClient.post(url.CHECK_BALANCE, data);
    } catch (e) {
      return e;
    }
  }
}
export default Transfer;
