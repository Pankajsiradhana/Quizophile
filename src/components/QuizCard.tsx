
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, User } from 'lucide-react';

export interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  questionCount: number;
  timeEstimate: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

const QuizCard = ({
  id,
  title,
  description,
  author,
  category,
  questionCount,
  timeEstimate,
  difficulty,
  imageUrl
}: QuizCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/quiz/${id}`}>
      <Card className="quiz-card h-full flex flex-col transition-all hover:translate-y-[-5px]">
        <CardHeader className="p-0">
          <div className="h-40 overflow-hidden relative">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
            <Badge className={`absolute top-2 right-2 ${getDifficultyColor(difficulty)}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
            <Badge className="absolute top-2 left-2 bg-quiz-primary text-white">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-4 flex-grow">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-0 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{questionCount} Q</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeEstimate}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default QuizCard;
