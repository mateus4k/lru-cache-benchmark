import { Fibonacci } from '.';
import { services } from './services';
import * as vm from 'node:vm'

const lruService = process.env.LRU_SERVICE as 'withoutCache' | 'cacheLru' | 'mnemonistLru' | 'tinyLru';
const loopNumber = Number(process.env.LOOP_NUMBER);

console.time(lruService);

const context = {
    lruService,
    fibonacci: new Fibonacci(),
    fibonacciNumber: Number(process.env.FIBONACCI_NUMBER),
}

const script = new vm.Script(`
    lruService === 'withoutCache'
        ? fibonacci.withoutCache(fibonacciNumber)
        : fibonacci.withCache(fibonacciNumber);
`);

vm.createContext(context);

for (let i = 0; i < loopNumber; i++) {
    script.runInContext(context);
}

console.timeEnd(lruService);

process.exit(0);
