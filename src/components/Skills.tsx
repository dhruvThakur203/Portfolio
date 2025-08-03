import { Code, Database, Cloud, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: ["C/C++", "JavaScript", "Python", "SQL"],
      color: "text-primary"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Web Stack",
      skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Prisma", "Drizzle"],
      color: "text-secondary"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "VS Code", "Git/GitHub", "Bash", "StarUML", "Linux"],
      color: "text-accent"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS (Basics)", "Cloud Deployment", "Version Control"],
      color: "text-primary"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning",
      skills: ["Python", "LightGBM", "Data Analysis", "Model Training"],
      color: "text-secondary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      skills: ["Logical Thinking", "Project Management", "Remote Collaboration", "Problem Solving"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-current/10 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coding profiles */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Coding Profiles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://leetcode.com/u/S1QMkZpjty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-accent rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-glow"
              >
                LeetCode Profile
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/dhruvs9ts/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-primary rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-glow"
              >
                GeeksforGeeks Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;