import { Schema } from "mongoose";


export const GalaxySchema = new Schema (
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
  }, {timestamps: true, toJSON: {virtuals: true}}
)