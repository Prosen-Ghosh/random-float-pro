var randomFloat = (function(){
    'use strict';
    function float(options){
        const ops = {};
        if(!(options instanceof Object)){
            throw ": Parameter must be a object.";
            return;
        }
        if(options === undefined){
            ops = {
                min,max,fractionDigit
            }
        }
        else {
            ops.min = options[Object.keys(options)[0]];
            ops.max = options[Object.keys(options)[1]];
            ops.fractionDigit = options[Object.keys(options)[2]];
        }
        if(ops.min === undefined && ops.max !== undefined){
            ops.min = 0;
        }
        if(ops.min === undefined && ops.max === undefined) {
            ops.min = 0;
            ops.max = 0;
        }
        if(ops.max === undefined && ops.min !== undefined){
            ops.max = ops.min;
            ops.min = 0;
        }
        return ops.fractionDigit === undefined ?
               (Math.random() * (ops.max - ops.min) + ops.min) :
               +(Math.random() * (ops.max - ops.min) + ops.min).toFixed(ops.fractionDigit);
    }
    return float;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = randomFloat;
}