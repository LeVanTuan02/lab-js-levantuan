import AdminNewsList from "../../components/admin/newsList";

const AdminNewsPage = {
    render() {
        return /* html */ `
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
        `;
    },
};

export default AdminNewsPage;