"use client"
import React, { createContext, useState } from 'react';

export const CompanyIdContext = createContext();

export const CompanyIdProvider = ({ children }) => {
  const [companyId, setCompanyId] = useState("");


  return (
    <CompanyIdContext.Provider value={{ companyId, setCompanyId }}>
      {children}
    </CompanyIdContext.Provider>
  );
};
