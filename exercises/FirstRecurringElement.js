const firstRecurringElement = array => {
    const map = {};

    for (const element of array)
    {
        if (map[element])
            return element;
        else
            map[element] = true;
    }

    return undefined;
}
console.log(firstRecurringElement([1,2,3,4,3,5,1,8]));
console.log(firstRecurringElement([1,2,7,4,3,5,1,8]));
console.log(firstRecurringElement([1,2,7,4,3,5,9,8]));
