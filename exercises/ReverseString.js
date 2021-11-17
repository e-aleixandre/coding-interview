const reverseString = str => {
    const array = str.split('');

    for (let i = 0; i < array.length / 2; ++i)
    {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array.join('');
}

console.log(reverseString("abcdefg"));
