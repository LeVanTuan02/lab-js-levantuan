import Banner from "../components/banner";
import PostByCate from "../components/postByCate";

const HomePage = {
    render() {
        return `
        ${Banner.render()}

        <section>
            <h2>
                <a href="/category/1" class="text-2xl font-bold uppercase my-4 block text-blue-900">Tin tức học tập</a>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${PostByCate.render(1)}
            </div>
        </section>

        <section class="mb-5">
            <h2>
                <a href="/category/2" class="text-2xl font-bold uppercase my-4 block text-blue-900">Hoạt động sinh viên</a>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${PostByCate.render(2)}
            </div>
        </section>
        `;
    },
};

export default HomePage;