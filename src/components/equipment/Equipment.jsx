import Image from 'next/image';

function Equipment() {
    const cards = [
        {
            title: "Phantom 4 RTK",
            image: "/equipments/Phantom4RPK_1.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            title: "Phantom 4 Pro",
            image: "/equipments/PhantomPro4_1.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            title: "Mavic 3 Thermal",
            image: "/equipments/Mavic3.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        // Add more card objects here...
    ];

    return(
        <div>
            <div className="text-center text-5xl py-8 px-10  mb-4 mx-40">
                <span className="text-black ">THIẾT BỊ CỦA </span>
            <span className="text-green-500">CHÚNG TÔI</span>
            </div>
            <div className="py-8 px-10">
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        {cards.map((card, index) => (
                            <div key={index} className="w-full md:w-1/3 px-2 mb-4">
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="relative w-full h-64">
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
