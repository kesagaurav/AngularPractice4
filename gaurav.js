var a=[1,2,3,4,5];
a.filter(a=>a%2==0).map(a=>a*a).forEach(a=>console.log(a));

var b=["gaurav","deepa","omkar","dog"];
console.log("prints the name of the specified person");
b.filter(a=>a.includes("gaurav")).forEach(a=>console.log(a));

var c=[3,3,3,3,4,5,6,7,8,9,10];
console.log('values less than 3');
console.log(c.reverse());


const arr=[[1,2,3],[4,5,6,7,8,9],10,11,12];
console.log("nesting for arrays we use flatMap");//this is useful while revesing
console.log(arr.flat());
console.log("for flatmap is same as map");
console.log(arr.flatMap(a=>a));



var d=[9,8,7,6,5,4,3,2,1,-1,-2];
console.log(d.sort());
//new way of doing sorting
//ascending
d.sort((a,b)=>{
    if(a>b){
        return 1;
    }if(b<a){
        return -1;
    }
});
console.log(d);

//for desending
d.sort((a,b)=>{
    if(a>b){
        return -1;
    }if(a<b){
        return 1;
    }
});
console.log(d);