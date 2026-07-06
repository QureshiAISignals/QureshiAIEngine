class CCIEngine {

    constructor(period = 20) {
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

        const typicalPrices = [];

        for (let i = closes.length - this.period; i < closes.length; i++) {
            typicalPrices.push((highs[i] + lows[i] + closes[i]) / 3);
        }

        const sma =
            typicalPrices.reduce((a, b) => a + b, 0) / this.period;

        const meanDeviation =
            typicalPrices.reduce((a, b) => a + Math.abs(b - sma), 0) / this.period;

        if (meanDeviation === 0) {
            return { cci: 0 };
        }

        const currentTP = typicalPrices[typicalPrices.length - 1];
        const cci = (currentTP - sma) / (0.015 * meanDeviation);

        return {
            cci: Number(cci.toFixed(2))
        };

    }

}
