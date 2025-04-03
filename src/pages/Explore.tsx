
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import QuizCard, { QuizCardProps } from '@/components/QuizCard';
import CategoryCard from '@/components/CategoryCard';
import { Calculator, Beaker, BookOpen, BookOpenText, Globe, Music } from 'lucide-react';

const Explore = () => {
  // Mock data for popular quizzes
  const popularQuizzes: QuizCardProps[] = [
    {
      id: '1',
      title: 'Mathematics: Algebra Fundamentals',
      description: 'Master the basics of algebra with this comprehensive quiz.',
      author: 'Professor Smith',
      category: 'Mathematics',
      questionCount: 15,
      timeEstimate: '30 min',
      difficulty: 'medium',
    },
    {
      id: '2',
      title: 'English Literature: Shakespeare',
      description: 'Test your knowledge of Shakespeare\'s plays and sonnets.',
      author: 'Dr. Johnson',
      category: 'Literature',
      questionCount: 20,
      timeEstimate: '45 min',
      difficulty: 'hard',
    },
    {
      id: '3',
      title: 'Biology: Cell Structure',
      description: 'Explore the fundamentals of cell biology and functions.',
      author: 'Dr. Patel',
      category: 'Biology',
      questionCount: 12,
      timeEstimate: '25 min',
      difficulty: 'easy',
    },
    {
      id: '4',
      title: 'History: World War II',
      description: 'Comprehensive coverage of World War II events.',
      author: 'Professor Garcia',
      category: 'History',
      questionCount: 25,
      timeEstimate: '50 min',
      difficulty: 'medium',
    },
    {
      id: '5',
      title: 'Geography: Countries and Capitals',
      description: 'Test your knowledge of world geography.',
      author: 'Dr. Anderson',
      category: 'Geography',
      questionCount: 30,
      timeEstimate: '40 min',
      difficulty: 'medium',
    },
    {
      id: '6',
      title: 'Music Theory: Basics',
      description: 'Learn the fundamentals of music theory.',
      author: 'Professor Lee',
      category: 'Music',
      questionCount: 18,
      timeEstimate: '35 min',
      difficulty: 'easy',
    },
    {
      id: '7',
      title: 'Chemistry: Periodic Table',
      description: 'Master the periodic table and element properties.',
      author: 'Dr. Williams',
      category: 'Science',
      questionCount: 22,
      timeEstimate: '45 min',
      difficulty: 'medium',
    },
    {
      id: '8',
      title: 'Physics: Laws of Motion',
      description: 'Understand Newton\'s laws and mechanics.',
      author: 'Professor Brown',
      category: 'Science',
      questionCount: 15,
      timeEstimate: '30 min',
      difficulty: 'hard',
    },
  ];

  // Mock data for new quizzes
  const newQuizzes = popularQuizzes.slice(3, 7);
  
  // Mock data for recommended quizzes
  const recommendedQuizzes = popularQuizzes.slice(2, 6);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Search Banner */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Explore Educational Content</h1>
            <div className="max-w-md mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search quizzes, topics, or questions..." 
                className="pl-10 py-6 text-black"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-4 text-white/80">Discover thousands of educational quizzes created by teachers and students</p>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gray-100 rounded-xl overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Students learning together" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Learn Together, Grow Together</h2>
                <p className="text-gray-600 mb-6">
                  Quizophile is more than just a quiz platform. It's a community of learners and educators
                  sharing knowledge and helping each other grow. Create, share, and take quizzes on any subject
                  to enhance your learning experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                    alt="Group study" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                    alt="Taking notes" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                    alt="Studying" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for Content */}
        <div className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="popular">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="categories">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <CategoryCard key={category.id} {...category} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
