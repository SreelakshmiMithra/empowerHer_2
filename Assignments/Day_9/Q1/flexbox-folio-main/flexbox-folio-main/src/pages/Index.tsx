import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-20 lg:py-32 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate front-end developer with a keen eye for design and a love for clean, 
                efficient code. With expertise in modern web technologies, I specialize in creating 
                responsive, user-friendly websites that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical proficiency with creative problem-solving, ensuring 
                every project is both functional and visually appealing. I'm constantly learning and 
                adapting to new technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
