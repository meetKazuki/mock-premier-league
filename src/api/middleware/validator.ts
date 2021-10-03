import { NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { ValidationError } from '@utils/error'

export default (schemas: any) => {
  const validationCheck = async (request: Request, _: Response, next: NextFunction) => {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      const mappedErrors = Object.entries(errors.mapped()).reduce((acc: any, [key, value]) => {
        acc[key] = value.msg
        return acc
      }, {})
      const validationErrors = new ValidationError('validation error', mappedErrors)

      return next(validationErrors)
    }

    return next()
  }

  return [...(schemas.length && [schemas]), validationCheck]
}
