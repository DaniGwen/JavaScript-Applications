import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const mainElement = document.getElementById("site-content");
const navigationElement = document.getElementById("site-header");

const renderer = (templateResult) => render(templateResult, mainElement);

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), navigationElement);
    next();
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderer;
    next();
}