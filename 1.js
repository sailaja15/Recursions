function table(x,y){
    if(y == 0 ) return
    console.log(`${x} x ${y} = ${x*y}`)
    table(x,y-1)
}
table(2,10)

function table(x,i,y){
    if (y==0)return;
    console.log(`${x} x ${i} = ${x*i}`)
    table(x,i+1,y-1)
}table(2,1,10)

function table(x,y){
    if(y==0) return
    table(x,y-1)
    console.log(`${x} x ${y} = ${x*y}`)
}
table(2,10)