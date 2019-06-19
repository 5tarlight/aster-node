import PugRouter from "./PugRouter";
import { Request, Response } from "express";
import Logger from "../logger";

class Portal extends PugRouter {
  join(req: Request, res: Response) {
    req.app.render('portal', (err: Error, html: string) => {
      if(err) {
        Logger.err(err.stack || err.toString())
        return
      }
  
      res.end(html)
    })
  }

  props = {
    url: '/',
    type: 'get'
  }
}

export default Portal