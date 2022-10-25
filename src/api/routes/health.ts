import * as express from 'express'
import * as os from 'os'

const { Router } = express

export const router: express.Router = Router()

router.get('/health', (_: express.Request, response: express.Response) => {
  return response.status(200).json({
    hostname: os.hostname(),
    uptime: os.uptime(),
  })
})
