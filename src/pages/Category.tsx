
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizCard, { QuizCardProps } from '@/components/QuizCard';
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Beaker, 
  BookOpen, 
  BookOpenText, 
  Globe, 
  Music, 
  Filter, 
  ArrowUpDown 
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock category data - in a real app, this would be fetched based on the ID
  const getCategoryInfo = (id: string) => {
    const categories = [
      {
        id: '1',
        name: 'Mathematics',
        description: 'Explore quizzes on Algebra, Geometry, Calculus, Statistics and more',
        icon: <Calculator className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        count: 156,
      },
      {
        id: '2',
        name: 'Science',
        description: 'Discover quizzes on Physics, Chemistry, Biology and Earth Sciences',
        icon: <Beaker className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        count: 142,
      },
      {
        id: '3',
        name: 'Literature',
        description: 'Test your knowledge on Fiction, Poetry, Drama and Literary Analysis',
        icon: <BookOpen className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        count: 98,
      },
      {
        id: '4',
        name: 'History',
        description: 'Learn about Ancient, Medieval, Modern and Contemporary History',
        icon: <BookOpenText className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
        count: 112,
      },
      {
        id: '5',
        name: 'Geography',
        description: 'Explore Physical, Human, and Environmental Geography',
        icon: <Globe className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80",
        count: 76,
      },
      {
        id: '6',
        name: 'Music',
        description: 'Test your knowledge on Theory, History, Instruments and Composers',
        icon: <Music className="h-8 w-8" />,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        count: 64,
      },
    ];
    
    return categories.find(cat => cat.id === id) || categories[0];
  };
  
  const category = getCategoryInfo(id || '1');
  
  // Mock quizzes data - in a real app, this would be fetched based on the category ID
  const categoryQuizzes: QuizCardProps[] = [
    {
      id: '101',
      title: `${category.name}: Fundamentals`,
      description: `A comprehensive quiz covering the basics of ${category.name.toLowerCase()}.`,
      author: 'Professor Smith',
      category: category.name,
      questionCount: 15,
      timeEstimate: '30 min',
      difficulty: 'easy',
    },
    {
      id: '102',
      title: `${category.name}: Intermediate Concepts`,
      description: `Test your intermediate knowledge of ${category.name.toLowerCase()} with this challenging quiz.`,
      author: 'Dr. Johnson',
      category: category.name,
      questionCount: 20,
      timeEstimate: '45 min',
      difficulty: 'medium',
    },
    {
      id: '103',
      title: `${category.name}: Advanced Topics`,
      description: `Challenge yourself with advanced ${category.name.toLowerCase()} concepts in this comprehensive quiz.`,
      author: 'Dr. Williams',
      category: category.name,
      questionCount: 25,
      timeEstimate: '60 min',
      difficulty: 'hard',
    },
    {
      id: '104',
      title: `${category.name}: Practical Applications`,
      description: `Explore how ${category.name.toLowerCase()} is applied in real-world scenarios.`,
      author: 'Professor Garcia',
      category: category.name,
      questionCount: 18,
      timeEstimate: '40 min',
      difficulty: 'medium',
    },
    {
      id: '105',
      title: `${category.name}: Historical Perspectives`,
      description: `Learn about the historical development of key ${category.name.toLowerCase()} concepts.`,
      author: 'Dr. Patel',
      category: category.name,
      questionCount: 22,
      timeEstimate: '50 min',
      difficulty: 'medium',
    },
    {
      id: '106',
      title: `${category.name}: Quick Test`,
      description: `A short quiz to test your basic ${category.name.toLowerCase()} knowledge.`,
      author: 'Dr. Taylor',
      category: category.name,
      questionCount: 10,
      timeEstimate: '15 min',
      difficulty: 'easy',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div 
          className="relative h-64 md:h-80 bg-cover bg-center" 
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  {category.icon}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
              <p className="text-white/90 max-w-2xl mx-4">{category.description}</p>
              <p className="text-white/80 mt-4">{category.count} quizzes available</p>
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-auto">
                <Input 
                  type="text" 
                  placeholder={`Search ${category.name} quizzes...`} 
                  className="w-full md:w-64"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4 text-gray-500" />
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quiz Listing */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Available Quizzes</h2>
            <Separator className="mt-4" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} {...quiz} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
