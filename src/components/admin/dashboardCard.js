const AdminDashboardCard = {
    render() {
        return /* html */ `
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
        `;
    },
};

export default AdminDashboardCard;