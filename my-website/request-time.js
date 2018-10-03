/**
 * Created by subh on 3/10/18.
 */
/**
 *
 * Options:
 * - 'time' ('Number'): number of ms after which you log (100)
 *
 * @param {object} options
 * @api public
 */

module.exports = function (opts) {
  var time = opts.time || 100;

  return function (req, res, next) {
      var timer = setTimeout(function () {
          console.log('\033[90m %s %s taking too long \033[39m'
          , req.method
          , req.url
          );
      }, time);
      next();
  }
};