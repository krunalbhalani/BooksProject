import axios from "axios";
import { API_BOOKS_ROOT } from "../util/api";

const getBooks = (action) => {
    const url = `${API_BOOKS_ROOT}/api/books?page=${action.page}&itemPerPage=20&filter=[]`;
    return axios
        .post(url)
        .then(response => {
        return response;
        })
        .catch(err => {
        return console.error(err);
        });
}

    export {
        getBooks,
    }