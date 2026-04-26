import { formatSize } from './app/lib/utils';

function test() {
    const tests = [
        { input: 0, expected: '0 Bytes' },
        { input: 1024, expected: '1 KB' },
        { input: 1048576, expected: '1 MB' },
        { input: 1073741824, expected: '1 GB' },
        { input: 1536, expected: '1.5 KB' },
        { input: 1234567, expected: '1.18 MB' },
    ];

    tests.forEach(({ input, expected }) => {
        const result = formatSize(input);
        if (result === expected) {
            console.log(`PASS: ${input} -> ${result}`);
        } else {
            console.error(`FAIL: ${input} -> expected ${expected}, got ${result}`);
        }
    });
}

test();
