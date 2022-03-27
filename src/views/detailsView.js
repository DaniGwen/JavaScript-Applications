import { html } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/booksService.js"

const creatorLinks = (book) => html`
<a class="button" href="/edit/${book._id}">Edit</a>
<a class="button" href="/delete/${book._id}">Delete</a>
`

const guestAndUsersLinks = html`
<!-- ( for Guests and Users )  -->
<div class="likes">
    <img class="hearts" src="/images/heart.png">
    <span id="total-likes">Likes: 0</span>
</div>
`

const detailsTemplate = (book, user) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${(user && user._id == book._ownerId)
                ? creatorLinks(book)
                : guestAndUsersLinks}
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`

export const detailsView = async (ctx) => {
    let book = await bookService.getBook(ctx.params.id);

    ctx.render(detailsTemplate(book, ctx.user));
}