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
    document.querySelector("#app").innerHTML = content.render();
};

const changeTitle = (title) => {
    document.title = title;
};

router.on({
    "/": () => {
        changeTitle("Cao đẳng thực hành FPT Polytechnic");
        print(HomePage);
    },
    "/tuyen-sinh": () => {
        changeTitle("Tuyển sinh 2022");
        print(TuyenSinhPage);
    },
    "/chuong-trinh-dao-tao": () => {
        changeTitle("Chương trình đào tạo");
        print(DaoTaoPage);
    },
    "/doi-tac": () => {
        changeTitle("Đối tác");
        print(DoiTacPage);
    },
    "/news": () => {
        changeTitle("Tin tức");
        print(NewsPage);
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
        print(SigninPage);
    },
    "/signup": () => {
        changeTitle("Đăng ký");
        print(SignupPage);
    },
    "/forgot": () => {
        changeTitle("Khôi phục tài khoản");
        print(ForgotPassPage);
    },
    "/admin/news": () => {
        changeTitle("Admin | News");
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        changeTitle("Admin | Add News");
        print(AdminNewsAddPage);
    },
    "/admin/news/:id/edit": ({ data }) => {
        changeTitle("Admin | Edit News");
        const { id } = data;
        print(AdminNewsEditPage.render(+id));
    },
    "/admin/dashboard": () => {
        changeTitle("Admin | Dashboard");
        print(AdminDashboardPage);
    },
});

router.notFound(() => {
    changeTitle("Awww... Trang này không tồn tại :(");
    print(NotFound);
});

router.resolve();