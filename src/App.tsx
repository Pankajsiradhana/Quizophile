
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Create from "./pages/Create";
import CreateQuiz from "./pages/CreateQuiz";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Community from "./pages/Community";
import Topics from "./pages/Topics";
import Logout from "./pages/Logout";
import QuizDetail from "./pages/QuizDetail";
import Categories from "./pages/Categories";
import DatabaseInfo from "./pages/DatabaseInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/quiz" element={<CreateQuiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/quiz/:id" element={<QuizDetail />} />
          <Route path="/database-info" element={<DatabaseInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
