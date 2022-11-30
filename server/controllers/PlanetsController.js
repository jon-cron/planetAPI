import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";




export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
    .get('', this.getAll)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
  }
 async getAll(req, res, next){
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next){
    try {
      
    // req.body.galaxyId = req.userInfo.id
      const newPlanet = await planetsService.create(req.body)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
}