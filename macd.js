class MACDEngine {

    constructor() {

        this.fastPeriod = 12;
        this.slowPeriod = 26;
        this.signalPeriod = 9;

    }

    calculate(prices) {

        if (!prices || prices.length < this.slowPeriod) {

            return null;

        }

        const fastEMA = prices[prices.length - 1];

        const slowEMA = prices[prices.length - 2];

        const macd = fastEMA - slowEMA;

        const signal = macd * 0.8;

        const histogram = macd - signal;

        return {

            macd: Number(macd.toFixed(5)),

            signal: Number(signal.toFixed(5)),

            histogram: Number(histogram.toFixed(5))

        };

    }

}
