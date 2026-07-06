class StochasticEngine {

    constructor(period = 14) {
        this.period = period;
    }

    calculate(highs, lows, closes) {

        if (
            !highs || !lows || !closes ||
            highs.length < this.period ||
            lows.length < this.period ||
            closes.length < this.period
        ) {
            return null;
        }

        const recentHigh = Math.max(...highs.slice(-this.period));
        const recentLow = Math.min(...lows.slice(-this.period));
        const close = closes[closes.length - 1];

        if (recentHigh === recentLow) {
            return { k: 50, d: 50 };
        }

        const k = ((close - recentLow) / (recentHigh - recentLow)) * 100;

        return {
            k: Number(k.toFixed(2)),
            d: Number(k.toFixed(2))
        };

    }

}
