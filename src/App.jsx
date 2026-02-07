import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Certification from "./sections/Certification";
import Lenguaje from "./sections/Lenguaje";
import FooterEdwin from "./sections/FooterEdwin";

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <Profile />
      <Skills /> 
      <Achievements />      
      <Experience />
      <Education />
      <Certification />
      <Lenguaje />
      <FooterEdwin />
    </Layout>
  );
}

export default App;
