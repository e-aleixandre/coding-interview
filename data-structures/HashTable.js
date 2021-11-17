class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; ++i) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let index = this._hash(key);

        // If it's empty, create the array and push new key, value pair
        if (!this.data[index])
        {
            this.data[index] = [];
            this.data[index].push([key, value]);
        } else {
            // If it's not empty, look for a pair with same key
            let i = 0;
            const bucket = this.data[index];

            // Traverse the bucket until its over or we find the key
            while (i < bucket.length && bucket[i][0] !== key)
                ++i;

            if (i < bucket.length) // The item exists, we have to update it
                bucket[i][1] = value;
            else // The item doesnt exist, push it
                bucket.push([key, value]);
        }
    }

    get(key) {
        const index =  this._hash(key);

        // If there's no bucket, return undefined
        if (!this.data[index])
            return undefined;

        let i = 0;

        while (i < this.data[index].length && this.data[index][i][0] !== key)
            ++i;

        if (i < this.data[index].length)
            return this.data[index][i][1];
        else
            return undefined;
    }

    keys() {
        const keys = [];

        for (let i = 0; i < this.data.length; ++i)
        {
            if (this.data[i])
            {
                for (let j = 0; j < this.data[i].length; ++j)
                    keys.push(this.data[i][j][0]);
            }
        }
        return keys;
    }
}

const hash = new HashTable(6);

hash.set("test", 100);
hash.set("asdas", 101);
hash.set("asjod", 2);
hash.set("oajso", 24);
hash.set("hello", 20);
hash.set("oajsd", 99);
console.log(hash.keys());
console.log(hash.get("asdas"));

