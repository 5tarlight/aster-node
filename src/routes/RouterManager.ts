import { Application, Router } from "express";
import { Portal } from ".";
import PugRouter from "./PugRouter";
import Logger from "../logger";

class RouterManager {
  static readonly routes: PugRouter[] = [
    new Portal()
  ]

  static init(app: Application, router: Router) {
    let count: number = 0

    RouterManager.routes.forEach((route, i) => {
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
    app.use(router)

    Logger.success(`${count} routes ready`)
  }
}

export default RouterManager