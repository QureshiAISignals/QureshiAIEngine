analyze(data) {

    const result = {

        signal: "WAIT",

        confidence: 0,

        score: 0,

        indicators: {}

    };

    result.indicators.ema =
        this.ema.calculate(data.close);

    result.indicators.rsi =
        this.rsi.calculate(data.close);

    result.indicators.macd =
        this.macd.calculate(data.close);

    result.indicators.bollinger =
        this.bollinger.calculate(data.close);

    result.indicators.stochastic =
        this.stochastic.calculate(
            data.high,
            data.low,
            data.close
        );

    result.indicators.cci =
        this.cci.calculate(
            data.high,
            data.low,
            data.close
        );

    let score = 0;

    if (result.indicators.rsi !== null &&
        result.indicators.rsi < 30) {
        score += 20;
    }

    if (result.indicators.macd &&
        result.indicators.macd.macd >
        result.indicators.macd.signal) {
        score += 20;
    }

    if (result.indicators.cci &&
        result.indicators.cci.cci > 100) {
        score += 15;
    }

    if (result.indicators.stochastic &&
        result.indicators.stochastic.k < 20) {
        score += 15;
    }

    if (result.indicators.ema !== null &&
        data.close[data.close.length - 1] >
        result.indicators.ema) {
        score += 30;
    }

    result.score = score;
    result.confidence = Math.min(score, 100);

    if (score >= 80) {

        result.signal = "STRONG BUY";

    } else if (score >= 60) {

        result.signal = "BUY";

    } else if (score >= 40) {

        result.signal = "WAIT";

    } else {

        result.signal = "SELL";

    }

    return result;

}
