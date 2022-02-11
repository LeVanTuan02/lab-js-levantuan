import $ from "jquery";
import "slick-carousel";
import Header from "../../components/user/header";
import Footer from "../../components/user/footer";
import Banner from "../../components/user/banner";
import PostByCate from "../../components/user/postByCate";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <main class="container max-w-7xl mx-auto px-2">
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
        </main>
        
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();

        // slider
        $("#banner").slick({
            arrows: false,
            autoplay: true,
        });
    },
};

export default HomePage;