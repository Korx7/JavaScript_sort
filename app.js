function getRandomNumber(from,to) {
    return Math.round(from + Math.random()*(to - from));

}

function generateAttay(k){
    var length = parseInt(Math.random()*k),
        arr = new Array(length);
    for (var i = 0 ; i < length; i++){
        arr[i] = getRandomNumber(0,100)
    }return arr;
}

function isPositive(num) {
    return num > 0;
}

var data = generateAttay(Number(prompt("Введите максимальную длину массива")));

var result = [];

for (var i = 0; i < data.length; i++){
    var item = data[i];
    if (isPositive(item)){
        result.push(item);

    }

}
console.log(result);


var vyb = SelectionSort(result);

function SelectionSort(result)
{
    var n = result.length;
    for (var i = 0; i < n-1; i++)
    { var min = i;
        for (var j = i+1; j < n; j++)
        { if (result[j] < result[min]) min = j; }
        var t = result[min]; result[min] = result[ i ]; result[ i ] = t;
    }
    return result;
}
vyb.reverse();
console.log(vyb);





