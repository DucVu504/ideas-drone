import Image from "next/legacy/image";
import Container from "./Container";
import { useTranslation } from 'next-i18next';

function Equipment() {
    const { t } = useTranslation("public");


    const cards = [
        {
            title: t('equipment.subtitle_1'),
            image: "/images/homepage/phantom4_RPK4.jpg",
            description: t('equipment.detail_1'),
        },
        {
            title: t('equipment.subtitle_2'),
            image: "/images/homepage/phantomPro4_1.jpg",
            description: t('equipment.detail_2'),
        },
        {
            title: t('equipment.subtitle_3'),
            image: "/images/homepage/mavic3.jpg",
            description: t('equipment.detail_3'),
        },
        // Add more card objects here...
    ];

    return(
        <div className="bg-gray-100">
            <Container>
            <div className="text-center text-5xl py-8 px-10  mb-4">
                <span className="text-black ">{t('equipment.title')} </span>
            <span className="text-green-500">IDEAS-DRONE</span>
            </div>
            <div className="py-8">
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        {cards.map((card, index) => (
                            <div key={index} className="md:w-1/3 px-4 mb-4 ">
                                <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-2xl duration-500">
                                    <div className="relative w-full h-64 transform hover:scale-110 transition-transform duration-300">
                                        <Image alt="Card image cap" src={card.image} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                                        <h6 className="text-sm  text-gray-500 mb-2">{card.subtitle}</h6>
                                        <p className="text-gray-700 h-32 mb-4 xl:block hidden">{card.description}</p>
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                        {t('equipment.detail')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
}


export default  Equipment;
