
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FilePlus, BookText, PenSquare, Lightbulb, ScrollText } from 'lucide-react';

const Create = () => {
  const createOptions = [
    {
      title: 'Create Quiz',
      description: 'Build interactive quizzes with multiple question types, timers, and customized scoring.',
      icon: <BookOpen className="h-12 w-12 text-quiz-primary" />,
      link: '/create/quiz',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Add Questions',
      description: 'Create individual questions that can be added to your question bank and used in multiple quizzes.',
      icon: <FilePlus className="h-12 w-12 text-quiz-primary" />,
      link: '/create/question',
      bgImage: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Sample Paper',
      description: 'Design practice test papers for exams, complete with sections, varied question types, and time limits.',
      icon: <BookText className="h-12 w-12 text-quiz-primary" />,
      link: '/create/paper',
      bgImage: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Study Notes',
      description: 'Create and share study notes with rich text formatting, images, and embedded quizzes.',
      icon: <PenSquare className="h-12 w-12 text-quiz-primary" />,
      link: '/create/notes',
      bgImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      title: 'Flashcards',
      description: 'Build flashcard decks for memorizing concepts, vocabulary, and key information.',
      icon: <Lightbulb className="h-12 w-12 text-quiz-primary" />,
      link: '/create/flashcards',
      bgImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    },
    {
      title: 'Assignment',
      description: 'Create homework assignments with deadlines, instructions, and automated grading.',
      icon: <ScrollText className="h-12 w-12 text-quiz-primary" />,
      link: '/create/assignment',
      bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Create Educational Content</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose what type of content you want to create and share with the community
            </p>
          </div>
        </div>
        
        {/* Create Options Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {createOptions.map((option, index) => (
              <Link to={option.link} key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-transparent hover:border-quiz-primary/20 h-full">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${option.bgImage})` }}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/70">
                      <div className="mt-16">{option.icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Tips Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Tips for Creating Great Content</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Clear objectives" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Set Clear Objectives</h3>
                <p className="text-gray-600">
                  Define what learners should understand after completing your content. 
                  Clear learning objectives help you create focused, effective materials.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Variety of questions" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Use Varied Question Types</h3>
                <p className="text-gray-600">
                  Mix multiple choice, true/false, short answer, and other question formats 
                  to test different cognitive skills and keep learners engaged.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Provide feedback" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Provide Meaningful Feedback</h3>
                <p className="text-gray-600">
                  Include explanations for correct and incorrect answers to help 
                  learners understand concepts better, not just test their knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Create;
