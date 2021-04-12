import Head from "next/head";
import Navbar from "../containers/Navbar/Navbar";
import { useSelector } from "react-redux";

const Layout = ({ children, title }) => {
  const theme = useSelector((state) => state.theme);
  const head = () => (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  return (
    <>
      {head()}
      <Navbar />
      <div className={theme && theme === "light" ? "" : "bg-realy-dark"}>
        {children}
      </div>
    </>
  );
};

export default Layout;
