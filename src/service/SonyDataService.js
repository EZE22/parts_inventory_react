import axios from 'axios'

class SonyDataService {

    retrieveAllSonyParts() {
        return axios.get(`http://localhost:8080/getAllSonyParts`)
    }

    deleteSonyPart(id) {
        return axios.delete(`http://localhost:8080/deleteSonyPart/${id}`)
    }

    updateSonyPart(part) {
        return axios.put(`http://localhost:8080/updateSonyPart/`, part)
    }

    addSonyPart(part) {
        return axios.post(`http://localhost:8080/sonyAddNewPart/`, part)
    }

    //Todo: find part by id

}

export default new SonyDataService()