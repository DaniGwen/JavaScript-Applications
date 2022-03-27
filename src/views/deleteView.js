import { remove } from "../services/booksService.js";

export const deleteView = async (ctx) => {
    await remove(ctx.params.id);
    ctx.page.redirect('/');
}