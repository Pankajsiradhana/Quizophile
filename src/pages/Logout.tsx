
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Logout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, this would call an API to invalidate the session
    // For now, we'll just simulate a logout
    
    setTimeout(() => {
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account."
      });
      
      navigate('/');
    }, 500);
  }, [navigate, toast]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-quiz-primary mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Logging you out...</h2>
        <p className="text-gray-500 mt-2">Please wait while we securely log you out.</p>
      </div>
    </div>
  );
};

export default Logout;
