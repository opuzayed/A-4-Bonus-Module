function add(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i + add(i - 1);
}
const sum = add(5);
console.log(sum);