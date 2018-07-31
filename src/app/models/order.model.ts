export class Order {
  amount: number;
  fee?: number;
  total: number;

  constructor(amount:number, fee:number, total:number) {
    this.amount = amount;
    this.fee = fee;
    this.total = total;
  }
}