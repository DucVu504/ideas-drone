import Image from 'next/image';
import Link from 'next/link';


const Mainboard = () => {
    const items = [
        {
            image: "/project_pics/picturedemo.png",
            title: "DỰ ÁN DEMO",
            description: "Mặt bằng khu dân cư Phan Thiết",
            link: "/project"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án",
            link: "/project"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án",
            link: "/project/1"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án",
            link: "/project/1"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án",
            link: "/project/1"
        },
        {
            image: "/project_pics/default.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án",
            link: "/project/1"
        },

    ];

    return (
            <div className="flex justify-center  py-8 px-52 rounded-md">
                <div className="md:grid md:grid-cols-2 xl:grid-cols-4 grid-cols-5 gap-6 mb-4">
                    {items.map((item, index) => (
                        <div key={index} className="bg-green-100 rounded-md hover:shadow-xl grid grid-rows-3 transform hover:scale-105 transition duration-500">
                            <a href={item.link} className="row-span-2">
                                <Image 
                                    className="rounded-t-md object-cover w-full h-full" 
                                    src={item.image} 
                                    alt="" 
                                    width={500} 
                                    height={300}
                                    objectPosition="center"
                                />
                            </a>
                            <div className="p-2 row-span-1">
                                <a href={item.link}>
                                    <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 ">{item.title}</h5>
                                </a>
                                <p className="mb-1 font-normal text-gray-700 ">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};
  
  export default Mainboard;
  