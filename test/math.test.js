/* eslint-disable no-undef */
const helper = require('../utils/helper');

describe('Arithmetic Test', () => {
    test('Adding 1 + 1 equals 2', () => {
        const arrayToAdd = [4,3,3];
        expect(helper.addMultipleNumbers(arrayToAdd)).toBe(10)
    });

    test('Test Promise', () => {
        helper.isAuthorizedPromise(['abc123', 'abc125'], 'abc123').then((value) => {
            expect(value).toBe(true)
        })
    })
})

