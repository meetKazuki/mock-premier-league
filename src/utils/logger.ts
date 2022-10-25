import * as R from 'ramda'
import pino from 'pino'
import { config } from '@app/config'

const destination = process.stdout
const options: pino.LoggerOptions = {
  enabled: config.logging.stdout.enabled,
  level: config.logging.stdout.level,
  name: config.appName,
  serializers: R.omit(['wrapResponseSerializer'], pino.stdSerializers),
  redact: {
    paths: config.logging.sensitiveParameters,
    censor: '[HIDDEN]',
  },
}

export const logger = pino(options, destination)
