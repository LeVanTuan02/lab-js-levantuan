import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { remove } from "../../../api/posts";
import AdminNav from "../../../components/admin/nav";
import AdminNewsList from "../../../components/admin/newsList";
import AdminNewsSearch from "../../../components/admin/newsSearch";

const AdminNewsPage = {
    async render() {
        return /* html */ `
        <div class="min-h-full">
            ${AdminNav.render("news")}
        
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                    Danh sách bài viết
                    </h1>

                    <a href="/#/admin/news/add">
                        <button type="button" class="h-9 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                        </button>
                    </a>
                </div>
            </header>
            
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        ${AdminNewsSearch.render()}
                        
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        ${await AdminNewsList.render()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // xóa
        const btnDeleteElements = document.querySelectorAll(".btn-remove");

        btnDeleteElements.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                Swal.fire({
                    title: "Bạn có chắc chắn muốn xóa bài viết này không?",
                    text: "Sau khi xóa, bạn không thể hoàn tác!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        remove(id)
                            .then(() => {
                                Swal.fire(
                                    "Thành công!",
                                    "Bài viết đã bị xóa.",
                                    "success",
                                );
                            })
                            .then(() => document.querySelector(`.post-item-${id}`).remove());
                    }
                });
            });
        });
    },
};

export default AdminNewsPage;