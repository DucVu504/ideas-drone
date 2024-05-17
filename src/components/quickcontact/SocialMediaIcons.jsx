import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const SocialMediaIcons = () => (
  <div className="fixed bottom-4 right-4 space-x-4">
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
      <FaFacebookF className="text-blue-600 hover:text-blue-700 text-2xl" />
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
      <FaYoutube className="text-red-600 hover:text-red-700 text-2xl" />
    </a>
    {/* <a href="https://zalo.me/" target="_blank" rel="noreferrer">
      <FaZalo className="text-green-600 hover:text-green-700 text-2xl" />
    </a> */}
  </div>
);

export default SocialMediaIcons;