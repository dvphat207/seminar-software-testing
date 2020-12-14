/**
 * File: \src\register.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 9:55:42 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

/** Handle process events */
process.on('uncaughtException', error => {
  console.log('Uncaught Exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at ', promise, 'with reason ', reason)
})
