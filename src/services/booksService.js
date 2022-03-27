import * as requestService from "./requestService.js";

export const getBooks = async () => {
    let books = await requestService.get('/data/books?sortBy=_createdOn%20desc');
    return books;
}

export const getBook = async (itemId) => {
    let book = await requestService.get(`/data/books/${itemId}`);
    return book;
}

export const getMyBooks = async (userId) => {
    let myBooks = await requestService.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return myBooks;
}

export const save = async (itemId, data) => {
    await requestService.put(`/data/books/${itemId}`, data);
}

export const remove = async (itemId) => {
    await requestService.del(`/data/books/${itemId}`)
}
