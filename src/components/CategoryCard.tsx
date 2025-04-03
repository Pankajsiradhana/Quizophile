
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard = ({
  id,
  name,
  description,
  icon,
  count
}: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="quiz-card h-full transition-all hover:border-quiz-primary hover:shadow">
        <CardContent className="pt-6 pb-4 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-quiz-light text-quiz-primary mb-4">
            {icon}
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mt-2 mb-3 line-clamp-2">{description}</p>
          <span className="text-sm text-quiz-primary font-medium">{count} quizzes</span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
