const helpers = require('../helpers');

test('Should return the mean of an array of numbers rounded two decimal places', () => {
    let findMean = helpers.mean([10,30,15]);
    expect(findMean).toEqual(18.33);
})

test('Should return the median of an array of numbers', () => {
    let findMedian = helpers.median([10,30,15]);
    expect(findMedian).toEqual(15);
})

test('Should return the mode of an array of numbers', () => {
    let findMode = helpers.mode([1,1,1,2,2,2,2,3]);
    expect(findMode).toEqual(2);
})