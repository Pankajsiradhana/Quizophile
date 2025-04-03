
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus, Clock, Edit, Eye, Trash2, FilePlus, BookText } from 'lucide-react';
import QuizCard, { QuizCardProps } from '@/components/QuizCard';

const Dashboard = () => {
  const [userName] = useState('John Doe');
  
  // Mock data for user's quizzes
  const userQuizzes: QuizCardProps[] = [
    {
      id: '101',
      title: 'Physics: Forces and Motion',
      description: 'Comprehensive quiz on Newton\'s laws, kinetics, and dynamics.',
      author: 'John Doe',
      category: 'Physics',
      questionCount: 18,
      timeEstimate: '35 min',
      difficulty: 'medium',
    },
    {
      id: '102',
      title: 'Chemistry: Periodic Table',
      description: 'Explore elements, their properties, and periodic trends.',
      author: 'John Doe',
      category: 'Chemistry',
      questionCount: 25,
      timeEstimate: '45 min',
      difficulty: 'hard',
    },
  ];
  
  // Mock data for draft quizzes
  const draftQuizzes = [
    {
      id: '201',
      title: 'Geography: European Countries',
      lastEdited: '2 days ago',
      questions: 8,
    },
    {
      id: '202',
      title: 'Computer Science: Data Structures',
      lastEdited: '5 days ago',
      questions: 12,
    },
  ];
  
  // Mock data for recent activity
  const recentActivity = [
    {
      id: '301',
      action: 'Quiz Taken',
      title: 'Biology: Cellular Respiration',
      date: '1 day ago',
      score: '85%',
    },
    {
      id: '302',
      action: 'Quiz Created',
      title: 'Chemistry: Periodic Table',
      date: '3 days ago',
    },
    {
      id: '303',
      action: 'Question Added',
      title: 'Physics: Forces and Motion',
      date: '4 days ago',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} userName={userName} />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, {userName}!</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/create/quiz">
              <Button className="bg-quiz-primary hover:bg-quiz-accent">
                <Plus className="mr-2 h-4 w-4" /> Create Quiz
              </Button>
            </Link>
            <Link to="/create/question">
              <Button variant="outline">
                <FilePlus className="mr-2 h-4 w-4" /> Add Questions
              </Button>
            </Link>
            <Link to="/create/paper">
              <Button variant="outline">
                <BookText className="mr-2 h-4 w-4" /> Create Sample Paper
              </Button>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Created</CardTitle>
                <CardDescription>Total quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Questions</CardTitle>
                <CardDescription>In your library</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Completed</CardTitle>
                <CardDescription>Quizzes taken</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Avg. Score</CardTitle>
                <CardDescription>Your performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content Tabs */}
          <Tabs defaultValue="myContent" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="myContent">My Content</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            
            {/* My Content Tab */}
            <TabsContent value="myContent">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Published Quizzes</h2>
                <Link to="/my-content">
                  <Button variant="link" className="text-quiz-primary">
                    View All
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} {...quiz} />
                ))}
                <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2 border-gray-300 bg-transparent h-full">
                  <Link to="/create/quiz" className="flex flex-col items-center text-gray-500 hover:text-quiz-primary transition-colors">
                    <Plus className="h-12 w-12 mb-4" />
                    <span className="font-medium">Create New Quiz</span>
                  </Link>
                </Card>
              </div>
            </TabsContent>
            
            {/* Drafts Tab */}
            <TabsContent value="drafts">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Saved Drafts</h2>
                <Link to="/drafts">
                  <Button variant="link" className="text-quiz-primary">
                    View All
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {draftQuizzes.map((draft) => (
                  <Card key={draft.id} className="hover:border-quiz-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{draft.title}</h3>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{draft.lastEdited}</span>
                            <BookOpen className="h-4 w-4 ml-4 mr-1" />
                            <span>{draft.questions} questions</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Link to={`/edit/${draft.id}`}>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button size="sm" variant="ghost" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2 border-gray-300 bg-transparent">
                  <Link to="/create/quiz" className="flex flex-col items-center text-gray-500 hover:text-quiz-primary transition-colors p-4">
                    <Plus className="h-8 w-8 mb-2" />
                    <span className="font-medium">Start New Draft</span>
                  </Link>
                </Card>
              </div>
            </TabsContent>
            
            {/* Activity Tab */}
            <TabsContent value="activity">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Your Recent Activity</h2>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <Card key={activity.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-quiz-light text-quiz-primary mr-4">
                          {activity.action === 'Quiz Taken' ? (
                            <BookOpen className="h-5 w-5" />
                          ) : activity.action === 'Quiz Created' ? (
                            <Plus className="h-5 w-5" />
                          ) : (
                            <Edit className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{activity.action}</h3>
                            <span className="text-sm text-gray-500">{activity.date}</span>
                          </div>
                          <p className="text-gray-600 mt-1">{activity.title}</p>
                          {activity.score && (
                            <div className="mt-1 text-sm font-medium text-quiz-primary">
                              Score: {activity.score}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Dashboard;
