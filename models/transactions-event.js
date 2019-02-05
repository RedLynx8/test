class TransactionEvent extends EventBase {
    constructor({ id, type, created_at, sign, comment, from, to, cur, sum }) {
        super({ id, type, created_at });
        this.comment = comment;
        this.sign = sign;
        this.from = from;
        this.to = to;
        this.cur = cur;
        this.sum = sum;
    }
}
