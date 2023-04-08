import { LRUCache as lruCache } from 'lru-cache';
import { LRUCache as mnemonistLru } from 'mnemonist'
import { lru as tinyLru } from 'tiny-lru';

const maxCacheSize = Number(process.env.MAX_CACHE_SIZE);

export const services = {
    lruCache: new lruCache({ max: maxCacheSize }),
    mnemonistLru: new mnemonistLru(maxCacheSize),
    tinyLru: tinyLru(maxCacheSize),
};
