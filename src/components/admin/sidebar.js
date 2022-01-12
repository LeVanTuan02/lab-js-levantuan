const AdminSidebar = {
    render() {
        return /* html */ `
        <aside class="hidden lg:block col-span-2 h-[calc(100vh-200px)] border-0 lg:border-x">
            <header class="font-bold px-2 text-xl py-3 border-b">FPOLY</header>

            <ul>
                <li class="border-b px-2 hover:bg-gray-100">
                    <a href="/admin/dashboard" class="py-2 flex items-center">
                        <div class="w-8 text-xl">
                            <i class="fas fa-home"></i>
                        </div>
                        Dashboard
                    </a>
                </li>
                <li class="border-b px-2 hover:bg-gray-100">
                    <a href="/admin/news" class="py-2 flex items-center">
                        <div class="w-8 text-xl">
                            <i class="fas fa-rss-square"></i>
                        </div>
                        Tin tức
                    </a>
                </li>
                <li class="px-2 hover:bg-gray-100">
                    <a href="" class="py-2 flex items-center">
                        <div class="w-8 text-xl">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                        Đăng xuất
                    </a>
                </li>
            </ul>
        </aside>
        `;
    },
};

export default AdminSidebar;