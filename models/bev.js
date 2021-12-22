import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Bev = new Schema(
  
    {
      title: { type: String, required: true },
      style: { type: String, required: true },
      aroma: { type: String, required: true },
      description: { type: String, required: true },
      abv: { type: String, required: true },
      taste: { type: String, required: true },
      website: { type: String, required: true },
      imgURL: { type: String, required: true },
      type: { type: String, required: true },
    },
  { timestamps: true }
  
  
)

export default mongoose.model("bevs", Bev)