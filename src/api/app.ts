import * as express from 'express'
import { Server } from 'http'
import { config } from '@app/config'
import { logger, httpLogger } from '@utils/logger'

export default class Application {
  public app: express.Express
  private server: Server | null

  public constructor() {
    this.app = express()
    this.server = null
    this.setup()
  }

  private setup(): void {
    this.app.use(express.json({ limit: '50mb' }))
    this.app.use(express.urlencoded({ extended: false, limit: '50mb' }))
    this.app.use(httpLogger)

    this.app.on('error', (error) => logger.error({ error }, 'unhandled app error'))
  }

  public static fatal(error: Error): void {
    process.removeAllListeners('uncaughtException')
    process.exitCode = 1
    logger.fatal({ error }, 'fatal error occurred. exiting the app')
  }

  public async start(): Promise<void> {
    process.on('uncaughtException', Application.fatal)
    process.on('unhandledRejection', (reason, promise) => {
      process.removeAllListeners('unhandledRejection')
      logger.fatal('unhandled rejection at:', promise, 'reason:', reason)
    }
    )

    await new Promise((resolve) => {
      this.server = this.app.listen(config.server.port, () =>
        logger.info(`🌎 => server listening on port ${config.server.port}`)
      )
      return resolve(null)
    })
  }

  async stop(): Promise<void> {
    if (!this.server) {
      logger.warn('server was not initialized yet')
      return
    }

    try {
      logger.info('closing database connection...')
    } catch (error) {
      process.exitCode = 1
      logger.error('failed to close server connections', error)
    } finally {
      logger.info('stopping server...')
      this.server.close(() => logger.info('server stopped'))
    }
  }
}
