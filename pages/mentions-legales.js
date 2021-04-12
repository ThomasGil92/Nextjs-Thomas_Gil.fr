import Layout from "../hoc/Layout";
import Footer from "../containers/Footer/Footer";
import LegalMentions from "../containers/LegalMentions/LegalMentions";

export default function Home({ githubData }) {
  return (
    <Layout title="Thomas Gil / Développeur web">
      <LegalMentions/>
      <Footer />
    </Layout>
  );
}
