# Marasoft

> ## About

- Marasoft package for using marasoft endpoints. All are properly & fully tested.

## Getting Started

> [Technologies](#technologies-used) &middot;  [Installations](#installations) &middot;  [Tests](#tests) &middot;  [Author](#author)


## Technologies Used
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Jest](https://jestjs.io/) - Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.
- [TypeScript](https://www.typescriptlang.org/)


## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) - automatically comes with npm.

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
      ``` 
      $ marasoft.account.balance
    - GET ACCOUNT STATEMENT
      ```
      $ marasoft.account.statement()
      ```
    - GET ACCOUNT PAYOUT
      ```
      $ marasoft.account.transfers()
      ```
        - GET ACCOUNT COLLECTIONS
      ```
      $ marasoft.account.transaction()
      ```
- Payment
    - CREATE DYNAMIC ACCOUNT FOR PEOPLE TO TRANSFER TO
      ``` 
      $ marasoft.payment.dynamicAccount()
- Tool
    - RESOLVE BANK ACCOUNT NUMBER
      ``` 
      $ marasoft.tool.resolveBank()
    - GET BANKS
      ```
      $ marasoft.tool.banks()
      ```
    - GET TRANSACTION STATUS
      ```
      $ marasoft.bank.transactionStatus()
      ```
    - GET TRANSFER STATUS
      ```
      $ marasoft.tool.transferStatus()
      ```
- Transfer
    - TRANSFER TO ACCOUNT NUMBER
      ``` 
      $ marasoft.transfer.initiate()
    - GET BANKS
      ```
      $ marasoft.tool.banks()
      ```
    - GET TRANSACTION STATUS
      ```
      $ marasoft.bank.transactionStatus()
      ```
    - GET TRANSFER STATUS
      ```
      $ marasoft.tool.transferStatus()
      ```

- USSD
  - GET USSD BANKS
    ```
    $ marasoft.ussd.banks()
    ```
  - GET USSD CODE - to make payment using ussd code
    ```
    $ marasoft.ussd.ussdCode()
    ```


#### TEST

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm test
  ```


## Author
- [Tina](https://github.com/oluwabukolatina)
