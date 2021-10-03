import 'module-alias/register'
import Application from '@app/api/app'

const app = new Application()

const shutdown = async (): Promise<void> => await app.stop()

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

app.start().catch(Application.fatal)
