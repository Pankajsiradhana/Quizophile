
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-quiz-primary" />
              <span className="text-xl font-bold ml-2 text-quiz-dark">Quizophile</span>
            </Link>
            <p className="mt-3 text-gray-600 text-sm">
              An open-source platform for creating, sharing, and taking educational quizzes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-quiz-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-quiz-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-quiz-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-quiz-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/quizzes" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Questions
                </Link>
              </li>
              <li>
                <Link to="/papers" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Sample Papers
                </Link>
              </li>
              <li>
                <Link to="/topics" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Topics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-600 hover:text-quiz-primary text-sm">
                  API
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-quiz-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-quiz-primary text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Quezophile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
