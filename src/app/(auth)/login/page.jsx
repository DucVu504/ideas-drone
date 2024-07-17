"use client"
import React from 'react';
import LoginForm from '../../../components/pages/login/login/Login';
import { BrowserRouter } from 'react-router-dom';

export default function Login() {
    return (
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  }