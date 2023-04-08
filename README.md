# LRU Cache Benchmark

## Usage

```sh
npm run benchmark
```

## Results

```sh
# Parallel
# FIBONACCI_NUMBER = 30
# LOOP_NUMBER = 1000
# MAX_CACHE_SIZE = 100;
tinyLru: 21.9ms
mnemonistLru: 22.362ms
lruCache: 37.416ms
withoutCache: 10.711s

# Parallel
# FIBONACCI_NUMBER = 30
# LOOP_NUMBER = 1000000
# MAX_CACHE_SIZE = 100;
lruCache: 2.901s
mnemonistLru: 3.159s
tinyLru: 3.225s

# Isolated
# FIBONACCI_NUMBER = 30
# LOOP_NUMBER = 1000000
# MAX_CACHE_SIZE = 100;
lruCache: 2.588s
mnemonistLru: 2.934s
tinyLru: 2.803s
```
