import { menuList } from "../../data";

const Nav = {
    render() {
        return `
        <ul class="flex" id="menu">
            ${menuList.map((menu) => `
                <li>
                    <a href="#${menu.url}" class="block p-3 text-white transition hover:underline">${menu.title}</a>
                </li>
                `).join("")}
                <li>
                    <a href="/#/admin/dashboard" class="block p-3 text-white transition hover:underline">Admin</a>
                </li>
                <li>
                    <a href="/#/signin" class="block p-3 text-white transition hover:underline">Đăng nhập</a>
                </li>
                <li>
                    <a href="/#/signin" id="nav__user" class="block p-3 text-white transition hover:underline">Đăng nhập</a>
                </li>
        </ul>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#nav__user").innerHTML = user.fullName;
    },
};

export default Nav;