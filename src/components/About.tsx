import { GraduationCap, Trophy, Code, Brain } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "500+ DSA Problems",
      description: "Solved on LeetCode & GeeksforGeeks"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "TCS CodeVita",
      description: "71st rank in Round 1"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ML Research",
      description: "Instagram Influencer Score Prediction (R²: 0.9366)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Dhruv Thakur</span>, a tech-savvy full-stack developer, 
                competitive programmer, and machine learning explorer, currently pursuing my B.Tech in Information Technology 
                from IIIT Sonepat.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy turning complex problems into simple, elegant solutions. My passion lies in creating 
                secure, scalable web applications and exploring the frontiers of machine learning.
              </p>

              {/* Education */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-soft transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">B.Tech, Information Technology</p>
                        <p className="text-sm text-muted-foreground">IIIT Sonepat • 2022–2026</p>
                      </div>
                      <div>
                        <p className="font-medium">Senior Secondary</p>
                        <p className="text-sm text-muted-foreground">Nehru International Public School, Noida • 94.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;