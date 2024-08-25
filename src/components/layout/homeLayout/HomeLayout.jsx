import NavbarHome from '../../pages/home/navbarHome/NavbarHome';
import FooterHome from '../../pages/home/footerHome/FooterHome';

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
