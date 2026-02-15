import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projectsData";
import ZoomableImage from "@/components/shared/ZoomableImage";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/work");
    }
  }, [project, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-10 md:pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        {/* Top Section with Sidebar and Hero Content */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-12 mb-12 lg:mb-16">
          {/* Sidebar */}
          <aside className="md:col-span-6 space-y-6 md:space-y-8 md:border-r border-[#DEE2E6] pr-8 lg:pr-20">
            <div className="space-y-6">
              <section>
                <h4 className="text-lg md:text-2xl font-bold uppercase mb-2">Client</h4>
                <p className="text-[#343A40] text-sm sm:text-base font-medium">{project.client}</p>
              </section>

              <div className="bg-[#cfe7ff] h-0.5"></div>

              <section>
                <h4 className="text-lg md:text-2xl font-bold uppercase mb-2">Year</h4>
                <p className="text-[#343A40] text-sm sm:text-base font-medium">{project.year}</p>
              </section>

              <div className="bg-[#cfe7ff] h-0.5"></div>

              <section>
                <h4 className="text-lg md:text-2xl font-bold uppercase mb-4">Scope of Work</h4>
                <div className="flex flex-wrap gap-2">
                  {project.scopeOfWork.map((item, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-[10px] md:text-sm py-1 md:py-2 px-2 md:px-4 border-border bg-[#E9EFFE] text-muted-foreground font-normal font-poppins"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </section>

              <div className="bg-[#cfe7ff] h-0.5"></div>

              <section>
                <h4 className="text-lg md:text-2xl font-bold uppercase mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-[10px] md:text-sm py-1 md:py-2 px-2 md:px-4 border-border bg-[#E9EFFE] text-muted-foreground font-normal font-poppins"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              <div className="bg-[#cfe7ff] h-0.5"></div>

              <section>
                <h4 className="text-lg md:text-2xl font-bold uppercase mb-2">Industry</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="outline" 
                    className="text-[10px] md:text-sm py-1 md:py-2 px-2 md:px-4 border-border bg-[#E9EFFE] text-muted-foreground font-normal font-poppins"
                  >
                    {project.industry}
                  </Badge>
                </div>
              </section>
            </div>
          </aside>

          {/* Hero Content */}
          <div className="md:col-span-6 space-y-6 md:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold font-poppins text-[#212529]">
                {project.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-[#6C757D] font-quicksand leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button
                      className="flex items-center mx-auto md:mx-0 mt-2 sm:mt-6 md:mt-12 gap-6 sm:gap-10 pl-3 pr-0.5 py-0.5 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full transition-colors"
                    >
                      <span className="font-open font-medium text-base text-white leading-tight">
                        View Live
                      </span>
                      <div className="flex items-center justify-center m-1.5 w-8 h-8 bg-white rounded-full">
                        <ArrowUpRight className="w-5 h-5 text-[#0F172A]" />
                      </div>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Big Thumbnail */}
        <div className="mb-12 md:mb-16">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DEE2E6] shadow-sm mb-6 md:mb-8">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-auto aspect-[4/3] object-contain max-h-[400px] sm:max-h-[700px]"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-3xl text-center text-[#495057] font-poppins max-w-4xl mx-auto leading-relaxed px-2">
            {project.thumbnailDescription}
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-24">
          {project.images.map((imgSection, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full order-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DEE2E6] bg-white shadow-sm">
                  <ZoomableImage 
                    src={imgSection.src} 
                    alt={imgSection.title} 
                    imgClassName="object-cover"
                  />
                </div>
              </div>

              <div className={`w-full order-2 space-y-4 md:space-y-6 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-poppins text-[#212529]">
                  {imgSection.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6C757D] leading-relaxed">
                  {imgSection.description}
                </p>
                
                {imgSection.bulletHeading && imgSection.bullets && (
                  <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                    <h4 className="text-base sm:text-lg font-bold font-poppins text-[#212529]">
                      {imgSection.bulletHeading}
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {imgSection.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-[#495057]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
