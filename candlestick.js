class CandlestickEngine {

    bullishEngulfing(previous, current) {

        return (
            previous.close < previous.open &&
            current.close > current.open &&
            current.open < previous.close &&
            current.close > previous.open
        );

    }

    bearishEngulfing(previous, current) {

        return (
            previous.close > previous.open &&
            current.close < current.open &&
            current.open > previous.close &&
            current.close < previous.open
        );

    }

    doji(candle) {

        return Math.abs(candle.open - candle.close) <=
               (candle.high - candle.low) * 0.1;

    }

    hammer(candle) {

        const body = Math.abs(candle.close - candle.open);
        const lowerShadow =
            Math.min(candle.open, candle.close) - candle.low;

        return lowerShadow > body * 2;

    }

    shootingStar(candle) {

        const body = Math.abs(candle.close - candle.open);
        const upperShadow =
            candle.high - Math.max(candle.open, candle.close);

        return upperShadow > body * 2;

    }

}
