import PugRouter from "../PugRouter";
import { Request, Response } from "express";
import Logger from "../../logger";

class Login extends PugRouter {
  join(req: Request, res: Response) {
    req.app.render('signup', (err: Error, html: string) => {
      Logger.info(`${req.ip} login`)
      if (err) {
        Logger.err(err.stack || err.toString())
        return
      }

      res.end(html)
    })
  }

  props = {
    url: '/signup',
    type: 'get'
  }
}

export default Login