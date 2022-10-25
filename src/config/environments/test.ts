import type { Config } from '@app/config'

const config: DeepPartial<Config> = {

  logging: {
    stdout: {
      enabled: false,
    },
  },
}

export = config
