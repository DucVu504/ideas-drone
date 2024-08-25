import RootLayout from "@/components/layout/rootLayout/RootLayout";
import Developing from "@/components/common/developing/Developing"
import CompaniesHandler from "@/components/pages/user/root/projects/CompaniesHandler";

import React from "react";

const AllProjectPage = () => {

  return (
    <RootLayout>
      <CompaniesHandler/>
    </RootLayout>
  );
};

export default AllProjectPage;