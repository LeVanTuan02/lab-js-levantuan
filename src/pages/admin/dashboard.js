import AdminSidebar from "../../components/admin/sidebar";

const AdminDashboardPage = {
    render() {
        return `
        <div class="grid grid-cols-12">
            ${AdminSidebar.render()}

            <div class="col-span-12 lg:col-span-10 px-5 border-x lg:border-r m-h-[calc(100vh-230px)]">
                <h1 class="font-bold text-2xl text-center uppercase my-8">Dashboard</h1>
                <section class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                    <div class="flex">
                        <div class="bg-red-500 flex items-center px-3 text-white rounded-l-md">GA</div>
                        <div class="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span class="block font-semibold">Bài viết</span>
                                <span class="block text-gray-500">16 Posts</span>
                            </div>
                            <div class="text-gray-500">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="bg-indigo-500 flex items-center px-3 text-white rounded-l-md">GA</div>
                        <div class="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span class="block font-semibold">Tài khoản</span>
                                <span class="block text-gray-500">16 Members</span>
                            </div>
                            <div class="text-gray-500">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="bg-yellow-500 flex items-center px-3 text-white rounded-l-md">GA</div>
                        <div class="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span class="block font-semibold">Graph API</span>
                                <span class="block text-gray-500">16 Members</span>
                            </div>
                            <div class="text-gray-500">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="bg-green-500 flex items-center px-3 text-white rounded-l-md">GA</div>
                        <div class="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span class="block font-semibold">Graph API</span>
                                <span class="block text-gray-500">16 Members</span>
                            </div>
                            <div class="text-gray-500">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        `;
    },
};

export default AdminDashboardPage;