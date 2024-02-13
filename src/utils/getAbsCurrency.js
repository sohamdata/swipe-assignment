export default function getAbsCurrency(money, fromCurrency, toCurrency) {
    const exchangeRates = {
        "$": 1,
        "£": 0.79,
        "¥": 149.43,
        "C$": 1.34,
        "A$": 1.53,
        "S$": 1.34,
        "元": 7.19,
        "₿": 0.000020
    };

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    return (money / fromRate) * toRate;
};
