import Transaction from '../models/Transaction';

interface CreateTransactionDto {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTransactions = this.transactions.filter(
      trans => trans.type === 'income',
    );
    const outcomeTransactions = this.transactions.filter(
      trans => trans.type === 'outcome',
    );

    const inc = incomeTransactions.reduce(
      (accumulator, element) => (accumulator += Number(element.value)),
      0,
    );

    const out = outcomeTransactions.reduce(
      (accumulator, element) => (accumulator += Number(element.value)),
      0,
    );

    const total = inc - out;

    const balance = {
      income: inc,
      outcome: out,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDto): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
