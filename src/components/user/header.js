import Nav from "./nav";

const Header = {
    render() {
        return /* html */ `
        <header class="container max-w-7xl mx-auto px-2">
            <div class="h-24 bg-blue-900 flex">
                <a href="/" class="m-auto">
                    <img src="https://res.cloudinary.com/levantuan/image/upload/v1641699347/fpoly/js/logo_puelrg.png" alt="Logo FPT Polytechnic">
                </a>
            </div>

            <nav class="flex flex-wrap justify-center md:justify-between items-center bg-orange-500">
                ${Nav.render()}

                <form action="" class="hidden md:flex h-7">
                    <input type="text" placeholder="Nhập từ khóa..." class="w-60 text-sm px-3 outline-none border border-gray-300">
                    <button class="mx-3 ml-2 px-2 text-xs uppercase border border-gray-400 bg-blue-900 text-white transition duration-300 ease-linear hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]">Tìm kiếm</button>
                </form>
            </nav>
        </header>
        `;
    },
};

export default Header;