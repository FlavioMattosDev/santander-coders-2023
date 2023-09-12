export class Utils {
    static getRandomNumber(minValue, maxValue) {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    static getRandomKey(isPositive, minGood, maxGood, minBad, maxBad) {
        return isPositive
            ? Utils.getRandomNumber(minGood, maxGood)
            : Utils.getRandomNumber(minBad, maxBad);
    }
}