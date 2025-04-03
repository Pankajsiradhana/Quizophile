
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Clock, Users, Calendar, Award, BookOpen, MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

const QuizDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data - in a real app, this would be fetched from a database
  const quizData = {
    id,
    title: 'Mathematics: Algebra Fundamentals',
    description: 'Master the basics of algebra with this comprehensive quiz covering equations, expressions, and functions. Perfect for high school students or anyone looking to refresh their math skills.',
    longDescription: 'This quiz covers all the essential topics in algebra including linear equations, polynomials, factoring, quadratic equations, and basic functions. Each question is designed to test your understanding of key algebraic concepts and problem-solving strategies. Complete this quiz to strengthen your foundation in algebra and prepare for more advanced mathematical studies.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    author: 'Professor Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Mathematics',
    questionCount: 15,
    timeEstimate: '30 min',
    difficulty: 'medium',
    completions: 1482,
    averageScore: 78,
    dateCreated: 'March 15, 2023',
    lastUpdated: 'July 2, 2023',
    tags: ['Algebra', 'Equations', 'Functions', 'High School', 'Math Fundamentals'],
    relatedQuizzes: [
      { id: '2', title: 'Algebra II: Advanced Concepts', category: 'Mathematics' },
      { id: '3', title: 'Geometry Basics', category: 'Mathematics' },
      { id: '4', title: 'Trigonometry Fundamentals', category: 'Mathematics' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent py-8">
          <div className="container mx-auto px-4 text-white">
            <Link to="/explore" className="inline-flex items-center text-white/90 hover:text-white mb-4">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Explore
            </Link>
            <h1 className="text-3xl font-bold">{quizData.title}</h1>
            <p className="text-white/90 mt-2 max-w-3xl">{quizData.description}</p>
            
            <div className="flex flex-wrap items-center mt-4 gap-4">
              <div className="flex items-center">
                <img 
                  src={quizData.authorAvatar} 
                  alt={quizData.author} 
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="text-sm text-white/80">Created by</p>
                  <p className="font-semibold">{quizData.author}</p>
                </div>
              </div>
              
              <div className="flex items-center ml-4">
                <Clock className="h-5 w-5 mr-1 text-white/80" />
                <span>{quizData.timeEstimate}</span>
              </div>
              
              <div className="flex items-center ml-4">
                <BookOpen className="h-5 w-5 mr-1 text-white/80" />
                <span>{quizData.questionCount} Questions</span>
              </div>
              
              <div className="flex items-center ml-4">
                <Users className="h-5 w-5 mr-1 text-white/80" />
                <span>{quizData.completions} Completions</span>
              </div>
              
              <div className="flex items-center ml-auto">
                <Button className="bg-white text-quiz-primary hover:bg-white/90">Start Quiz</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Column */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="preview">Question Preview</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <img 
                      src={quizData.image} 
                      alt={quizData.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">About This Quiz</h2>
                      <p className="text-gray-700 mb-6">{quizData.longDescription}</p>
                      
                      <h3 className="text-lg font-semibold mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {quizData.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-medium">{quizData.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Difficulty</p>
                          <p className="font-medium capitalize">{quizData.difficulty}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Created On</p>
                          <p className="font-medium">{quizData.dateCreated}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Updated</p>
                          <p className="font-medium">{quizData.lastUpdated}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="preview">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Sample Questions</h2>
                    <p className="text-gray-600 mb-6">Below are a few sample questions from this quiz to give you an idea of what to expect.</p>
                    
                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <p className="font-medium mb-3">1. What is the solution to the equation 2x + 5 = 13?</p>
                        <div className="space-y-2 ml-4">
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">A</span>
                            <span>x = 4</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">B</span>
                            <span>x = 5</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">C</span>
                            <span>x = 3</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">D</span>
                            <span>x = 9</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <p className="font-medium mb-3">2. Factor the expression: x² - 9x + 20</p>
                        <div className="space-y-2 ml-4">
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">A</span>
                            <span>(x - 4)(x - 5)</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">B</span>
                            <span>(x + 4)(x + 5)</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">C</span>
                            <span>(x - 4)(x + 5)</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-sm mr-2">D</span>
                            <span>(x + 4)(x - 5)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 italic mt-6">These are just sample questions. The actual quiz contains 15 questions of varying difficulty.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Student Reviews</h2>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <div className="flex items-center mr-2">
                          {[1, 2, 3, 4].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">4.2 (56 reviews)</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-600 w-16">5 stars</span>
                        <Progress value={70} className="h-2 flex-grow bg-gray-200" />
                        <span className="text-sm text-gray-600 ml-2 w-12">70%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-600 w-16">4 stars</span>
                        <Progress value={20} className="h-2 flex-grow bg-gray-200" />
                        <span className="text-sm text-gray-600 ml-2 w-12">20%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-600 w-16">3 stars</span>
                        <Progress value={5} className="h-2 flex-grow bg-gray-200" />
                        <span className="text-sm text-gray-600 ml-2 w-12">5%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-600 w-16">2 stars</span>
                        <Progress value={3} className="h-2 flex-grow bg-gray-200" />
                        <span className="text-sm text-gray-600 ml-2 w-12">3%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-16">1 star</span>
                        <Progress value={2} className="h-2 flex-grow bg-gray-200" />
                        <span className="text-sm text-gray-600 ml-2 w-12">2%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Review items */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Reviewer" 
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <div className="flex items-center">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-2">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">This quiz was exactly what I needed to brush up on my algebra skills before taking my college placement exam. The questions were challenging but fair, and the explanations were very helpful.</p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Reviewer" 
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <div>
                            <p className="font-medium">Michael Chen</p>
                            <div className="flex items-center">
                              <div className="flex">
                                {[1, 2, 3, 4].map((star) => (
                                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-500 ml-2">1 month ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">Good content overall, but I wish there were more questions on quadratic equations. Some of the explanations could be more detailed for complex problems.</p>
                      </div>
                    </div>
                    
                    <Button className="mt-6">See All Reviews</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Quiz Stats */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quiz Statistics</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-quiz-primary mr-2" />
                        <span className="text-gray-700">Average Score</span>
                      </div>
                      <span className="font-semibold">{quizData.averageScore}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-quiz-primary mr-2" />
                        <span className="text-gray-700">Total Completions</span>
                      </div>
                      <span className="font-semibold">{quizData.completions}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-quiz-primary mr-2" />
                        <span className="text-gray-700">Last Updated</span>
                      </div>
                      <span className="font-semibold">{quizData.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 my-4 pt-4">
                    <h4 className="font-medium mb-2">Share This Quiz</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Related Quizzes */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related Quizzes</h3>
                  
                  <div className="space-y-4">
                    {quizData.relatedQuizzes.map((quiz, index) => (
                      <Link to={`/quiz/${quiz.id}`} key={index}>
                        <div className="flex items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <div className="bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center text-gray-500 mr-3">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 hover:text-quiz-primary transition-colors">{quiz.title}</p>
                            <p className="text-sm text-gray-500">{quiz.category}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <Link to="/explore">
                    <Button variant="outline" className="w-full mt-4">
                      Find More Quizzes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizDetail;
