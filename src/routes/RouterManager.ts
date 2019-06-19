import { Application, Router } from "express";
import { Portal } from ".";
import PugRouter from "./PugRouter";
import Logger from "../logger";

class RouterManager {
  static routes: PugRouter[] = [
    new Portal()
  ]

  static async init(app: Application, router: Router) {
    await RouterManager.routes.forEach((route, i) => {
      switch(route.props.type.toUpperCase()) {
        case 'POST':
          router.route(route.props.url).post(route.join)
          break
        default:
          router.route(route.props.url).get(route.join)
          break
      }
      count = i
    })
    await app.use(router)

    await Logger.success(`${RouterManager.routes.length} routes ready`)
  }
}

export default RouterManager