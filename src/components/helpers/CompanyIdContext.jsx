"use client"
import React, { createContext, useState } from 'react';

export const CompanyIdContext = createContext();

export const CompanyIdProvider = ({ children }) => {
  const [companyId, setCompanyId] = useState(null);

  const updateCompanyId = (id) => {
    setCompanyId(id);
  };

  return (
    <CompanyIdContext.Provider value={{ companyId, updateCompanyId }}>
      {children}
    </CompanyIdContext.Provider>
  );
};