
import RootLayout from "@/components/layout/rootLayout/RootLayout";
import Companies from "@/components/pages/user/root/companies/Companies";
import {CompanyIdProvider} from '@/components/helpers/CompanyIdContext';

import React from "react";

const CompaniesPage = () => {

  return (
    <RootLayout>
        <CompanyIdProvider>
          <Companies/>
        </CompanyIdProvider>
    </RootLayout>
  );
};

export default CompaniesPage;
