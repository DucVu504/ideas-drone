import RootLayout from "@/components/layout/rootLayout/RootLayout";
import Developing from "@/components/common/developing/Developing"
import CompaniesHandler from "@/components/pages/user/root/rolePermission/CompaniesHandler";

import React from "react";

const AllRolePermission = () => {

  return (
    <RootLayout>
      <CompaniesHandler/>
    </RootLayout>
  );
};

export default AllRolePermission;