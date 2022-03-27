import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from '../services/requestService.js';

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="register">
    <form @submit=${submitHandler} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`

export const registerView = (ctx) => {
    const submitHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm-pass');
        
        if (!email && !password) {
            return;
        }

        if (password != confirmPassword) {
            alert('Passwords must match');
            return;
        }

        await register(email, password);
        ctx.page.redirect('/');
    }
    ctx.render(registerTemplate(submitHandler));
}