import type { Server } from 'http'
import type { Express } from 'express'
import * as express from 'express'
import { config } from '@app/config'
import { logger } from '@utils/logger'
import { router as health } from '@routes/health'

export default class Application {
  app: Express
  private server: Server | null

  constructor() {
    this.app = express()
    this.server = null
    this.setup()
  }

  static fatal = (error: Error): void => {
    process.removeAllListeners('uncaughtException')
    process.exitCode = 1
    logger.fatal(error, 'fatal error occurred. exiting the app...')
  }

  async start(): Promise<void> {
    process.once('uncaughtException', Application.fatal)
    process.once('unhandledRejection', (reason, promise) => {
      process.removeAllListeners('unhandledRejection')
      logger.fatal('unhandled rejection at: %o %s %o', [promise, 'with reason: ', reason])
    })

    process.once('SIGINT', () => void this.stop())
    process.once('SIGTERM', () => void this.stop())

    return await new Promise<void>(resolve => {
      this.server = this.app.listen(config.server.port, () => {
        const port = config.server.port
        logger.info(`🌎: ==> Server listening on port ${port.toString()}`)
      })

      return resolve()
    })
  }

  async stop(): Promise<void> {
    if (!this.server) {
      logger.warn('server not initialized yet.')
      return
    }

    process.removeAllListeners('SIGINT')
    process.removeAllListeners('SIGTERM')

    logger.info('stopping server...')
    this.server.close(() => {
      logger.info('server stopped.')
    })
  }

  private setup(): void {
    this.app.use(health)
  }
}
