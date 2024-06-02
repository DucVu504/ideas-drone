import Image from 'next/image';


const Projects =() => {
    return(
        <div>
            <div class="mx-52 my-8 py-2 border-b-2 border-green-700 text-xl">
            HỒ SƠ DỰ ÁN
            </div>
            <div className="mx-52 my-8 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên dự án
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Địa điểm
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số người được truy cập
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white  hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
    )
}

const Users = () => {
    return (
        <div>
        <div class="mx-52 my-8 py-2 border-b-2 border-green-700 text-xl">
        HỒ SƠ NGƯỜI DÙNG
        </div>
        <div class="mx-52 my-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-green-200 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Tên người dùng
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Đơn vị
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dự án sở hữu
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Chi tiết
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white  even:bg-gray-50 even:dark:bg-gray-800 border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="odd:bg-white odd even:bg-gray-50  border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Google Pixel Phone
                        </th>
                        <td class="px-6 py-4">
                            Gray
                        </td>
                        <td class="px-6 py-4">
                            Phone
                        </td>
                        <td class="px-6 py-4">
                            $799
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Apple Watch 5
                        </th>
                        <td class="px-6 py-4">
                            Red
                        </td>
                        <td class="px-6 py-4">
                            Wearables
                        </td>
                        <td class="px-6 py-4">
                            $999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
}

const Mainboard = () => {

    return (
        <div>
            <Projects/>
            <Users/>
        </div>

    );
};
  
  export default Mainboard;
  