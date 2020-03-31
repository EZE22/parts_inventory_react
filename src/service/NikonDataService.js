import axios from 'axios'

class NikonDataService {

    retrieveAllNikonParts() {
        return axios.get(`http://localhost:8080/nikonRetrieveAllParts`)
    }

    deleteNikonPart(id) {
        return axios.delete(`http://localhost:8080/nikonDeletePartById/${id}`)
    }

    updateNikonPart(part) {
        return axios.put(`http://localhost:8080/updateNikonPart/`, part)
    }

    addNikonPart(part) {
        return axios.post(`http://localhost:8080/nikonAddNewPart/`, part)
    }

}

export default new NikonDataService()