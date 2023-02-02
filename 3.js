function count(num) {
    console.log(num);
    var addNum = num + 1;
    if (addNum <= 10) {
        count(addNum)
    }


} count(1);