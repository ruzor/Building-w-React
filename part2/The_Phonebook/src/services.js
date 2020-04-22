import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const createPerson = async person => {
    const response = await axios.post(baseUrl, person);
    return response.data;
}

const deletePerson = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}

const updatePerson = async person => {
    const response = await axios.put(`${baseUrl}/${person.id}`, person);
    return response.data;
}

export default {getAllPersons, createPerson, deletePerson, updatePerson}