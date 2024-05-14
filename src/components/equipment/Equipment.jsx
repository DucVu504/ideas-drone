import Image from 'next/image';

function Equipment() {
    const cards = [
        {
            title: "Phantom 4 RTK",
            image: "https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            title: "Phantom 4 Pro",
            image: "https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            title: "Mavic 3 Thermal",
            image: "https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        // Add more card objects here...
    ];

    return(
        <div className="py-8 px-10">
            <div className="flex flex-col">
                <h5 className="mb-3 mt-3">Card Group</h5>
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
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default  Equipment;
