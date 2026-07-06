class BollingerEngine {

    constructor(period = 20, deviation = 2) {
        this.period = period;
        this.deviation = deviation;
    }

    calculate(prices) {

        if (!prices || prices.length < this.period) {
            return null;
        }

        const data = prices.slice(-this.period);

        const mean =
            data.reduce((a, b) => a + b, 0) / this.period;

        const variance =
            data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / this.period;

        const std = Math.sqrt(variance);

        return {

            upper: Number((mean + this.deviation * std).toFixed(5)),

            middle: Number(mean.toFixed(5)),

            lower: Number((mean - this.deviation * std).toFixed(5))

        };

    }

}
