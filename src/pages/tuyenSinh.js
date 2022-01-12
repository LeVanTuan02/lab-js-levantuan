const TuyenSinhPage = {
    render() {
        return `
        <section class="h-[calc(100vh-200px)] relative bg-no-repeat bg-cover bg-center" style="background-image: url(https://caodang.fpt.edu.vn/wp-content/uploads/3dfgd.jpg);">
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-blue-900 opacity-50"></div>
            <div class="absolute w-full h-full text-center text-white z-10 flex flex-col items-center justify-center px-24">
                <span class="block font-bold text-5xl leading-tight">40.000+ sinh viên đã lựa chọn Cao đẳng FPT</span>
                <div class="w-48 h-1 bg-orange-600 my-8"></div>
                <span class="block text-2xl font-bold">Triết lý giáo dục mới “Thực học - Thực nghiệp”</span>
                <a href="">
                    <button class="text-lg px-4 py-2 font-semibold uppercase transition duration-300 ease-linear hover:bg-orange-400 bg-orange-600 mt-8">Đăng ký học</button>
                </a>
            </div>
        </section>
        `;
    },
};

export default TuyenSinhPage;