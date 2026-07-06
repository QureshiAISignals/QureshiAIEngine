class RSIEngine {

    constructor(period = 14) {
        this.period = period;
    }

    calculate(prices) {

        if (!prices || prices.length <= this.period) {
            return null;
        }

        let gain = 0;
        let loss = 0;

        for (let i = 1; i <= this.period; i++) {

            let change = prices[i] - prices[i - 1];

            if (change > 0) {
                gain += change;
            } else {
                loss += Math.abs(change);
            }

        }

        let avgGain = gain / this.period;
        let avgLoss = loss / this.period;

        if (avgLoss === 0) {
            return 100;
        }

        let rs = avgGain / avgLoss;

        let rsi = 100 - (100 / (1 + rs));

        return Number(rsi.toFixed(2));

    }

}
