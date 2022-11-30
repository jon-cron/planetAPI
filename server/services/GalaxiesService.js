import { dbContext } from "../db/DbContext.js"



class GalaxiesService{

 async getAll(){
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
async create(galaxyData){
  const newGalaxy = dbContext.Galaxies.create(galaxyData)
  return newGalaxy
}
}

export const galaxiesService = new GalaxiesService()