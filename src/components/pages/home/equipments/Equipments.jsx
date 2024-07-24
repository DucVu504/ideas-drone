import Image from "next/legacy/image";

function Equipment() {
    const cards = [
        {
            title: "Phantom 4 RTK",
            image: "/images/homepage/phantom4_RPK4.jpg",
            description: "Phantom 4 RTK là drone tiên tiến cho khảo sát và lập bản đồ, tích hợp RTK chính xác đến từng centimet. \
            Với camera 20MP và thời gian bay 30 phút, nó cung cấp dữ liệu chất lượng cao cho các dự án kỹ thuật và xây dựng."
        },
        {
            title: "Phantom 4 Pro",
            image: "/images/homepage/phantomPro4_1.jpg",
            description: "Phantom 4 Pro là drone cao cấp với camera 20MP, cảm biến CMOS 1 inch và thời gian bay lên đến 30 phút. Nó cung cấp chất lượng hình ảnh và video vượt trội, lý tưởng cho nhiếp ảnh và quay phim chuyên nghiệp."
        },
        {
            title: "Mavic 3 Thermal",
            image: "/images/homepage/mavic3.jpg",
            description: "Mavic 3 Thermal là drone đa năng với camera nhiệt và cảm biến CMOS 4/3. Nó cung cấp hình ảnh nhiệt độ chính xác và thời gian bay lên đến 46 phút, lý tưởng cho các ứng dụng cứu hộ, giám sát và kiểm tra cơ sở hạ tầng."
        },
        // Add more card objects here...
    ];

    return(
        <div>
            <div className="text-center text-5xl py-8 px-10  mb-4 mx-40">
                <span className="text-black ">THIẾT BỊ CỦA </span>
            <span className="text-green-500">CHÚNG TÔI</span>
            </div>
            <div className="py-8 px-44">
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        {cards.map((card, index) => (
                            <div key={index} className="w-full md:w-1/3 px-6 mb-4">
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl duration-500">
                                    <div className="relative w-full h-64 transform hover:scale-110 transition-transform duration-300">
                                        <Image alt="Card image cap" src={card.image} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                                        <h6 className="text-sm text-gray-500 mb-2">{card.subtitle}</h6>
                                        <p className="text-gray-700 mb-4">{card.description}</p>
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                            CHI TIẾT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default  Equipment;
