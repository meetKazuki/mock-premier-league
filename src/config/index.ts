import { mergeDeepRight } from 'ramda'
import { resolve } from 'path'

export interface Config {
  appName: string
  env: string

  server: {
    port: number
  }

  logging: {
    stdout: {
      enabled: boolean
      level: string
      pretty: boolean
    }
    sensitiveParameters: string[]
  }

  database: {
    url: string
  }
}

const env = process.env.NODE_ENV ?? 'local'

if (env === 'local' || env === 'test') {
  require('dotenv').config({ path: resolve(`${__dirname}/../../.env`) })
}

const envConfig = require(`./environments/${env}`)
const defaultConfig = require('./default')

export const config = mergeDeepRight(defaultConfig, envConfig) as object as Config
