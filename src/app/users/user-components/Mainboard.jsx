import Image from 'next/image';


const Mainboard = () => {
    const items = [
        {
            image: "/drone_pics/mavic_pro_1.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },
        {
            image: "/drone_pics/mavic_pro_1.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },
        {
            image: "/drone_pics/mavic_pro_1.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },
        {
            image: "/drone_pics/mavic_pro_1.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },
        {
            image: "/drone_pics/mavic_pro_1.jpeg",
            title: "DỰ ÁN 1",
            description: "Miêu tả sơ bộ dự án"
        },

    ];

    return (
            <div class="flex justify-center  py-8 px-52 rounded-md bg-green-50">
                <div class="grid grid-cols-5 gap-6 mb-4">
                    {items.map((item, index) => (
                        <div key={index} class="bg-white border-2 hover:border-red-600  rounded-lg shadow grid grid-rows-3">
                            <a href="#" class="row-span-2">
                                <Image 
                                    class="rounded-t-lg object-cover w-full h-full" 
                                    src={item.image} 
                                    alt="" 
                                    width={500} 
                                    height={300}
                                    objectPosition="center"
                                />
                            </a>
                            <div class="p-2 row-span-1">
                                <a href="#">
                                    <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
                                </a>
                                <p class="mb-1 font-normal text-gray-700 ">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};
  
  export default Mainboard;
  