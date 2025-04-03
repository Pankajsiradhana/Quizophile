
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float shadow-lg">
                    <h3 className="font-semibold">Create</h3>
                    <p className="text-sm mt-1 text-white/80">Build quizzes for any subject</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float shadow-lg animation-delay-300">
                    <h3 className="font-semibold">Practice</h3>
                    <p className="text-sm mt-1 text-white/80">Test your knowledge</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float shadow-lg animation-delay-150">
                    <h3 className="font-semibold">Share</h3>
                    <p className="text-sm mt-1 text-white/80">Distribute to students</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float shadow-lg animation-delay-450">
                    <h3 className="font-semibold">Collaborate</h3>
                    <p className="text-sm mt-1 text-white/80">Work with educators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
