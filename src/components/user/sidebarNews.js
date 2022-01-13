import { categoryList } from "../../data";
import LatestPosts from "./latestPosts";

const SidebarNews = {
    render(newsCateId) {
        return `
        <section>
            <span class="font-bold uppercase">Chuyên mục</span>
            <div class="w-8 h-1 bg-gray-300 mt-2"></div>
            <ul class="mt-2 grid grid-cols-1 divide-y">
                ${categoryList.map((cate) => `
                    <li>
                        <a href="/category/${cate.id}" class="block py-2 ${cate.id === newsCateId ? "font-bold" : ""}">${cate.name}</a>
                    </li>
                    `).join("")}
            </ul>
        </section>

        <section class="mt-7">
            <span class="font-bold uppercase">Bài viết mới</span>
            <div class="w-8 h-1 bg-gray-300 mt-2"></div>
            <ul class="mt-2 grid grid-cols-1 divide-y">
                ${LatestPosts.render()}
            </ul>
        </section>
        `;
    },
};

export default SidebarNews;