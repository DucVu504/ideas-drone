

const LoginFrom = () => {
    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900" style={{backgroundImage: "url('./login_backgound.jpeg')", backgroundSize: 'cover'}}>
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                  <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                      <img class="w-40 h-14 mr-2" src="/Logo_main.png" alt="logo"/>
                  </a>
                  <div class="w-full bg-opacity-90 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-opacity-90 dark:bg-gray-800 dark:border-green-700">
                      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                              Đăng nhập tài khoản
                          </h1>
                          <form class="space-y-4 md:space-y-6" action="#">
                              <div>
                                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập email</label>
                                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                              </div>
                              <div>
                                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                              </div>
                              <div class="flex items-center justify-between">
                                  <div class="flex items-start">
                                      <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                      </div>
                                      <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Lưu tài khoản</label>
                                      </div>
                                  </div>
                                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-green-500">Quên mật khẩu?</a>
                              </div>
                              <button type="submit" class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-primary-800">Đăng nhập</button>
                              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                  Bạn chưa có tài khoản? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Liên hệ</a>
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
            </section>
        </div>
    )
};

export default LoginFrom;