import Image from "next/image";
import React from "react";
import Container from "./Container";


const Testimonials  = () => {
  const testimonials = [
    {
      title: "KHẢO SÁT VÀ LẬP BẢN ĐỒ THÔNG MINH",
      detail: "Chúng tôi thực hiện các cuộc khảo sát và tạo ra các bản đồ thông minh chính xác và chi tiết, cung cấp thông tin hữu ích về địa hình và môi trường.",
      image: "/images/homepage/icon_service1.png"
    },
    {
      title: "XÂY DỰNG MÔ HÌNH 3D",
      detail: "Chúng tôi sử dụng công nghệ tiên tiến để tạo ra các mô hình 3D chất lượng cao, giúp bạn hiểu rõ hơn về không gian và cấu trúc của các dự án.",
      image: "/images/homepage/icon_service2.png"
    },
    {
      title: "KIỂM TRA KẾT CẤU",
      detail: "Chúng tôi cung cấp các dịch vụ kiểm tra kết cấu chuyên sâu, giúp bạn đảm bảo tính an toàn và chất lượng của các công trình xây dựng.",
      image: "/images/homepage/icon_service3.png"
    },
    {
      title: "PHÂN TÍCH MÔI TRƯỜNG",
      detail: "Chúng tôi thực hiện các phân tích môi trường chi tiết để đánh giá tác động của các hoạt động nhân tạo và tự nhiên đối với môi trường xung quanh.",
      image: "/images/homepage/icon_service4.png"
    },
    {
      title: "ĐÀO TẠO VÀ TƯ VẤN DOANH NGHIỆP",
      detail: "Chúng tôi cung cấp các dịch vụ đào tạo và tư vấn cho doanh nghiệp về việc sử dụng công nghệ UAV và ứng dụng trong hoạt động kinh doanh của họ.",
      image: "/images/homepage/icon_service5.png"
    },
    {
      title: "CÁC SẢN PHẨM CHUYÊN DỤNG",
      detail: "Chúng tôi cung cấp các sản phẩm chuyên dụng được tùy chỉnh để đáp ứng các nhu cầu cụ thể của khách hàng trong lĩnh vực công nghệ UAV và ứng dụng của nó.",
      image: "/images/homepage/icon_service6.png"
    },
  ];
  
  return (
    <Container>
    <div className="text-center text-5xl py-8 px-10  mb-4 mx-40">
        <span className="text-black ">CÁC DỊCH VỤ CỦA </span>
      <span className="text-green-500">IDEAS-DRONE</span>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="overflow-hidden h-80 hover:border  hover:rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col justify-between items-center w-full h-full bg-gray-100 px-4 rounded-2xl py-8">
            <Image src={testimonial.image} alt={testimonial.title} width={80} height={80} className="object-cover rounded-t-2xl py-4 filter hue-rotate" />
              <p className="text-2xl leading-normal ">
                {testimonial.title}
              </p>
              <p className="leading-normal ">
                {testimonial.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

    </Container>
  );
}

export default Testimonials;