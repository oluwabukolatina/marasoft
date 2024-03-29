export const BASE_URL = 'https://api.marasoftpay.live/';

const USSD = 'ussd/';
const ACCOUNT_HISTORY = 'account_history/';
export const GET_AVAILABLE_USSD_BANKS = `${USSD}get_available_banks.php`;
export const INITIATE_USSD_TRANSACTION = `${BASE_URL}${USSD}get_ussd_code`;
export const GENERATE_DYNAMIC_ACCOUNT = 'generate_dynamic_account/';
export const GET_BANKS = 'getbanks';
export const RESOLVE_BANK_ACCOUNT = 'resolvebank';
export const CHECK_BALANCE = 'checkbalance';
export const GET_ACCOUNT_STATEMENT = `${ACCOUNT_HISTORY}account_statement`;
export const GET_ACCOUNT_TRANSFERS = `${ACCOUNT_HISTORY}transfers`;
export const GET_ACCOUNT_TRANSACTIONS = `${ACCOUNT_HISTORY}transactions`;
export const CHECK_TRANSFER_STATUS = 'checktransfer';
export const CHECK_TRANSACTION_STATUS = 'checktransaction';
