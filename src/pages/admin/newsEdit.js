import AdminSidebar from "../../components/admin/sidebar";
import { categoryList, postList } from "../../data";

const AdminNewsEditPage = {
    render(id) {
        const postDetails = postList.find((post) => post.id === id);

        return /* html */ `
        <div class="grid grid-cols-12">
            ${AdminSidebar.render()}

            <div class="col-span-12 lg:col-span-10 px-5 border-x lg:border-r m-h-[calc(100vh-230px)]">
                <h1 class="font-bold text-2xl text-center uppercase my-8">Cập nhật bài viết</h1>
                <div class="mt-5 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="title" class="block text-sm font-medium text-gray-700">Tiêu đề bài viết</label>
                                        <input type="text" name="title" id="title" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tiêu đề bài viết" value="${postDetails.title}">
                                    </div>
        
                                    <div class="col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Mô tả</label>
                                        <textarea id="description" name="description" rows="3" class="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập mô tả bài viết">${postDetails.description}</textarea>
                                    </div>
        
                                    <div class="col-span-6 md:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Danh mục bài viết</label>
                                        <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn danh mục bài viết --</option>
                                            ${categoryList.map((cate) => `
                                                <option value="${cate.id}" ${cate.id === postDetails.cate_id ? "selected" : ""} >${cate.name}</option>
                                                `).join("")}
                                        </select>
                                    </div>
        
                                    <div class="col-span-6 md:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                                        <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn trạng thái bài viết --</option>
                                            <option value="0" ${!postDetails.status ? "selected" : ""}>Ẩn</option>
                                            <option value="1" ${postDetails.status ? "selected" : ""}>Hiển thị</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cập nhật bài viết
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        `;
    },
};

export default AdminNewsEditPage;