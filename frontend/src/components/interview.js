let str='10+10'
let a=10;
let b=50;

// '12+15'

function convertString(str,a,b){

 let Nums=str.split('+')
//  console.log(Nums);
Nums[0]=Nums[0]*1+a;
Nums[1]=Nums[1]*1+b;
let res=Nums.join('+')
console.log(res)

}

convertString(str,a,b)