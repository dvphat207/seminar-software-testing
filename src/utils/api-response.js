/**
 * File: \src\utils\api-response.js
 * Project: seminar-software-testing
 * Created Date: Monday, December 14th 2020, 10:01:20 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import _ from 'lodash'

export class APIResponse {
  /**
   * @param {String} message
   * @param {String} type
   * @param {Number} statusCode
   * @param {Object} details
   */
  constructor (message, type, statusCode, details, stack) {
    this.name = this.constructor.name

    this.type = type
    this.message = message
    this.statusCode = statusCode
    this.details = details
    this.stack = stack
  }

  /** Converts API response to a plain object */
  toObject () {
    const obj = _.pick(this, ['message', 'statusCode', 'type', 'details'])
    if (process.env.NODE_ENV === 'development') {
      obj.stack = this.stack
    }

    return obj
  }
}

/**
 * Create an api response
 * @param {number} statusCode
 * @param {string} message
 */
const create = (statusCode, message, details, stack) => {
  const defaults = {
    200: {
      type   : 'OK',
      message: 'Success'
    },
    201: {
      type   : 'CREATED',
      message: 'Created'
    },
    400: {
      type   : 'BAD_REQUEST',
      message: 'Bad request.'
    },
    401: {
      type   : 'UNAUTHORIZED',
      message: 'Authentication is needed to get requests response.'
    },
    403: {
      type   : 'FORBIDDEN',
      message: 'Permission denied.'
    },
    404: {
      type   : 'NOT_FOUND',
      message: 'Not found.'
    },
    408: {
      type   : 'REQUEST_TIMEOUT',
      message: 'Request timeout.'
    },
    409: {
      type   : 'CONFLICT',
      message: 'Conflict.'
    },
    422: {
      type   : 'UNPROCESSABLE_ENTITY',
      message: 'Unprocessable entity.'
    }
  }

  const response = defaults[statusCode]
  if (!response) {
    throw new Error('Invalid API Response code.')
  }

  return new APIResponse(message || response.message, response.type, statusCode, details, stack)
}

export default {
  create,

  /** HTTP RESPONSES */
  200: 'OK',
  OK : 200,

  CREATED: 201,
  201    : 'CREATED',

  BAD_REQUEST: 400,
  400        : 'BAD_REQUEST',

  UNAUTHORIZED: 401,
  401         : 'UNAUTHORIZED',

  FORBIDDEN: 403,
  403      : 'FORBIDDEN',

  NOT_FOUND: 404,
  404      : 'NOT_FOUND',

  REQUEST_TIMEOUT: 408,
  408            : 'REQUEST_TIMEOUT',

  CONFLICT: 409,
  409     : 'CONFLICT',

  UNPROCESSABLE_ENTITY: 422,
  422                 : 'UNPROCESSABLE_ENTITY'
}
