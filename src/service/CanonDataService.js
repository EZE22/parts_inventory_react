import axios from 'axios'

class CanonDataService {
    retrieveAllCanonParts() {
        return axios.get(`http://localhost:8080/canonRetrieveAllParts`)
    }

    deleteCanonPart(id) {
        return axios.delete(`http://localhost:8080/canonDeletePartById/${id}`)
    }

    updateCanonPart(part) {
        return axios.put(`http://localhost:8080/updateCanonPart/`, part)
    }

    addCanonPart(part) {
        return axios.post(`http://localhost:8080/canonAddNewPart/`, part)
    }

}

export default new CanonDataService()