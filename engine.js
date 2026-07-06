class QureshiAIEngine {

    constructor() {

        this.ema = new EMAEngine(20);
        this.rsi = new RSIEngine(14);
        this.macd = new MACDEngine();
        this.bollinger = new BollingerEngine();
        this.stochastic = new StochasticEngine();
        this.cci = new CCIEngine();
        this.candlestick = new CandlestickEngine();

    }

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

        result.score = 0;

        result.signal = "WAIT";

        result.confidence = 0;

        return result;

    }

}
