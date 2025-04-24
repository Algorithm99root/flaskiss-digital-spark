
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Price {
  name: string;
  price: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  videoUrl?: string;
  prices: Price[];
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  videoUrl,
  prices,
}: ServiceCardProps) => {
  return (
    <Card className="w-full overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4">
          <div className="p-2 rounded-full bg-flaskiss-primary/10">
            <Icon className="h-8 w-8 text-flaskiss-primary" />
          </div>
        </div>
        <CardTitle className="text-xl text-center text-flaskiss-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center mb-6 text-flaskiss-muted">
          {description}
        </CardDescription>
        
        {videoUrl && (
          <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="space-y-2">
          {prices.map((price, index) => (
            <div
              key={index}
              className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-0"
            >
              <span>{price.name}</span>
              <span className="font-semibold text-flaskiss-primary">
                {price.price}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
