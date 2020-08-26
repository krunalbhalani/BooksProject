import { BookActionTypes } from "../util/api"

export const fetchListBooks = (page) => {
    return {
        type: BookActionTypes.FETCH_LIST_BOOKS,
        page,
    }
}

export const fetchListBooksSuccess = (data, page) => {
    return {
        type: BookActionTypes.FETCH_LIST_BOOKS_SUCESS,
        payload: data,
        page,
    }
}
