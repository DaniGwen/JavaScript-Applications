import { html } from "../../node_modules/lit-html/lit-html.js";
import { render } from "../../node_modules/lit-html/lit-html.js"; 

const unauthorizedLinks = html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>
`

const authorizedLinks = (user) => html`
<div id="user">
    <span>Welcome, ${user.email}</span>
    <a class="button" href="/myBooks/${user._id}">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>
`

const navigationTemplate = (user) => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="#">Dashboard</a>
        ${user 
        ? authorizedLinks(user)
        : unauthorizedLinks}
    </section>
</nav>
`

export const navigationView = (ctx) => {

    return navigationTemplate(ctx.user);
}