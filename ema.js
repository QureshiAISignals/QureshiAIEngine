class EMAEngine {

    constructor(period = 20) {
        this.period = period;
    }

    calculate(prices) {

        if (!prices || prices.length < this.period) {
            return null;
        }

        const k = 2 / (this.period + 1);

        let ema = prices[0];

        for (let i = 1; i < prices.length; i++) {
            ema = prices[i] * k + ema * (1 - k);
        }

        return Number(ema.toFixed(5));
    }

}
