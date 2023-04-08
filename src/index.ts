import 'reflect-metadata';
import { CacheDecorator } from './decorator';
import { services } from './services';
const lruService = process.env.LRU_SERVICE as keyof typeof services;

function fibonacci(n: number) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export class Fibonacci {
  withoutCache(n: number): number {
    return fibonacci(n);
  }

  @CacheDecorator(services[lruService])
  withCache(n: number): number {
    return fibonacci(n);
  }
}
