import { Request, Response } from "express";
import Logger from "../logger";

class PugRouter {
  join(req: Request, res: Response) {
    Logger.warn('Router main method is not overrided')
  }
}

export default PugRouter