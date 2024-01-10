import { Axios } from 'axios';
import * as url from '../url';
import { AccountHistoryInterface } from '../interface';

class Account {
  private readonly marasoftClient: Axios;

  private readonly encryptionKey: string;

  constructor(marasoftClient: Axios, encryptionKey: string) {
    this.marasoftClient = marasoftClient;
    this.encryptionKey = encryptionKey;
  }

  async balance() {
    try {
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      return await this.marasoftClient.post(url.CHECK_BALANCE, data);
    } catch (e) {
      return e;
    }
  }

  async statement(params: AccountHistoryInterface) {
    try {
      const { start_date, end_date } = params;
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('start_date', start_date);
      data.append('end_date', end_date);
      return await this.marasoftClient.post(url.GET_ACCOUNT_STATEMENT, data);
    } catch (e) {
      return e;
    }
  }

  /**
   * accounts payouts
   * @param params
   */
  async transfers(params: AccountHistoryInterface) {
    try {
      const { start_date, end_date } = params;
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('start_date', start_date);
      data.append('end_date', end_date);
      return await this.marasoftClient.post(url.GET_ACCOUNT_TRANSFERS, data);
    } catch (e) {
      return e;
    }
  }

  /**
   * the accounts collections
   * @param params
   */
  async transactions(params: AccountHistoryInterface) {
    try {
      const { start_date, end_date } = params;
      const data = new FormData();
      data.append('enc_key', this.encryptionKey);
      data.append('start_date', start_date);
      data.append('end_date', end_date);
      return await this.marasoftClient.post(url.GET_ACCOUNT_TRANSACTIONS, data);
    } catch (e) {
      return e;
    }
  }
}
export default Account;
