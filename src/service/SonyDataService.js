import axios from 'axios'

class SonyDataService {

    retrieveAllNikonParts() {
        return axios.get(`http://localhost:8080/getAllSonyParts`)
    }

    deleteNikonPart(id) {
        return axios.delete(`http://localhost:8080/deleteSonyPart/${id}`)
    }

    updateNikonPart(part) {
        return axios.put(`http://localhost:8080/updateSonyPart/`, part)
    }

    addNikonPart(part) {
        return axios.post(`http://localhost:8080/sonyAddNewPart/`, part)
    }

    //Todo: find part by id

}

export default new SonyDataService()