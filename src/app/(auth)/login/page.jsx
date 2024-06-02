

const LoginFrom = () => {
    return (
        <div>
            <section class="bg-gray-50" style={{backgroundImage: "url('./login_backgound.jpeg')", backgroundSize: 'cover'}}>
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                  <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                      <img class="w-40 h-14 mr-2" src="/Logo_main.png" alt="logo"/>
                  </a>
                  <div class="w-full bg-opacity-80 bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                              Đăng nhập tài khoản
                          </h1>
                          <form class="space-y-4 md:space-y-6" action="#">
                              <div>
                                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Nhập email</label>
                                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                              </div>
                              <div>
                                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                              </div>
                              <div class="flex items-center justify-between">
                                  <div class="flex items-start">
                                      <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                      </div>
                                      <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 ">Lưu tài khoản</label>
                                      </div>
                                  </div>
                                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Quên mật khẩu?</a>
                              </div>
                              <button type="submit" 
                              class="w-full text-white bg-green-500 hover:bg-primary-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Đăng nhập</button>
                              <p class="text-sm font-light text-gray-500 ">
                                  Bạn chưa có tài khoản? <a href="#" class="font-medium text-primary-600 hover:underline">Liên hệ</a>
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