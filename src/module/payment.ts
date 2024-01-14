import { Axios } from 'axios';
import * as url from '../url';
import { GenerateDynamicAccountInterface } from '../interface';
import FormData from 'form-data';

class Payment {
  private readonly marasoftClient: Axios;

  private readonly encryptionKey: string;

  constructor(marasoftClient: Axios, encryptionKey: string) {
    this.marasoftClient = marasoftClient;
    this.encryptionKey = encryptionKey;
  }

  async generateDynamicAccount(params: GenerateDynamicAccountInterface) {
    try {
      const { amount, transaction_ref } = params;
      const data = new FormData();
      data.append('amount', amount);
      data.append('transaction_ref', transaction_ref);
      data.append('enc_key', this.encryptionKey);
      return await this.marasoftClient.post(url.GENERATE_DYNAMIC_ACCOUNT, data);
    } catch (e) {
      return e;
    }
  }
}
export default Payment;
