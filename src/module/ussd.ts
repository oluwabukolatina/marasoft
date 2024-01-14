import { Axios } from 'axios';
import FormData from 'form-data';
import * as url from '../url';
import { GetUssdCodeInterface } from '../interface';

class Ussd {
  private readonly marasoftClient: Axios;

  private readonly encryptionKey: string;

  constructor(marasoftClient: Axios, encryptionKey: string) {
    this.marasoftClient = marasoftClient;
    this.encryptionKey = encryptionKey;
  }

  async banks() {
    try {
      return await this.marasoftClient.get(url.GET_AVAILABLE_USSD_BANKS);
    } catch (e) {
      return e;
    }
  }

  async generateUssdCode(params: GetUssdCodeInterface) {
    const {
      amount,
      email_address,
      phone_number,
      redirect_url,
      request_type,
      user_bear_charge,
      merchant_ref,
      name,
      currency,
      description,
      ref_id,
      user_bank_code,
    } = params;
    try {
      const data = new FormData();
      data.append('amount', amount);
      data.append('email_address', email_address);
      data.append('enc_key', this.encryptionKey);
      data.append('phone_number', phone_number);
      data.append('redirect_url', redirect_url);
      data.append('request_type', request_type);
      data.append('user_bear_charge', user_bear_charge);
      data.append('merchant_ref', merchant_ref);
      data.append('name', name);
      data.append('currency', currency);
      data.append('description', description);
      data.append('ref_id', ref_id);
      data.append('user_bank_code', user_bank_code);

      // return await axios.request({
      //   method: 'post',
      //   maxBodyLength: Infinity,
      //   url: url.INITIATE_USSD_TRANSACTION,
      //   data,
      // });

      return await this.marasoftClient.post(
        url.INITIATE_USSD_TRANSACTION,
        data,
      );
    } catch (e) {
      return e;
    }
  }
}
export default Ussd;
