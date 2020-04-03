
var m = 3
var n = 9;
const generateNumbers = () => {
    var arr = []
    var i = 1;
    var colWiseArray = []
    while (i <= n) {
        var j = 0;
        var max = i * 10;
        var min = max - 9;

        colWiseArray[i - 1] = []
        while (colWiseArray[i - 1].length < m) {
            var r = Math.floor(Math.random() * (max - min) + min);
            console.log(r)
            if (arr.indexOf(r) === -1) {
                arr.push(r);
                colWiseArray[i - 1].push(r)
            }

            j++;
        }
        i++;
    }

    var mergedArray = [].concat.apply([], colWiseArray)

    var finalNum = [];

    for(var each in colWiseArray){
        finalNum.push(colWiseArray[each][0])
    }

    while(finalNum.length<15){
        let randomValue = mergedArray[Math.floor(Math.random() * mergedArray.length)];
        const index = finalNum.indexOf(randomValue);
                
                if(index===-1){
                    finalNum.push(randomValue)
                }
                if (index > -1) {
                    mergedArray.splice(index, 1);
                }
    }

    return finalNum.sort(function (a, b) { return a - b });;
}

module.exports = generateNumbers