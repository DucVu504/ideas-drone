
import RootLayout from "@/components/layout/rootLayout/RootLayout";
import CompanyUser from "@/components/pages/user/share/companyUsers/CompanyUser";



import React from "react";

const CompanyUserPage = () => {

  return (
    <RootLayout>
        <CompanyUser backRoute = "/root/companies"/>
    </RootLayout>
  );
};

export default CompanyUserPage;