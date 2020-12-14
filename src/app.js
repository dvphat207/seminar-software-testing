/**
 * File: \src\app.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 9:55:31 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import express from 'express'

import router from './router'
import { load as loadAppMiddlewares } from './middlewares/app'
import { load as loadErrorHandling } from './middlewares/error-handling'

/** Express Application */
const app = express()

// Shows the real origin IP logs
app.enable('trust proxy')

/* ======== Load Application-Level middlewares ======== */
loadAppMiddlewares(app)

/* ================== Mount Routes ================== */
app.use(router)

/* ======== Use Error-handling middlewares ======== */
loadErrorHandling(app)

export default app
