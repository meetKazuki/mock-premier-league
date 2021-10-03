import { Request, Response, NextFunction } from 'express'
import { APIError } from '@utils/error'
import { config } from '@app/config'
import { logger } from '@utils/logger'

export default (error: APIError, _: Request, response: Response, next: NextFunction) => {
  const isProduction = config.env === 'production'
  let errorMessages = {}

  if (response.headersSent) return next(error)
  if (!isProduction) {
    logger.error(error)
    errorMessages = error
  }

  return response.status(error.statusCode || 500).json({
    error: {
      message: error.message,
      ...(!isProduction && { trace: errorMessages }),
    },
  })
}
