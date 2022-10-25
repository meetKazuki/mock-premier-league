import * as R from 'ramda'
import 'dotenv/config'

const env = process.env.NODE_ENV ?? 'local'

export interface Config {
  appName: string
  env: string

  logging: {
    stdout: {
      enabled: boolean
      level: string
      pretty: boolean
    }
    sensitiveParameters: string[]
  }

  server: {
    concurrency: string | number
    port: number
  }
}

export const getEnvironmentValue = (key: string, defaultValue?: string): string => {
  const envVal = process.env[key] ?? defaultValue

  if (!envVal) {
    throw new Error(`env variable ${key} has to be defined`)
  }

  return envVal
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
const envConfig = require(`./environments/${env}`)
const defaultConfig = require('./default')
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export const config: Config = R.mergeDeepRight(defaultConfig, envConfig)
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
