/**
 * File: \src\router.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 10:06:52 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import routes from './routes'
import { Router } from 'express'

/** Generate API */
const generateAPI = routes => {
  const router = Router()

  for (const { method, path, handlers = [], controller } of routes) {
    router[method.toLowerCase()](path, ...handlers, controller)
  }

  return router
}

/** Application Router */
const router = Router()
router.use('/api', generateAPI(routes.api))

export default router
