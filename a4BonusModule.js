/* function add(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i + add(i - 1);
}
const sum = add(5);
console.log(sum); */
//----------------factorial------------
/* let factorial = 1;
for(let i=5; i>=1; i--)
{
    factorial = factorial * i;
}
console.log(factorial); */
//----------factorial using recurssion----------
function factorial(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i * factorial(i-1);
}
let result = factorial(5);
console.log(result);