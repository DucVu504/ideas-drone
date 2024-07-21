
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token'); // Giả sử token xác thực được lưu trong cookie

  if (!token) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Nếu đã đăng nhập, cho phép truy cập route
  return NextResponse.next();
}

// Chỉ định middleware áp dụng cho các route yêu cầu xác thực
export const config = {
  matcher: ['/root/:path*'],
};
