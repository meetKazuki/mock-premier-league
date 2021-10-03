import { Config } from '@app/config'
import { getEnvironmentValue } from '@utils/helpers'

const config: DeepPartial<Config> = {
  logging: {
    stdout: {
      enabled: true,
      level: 'debug',
      pretty: true,
    },
  },

  database: {
    url: getEnvironmentValue('DATABASE_URL'),
  },
}

export = config
