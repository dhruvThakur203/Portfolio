import { ExternalLink, Github, MessageCircle, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ChatApp",
      description: "Real-time messaging application with user authentication, group chat functionality, typing indicators, and secure communication features.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      icon: <MessageCircle className="h-8 w-8" />,
      liveUrl: "https://talk-a-tive-7fgq.onrender.com/",
      githubUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Auth System",
      description: "Comprehensive authentication system featuring Google OAuth integration, reCAPTCHA protection, and robust security measures for web applications.",
      tech: ["Node.js", "EJS", "Express.js", "MongoDB", "OAuth"],
      icon: <Shield className="h-8 w-8" />,
      liveUrl: "https://auth-system-xi.vercel.app/",
      githubUrl: "#",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Instagram Influencer Score Prediction",
      description: "Machine learning model for predicting influencer engagement scores with 93.66% accuracy, designed for marketing analytics and brand partnerships.",
      tech: ["Python", "LightGBM", "Data Analysis", "ML"],
      icon: <TrendingUp className="h-8 w-8" />,
      liveUrl: "#",
      githubUrl: "#",
      gradient: "bg-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical capabilities and problem-solving approach
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project header */}
                <div className={`${project.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {project.icon}
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-8 -translate-y-8" />
                </div>

                {/* Project content */}
                <div className="p-6">
                  {/* Tech stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-muted rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl !== "#" && (
                      <Button variant="default" size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/dhruvThakur203" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;