import { Code, Palette, Layers, Database, GitBranch, Image } from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: Code,
    description: "Semantic markup and accessibility best practices",
  },
  {
    name: "CSS",
    icon: Palette,
    description: "Modern styling with Flexbox, Grid, and animations",
  },
  {
    name: "JavaScript",
    icon: Layers,
    description: "ES6+, DOM manipulation, and async operations",
  },
  {
    name: "SQL",
    icon: Database,
    description: "Query solving, data segregation, complex queries",
  },
  {
    name: "Git",
    icon: GitBranch,
    description: "Version control: add, commit, push, and code management",
  },
  {
    name: "Canva",
    icon: Image,
    description: "Posters, banners, and creative visual designs",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group bg-card border border-skill-card-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={24} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
