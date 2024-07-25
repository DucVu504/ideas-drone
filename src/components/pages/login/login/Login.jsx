"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_USER_DATA_URL;

const LoginForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const loginData = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                console.log(data.token);
                // Decode token to get user role
                const decodedToken = jwtDecode(data.token);

                // Navigate based on user role
                if (decodedToken.is_root === true) {
                    router.push('/root/companies');
                } else if (decodedToken.is_admin === true) {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/user/home');
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Đăng nhập thất bại, vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Đăng nhập thất bại, vui lòng thử lại.');
        }
    };

    return (
        <div>
            <section className="bg-gray-50" style={{ backgroundImage: "url('/images/login/backgound.jpeg')", backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-40 h-14 mr-2" src="/images/common/Logo_main.png" alt="logo" />
                    </a>
                    <div className="w-full bg-opacity-80 bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Đăng nhập tài khoản
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Tên đăng nhập</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                        placeholder="Tên đăng nhập" 
                                        required 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                        required 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input 
                                                id="remember" 
                                                type="checkbox" 
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" 
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Lưu tài khoản</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Quên mật khẩu?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-green-500 hover:bg-primary-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng nhập</button>
                                <p className="text-sm font-light text-gray-500">
                                    Bạn chưa có tài khoản? <a href="#" className="font-medium text-primary-600 hover:underline">Liên hệ</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;
