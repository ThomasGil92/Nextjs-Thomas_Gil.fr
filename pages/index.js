import Layout from "../hoc/Layout";
import Header from "../containers/Header/Header";
import Github from "../containers/Github/Github";
import LastProject from "../containers/LastProject/LastProject";
import Prices from "../containers/Prices/Prices";
import Contact from "../containers/Contact/Contact";
import Footer from "../containers/Footer/Footer";

export default function Home({githubData}) {
  return (
    <Layout title="Thomas Gil / Développeur web">
        <Header/>
        <Github githubData={githubData}/>
        <LastProject/>
        <Prices/>
        <Contact/> 
        <Footer/>
    </Layout>
  );
}

export async function getServerSideProps() {
const githubApiUrl = await fetch(
  "https://api.github.com/users/ThomasGil92"
);
const githubData = await githubApiUrl.json();
return { props: { githubData } };
}
