import { Request, Response } from "express";
import Logger from "../logger";

export interface RouterProps {
  url: string
  type: string
}

class PugRouter {
  join(req: Request, res: Response) {
    Logger.warn('Router main method is not overrided')
  }

  props: RouterProps = {
    url: '/',
    type: 'get'
  }
}

export default PugRouter