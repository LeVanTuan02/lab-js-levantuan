import { postList } from "../data";

const PostByCate = {
    render(cateId) {
        const postsByCate = postList.filter((post) => post.cate_id === cateId);
        return `
        ${postsByCate.map((post) => `
            <div class="border border-gray-300 p-3 transition duration-300 linear hover:border-red-400">
                <div class="overflow-hidden">
                    <a href="/news/${post.id}" style="background-image: url('${post.image}');" class="block bg-no-repeat bg-center transition duration-300 ease-linear bg-cover hover:scale-105 pt-[65%]"></a>
                </div>

                <div>
                    <h3>
                        <a href="/news/${post.id}" class="text-lg leading-6 block py-2 text-amber-700 font-medium transition hover:underline">${post.title}</a>
                    </h3>
                    <p class="text-justify pb-2">
                        ${post.description}
                    </p>
                </div>
            </div>
            `).join("")}
        `;
    },
};

export default PostByCate;