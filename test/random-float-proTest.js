const randomFloat = require('../random-float-pro');
const assert = require('chai').assert;
describe('Random Float Pro',function(){
    it('Function Shuld Return A Number',function(){
        assert.typeOf(randomFloat({}), 'number');
    });
    it('Random Value Is In Range',function(){
        let obj = {
            a:1,
            b:5
        }
        assert.isBelow(Math.floor(randomFloat(obj)),5);
        assert.isAtLeast(Math.floor(randomFloat(obj)),1);
        obj = {
            a:10,
            b:25
        }
        assert.isBelow(Math.floor(randomFloat(obj)),25);
        assert.isAtLeast(Math.floor(randomFloat(obj)),10);
        obj = {
            a:-20,
            b:-5
        }
        assert.isBelow(Math.floor(randomFloat(obj)),-5);
        assert.isAtLeast(Math.floor(randomFloat(obj)),-20);
    });

    it('Returned Number Is A Floating Point Number',function(){
      function isFloat(n){
            return Number(n) === n && n % 1 !== 0;
        }
        assert.equal(isFloat(randomFloat({a:1,b:10})),true);
    })
})