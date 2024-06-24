import React from 'react'
import Image from 'next/image'

const UnderConstruction = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col items-center justify-center text-center">
      <Image src="/under_construction.svg" alt="Logo" width="800" height="800" className="border p-1 border-gray-300 rounded-lg my-10" />
      <h1 className="text-4xl font-bold mb-4">Đang phát triển . . . </h1>
      <p className="text-gray-600 text-lg">
       Xin lỗi vì sự bất tiện, chúng tôi đang rất cố gắng để hoàn thiện trang web của mình.
      </p>
      <p className="text-gray-600 text-lg">
        Nếu bạn cần liên hệ, đừng ngần ngại liên hệ với chúng tôi qua email: vuduc504@gmail.com
      </p>
    </div>
  )
}

export default UnderConstruction