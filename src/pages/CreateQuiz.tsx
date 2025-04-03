
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BookOpen, Clock, Award } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const CreateQuiz = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'medium',
    timeEstimate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuizData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setQuizData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quiz Created",
      description: "Your quiz has been created successfully and saved as a draft.",
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create New Quiz</h1>
            <p className="text-gray-600 mt-2">Fill in the details to create your quiz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Quiz Title</Label>
                        <Input 
                          id="title" 
                          name="title" 
                          placeholder="Enter a clear, descriptive title" 
                          value={quizData.title}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description" 
                          name="description" 
                          placeholder="Describe what your quiz is about" 
                          rows={4}
                          value={quizData.description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select 
                            onValueChange={(value) => handleSelectChange('category', value)}
                            value={quizData.category}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="literature">Literature</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                              <SelectItem value="geography">Geography</SelectItem>
                              <SelectItem value="music">Music</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="difficulty">Difficulty</Label>
                          <Select 
                            onValueChange={(value) => handleSelectChange('difficulty', value)}
                            defaultValue="medium"
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="easy">Easy</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeEstimate">Time Estimate</Label>
                        <Input 
                          id="timeEstimate" 
                          name="timeEstimate" 
                          placeholder="e.g., 30 min" 
                          value={quizData.timeEstimate}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="flex justify-end space-x-4 pt-4">
                        <Button variant="outline" type="button" onClick={() => navigate('/dashboard')}>
                          Cancel
                        </Button>
                        <Button type="submit">Create Quiz</Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-quiz-primary mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Clear Titles</h3>
                        <p className="text-sm text-gray-600">Choose a title that accurately reflects the quiz content.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-quiz-primary mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Time Estimates</h3>
                        <p className="text-sm text-gray-600">Provide a realistic time frame for completing the quiz.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-quiz-primary mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Difficulty Level</h3>
                        <p className="text-sm text-gray-600">Set an appropriate difficulty to match your target audience.</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <img 
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="Quiz creation" 
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
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

export default CreateQuiz;
