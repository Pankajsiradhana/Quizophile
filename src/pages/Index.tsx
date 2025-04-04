
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import QuizCard, { QuizCardProps } from '@/components/QuizCard';
import CategoryCard from '@/components/CategoryCard';
import { BookOpen, Calculator, Beaker, Globe, Music, BookOpenText, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  // Mock data for popular quizzes
  const popularQuizzes: QuizCardProps[] = [
    {
      id: '1',
      title: 'Mathematics: Algebra Fundamentals',
      description: 'Master the basics of algebra with this comprehensive quiz covering equations, expressions, and functions.',
      author: 'Professor Smith',
      category: 'Mathematics',
      questionCount: 15,
      timeEstimate: '30 min',
      difficulty: 'medium',
    },
    {
      id: '2',
      title: 'English Literature: Shakespeare',
      description: 'Test your knowledge of Shakespeare\'s plays, sonnets, and literary devices.',
      author: 'Dr. Johnson',
      category: 'Literature',
      questionCount: 20,
      timeEstimate: '45 min',
      difficulty: 'hard',
    },
    {
      id: '3',
      title: 'Biology: Cell Structure',
      description: 'Explore the fundamentals of cell biology, organelles, and cellular functions.',
      author: 'Dr. Patel',
      category: 'Biology',
      questionCount: 12,
      timeEstimate: '25 min',
      difficulty: 'easy',
    },
    {
      id: '4',
      title: 'History: World War II',
      description: 'Comprehensive coverage of key events, figures, and impacts of the Second World War.',
      author: 'Professor Garcia',
      category: 'History',
      questionCount: 25,
      timeEstimate: '50 min',
      difficulty: 'medium',
    },
  ];

  // Mock data for categories
  const categories = [
    {
      id: '1',
      name: 'Mathematics',
      description: 'Algebra, Geometry, Calculus, Statistics and more',
      icon: <Calculator className="h-6 w-6" />,
      count: 156,
    },
    {
      id: '2',
      name: 'Science',
      description: 'Physics, Chemistry, Biology and Earth Sciences',
      icon: <Beaker className="h-6 w-6" />,
      count: 142,
    },
    {
      id: '3',
      name: 'Literature',
      description: 'Fiction, Poetry, Drama and Literary Analysis',
      icon: <BookOpen className="h-6 w-6" />,
      count: 98,
    },
    {
      id: '4',
      name: 'History',
      description: 'Ancient, Medieval, Modern and Contemporary History',
      icon: <BookOpenText className="h-6 w-6" />,
      count: 112,
    },
    {
      id: '5',
      name: 'Geography',
      description: 'Physical, Human, and Environmental Geography',
      icon: <Globe className="h-6 w-6" />,
      count: 76,
    },
    {
      id: '6',
      name: 'Music',
      description: 'Theory, History, Instruments and Composers',
      icon: <Music className="h-6 w-6" />,
      count: 64,
    },
  ];

  // Mock user state (would come from auth context in a real app)
  const isLoggedIn = false;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Popular Quizzes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Popular Quizzes</h2>
              <Link to="/explore">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularQuizzes.map((quiz) => (
                <Link to={`/quiz/${quiz.id}`} key={quiz.id} className="no-underline">
                  <QuizCard {...quiz} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quiz Carousel */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Content</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                          alt="Computer with code" 
                          className="w-full h-full object-cover transition-all hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-lg">Programming Fundamentals</h3>
                        <p className="text-muted-foreground">Learn the basics of coding with interactive quizzes</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                          alt="Study environment" 
                          className="w-full h-full object-cover transition-all hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-lg">Study Environment Setup</h3>
                        <p className="text-muted-foreground">Create the perfect space for focused learning</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                          alt="Student using laptop" 
                          className="w-full h-full object-cover transition-all hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-lg">Remote Learning Guide</h3>
                        <p className="text-muted-foreground">Tips and tricks for effective online education</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </Carousel>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
              <Link to="/categories">
                <Button variant="outline">All Categories</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id} className="no-underline">
                  <CategoryCard {...category} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Database Section with Image */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Database className="h-12 w-12 text-quiz-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Need to Store User Data?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Learn about database options for storing user login details, created quizzes, and tracking progress.
                </p>
                <Link to="/database-info">
                  <Button className="bg-quiz-primary hover:bg-quiz-accent">
                    Explore Database Solutions
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Database visualization" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-quiz-primary to-quiz-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your educational journey?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and students who are already creating and sharing knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white text-quiz-primary hover:bg-gray-100 px-8 py-2">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-2">
                  Explore Content
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
