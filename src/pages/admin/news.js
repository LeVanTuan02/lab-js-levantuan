import AdminNewsList from "../../components/admin/newsList";
import AdminSidebar from "../../components/admin/sidebar";

const AdminNewsPage = {
    render() {
        return /* html */ `
        <div class="grid grid-cols-12">
            ${AdminSidebar.render()}

            <div class="col-span-12 lg:col-span-10 px-5 border-x lg:border-r min-h-[calc(100vh-200px)] pb-5">
                <h1 class="font-bold text-2xl text-center uppercase my-8">Danh sách bài viết</h1>
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                ${AdminNewsList.render()}
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/admin/news/add">
                    <button class="mt-5 mx-auto block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm bài viết</button>
                </a>
            </div>
        </div>
        `;
    },
};

export default AdminNewsPage;