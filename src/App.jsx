import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Profile from "./sections/Profile";
import Sectors from "./sections/Sectors";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import AI from "./sections/AI";
import Education from "./sections/Education";
import Certification from "./sections/Certification";
import Lenguaje from "./sections/Lenguaje";
import References from "./sections/References";
import FooterEdwin from "./sections/FooterEdwin";

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <Profile />
      <Sectors />
      <Skills />
      <Achievements />
      <Experience />
      <AI />
      <Education />
      <Certification />
      <Lenguaje />
      <References />
      <FooterEdwin />
    </Layout>
  );
}

export default App;
