
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import { Calculator, Beaker, BookOpen, BookOpenText, Globe, Music, PenTool, Lightbulb, Code, Film, HeartPulse, Database, LineChart, ShoppingBag, User } from 'lucide-react';

const Categories = () => {
  // Mock data for categories
  const categories = [
    {
      id: '1',
      name: 'Mathematics',
      description: 'Algebra, Geometry, Calculus, Statistics and more',
      icon: <Calculator className="h-6 w-6" />,
      count: 156,
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      name: 'Science',
      description: 'Physics, Chemistry, Biology and Earth Sciences',
      icon: <Beaker className="h-6 w-6" />,
      count: 142,
      image: 'https://images.unsplash.com/photo-1532094349884-543019a69b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      name: 'Literature',
      description: 'Fiction, Poetry, Drama and Literary Analysis',
      icon: <BookOpen className="h-6 w-6" />,
      count: 98,
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      name: 'History',
      description: 'Ancient, Medieval, Modern and Contemporary History',
      icon: <BookOpenText className="h-6 w-6" />,
      count: 112,
      image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      name: 'Geography',
      description: 'Physical, Human, and Environmental Geography',
      icon: <Globe className="h-6 w-6" />,
      count: 76,
      image: 'https://images.unsplash.com/photo-1589519160732-57fc5e875a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      name: 'Music',
      description: 'Theory, History, Instruments and Composers',
      icon: <Music className="h-6 w-6" />,
      count: 64,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '7',
      name: 'Arts & Design',
      description: 'Fine Arts, Graphic Design, Architecture and more',
      icon: <PenTool className="h-6 w-6" />,
      count: 88,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '8',
      name: 'Philosophy',
      description: 'Ethics, Metaphysics, Epistemology and Logic',
      icon: <Lightbulb className="h-6 w-6" />,
      count: 53,
      image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '9',
      name: 'Computer Science',
      description: 'Programming, Algorithms, Data Structures and AI',
      icon: <Code className="h-6 w-6" />,
      count: 120,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '10',
      name: 'Film & Media',
      description: 'Film History, Media Studies and Cinematography',
      icon: <Film className="h-6 w-6" />,
      count: 68,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '11',
      name: 'Health & Medicine',
      description: 'Anatomy, Physiology, Nutrition and Public Health',
      icon: <HeartPulse className="h-6 w-6" />,
      count: 94,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '12',
      name: 'Data Science',
      description: 'Data Analysis, Machine Learning and Visualization',
      icon: <Database className="h-6 w-6" />,
      count: 82,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '13',
      name: 'Economics',
      description: 'Microeconomics, Macroeconomics and Finance',
      icon: <LineChart className="h-6 w-6" />,
      count: 72,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '14',
      name: 'Business',
      description: 'Management, Marketing, Entrepreneurship and more',
      icon: <ShoppingBag className="h-6 w-6" />,
      count: 105,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '15',
      name: 'Psychology',
      description: 'Clinical, Cognitive, Social and Developmental Psychology',
      icon: <User className="h-6 w-6" />,
      count: 89,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
  ];

  // Featured categories
  const featuredCategories = categories.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Explore Quiz Categories</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover thousands of quizzes across a wide range of academic and interest-based categories
            </p>
            <div className="max-w-md mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search categories..." 
                className="pl-10 py-6 text-black"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Featured Categories */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredCategories.map((category, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center mb-2">
                        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                      <p className="text-white/80 text-sm">{category.count} quizzes</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* All Categories */}
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
