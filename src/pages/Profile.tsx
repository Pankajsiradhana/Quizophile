
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, BookOpen, Award, Clock, Settings, History } from 'lucide-react';
import QuizCard, { QuizCardProps } from '@/components/QuizCard';

const Profile = () => {
  // Mock user data
  const userData = {
    name: "Alex Johnson",
    username: "alexj",
    email: "alex@example.com",
    joined: "January 2023",
    quizzesTaken: 42,
    quizzesCreated: 15,
    badges: ["Quiz Master", "Early Adopter", "Knowledge Seeker"],
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  };

  // Mock created quizzes
  const createdQuizzes: QuizCardProps[] = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics including variables, functions, and objects.',
      author: userData.name,
      category: 'Programming',
      questionCount: 15,
      timeEstimate: '30 min',
      difficulty: 'medium',
    },
    {
      id: '2',
      title: 'World Capitals',
      description: 'How well do you know the capital cities around the world?',
      author: userData.name,
      category: 'Geography',
      questionCount: 20,
      timeEstimate: '25 min',
      difficulty: 'hard',
    },
  ];

  // Mock completed quizzes
  const completedQuizzes: QuizCardProps[] = [
    {
      id: '3',
      title: 'Biology: Human Anatomy',
      description: 'Explore the fundamentals of human anatomy and organ systems.',
      author: 'Dr. Smith',
      category: 'Biology',
      questionCount: 18,
      timeEstimate: '35 min',
      difficulty: 'medium',
    },
    {
      id: '4',
      title: 'English Literature: Shakespeare',
      description: 'Test your knowledge of Shakespeare\'s plays and sonnets.',
      author: 'Prof. Williams',
      category: 'Literature',
      questionCount: 20,
      timeEstimate: '40 min',
      difficulty: 'hard',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} userName={userData.name} />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userData.profileImage} alt={userData.name} />
                <AvatarFallback>{userData.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
                <p className="text-gray-500 mb-3">@{userData.username}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                  <span className="bg-quiz-light text-quiz-primary px-3 py-1 rounded-full text-sm">
                    {userData.quizzesTaken} Quizzes Taken
                  </span>
                  <span className="bg-quiz-light text-quiz-primary px-3 py-1 rounded-full text-sm">
                    {userData.quizzesCreated} Quizzes Created
                  </span>
                  <span className="bg-quiz-light text-quiz-primary px-3 py-1 rounded-full text-sm">
                    Joined {userData.joined}
                  </span>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {userData.badges.map((badge, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <Tabs defaultValue="created">
            <TabsList className="mb-6">
              <TabsTrigger value="created" className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                Created Quizzes
              </TabsTrigger>
              <TabsTrigger value="taken" className="flex items-center gap-1">
                <History className="h-4 w-4" />
                Completed Quizzes
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Statistics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="created">
              <h2 className="text-xl font-semibold mb-4">Your Created Quizzes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {createdQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
                <Card className="h-full flex items-center justify-center border-dashed border-2 border-gray-300 hover:border-quiz-primary/50 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="bg-quiz-light text-quiz-primary rounded-full p-3 mb-4">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg text-center">Create New Quiz</h3>
                    <p className="text-gray-500 text-center mt-2">
                      Share your knowledge by creating a new quiz
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="taken">
              <h2 className="text-xl font-semibold mb-4">Quizzes You've Completed</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Time Spent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24.5 hours</div>
                    <p className="text-xs text-gray-500 mt-1">Across all quizzes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Average Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78%</div>
                    <p className="text-xs text-gray-500 mt-1">Across all quizzes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Favorite Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Science</div>
                    <p className="text-xs text-gray-500 mt-1">15 quizzes taken</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                      <div className="bg-quiz-light text-quiz-primary rounded-full p-2">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Completed "Biology: Human Anatomy"</h4>
                        <p className="text-sm text-gray-500">Score: 85% · 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                      <div className="bg-quiz-light text-quiz-primary rounded-full p-2">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Created "JavaScript Fundamentals"</h4>
                        <p className="text-sm text-gray-500">15 questions · 1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-quiz-light text-quiz-primary rounded-full p-2">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Earned "Quiz Master" badge</h4>
                        <p className="text-sm text-gray-500">Create 10+ quizzes · 2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
