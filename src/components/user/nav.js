import { menuList } from "../../data";

const Nav = {
    render() {
        return `
        <ul class="flex" id="menu">
            ${menuList.map((menu) => `
                <li>
                    <a href="${menu.url}" class="block p-3 text-white transition hover:underline">${menu.title}</a>
                </li>
                `).join("")}
                <li>
                    <a href="/admin/dashboard" class="block p-3 text-white transition hover:underline">Admin</a>
                </li>
                <li>
                    <a href="/signin" class="block p-3 text-white transition hover:underline">Đăng nhập</a>
                </li>
        </ul>
        `;
    },
};

export default Nav;