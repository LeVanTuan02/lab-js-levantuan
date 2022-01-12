import RelatedPostList from "../components/relatedPost";
import SidebarNews from "../components/sidebarNews";
import { postList, categoryList } from "../data";

const DetailNewsPage = {
    render(id) {
        const result = postList.find((post) => post.id === id);
        // thông tin danh mục
        const cateData = categoryList.find((category) => category.id === result.cate_id);
        return /* html */ `
        <section class="text-center mt-7 border-b border-dashed">
            <h4 class="uppercase text-sm font-semibold">${cateData.name}</h4>
            <h1 class="uppercase font-bold text-xl my-2">${result.title}</h1>
            <span class="block mb-4 text-sm">POSTED ON 29/12/2021 BY ADMIN</span>
        </section>

        <section class="grid grid-cols-12 mt-3 mb-5">
            <div class="col-span-9 px-4">
                <div class="border-b pb-5 border-dashed">
                    <img class="h-72 mx-auto" src="${result.image}" alt="">
                    <p class="leading-relaxed mt-3 text-justify">
                        ${result.description}
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold uppercase my-4">Bài viết liên quan</h3>
                    ${RelatedPostList.render(cateData.id, id)}
                </div>
            </div>
            <aside class="col-span-3 border-l px-4">
                ${SidebarNews.render(cateData.id)}
            </aside>
        </section>
        `;
    },
};

export default DetailNewsPage;