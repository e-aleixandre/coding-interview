const MergeSortedArrays = (array1, array2) => {
    let i = 0, j = 0;

    const mergedArray = [];

    while (i < array1.length && j < array2.length)
    {
        if (array1[i] > array2[j]) {
            mergedArray.push(array2[j]);
            ++j;
        } else {
            mergedArray.push(array1[i]);
            ++i;
        }
    }

    for(; j < array2.length; ++j)
        mergedArray.push(array2[j]);

    for(; i < array1.length; ++i)
        mergedArray.push(array1[i]);

    return mergedArray;
}

console.log(MergeSortedArrays([1,3,4,7], [2,5,6,8, 10]));
