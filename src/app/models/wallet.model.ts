export class Wallet {
  balance: number;
  btcBalance: number;
  ethBalance: number;
  ltcBalance: number;
  bchBalance: number;
  constructor(balance: number, btcBalance: number, ethBalance: number, ltcBalance: number, bchBalance: number) {
    this.balance = balance;
    this.btcBalance = btcBalance;
    this.ethBalance = ethBalance;
    this.ltcBalance = ltcBalance;
    this.bchBalance = bchBalance;
  }
}