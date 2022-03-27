import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyBooks } from "../services/booksService.js";

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`

const myBooksTemplate = (myBooks) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    ${myBooks.length != 0
        ? html`<ul class="my-books-list">${myBooks.map(x => bookTemplate(x))}</ul>`
        : html`<p class="no-books">No books in database!</p>`
    }
</section>
`

export const myBooksView = async (ctx) => {
    let myBooks = await getMyBooks(ctx.params.id);

    ctx.render(myBooksTemplate(myBooks));
}