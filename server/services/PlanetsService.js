import { dbContext } from "../db/DbContext.js"


class PlanetsService{

 async getAll(){
    const planets = await dbContext.Planets.find()
    return planets
  }
  async create(planetData){
    const newPlanet = await dbContext.Planets.create(planetData)
    await newPlanet.populate('galaxy')
    return newPlanet
  }

}

export const planetsService = new PlanetsService()