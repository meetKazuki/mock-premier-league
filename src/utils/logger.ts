import * as expressPinoLogger from 'express-pino-logger'
import * as pino from 'pino'
import { omit } from 'ramda'
import { config } from '@app/config'

const destination = process.stdout
const options: pino.LoggerOptions = {
  enabled: config.logging.stdout.enabled,
  level: config.logging.stdout.level,
  name: config.appName,
  serializers: omit(['wrapResponseSerializer'], pino.stdSerializers),
  redact: {
    paths: config.logging.sensitiveParameters,
    censor: '[HIDDEN]',
  },
}

export const logger = pino(options, destination)
export const httpLogger = expressPinoLogger({ logger })
