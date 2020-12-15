/**
 * File: \src\server.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 9:54:49 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import './register'

import app from './app'
import config from 'config'

/**
 * Create a express server
 * @param {Express.Application} app
 * @returns {Server} server
 */
const createServer = async app => {
  let x
  /* Listen for connections */
  const port = config.get('connection.port')
  return app.listen(port, () =>
    console.log(`Server listening port ${port}.`)
  )
}

/** Express Server */
export default createServer(app)
