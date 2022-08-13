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
/* for(const number of numbers)
{
    console.log(number);
} */
const products = [
  { id: 101, name : "oppo phone", price : 10000 },
  { id: 102, name : "microsoft laptop", price : 11000 },
  { id: 103, name : "xaome phone", price : 12000 },
  { id: 104, name : "realme laptop", price : 13000 },
  { id: 106, name : "walton phone", price : 14000 },
  { id: 107, name : "walton phones", price : 14000 },
  { id: 108, name : "walton LAPTOP", price : 14000 },
  { id: 109, name : "walton phone", price : 14000 },
  { id: 110, name : "walton phone", price : 14000 }
];
/* for(const product of products)
{
    console.log(product);
} */
function matchedProducts(products, search)
{
    const matched = [];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'laptop');
console.log(result);
