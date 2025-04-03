
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Lock, 
  Bell, 
  Eye, 
  Languages, 
  Palette, 
  Moon, 
  Trash2
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings updated",
      description: "Your settings have been saved successfully."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <Tabs defaultValue="profile" orientation="vertical" className="w-full">
                    <TabsList className="flex flex-col items-start h-auto w-full bg-transparent space-y-1">
                      <TabsTrigger value="profile" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="account" className="w-full justify-start">
                        <Lock className="h-4 w-4 mr-2" />
                        Account
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger value="privacy" className="w-full justify-start">
                        <Eye className="h-4 w-4 mr-2" />
                        Privacy
                      </TabsTrigger>
                      <TabsTrigger value="appearance" className="w-full justify-start">
                        <Palette className="h-4 w-4 mr-2" />
                        Appearance
                      </TabsTrigger>
                      <TabsTrigger value="language" className="w-full justify-start">
                        <Languages className="h-4 w-4 mr-2" />
                        Language
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              <Tabs defaultValue="profile">
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSave} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Alex" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Johnson" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="alexj" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input id="bio" defaultValue="Passionate educator and quiz enthusiast" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input id="website" defaultValue="https://alexjohnson.com" />
                        </div>
                        
                        <div className="pt-2">
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSave} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" defaultValue="alex@example.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Change Password</Label>
                          <Input id="password" type="password" placeholder="••••••••" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" placeholder="••••••••" />
                        </div>
                        
                        <div className="pt-2">
                          <Button type="submit">Update Account</Button>
                        </div>
                      </form>
                      
                      <div className="border-t border-gray-200 mt-8 pt-6">
                        <h3 className="text-base font-semibold mb-4">Danger Zone</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="destructive" className="flex items-center">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Email Notifications</h3>
                            <p className="text-sm text-gray-500">Receive updates via email</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Quiz Comments</h3>
                            <p className="text-sm text-gray-500">When someone comments on your quiz</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Quiz Completions</h3>
                            <p className="text-sm text-gray-500">When someone completes your quiz</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Marketing Emails</h3>
                            <p className="text-sm text-gray-500">Tips and resources for quiz creators</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="pt-2">
                          <Button type="button" onClick={(e) => handleSave(e as any)}>Save Preferences</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="privacy">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Public Profile</h3>
                            <p className="text-sm text-gray-500">Allow others to view your profile</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Show Scores</h3>
                            <p className="text-sm text-gray-500">Display your quiz scores to others</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Allow Friend Requests</h3>
                            <p className="text-sm text-gray-500">Let other users add you as a friend</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="pt-2">
                          <Button type="button" onClick={(e) => handleSave(e as any)}>Save Privacy Settings</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appearance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="theme">Theme</Label>
                          <div className="flex gap-4 mt-2">
                            <div className="flex flex-col items-center">
                              <div className="w-20 h-20 border rounded-md flex items-center justify-center bg-white">
                                <Palette className="h-8 w-8" />
                              </div>
                              <span className="mt-2 text-sm">Light</span>
                              <input type="radio" name="theme" className="mt-1" defaultChecked />
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-20 h-20 border rounded-md flex items-center justify-center bg-gray-900">
                                <Moon className="h-8 w-8 text-white" />
                              </div>
                              <span className="mt-2 text-sm">Dark</span>
                              <input type="radio" name="theme" className="mt-1" />
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-20 h-20 border rounded-md bg-gradient-to-r from-white to-gray-900 flex items-center justify-center">
                                <Moon className="h-8 w-8 text-gray-700" />
                              </div>
                              <span className="mt-2 text-sm">System</span>
                              <input type="radio" name="theme" className="mt-1" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Color Scheme</Label>
                          <div className="grid grid-cols-5 gap-2 mt-2">
                            <div className="w-8 h-8 rounded-full bg-quiz-primary cursor-pointer ring-2 ring-offset-2 ring-quiz-primary"></div>
                            <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"></div>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <Button type="button" onClick={(e) => handleSave(e as any)}>Save Appearance</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="language">
                  <Card>
                    <CardHeader>
                      <CardTitle>Language Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="language">Display Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                              <SelectItem value="zh">Chinese</SelectItem>
                              <SelectItem value="ja">Japanese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Auto Translate Content</h3>
                            <p className="text-sm text-gray-500">Automatically translate quizzes to your language</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="pt-2">
                          <Button type="button" onClick={(e) => handleSave(e as any)}>Save Language Settings</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
