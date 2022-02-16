function analyzeArray(numArr){
    const length = numArr.length;
    const min = Math.min(...numArr);
    const max = Math.max(...numArr);
    let average = 0;
    for(let i = 0;i<length;i++){
        average+=numArr[i];
    }
    average /= length;
    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;