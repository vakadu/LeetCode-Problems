class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    put(key, val) {
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, val);
        } else {
            if (this.map.size >= this.capacity) {
                let firstKey;
                for (let key of this.map.keys()) {
                    firstKey = key;
                    break;
                }
                this.map.delete(firstKey);
            }
            this.map.set(key, val);
        }
    }

    get(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }

        return -1;
    }
}

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
