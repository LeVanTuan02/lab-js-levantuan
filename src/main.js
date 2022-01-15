import Navigo from "navigo";
import NotFound from "./pages/user/notFound";
import HomePage from "./pages/user/home";
import TuyenSinhPage from "./pages/user/tuyenSinh";
import DaoTaoPage from "./pages/user/daoTao";
import DoiTacPage from "./pages/user/doiTac";
import NewsPage from "./pages/user/news";
import DetailNewsPage from "./pages/user/detailNews";
import SigninPage from "./pages/auth/signin";
import SignupPage from "./pages/auth/signup";
import ForgotPassPage from "./pages/auth/forgotPass";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import AdminNewsEditPage from "./pages/admin/news/edit";
import AdminDashboardPage from "./pages/admin/dashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
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
        changeTitle("Chương trình đào tạo");
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
        changeTitle("Bài viết");
        const { id } = data;
        print(DetailNewsPage.render(+id));
    },
    "/category/:id": ({ data }) => {
        changeTitle("Tin tức");
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
    "/admin/news": () => {
        changeTitle("Admin | News");
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        changeTitle("Admin | Add News");
        print(AdminNewsAddPage.render());
    },
    "/admin/news/:id/edit": ({ data }) => {
        changeTitle("Admin | Edit News");
        const { id } = data;
        print(AdminNewsEditPage.render(+id));
    },
    "/admin/dashboard": () => {
        changeTitle("Admin | Dashboard");
        print(AdminDashboardPage.render());
    },
});

router.notFound(() => {
    changeTitle("Awww... Trang này không tồn tại :(");
    print(NotFound.render());
});

router.resolve();
// a