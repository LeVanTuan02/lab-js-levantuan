import { menuList } from "../data";

const Nav = {
    render() {
        return `
        <ul class="flex" id="menu">
            ${menuList.map((menu) => `
                <li>
                    <a href="${menu.url}" class="block p-3 text-white transition hover:underline">${menu.title}</a>
                </li>
                `).join("")}
        </ul>
        `;
    },
};

export default Nav;