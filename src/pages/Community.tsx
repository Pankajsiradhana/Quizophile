
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Star, TrendingUp, MessageSquare, Heart, Share2 } from 'lucide-react';

const Community = () => {
  // Sample community posts
  const communityPosts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        username: "sarahj",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
      },
      title: "Tips for Creating Engaging Science Quizzes",
      content: "After creating over 50 science quizzes, I've learned that the most engaging ones include visual elements and real-world applications. Here are my top 5 tips for creating science quizzes that students love...",
      topic: "Quiz Creation",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      likes: 124,
      comments: 32,
      time: "2 days ago"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        username: "michaelc",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
      },
      title: "Using quizophile for Remote Learning: A Teacher's Experience",
      content: "When the pandemic hit, I had to quickly adapt my teaching methods. Quizophile became an essential tool in my virtual classroom. Here's how I used it to keep my students engaged and assess their understanding...",
      topic: "Teaching",
      likes: 89,
      comments: 17,
      time: "5 days ago"
    },
    {
      id: 3,
      author: {
        name: "Emily Rodriguez",
        username: "emilyr",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
      },
      title: "How I Improved Student Test Scores with Weekly Quizzes",
      content: "Regular assessment is key to student success. By implementing weekly quizzes through Qizophile, I saw a 15% improvement in final exam scores. Here's my approach and the data to back it up...",
      topic: "Assessment",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      likes: 156,
      comments: 41,
      time: "1 week ago"
    }
  ];

  // Active forum discussions
  const forumDiscussions = [
    {
      id: 1,
      title: "Best practices for creating math formula questions?",
      author: "MathTeacher42",
      replies: 24,
      lastActive: "3 hours ago"
    },
    {
      id: 2,
      title: "How to use Quizophile for language assessment?",
      author: "LinguistPro",
      replies: 18,
      lastActive: "1 day ago"
    },
    {
      id: 3,
      title: "Strategies for preventing cheating in online quizzes",
      author: "AcademicIntegrity",
      replies: 32,
      lastActive: "2 days ago"
    },
    {
      id: 4,
      title: "Share your creative quiz feedback ideas!",
      author: "CreativeEdu",
      replies: 15,
      lastActive: "3 days ago"
    }
  ];

  // Top community members
  const topMembers = [
    {
      name: "Dr. Lisa Wang",
      username: "lisaw",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contribution: "Science Specialist",
      quizzes: 87
    },
    {
      name: "Prof. James Miller",
      username: "jamesm",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contribution: "History Expert",
      quizzes: 65
    },
    {
      name: "Rachel Green",
      username: "rachelg",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contribution: "Literature Enthusiast",
      quizzes: 42
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">QuizHive Community</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Connect with educators and learners from around the world. Share ideas, get inspired, and enhance your educational journey.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search topics, posts, or members..." 
                className="pl-10 py-6 text-black"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area - Posts and Discussions */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="featured">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="featured">
                      <Star className="h-4 w-4 mr-2" />
                      Featured
                    </TabsTrigger>
                    <TabsTrigger value="trending">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Trending
                    </TabsTrigger>
                    <TabsTrigger value="discussions">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Discussions
                    </TabsTrigger>
                  </TabsList>
                  <Button>Create Post</Button>
                </div>
                
                <TabsContent value="featured" className="space-y-6">
                  {communityPosts.map(post => (
                    <Card key={post.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar>
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{post.author.name}</h3>
                            <p className="text-sm text-gray-500">@{post.author.username} · {post.time}</p>
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        
                        {post.image && (
                          <img 
                            src={post.image} 
                            alt="Post illustration" 
                            className="w-full h-64 object-cover rounded-md mb-4"
                          />
                        )}
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-6">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-quiz-primary">
                              <Heart className="h-5 w-5" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-quiz-primary">
                              <MessageSquare className="h-5 w-5" />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                          <button className="text-gray-500 hover:text-quiz-primary">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="trending">
                  <div className="bg-gray-100 rounded-lg p-12 text-center">
                    <TrendingUp className="h-12 w-12 text-quiz-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Trending content is coming soon!</h3>
                    <p className="text-gray-600 mb-4">
                      We're working on algorithms to surface the most popular content in the community.
                    </p>
                    <Button variant="outline">Get notified when it's ready</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="discussions" className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold">Active Discussions</h2>
                    <Button variant="outline" size="sm">New Discussion</Button>
                  </div>
                  
                  {forumDiscussions.map(discussion => (
                    <Card key={discussion.id} className="hover:border-quiz-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{discussion.title}</h3>
                            <p className="text-sm text-gray-500">
                              Started by <span className="text-quiz-primary">@{discussion.author}</span> · {discussion.lastActive}
                            </p>
                          </div>
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {discussion.replies} replies
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - Community Info */}
            <div className="space-y-8">
              {/* About Community */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    About Our Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A thriving community of educators, students, and knowledge enthusiasts sharing educational resources and ideas.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-md">
                      <p className="font-bold text-2xl">12.4k</p>
                      <p className="text-sm text-gray-500">Members</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-md">
                      <p className="font-bold text-2xl">892</p>
                      <p className="text-sm text-gray-500">Online Now</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button className="w-full">Join Community</Button>
                    <Button variant="outline" className="w-full">Create Post</Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Community Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">1.</span>
                      <span>Be respectful and supportive of all members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">2.</span>
                      <span>Share quality educational content and resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">3.</span>
                      <span>Give credit when sharing others' materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">4.</span>
                      <span>No self-promotion without contributing value</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">5.</span>
                      <span>Help maintain a positive learning environment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topMembers.map(member => (
                      <div key={member.username} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.contribution}</p>
                          </div>
                        </div>
                        <div className="text-sm text-quiz-primary font-semibold">
                          {member.quizzes} quizzes
                        </div>
                      </div>
                    ))}
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

export default Community;
