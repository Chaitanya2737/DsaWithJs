
function main(){
    let array = [0,0,1,1,1,2,2,3,3,4];
   let result= fun(array)
    console.log(result)
}


function fun(array){

 let count=-1;
for (let i = 0; i < array.length; i++){
   if (array[i] !== array[i+1]) {
    array[++count] =  array[i]
   }
}
return count + 1
}


main()