"use client"
import React, { useState } from 'react';
import LoginForm from '../../../components/login/LoginForm';
import { BrowserRouter } from 'react-router-dom';

export default function Login() {
    return (
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  }