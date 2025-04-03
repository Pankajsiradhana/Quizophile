
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard = ({ id, name, description, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer overflow-hidden border-2 hover:border-quiz-primary/50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-quiz-light text-quiz-primary">
              {icon}
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{count} quizzes</span>
                <ArrowRight className="h-5 w-5 text-quiz-primary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
