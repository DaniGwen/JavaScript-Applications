import { getUserData } from "../services/requestService.js";

export const authMiddleware = (ctx, next) => {
    ctx.user = getUserData();
    next();
}