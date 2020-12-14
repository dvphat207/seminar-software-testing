/**
 * File: \src\middlewares\app\index.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 10:01:44 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

/**
 * Load Application-Level middlewares
 * @param {Express.Application} app
 */
export const load = app => {
/* ======= Use Application-level middlewares ======= */
// Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app
  app.use(compression())

  // Secure your Express apps by setting various HTTP header
  app.use(helmet())

  // Enable CORS - Cross Origin Resource Sharing
  app.use(cors())

  // Parses incoming requests with JSON payloads
  app.use(express.json())

  // Parses incoming requests with urlencoded payloads
  app.use(express.urlencoded({ extended: true }))

  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
  app.use(cookieParser())
}
