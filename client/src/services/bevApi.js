import api from './apiConfig'


export const getBevs = async () => {
  try {
    const res = await api.get('/bevs')
    return res.data
  } catch (error) {
    throw error
  }
}
export const getTypeBev = async (type) => {
  try {
    const res = await api.get(`/bevs/${type}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getBev = async (id) => {
  try {
    const res = await api.get(`/bevs/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createBev = async (bev) => {
  try {
    const res = await api.post('/create', bev)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateBev = async (id, bev) => {
  try {
    const res = await api.put(`/edit/${id}`, bev)
    return res.data
  }catch (error) {
    throw error
  }
}


export const deleteBev = async (id) => {
  try {
    const res = await api.delete(`/edit/${id}`)
    return res.data
  }catch (error) {
    throw error
  }
}