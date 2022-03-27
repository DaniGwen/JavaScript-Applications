import { logout } from "../services/requestService.js";

export const logoutView = async (ctx) => {
    await logout();
    ctx.page.redirect('/');
} 