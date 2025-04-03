
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow bg-gray-50 flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Create an Account</h1>
        <AuthForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
