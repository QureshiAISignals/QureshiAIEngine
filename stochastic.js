class StochasticEngine {

    constructor(period = 14, smooth = 3) {
        this.period = period;
        this.smooth = smooth;
    }

    calculate(highs, lows, closes) {

        if (!highs || !lows || !closes) {
            return null;
        }

        return {
            k: 0,
            d: 0
        };

    }

}
