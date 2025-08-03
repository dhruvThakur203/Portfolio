import { Code, Smartphone, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern frameworks like React, Node.js, and MongoDB. From concept to deployment, I deliver scalable and maintainable solutions.",
      features: ["React.js & Node.js", "Database Design", "API Development", "Responsive Design"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust backend systems with secure authentication, efficient databases, and RESTful APIs. Built for performance, security, and scalability.",
      features: ["REST API Design", "Database Optimization", "Authentication Systems", "Cloud Integration"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces that provide exceptional user experiences across all devices. Focus on performance and accessibility.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Competitive Programming Solutions",
      description: "Algorithm optimization and problem-solving consultation. Help with data structures, algorithms, and competitive programming strategies.",
      features: ["Algorithm Design", "Code Optimization", "Problem Solving", "Performance Analysis"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-soft transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Service header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center bg-gradient-card border border-border rounded-lg p-12 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge web technologies 
              and best practices in software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Let's Work Together
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:dhruvt203@gmail.com">
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;