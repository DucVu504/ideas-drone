
import RootLayout from "@/components/layout/rootLayout/RootLayout";
import CompanyUser from "@/components/pages/user/root/companies/CompanyUser";
import {CompanyIdProvider} from '@/components/helpers/CompanyIdContext';


import React from "react";

const CompanyUserPage = () => {

  return (
    <RootLayout>
      <CompanyIdProvider>
          <CompanyUser/>
      </CompanyIdProvider>
    </RootLayout>
  );
};

export default CompanyUserPage;