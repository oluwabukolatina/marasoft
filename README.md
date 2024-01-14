# Marasoft 
![npm](https://img.shields.io/npm/v/marasoft)
![npm](https://img.shields.io/npm/dt/marasoft)
![NPM](https://img.shields.io/npm/l/marasoft)
 ## About
This provides easy access to Marasoft APIS. All are properly & fully tested. Available features include: 
- Account: get balance, statement, transfers and transactions.
- Payment: create dynamic account.
- Tool: banks, resolve Bank account number, check transaction dtatus, check transfer Status.
- Transfer: initiate transfer to bank account.
- USSD: get ussd banks, generate ussd code for payment/collection.

## Getting Started

> [Technologies](#technologies-used) &middot;  [Installations](#installations) &middot;  [Usage](#usage) &middot;  [Components](#components) &middot;  [Tests](#tests) &middot;  [Author](#author)


## Technologies Used
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Jest](https://jestjs.io/) - Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.
- [TypeScript](https://www.typescriptlang.org/)


## Installations

#### Getting started

- You need to have your marasoft encoding key and NPM installed on your computer.

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install marasoft
  ```

## Usage
```shell
$ const { Marasoft } = require('marasoft');
$ const  marasoft = new Marasoft('encryptionKey');
```

## Components
- Account
  - GET ACCOUNT BALANCE 
  ``` javascript
  const { Marasoft } = require('marasoft');
  const  marasoft = new Marasoft('encryptionKey');
  const response = await marasoft.account.balance() 
  ``` 
    - GET STATEMENT
  ``` javascript
   marasoft.account.statement({
  start_date: '01-01-2024',
  end_date: '20-01-2024'
  }) 
  ``` 
    - GET ACCOUNT TRANSFERS
  ``` javascript
  const response = await marasoft.account.transfers({
  start_date: '01-01-2024', // required
  end_date: '20-01-2024' // required
  })  
  ``` 
    - GET ACCOUNT TRANSACTIONS - the account collection
  ``` javascript
  marasoft.account.transactions({
  start_date: '01-01-2024', // required
  end_date: '20-01-2024' // required
  }) 
  ```
- Payment
    - CREATE DYNAMIC ACCOUNT FOR PEOPLE TO TRANSFER TO
  ``` javascript
  marasoft.payment.generateDynamicAccount({
   amount:"3000", // required
   transaction_ref:"your-transaction-reference" // required
  })
  ```
- TOOL
    - RESOLVE BANK ACCOUNT NUMBER
  ``` javascript
   marasoft.tool.resolveBank({
   bank_code:"044", // required field
   account_number:"0691660675" // required field
  })  
  ``` 
    -   GET BANKS
  ``` javascript
   marasoft.tool.banks() 
  ``` 
    - GET TRANSACTION STATUS
  ``` javascript
   marasoft.tool.transactionStatus({
   transaction_ref: 'your-transaction-reference'// required
  }) 
  ``` 
    - GET TRANSFER STATUS
  ``` javascript
   marasoft.tool.transactionStatus({
   transaction_ref: 'your-transfer-reference'// required
  })
  ```
- Transfer
    - TRANSFER TO ACCOUNT NUMBER
  ``` javascript
   marasoft.transfer.initiate({
   bank_code:"044", // required field
   account_number:"0691660675" // required field
   transactionRef:"your-transaction-reference" //required field
   amount:"3000" // required field
   description:"" //required
   currency:"NGN" //required
  })  
  ```
- USSD
  - GET USSD BANKS - This describes how to get available ussd banks
  ``` javascript
  const { Marasoft } = require('marasoft');
  const  marasoft = new Marasoft('encryptionKey');
  const response = await marasoft.ussd.banks() 
  ```
  - GET USSD CODE - to make payment using ussd code
  ``` javascript
  marasoft.ussd.generateUssdCode({
   amount:"3000", // required field
   email_address:"email-address", //required field
   phone_number:"09028238134" // required
   redirect_url:"your-redirect-url", //required field
   request_type:"live" // required field (live or test)
   user_bear_charge:"yes" //required field (yes or no)
   merchant_ref:"", //required
   name:"name", //required
   currency:"NGN", //required
   description:"", //required
   ref_id:"", //required 
   user_bank_code:"044" / REQUIRED
  })
  ```

## Author
- [Tina](https://github.com/oluwabukolatina)
