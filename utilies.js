// var Promise = require('bluebird')
// module.exports = function (genFn) {
//     var cr = Promise.coroutine(genFn)
//     return function (req, res, next) {
//         cr(req, res, next).catch(next)
//     }
// }