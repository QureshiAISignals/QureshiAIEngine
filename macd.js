class MACDEngine {

    constructor() {
        this.fast = 12;
        this.slow = 26;
        this.signal = 9;
    }

    calculate(prices) {

        if (!prices || prices.length < this.slow) {
            return null;
        }

        return {
            macd: 0,
            signal: 0,
            histogram: 0
        };

    }

}
