import PugRouter from "../PugRouter";
import { Request, Response } from "express";
import Logger from "../../logger";

class Game extends PugRouter {
  join(req: Request, res: Response) {
    if(!req.session || !req.session.verified) {
      res.redirect('/login')
      return
    }

    req.app.render('game', (err: Error, html: string) => {
      Logger.info(`${req.ip} game`)
      if (err) {
        Logger.err(err.stack || err.toString())
        return
      }

      res.end(html)
    })
  }

  props = {
    url: '/game',
    type: 'get'
  }
}

export default Game