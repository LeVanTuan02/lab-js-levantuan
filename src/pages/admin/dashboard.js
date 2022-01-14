import AdminDashboardCard from "../../components/admin/dashboardCard";
import AdminNav from "../../components/admin/nav";

const AdminDashboardPage = {
    render() {
        return /* html */ `
        <div class="min-h-full">
            ${AdminNav.render("dashboard")}
        
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                    </h1>
                </div>
            </header>
            
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <section class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            ${AdminDashboardCard.render()}
                        </section>
                    </div>
                </div>
            </main>
        </div>
        `;
    },
};

export default AdminDashboardPage;