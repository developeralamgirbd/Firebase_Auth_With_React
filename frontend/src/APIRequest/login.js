import axios from "axios";

const baseUrl = 'http://localhost:8000/api/v1'

export const login = async (token) => {

    const res = await axios.post(baseUrl+'/login', {

    }, {
        headers: {
            'Authorization': token
        }
    });

    return res.data;
}