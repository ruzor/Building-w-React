import axios from 'axios';
const baseUrl = '/api/persons'

const getAllPersons = async () => {
    try {
        const response = await axios.get(baseUrl);
        if (!response.data.data) {
            throw new Error("something went wrong")
        }
        return response.data.data;
    } catch (error) {
        throw error
    }
}

const createPerson = async person => {
    let response;
    try {
        response = await axios.post(baseUrl, person);
        if (!response.data.data) {
            throw new Error("no data prop")
        }
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

const deletePerson = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response;
    } catch (error) {
        throw error
    }
}

const updatePerson = async person => {
    try {
        const response = await axios.put(`${baseUrl}/${person.id}`, person);
        if (!response.data.data) {
            throw new Error("something went wrong")
        }
        return response.data.data;
    } catch (error) {
        throw error
    }
}

export default { getAllPersons, createPerson, deletePerson, updatePerson }