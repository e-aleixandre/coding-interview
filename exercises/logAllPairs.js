// Log all pairs of array
const array = [1, 2, 3, 4, 5];

/*for (let i = 0; i < array.length; ++i)
{
    for (let j = 0; j < array.length; ++j)
    {
            console.log(i,j);
    }
}*/

array.forEach(el => {
    array.forEach(el2 => {
        console.log(el, el2);
    })
})

// O(n^2)
