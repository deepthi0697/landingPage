import Header from "./Header.js";
import Footer from "./Footer.js";
import Content from "./mainContent.js";

const LandingPage = () => {
  return (
    <div style={{overflowX:'hidden'}} >
      <Header />
      <Content/>
      <Footer />
    </div>
  );
};

export default LandingPage;
