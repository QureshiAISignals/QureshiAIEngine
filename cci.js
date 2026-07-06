class CCIEngine {

    constructor(period = 20) {
        this.period = period;
    }

    calculate(highs, lows, closes) {

        if (!highs || !lows || !closes) {
            return null;
        }

        return {
            cci: 0
        };

    }

}
