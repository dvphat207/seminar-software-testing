/**
 * File: \src\routes\api\index.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 11:35:50 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

export default [
  {
    method    : 'GET',
    path      : '/',
    controller: (req, res, next) => res.json({
      message   : 'Seminar Software Testing',
      statusCode: 200
    })
  }
]
