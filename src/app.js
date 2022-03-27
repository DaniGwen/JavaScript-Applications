import page from "../node_modules/page/page.mjs";
import { dashboardView } from "./views/dashboardView.js";
import { renderNavigationMiddleware, renderContentMiddleware } from "./middlewares/renderMiddleware.js";
import { detailsView } from "./views/detailsView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logoutView } from "./views/logoutView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";
import { myBooksView } from "./views/myBooksView.js";


page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', dashboardView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/create', createView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/myBooks/:id', myBooksView);

page.start();