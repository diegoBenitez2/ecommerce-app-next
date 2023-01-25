import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Meta from '@components/Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className='bg-light-gray'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;