import axios, { Axios } from 'axios';
import Account from './module/account';
import Ussd from './module/ussd';
import Tool from './module/tool';
import Payment from './module/payment';
import Transfer from './module/transfer';
import { BASE_URL } from './url';

export class Marasoft {
  private readonly encryptionKey: string;

  private readonly client: Axios;

  public account: Account;

  public ussd: Ussd;

  public tool: Tool;

  public payment: Payment;

  public transfer: Transfer;

  constructor(encryptionKey: string) {
    this.encryptionKey = encryptionKey;
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    this.account = new Account(this.client, encryptionKey);
    this.payment = new Payment(this.client, encryptionKey);
    this.tool = new Tool(this.client, encryptionKey);
    this.transfer = new Transfer(this.client, encryptionKey);
    this.ussd = new Ussd(this.client, encryptionKey);
  }
}
