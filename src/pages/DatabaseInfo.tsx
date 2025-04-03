
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Lock, Shield, Users, Server, FileText, Cloud, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DatabaseInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Database className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Database Options for Quizophile</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore database solutions to power your quiz application with user authentication and quiz storage
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Why You Need a Database</h2>
            <p className="text-gray-700 mb-6">
              A robust database solution is essential for storing user accounts, quiz data, scores, and managing the overall functionality of your quiz application. 
              Here are some recommended options for implementing database functionality in Quizophile.
            </p>
          </div>
          
          {/* Database Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Supabase Option */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-all">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-green-600" />
                  Supabase
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Recommended</span>
                </CardTitle>
                <CardDescription>
                  Open source Firebase alternative with PostgreSQL
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex">
                    <Users className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <p>Built-in authentication with multiple providers</p>
                  </div>
                  <div className="flex">
                    <Shield className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <p>Row-level security policies for data protection</p>
                  </div>
                  <div className="flex">
                    <Server className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <p>PostgreSQL database for storing quiz data and user profiles</p>
                  </div>
                  <div className="flex">
                    <FileText className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <p>Storage buckets for quiz images and attachments</p>
                  </div>
                  <div className="flex">
                    <Cloud className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <p>Edge functions for serverless backend logic</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-green-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-green-700">Full-featured quiz platforms with user accounts, personalized content, and real-time features.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Started with Supabase
                </Button>
              </CardFooter>
            </Card>
            
            {/* Firebase Option */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-blue-600" />
                  Firebase
                </CardTitle>
                <CardDescription>
                  Google's application development platform
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex">
                    <Lock className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <p>Comprehensive authentication system</p>
                  </div>
                  <div className="flex">
                    <Server className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <p>Firestore NoSQL database for quiz storage</p>
                  </div>
                  <div className="flex">
                    <Cloud className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <p>Cloud functions for serverless backend operations</p>
                  </div>
                  <div className="flex">
                    <FileText className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <p>Storage for quiz media assets</p>
                  </div>
                  <div className="flex">
                    <Users className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <p>Real-time database for live quiz sessions</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-blue-700">Quiz applications that need real-time features like live competitions and instant leaderboards.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  Explore Firebase
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Implementation Guide */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Implement a Database</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-quiz-primary" />
                Steps to Integrate Supabase
              </h3>
              
              <ol className="space-y-4 list-decimal list-inside ml-6">
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Create a Supabase account</span> - Sign up at supabase.com and create a new project
                </li>
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Install the Supabase client</span> - Add the Supabase JavaScript client to your project
                </li>
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Set up authentication</span> - Configure the auth providers you want to use (email, Google, etc.)
                </li>
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Create database tables</span> - Define your schema for users, quizzes, questions, and responses
                </li>
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Set up security policies</span> - Configure row-level security to protect your data
                </li>
                <li className="text-gray-700">
                  <span className="font-medium text-gray-900">Connect your app</span> - Integrate Supabase client with your React components
                </li>
              </ol>
            </div>
            
            {/* Sample Code */}
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-8 overflow-auto">
              <h3 className="text-lg font-semibold mb-4">Sample Authentication Code</h3>
              <pre className="text-sm">
                <code>
{`// Configure Supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

// Sign up new users
async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  })
  return { user, error }
}

// Sign in existing users
async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { user, error }
}

// Store a new quiz
async function createQuiz(quizData) {
  const { data, error } = await supabase
    .from('quizzes')
    .insert([quizData])
  return { data, error }
}`}
                </code>
              </pre>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Add a Database to Your QuizHive App?</h3>
              <p className="text-gray-700 mb-6">
                Start storing user data, quiz content, and tracking user progress by implementing a robust database solution.
              </p>
              <Link to="/signup">
                <Button className="bg-quiz-primary hover:bg-quiz-accent">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DatabaseInfo;
