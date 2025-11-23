import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Feel free to reach out through any of these platforms
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/SreelakshmiMithra"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full border border-border hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sreelakshmi-mithra-badiginchala-62b166367/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full border border-border hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
            <a
              href="https://instagram.com/father_connects"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full border border-border hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
            <a
              href="mailto:lakshmi.badiginchala23@gmail.com"
              className="group p-4 bg-card rounded-full border border-border hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
          </div>

          <div className="text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Portfolio. Built with passion and code.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
