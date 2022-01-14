const AdminNewsSearch = {
    render() {
        return /* html */ `
        <form action="" class="flex rounded-md shadow-sm mb-5" method="POST">
            <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 px-4 py-2 border outline-none" placeholder="Nhập tiêu đề bài viết...">
            <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:bg-gray-200">
                <i class="fas fa-search"></i>
            </span>
        </form>
        `;
    },
};

export default AdminNewsSearch;