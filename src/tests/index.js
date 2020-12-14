/**
 * File: \src\tests\index.js
 * Project: seminar-software-testing
 * Created Date: Tuesday, December 15th 2020, 2:28:25 am
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

const mocha = require('mocha')

console.log(mocha)
mocha.describe('Seminar Software Testing', function () {
  mocha.it('Success', function (done) {
    const flag = 5
    if (flag === 5) {
      done()
    } else {
      done(new Error('Failed.'))
    }
  })
})
