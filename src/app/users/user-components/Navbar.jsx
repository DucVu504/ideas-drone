

const Navbar = () => {

  return (
  
  <nav class="content-center z-50 h-14 w-full bg-green-400 border-b border-gray-200 className='fixed'">
    <div class=" lg:px-5 lg:pl-3">
      <div class="flex items-center justify-end">
        <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </nav>


  );
};

export default Navbar;
