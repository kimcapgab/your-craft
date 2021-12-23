import Bev from '../models/bev.js'


export const getBevs = async (req, res) => {
  try {
    const bevs = await Bev.find()
    res.json(bevs)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const getBev = async (req, res) => {
  try {
    const { _id } = req.params
    const bev = await Bev.findById(_id)
    if (bev) {
      return res.json(bev)
    } else {
      res.status(404).json({ message: 'Beverage Not Found' })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createBev = async (req, res) => {
  try {
    const bev = await new Bev(req.body)
    await bev.save()
    res.status(201).json(bev)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
