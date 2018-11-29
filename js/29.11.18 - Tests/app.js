// module.exports = function () {
//     return 'hello';
// }

module.exports = {
    hello: function () {
        return 'hello';
    },
    sumArray: function(arr) {
        return arr.reduce((sum, x) => sum + x, 0);
    },

    mintemp: function(...args) {
        // let result = args.map(el => 0 - el);
        // let result = args.map(el => Math.abs(el));
        // return Math.min(...result);
        let plus = args.filter(el => el > 0);
        let minus = args.filter(el => el < 0);
        let plusResult = Math.min(...plus);
        let minResult = Math.max(...minus);
        return Math.abs(plusResult) > Math.abs(minResult) ? minResult : plusResult;
    }
}

// module.exports= {
//     hello: function () {
//         return 'hello';
//     },
    // sumArray: function(arr) {
    //     return arr.reduce((sum, x) => sum + x, 0);
    // }
// }

// module.exports = function sumArray(arr) {
//     return arr.reduce((sum, x) => sum + x, 0);
// }