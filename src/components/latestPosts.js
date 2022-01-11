import { postList } from "../data";

const LatestPosts = {
    render() {
        const latestPosts = postList.sort((a, b) => b.id - a.id);
        return `
        ${latestPosts.map((post) => `
            <li>
                <a href="/news/${post.id}" class="block py-2">${post.title}</a>
            </li>
            `).join("")}
        `;
    },
};

export default LatestPosts;