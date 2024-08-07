
"use client"
import Contact from "@/components/pages/home/contact/Contact";
import SocialMediaIcons from "@/components/common/socialMedia/SocialMedia";
import HomeLayout from "@/components/layout/homeLayout/HomeLayout";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <Contact/>
        <SocialMediaIcons/>
      </HomeLayout>
    </div>
  );
};
