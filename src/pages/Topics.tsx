
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calculator, Beaker, BookOpen, BookOpenText, Globe, Music, PenTool, Lightbulb, Code, Film, HeartPulse, Database, LineChart, MapPin, ShoppingBag, User } from 'lucide-react';

const Topics = () => {
  // Define topic categories with icons
  const topicCategories = [
    {
      name: "Mathematics",
      icon: <Calculator className="h-10 w-10" />,
      color: "bg-blue-100 text-blue-600",
      subtopics: ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"]
    },
    {
      name: "Science",
      icon: <Beaker className="h-10 w-10" />,
      color: "bg-green-100 text-green-600",
      subtopics: ["Physics", "Chemistry", "Biology", "Astronomy", "Earth Science"]
    },
    {
      name: "Literature",
      icon: <BookOpen className="h-10 w-10" />,
      color: "bg-yellow-100 text-yellow-600",
      subtopics: ["Fiction", "Poetry", "Drama", "Essays", "Literary Criticism"]
    },
    {
      name: "History",
      icon: <BookOpenText className="h-10 w-10" />,
      color: "bg-red-100 text-red-600",
      subtopics: ["Ancient History", "Medieval History", "Modern History", "World Wars", "Cultural History"]
    },
    {
      name: "Geography",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-purple-100 text-purple-600",
      subtopics: ["Physical Geography", "Human Geography", "Cartography", "GIS", "Environmental Geography"]
    },
    {
      name: "Music",
      icon: <Music className="h-10 w-10" />,
      color: "bg-pink-100 text-pink-600",
      subtopics: ["Music Theory", "Music History", "Instruments", "Composers", "Music Genres"]
    },
    {
      name: "Arts & Design",
      icon: <PenTool className="h-10 w-10" />,
      color: "bg-indigo-100 text-indigo-600",
      subtopics: ["Fine Arts", "Graphic Design", "Architecture", "Photography", "Sculpture"]
    },
    {
      name: "Philosophy",
      icon: <Lightbulb className="h-10 w-10" />,
      color: "bg-amber-100 text-amber-600",
      subtopics: ["Ethics", "Metaphysics", "Epistemology", "Existentialism", "Logic"]
    },
    {
      name: "Computer Science",
      icon: <Code className="h-10 w-10" />,
      color: "bg-cyan-100 text-cyan-600",
      subtopics: ["Programming", "Algorithms", "Data Structures", "Artificial Intelligence", "Web Development"]
    },
    {
      name: "Film & Media",
      icon: <Film className="h-10 w-10" />,
      color: "bg-rose-100 text-rose-600",
      subtopics: ["Film History", "Film Theory", "Media Studies", "Cinematography", "Script Writing"]
    },
    {
      name: "Health & Medicine",
      icon: <HeartPulse className="h-10 w-10" />,
      color: "bg-emerald-100 text-emerald-600",
      subtopics: ["Anatomy", "Physiology", "Nutrition", "Public Health", "Medical Ethics"]
    },
    {
      name: "Data Science",
      icon: <Database className="h-10 w-10" />,
      color: "bg-slate-100 text-slate-600",
      subtopics: ["Data Analysis", "Machine Learning", "Big Data", "Data Visualization", "Statistical Methods"]
    },
    {
      name: "Economics",
      icon: <LineChart className="h-10 w-10" />,
      color: "bg-orange-100 text-orange-600",
      subtopics: ["Microeconomics", "Macroeconomics", "International Economics", "Finance", "Economic History"]
    },
    {
      name: "Languages",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-teal-100 text-teal-600",
      subtopics: ["English", "Spanish", "French", "Chinese", "Arabic"]
    },
    {
      name: "Tourism & Travel",
      icon: <MapPin className="h-10 w-10" />,
      color: "bg-lime-100 text-lime-600",
      subtopics: ["Tourism Management", "Cultural Tourism", "Sustainable Tourism", "Travel Writing", "Hospitality"]
    },
    {
      name: "Business",
      icon: <ShoppingBag className="h-10 w-10" />,
      color: "bg-neutral-100 text-neutral-600",
      subtopics: ["Marketing", "Management", "Entrepreneurship", "Business Ethics", "International Business"]
    },
    {
      name: "Psychology",
      icon: <User className="h-10 w-10" />,
      color: "bg-violet-100 text-violet-600",
      subtopics: ["Clinical Psychology", "Cognitive Psychology", "Developmental Psychology", "Social Psychology", "Neuropsychology"]
    }
  ];

  // Featured topics with images
  const featuredTopics = [
    {
      name: "Quantum Physics",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quizCount: 42
    },
    {
      name: "World Literature",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quizCount: 78
    },
    {
      name: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quizCount: 35
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Explore Educational Topics</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover thousands of quizzes across a wide range of academic and interest-based topics
            </p>
            <div className="max-w-md mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search topics..." 
                className="pl-10 py-6 text-black"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Featured Topics */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-quiz-primary/50">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${topic.image})` }}
                >
                  <div className="w-full h-full flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{topic.name}</h3>
                      <p>{topic.quizCount} quizzes</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* All Topic Categories */}
          <h2 className="text-2xl font-bold mb-6">All Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topicCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-quiz-primary/50">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                    <div className={`p-4 rounded-full ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.subtopics.slice(0, 3).map((subtopic, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            {subtopic}
                          </span>
                        ))}
                        {category.subtopics.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            +{category.subtopics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Topic Suggestion */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find Your Topic?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              If you can't find a specific topic you're interested in, suggest it to our community.
              We regularly add new topics based on user suggestions.
            </p>
            <Button>Suggest a Topic</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Topics;
