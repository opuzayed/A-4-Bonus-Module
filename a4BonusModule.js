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
/* function factorial(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i * factorial(i-1);
}
let result = factorial(5);
console.log(result); */
//----------------array------------
const numbers = [10, 11, 12, 14, 16];
/* for(let i=0; i<numbers.length; i++)
{
    const number = numbers[i];
    console.log(number);
} */
//---------------------or(using forofloop)--------------------
for(const number of numbers)
{
    console.log(number);
}

