import * as Express from 'express'

type BodyObject = {
  [key: string]: string
}

declare module 'express' {
  interface Request extends Express.Request {
    body: BodyObject
  }
}
