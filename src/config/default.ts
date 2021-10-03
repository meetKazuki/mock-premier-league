import { Config } from '@app/config'
import { getEnvironmentValue } from '@utils/helpers'

const config: DeepPartial<Config> = {
  appName: 'mock-pl-api',

  env: getEnvironmentValue('NODE_ENV', 'local'),

  server: {
    port: Number(getEnvironmentValue('PORT', '3000')),
  },

  database: {
    url: getEnvironmentValue('DATABASE_URL'),
  },

  logging: {
    stdout: {
      enabled: true,
      level: 'debug',
      pretty: false,
    },
    sensitiveParameters: [],
  },
}

export = config
