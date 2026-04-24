function calculateAverage(numbers) {
    //Calculate sum of Element in Arrays
    let sumOfElements = numbers.reduce((sum,number)=>sum+number,0)
    return sumOfElements/numbers.length
}  