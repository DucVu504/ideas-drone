/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'phone': {'max': '640px'}, // Điện thoại
        'tablet': {'min': '641px', 'max': '1023px'}, // Máy tính bảng
        'laptop': '1024px',        // Laptop từ 13 inch trở lên
        'laptop-lg': '1366px',     // Laptop lớn hơn
        'desktop': '1920px',       // Desktop từ 24 inch trở lên
        'desktop-lg': '2560px',    // Desktop lớn hơn (27 inch)
      },
    },
  },
  plugins: [],
}