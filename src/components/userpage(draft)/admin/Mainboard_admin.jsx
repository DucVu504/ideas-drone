import Image from "next/legacy/image";


const Projects =() => {
    const projects = [
        { name: 'Dự án 1', location: 'Địa điểm 1', status: 'Trạng thái 1', access: 'Số người được truy cập 1' },
        { name: 'Dự án 2', location: 'Địa điểm 2', status: 'Trạng thái 2', access: 'Số người được truy cập 2' },
        { name: 'Dự án 2', location: 'Địa điểm 2', status: 'Trạng thái 2', access: 'Số người được truy cập 2' },
        { name: 'Dự án 2', location: 'Địa điểm 2', status: 'Trạng thái 2', access: 'Số người được truy cập 2' },

    ];
    return(
        <div>
            <div className="mx-52 my-8 py-2 pr-10 text-xl rounded-t-md border-b-2 border-gray-300 border-t-2 border-t-green-400">
                <span className=" p-2 rounded-t-md font-medium text-stone-950 ">HỒ SƠ DỰ ÁN</span>
            </div>
            <div className="mx-52 my-8 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Tên dự án</th>
                            <th scope="col" className="px-6 py-3">Địa điểm</th>
                            <th scope="col" className="px-6 py-3">Trạng thái</th>
                            <th scope="col" className="px-6 py-3">Số người được truy cập</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Chi tiết</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{project.name}</td>
                                <td className="px-6 py-4">{project.location}</td>
                                <td className="px-6 py-4">{project.status}</td>
                                <td className="px-6 py-4">{project.access}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="/user-admin/dashboard/project-detail" className="font-medium text-blue-600 hover:underline">Chi tiết</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
    )
}

const Users = () => {
    const users = [
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        { name: 'Người dùng 1', unit: 'Đơn vị 1', phone: 'Số điện thoại 1' },
        { name: 'Người dùng 2', unit: 'Đơn vị 2', phone: 'Số điện thoại 2' },
        // Thêm nhiều người dùng khác tại đây
    ];
    return (
        <div>
            <div className="mx-52 my-8 py-2 pr-10 text-xl rounded-t-md border-b-2 border-gray-300 border-t-2 border-t-green-400">
                <span className=" p-2 rounded-t-md font-medium text-stone-950 ">HỒ SƠ NGƯỜI DÙNG</span>
            </div>
        <div className="mx-52 my-8 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Tên người dùng</th>
                            <th scope="col" className="px-6 py-3">Đơn vị</th>
                            <th scope="col" className="px-6 py-3">Số điện thoại</th>
                            {/* <th scope="col" className="px-6 py-3">Số dự án sở hữu</th> */}
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Chi tiết</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? "border-b bg-gray-50 hover:bg-gray-100" : "border-b bg-white hover:bg-gray-100"}>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.unit}</td>
                                <td className="px-6 py-4">{user.phone}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="/user-admin/dashboard/user-detail" className="font-medium text-blue-600 hover:underline">Chi tiết</a>
                                </td>
                            </tr>
                        ))}
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
  