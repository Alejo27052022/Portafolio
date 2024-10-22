import Header_Home from './home'
import Skills from './skills'
import About from './about'
import Projects from './project'
import Experience from './experience'
import Contact from './contact'
import Footer from './footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-20">
        <Header_Home />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
