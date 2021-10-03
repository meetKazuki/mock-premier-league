export class APIError extends Error {
  public type: string
  public statusCode: number
  public errors?: any
  public data?: ErrorData

  public constructor(type: string, message: string, statusCode?: number, data?: ErrorData) {
    super(message)

    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.type = type
    this.statusCode = Number(statusCode ?? 500)
    if (data) this.data = data
  }
}

export class BadRequestError extends APIError {
  public constructor(message = 'bad request', type = 'E_BAD_REQUEST') {
    super(type, message, 400)
  }
}

export class UnauthorizedError extends APIError {
  public constructor(message = 'user was not authorized', type = 'E_UNAUTHORIZED') {
    super(type, message, 401)
  }
}

export class ForbiddenError extends APIError {
  public constructor(message = 'user not allowed to access resource', type = 'E_FORBIDDEN') {
    super(type, message, 403)
  }
}

export class RecordNotFoundError extends APIError {
  public constructor(message = 'record does not exist', type = 'E_NOT_FOUND') {
    super(type, message, 404)
  }
}

export class ConflictError extends APIError {
  public constructor(message = 'conflict', type = 'E_CONFLICT') {
    super(type, message, 409)
  }
}

export class ValidationError extends APIError {
  public constructor(message: string, errors?: any, type = 'E_VALIDATION') {
    super(type, message, 422)
    if (errors) this.errors = errors
  }
}

export class InternalServerError extends APIError {
  public constructor(message = 'internal server error', type = 'E_INTERNAL_SERVER_ERROR') {
    super(type, message, 500)
  }
}
