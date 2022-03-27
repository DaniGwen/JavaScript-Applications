import { html } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/booksService.js";

const bookTemplate = (book) => html`
<ul class="other-books-list">
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
</ul>
`
const dashboardTemplate = (books) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${books.length != 0
                ? books.map(book => bookTemplate(book)) 
                : html`<p class="no-books">No books in database!</p>`}
        </section>
`

export const dashboardView = async (ctx) => {
    let books = await bookService.getBooks();

    ctx.render(dashboardTemplate(books));
}