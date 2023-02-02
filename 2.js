//1=>
function fun(n) {                                //n           condition     return
    if (n == 4) return n;                        //2             false         2*(3)  => 2*8 = 16
    else return 2 * fun(n + 1);                  //3             false         2*(4)  => 2*4 = 8
}                                                //4              true         value is 4
var res = fun(2);
console.log(res)

//2=> 
function fun(x, y) {                              //x           y           return            value
    if (x == 0) return y;                         //4           3           fun(3,7)      
    return fun(x - 1, x + y);                     //2           10          fun(2,10)
}                                                 //1           12          fun(1,12)
fun(4, 3);                                        //0           13          fun(0,13)     13(value of y) as x=0

var res = fun(4, 3)
console.log(res)

//3=> 
function fun(n) {
    if (n == 0) return;
    console.log(n % 2);
    fun(Math.floor(n / 2));
}
var res = fun(25);
console.log(res);

//    n      condition        console.log      Math.floor        value 
//    25      false           25%2 = 1       25/2= 12.5 = 12 
//    12      false           12%2 = 0       12/2 = 6
//    6       false           6%2 = 0         6/2 =3
//    3       false           3%2 = 0         3/2 =1.5 = 1
//    1       false           1%2 = 1          1/2=0.5 = 0
//    0       true

//4=> 
function fun(x, y) {
    if (y == 0) return 0;
    return (x + fun(x, y - 1));
}

//5=>
function robot(n, a, b) {
    if (n <= 0) return;
    robot(n - 1, a, b + n);
    console.log(n, a, b);
    robot(n - 1, b, a + n);
}
robot(2, 5, 2);

//6=>
function fun(n) {
    if (n == 0 || n == 1) return n;
    if (n % 3 != 0) return 0;
    return fun(n / 3);
} console.log(fun(15));

//10=> 
function f(n) {
    var i = 1;
    if (n >= 5) return n;
    n = n + i;
    i++;
    return f(n);
}
console.log(f(1));

//11=>
function ths(n) {
    if (n < 1) return;
    ths(n - 1);
    ths(n - 3);
    console.log(n);
}
ths(8);

//12=>
function count(n) {
    var d = 1;
    console.log(n);
    console.log(d);
    d++;
    if (n > 1) count(n - 1);
    console.log(d);
}
count(3);

//13=> 
function f(n) {
    if (n <= 1) {
        console.log(n);
    } else {
        f(Math.floor(n / 2));
        console.log(n % 2);
    }
}
console.log(f(1024));

//14=> 
function f(n) {
    if (n / 2) {
        f(Math.floor(n / 2));
    }
    console.log(n % 2);
}
console.log(f(1024));



