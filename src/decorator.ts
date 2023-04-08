const lruService = process.env.LRU_SERVICE as 'withoutCache' | 'cacheLru' | 'mnemonistLru' | 'tinyLru';

export function CacheDecorator(cache: { get: Function, set: Function }) {
    return function (_target: any, _propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = propertyDescriptor.value;

        propertyDescriptor.value = function (...args: any[]) {
            const key = lruService + JSON.stringify(args);
            const cachedValue = cache.get(key);

            if (cachedValue !== undefined) return cachedValue;

            const result = originalMethod.apply(this, args);

            cache.set(key, result);

            return result;
        }

        return propertyDescriptor;
    }
}
