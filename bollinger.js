class BollingerEngine {

    constructor(period = 20, deviation = 2) {
        this.period = period;
        this.deviation = deviation;
    }

    calculate(prices) {

        if (!prices || prices.length < this.period) {
            return null;
        }

        return {
            upper: 0,
            middle: 0,
            lower: 0
        };

    }

}
