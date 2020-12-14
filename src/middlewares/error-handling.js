/**
 * File: \src\middlewares\error-handling.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 10:01:53 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import apiResp, { APIResponse } from '../utils/api-response'

/**
 * Error handler. Capture stack trace only during development
 * @param {APIResponse} error
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
const handler = (error, req, res, next) => {
  return res.status(error.statusCode).json(error.toObject())
}

/**
 * If error is not an instanceOf APIError, convert it
 * @param {any} error
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
const converter = (error, req, res, next) => {
  if (!(error instanceof APIResponse)) {
    error = apiResp.create(apiResp.BAD_REQUEST, error.message, undefined, error.stack)
  }

  return handler(error, req, res, next)
}

/**
 * Catch 404 and forward to error handler
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
const notFound = (req, res, next) => {
  const error = apiResp.create(
    apiResp.NOT_FOUND,
    `Unknown path components: ${req.originalUrl}`
  )

  return handler(error, req, res, next)
}

/**
 * Load Error-handling middlewares
 * @param {Express.Application} app
 */
export const load = app => {
  // if error is not an instanceOf APIResponse, convert it
  app.use(converter)

  // catch 404 and forward to error handler
  app.use(notFound)

  // Response error
  app.use(handler)
}
