
let assert = require('assert');
const { userInfo } = require('os');


function sumOfTwoArrays(array1, array2) {
    let result = [];
    let ctr = 0;
    let x = 0;

    if (array1.length === 0)
        return "array1 is empty";
    if (array2.length === 0)
        return "array2 is empty";

    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
    }

    if (ctr === array1.length) {
        for (x = ctr; x < array2.length; x++) {
            result.push(array2[x]);
        }
    }
    else {
        for (x = ctr; x < array1.length; x++) {
            result.push(array1[x]);
        }
    }
    return result;
}

function mySubstring(str, first, end) {
    if (!end) {
        return str.slice(first)
    }
    else {
        return str.slice(first, end)
    }

}

describe('mySubstring', () => {

    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', 2, 5), 'mon')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', -1, -5), '')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', a, b), '')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring(123, 0, 'b'), '')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', 0, 20), '')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', 20), '')
    });
    it('inputs are simontombosa and 2', () => {
        assert.equal(mySubstring('simontombosa', 2), 'montombosa')
    });
    it('inputs are simontombosa,2, 5', () => {
        assert.equal(mySubstring('simontombosa', 2, -5), '')
    });
    it('inputs are simontombosa and 2', () => {
        assert.equal(mySubstring('simontombosa', 4, 7), 'nto')
    })

})


describe('sumOfTwoArrays', () => {
    it('[1,2,3], [1,2,3]', () => {
        assert.equal(sumOfTwoArrays([1, 2, 3], [1, 2]), [2, 4, 3])
    });

    it('two equal length arrays', () => {
        assert.equal(mySubstring([4, 2, 3], [1, 2, 10]), [5, 4, 13])
    });

    // it('inputs are simontombosa and 2', () => {
    //     assert.equal(mySubstring('simontombosa', 4, 7), 'nto')
    // })

})



