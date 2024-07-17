import NavbarHome from '../navbarHome/NavbarHome';
import FooterHome from '../footerHome/FooterHome';

const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavbarHome />
        <main>{children}</main>
      <FooterHome />
    </div>
  );
};

export default HomeLayout;
