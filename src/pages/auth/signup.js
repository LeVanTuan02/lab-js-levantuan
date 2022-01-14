import Header from "../../components/user/header";
import Footer from "../../components/user/footer";

const SignupPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <main>
            <div class="min-h-[calc(100vh-200px)] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng ký tài khoản</h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Nếu đã có tài khoản
                            <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500">hãy đăng nhập</a>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <div>
                            <div>
                                <label for="full-name" class="font-medium mb-1 block">Họ tên</label>
                                <input id="full-name" name="fullname" type="text" autocomplete="family-name" required class="rounded-md border shadow-sm appearance-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nhập họ tên">
                            </div>
                            <div class="mt-4">
                                <label for="email-address" class="font-medium mb-1 block">Email</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="rounded-md border shadow-sm appearance-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nhập email">
                            </div>
                            <div class="mt-4">
                                <label for="phone" class="font-medium mb-1 block">Số điện thoại</label>
                                <input id="phone" name="phone" type="text" required class="rounded-md border shadow-sm appearance-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="mt-4">
                                <label for="password" class="font-medium mb-1 block">Mật khẩu</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="rounded-md border shadow-sm appearance-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Mật khẩu">
                            </div>
                            <div class="mt-4">
                                <label for="confirm" class="font-medium mb-1 block">Xác nhận mật khẩu</label>
                                <input id="confirm" name="confirm" type="password" required class="rounded-md border shadow-sm appearance-none block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Xác nhận mật khẩu">
                            </div>
                        </div>
                
                        <div>
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <!-- Heroicon name: solid/lock-closed -->
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                Đăng ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        
        ${Footer.render()}
        `;
    },
};

export default SignupPage;