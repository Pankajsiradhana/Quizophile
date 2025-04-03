
import { BookOpen, Users, Award, BarChart, Clock, FileText } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-quiz-primary" />,
    title: "Multiple Question Types",
    description: "Create multiple-choice, true/false, fill-in-the-blanks, and essay questions to test different skills."
  },
  {
    icon: <Users className="h-8 w-8 text-quiz-primary" />,
    title: "Collaborative Creation",
    description: "Work with other educators to create comprehensive question banks and sample papers."
  },
  {
    icon: <FileText className="h-8 w-8 text-quiz-primary" />,
    title: "Sample Papers",
    description: "Generate sample question papers for different grades, subjects, and difficulty levels."
  },
  {
    icon: <Award className="h-8 w-8 text-quiz-primary" />,
    title: "Subject Categories",
    description: "Organize content by subjects, standards, and topics for easy navigation and discovery."
  },
  {
    icon: <BarChart className="h-8 w-8 text-quiz-primary" />,
    title: "Performance Analytics",
    description: "Track student performance with detailed analytics and identify areas for improvement."
  },
  {
    icon: <Clock className="h-8 w-8 text-quiz-primary" />,
    title: "Timed Assessments",
    description: "Set time limits for quizzes to simulate exam environments and improve time management."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features for Educators and Students</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools you need to create, share, and take educational content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-quiz-secondary"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
