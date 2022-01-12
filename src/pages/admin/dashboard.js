import AdminSidebar from "../../components/admin/sidebar";

const AdminDashboardPage = {
    render() {
        return `
        <div class="grid grid-cols-12">
            ${AdminSidebar.render()}

            <div class="col-span-12 lg:col-span-10 px-5 border-x lg:border-r m-h-[calc(100vh-230px)]">
                <h1 class="font-bold text-2xl text-center uppercase my-8">Dashboard</h1>
            </div>
        </div>
        `;
    },
};

export default AdminDashboardPage;