
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-r from-quiz-primary to-quiz-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn, Create, Share Knowledge
            </h1>
            <p className="mt-4 text-lg text-white/90 leading-relaxed">
              Join our open-source education community where you can create quizzes, 
              sample papers, and learning materials for students across all grades 
              and subjects. Contribute to education, the open-source way.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/explore">
                <Button className="bg-white text-quiz-primary hover:bg-gray-100 font-medium px-6 py-2">
                  Explore Quizzes
                </Button>
              </Link>
              <Link to="/create">
                <Button className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-6 py-2">
                  Create Quiz
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Student using laptop for online learning" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
