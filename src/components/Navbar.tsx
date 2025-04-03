
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, BookOpen, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  isLoggedIn: boolean;
  userName?: string;
}

const Navbar = ({ isLoggedIn, userName = "User" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-quiz-primary" />
              <span className="text-xl font-bold ml-2 text-quiz-dark">QuizHive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search quizzes..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link to="/explore" className="text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-sm font-medium">
              Explore
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-sm font-medium">
              Community
            </Link>
            <Link to="/topics" className="text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-sm font-medium">
              Topics
            </Link>

            {isLoggedIn ? (
              <>
                <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-quiz-primary" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-quiz-secondary text-white">
                        {userName.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/dashboard" className="w-full">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/profile" className="w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="w-full">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/logout" className="w-full">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-quiz-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search quizzes..."
                className="pl-10 mb-3"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <Link to="/explore" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
              Explore
            </Link>
            <Link to="/community" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
              Community
            </Link>
            <Link to="/topics" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
              Topics
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <Link to="/profile" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
                  Profile
                </Link>
                <Link to="/logout" className="block text-gray-600 hover:text-quiz-primary px-3 py-2 rounded-md text-base font-medium">
                  Logout
                </Link>
              </>
            ) : (
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
