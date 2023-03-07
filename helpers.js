const mean = (arr) => {
    let total = arr.reduce((acc, current) => acc + current, 0);
    return Math.round(total / arr.length * 100) / 100
}

const median = (arr) => {
    const sortedArr = arr.sort(( a, b ) => a - b);
    const middle = Math.floor(sortedArr.length / 2 );

    if(sortedArr.length % 2 === 0 ){
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    }

    return sortedArr[middle]
}

const mode = (arr) => {
    const mode = {};
    let max = 0, count = 0;

    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
    
        if(mode[item]) {
            mode[item]++;

        } else {
            mode[item] = 1;
        }
    
        if(count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }
  return max;
}

exports.mean = mean;
exports.median = median;
exports.mode = mode;