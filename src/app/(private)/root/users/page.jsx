import RootLayout from "@/components/layout/rootLayout/RootLayout";
import Developing from "@/components/common/developing/Developing"
import CompaniesHandler from "@/components/pages/user/root/users/CompaniesHandler";

import React from "react";

const AllUserPage = () => {

  return (
    <RootLayout>
      <CompaniesHandler/>
    </RootLayout>
  );
};

export default AllUserPage;
