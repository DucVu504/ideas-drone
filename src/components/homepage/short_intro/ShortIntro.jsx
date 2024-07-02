"use client"
import Image from "next/image";
import React, { useState } from "react";
import { CheckCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link';
  

function ShortInfo() {
    const [isHovered, setIsHovered] = useState(false);
  return (
        <div className="relative overflow-hidden bg-white">
            <div className="px-4 py-20 lg:px-28 lg:py-24">
                <div className="relative lg:container lg:mx-auto xl:px-20 px-4">
                    <div className="gap-16 lg:flex">
                        <div
                        className="lg:w-1/2 relative overflow-hidden rounded-xl "
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        >
                        <Image
                            alt=""
                            src="/HomePage/Others/RSE_pics.jpeg"
                            className={`rounded-xl transition-transform duration-300 ${isHovered ? 'transform scale-110' : ''}`}
                            width={500}
                            height={500}
                        />
                        </div>
                        <div className="lg:w-1/2 px-8 pr-2 space-y-4">
                        <h2 className="text-4xl pb-3 font-bold">SỨ MỆNH CỦA <span className="text-green-500">IDEAS-DRONE</span></h2>
                        <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <p className="text-lg">Cung cấp các dịch vụ và giải pháp chất lượng và bền vững cho khách hàng với các dịch vụ khảo sát và lập bản đồ thông minh.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <p className="text-lg">Đứng đầu và thúc đẩy sự thay đổi công nghệ trong các ngành công nghiệp và cơ quan nhà nước.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <p className="text-lg">Theo đuổi sự phát triển bền vững và học hỏi cho đội ngũ.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <p className="text-lg">Thúc đẩy sự phát triển ứng dụng và dịch vụ cho drone tại Việt Nam.</p>
                        </div>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse pt-2">
                            <Link href="/aboutus">
                            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            TÌM HIỂU THÊM
                            </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default ShortInfo;
