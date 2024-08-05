"use client";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useTranslation } from 'next-i18next';


function Intro() {
    const { t } = useTranslation("public");

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="px-4 py-20 lg:px-28 lg:py-24">
        <div className="relative lg:container lg:mx-auto xl:px-20 px-4">
          <div className="gap-16 lg:flex">
            <div className="lg:w-1/2 relative overflow-hidden rounded-xl transform transition duration-300 hover:scale-110 ">
              <Image
                alt=""
                src="/images/homepage/mavic_pro.jpeg"
                className="rounded-xl"
                width={500}
                height={500}
                objectFit="cover"
                layout="responsive"
                priority
              />
            </div>
            <div className="lg:w-1/2 px-8 pr-2 space-y-4">
              <h2 className="text-4xl pb-3 font-bold">
              {t('intro.title')} <span className="text-green-500">IDEAS-DRONE</span>
              </h2>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                <p className="text-lg">
                {t('intro.para_1')}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                <p className="text-lg">
                {t('intro.para_2')}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                <p className="text-lg">
                {t('intro.para_3')}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                <p className="text-lg">
                {t('intro.para_4')}
                </p>
              </div>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse pt-2">
                <Link href="/aboutus">
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    {t('intro.find_out')}
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

export default Intro;
