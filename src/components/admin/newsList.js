import { postList } from "../../data";

const AdminNewsList = {
    render() {
        return /* html */ `
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                ${postList.map((post) => `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${post.id}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${post.title.substr(0, 50)}...
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${post.description.substr(0, 50)}...
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            ${post.status === 0 ? `
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Ẩn
                            </span>
                            ` : `
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Hiển thị
                            </span>
                            `}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-indigo-600 hover:text-indigo-900 ml-3">Delete</a>
                        </td>
                    </tr>
                    `).join("")}
                
            </tbody>
        </table>
        `;
    },
};

export default AdminNewsList;