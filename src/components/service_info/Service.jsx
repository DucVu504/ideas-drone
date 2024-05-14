import Image from "next/image";
import React from "react";
import Container from "./container";


const Testimonials  = () => {
  const testimonials = [
    "to keep it short and simple.",
    "would use this for anything.",
    "would use this for anything.",
    "would use this for anything.",
    "would use this for anything.",
    "would use this for anything."
  ];
  
  return (
    <Container>
      <p className="text-2xl leading-normal ">
        Header Text
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                {testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;