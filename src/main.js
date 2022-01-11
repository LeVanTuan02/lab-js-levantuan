import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import HomePage from "./pages/home";
import TuyenSinhPage from "./pages/tuyenSinh";
import DaoTaoPage from "./pages/daoTao";
import DoiTacPage from "./pages/doiTac";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import ForgotPassPage from "./pages/forgotPass";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

const changeTitle = (title) => {
    document.title = title;
};

router.on({
    "/": () => {
        changeTitle("Cao đẳng thực hành FPT Polytechnic");
        print(HomePage.render());
    },
    "/tuyen-sinh": () => {
        changeTitle("Tuyển sinh 2022");
        print(TuyenSinhPage.render());
    },
    "/chuong-trinh-dao-tao": () => {
        print(DaoTaoPage.render());
    },
    "/doi-tac": () => {
        changeTitle("Đối tác");
        print(DoiTacPage.render());
    },
    "/news": () => {
        changeTitle("Tin tức");
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(+id));
    },
    "/category/:id": ({ data }) => {
        const { id } = data;
        print(NewsPage.render(false, +id));
    },
    "/signin": () => {
        changeTitle("Đăng nhập");
        print(SigninPage.render());
    },
    "/signup": () => {
        changeTitle("Đăng ký");
        print(SignupPage.render());
    },
    "/forgot": () => {
        changeTitle("Khôi phục tài khoản");
        print(ForgotPassPage.render());
    },
});

router.notFound(() => {
    changeTitle("Awww... Trang này không tồn tại :(");
    print(NotFound.render());
});

router.resolve();