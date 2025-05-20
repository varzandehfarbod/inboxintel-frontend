
import React from 'react';
import { EmailThread } from './data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEmailModal } from '@/hooks/useEmailModal';

interface TopThreadsCardProps {
  threads: EmailThread[];
}

const TopThreadsCard: React.FC<TopThreadsCardProps> = ({ threads }) => {
  const { openEmailModal } = useEmailModal();
  
  // Take only the top 3 threads
  const topThreads = threads.slice(0, 3);

  // Define urgency badge styles
  const urgencyStyles = {
    High: "bg-red-100 text-red-800 border-red-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Low: "bg-green-100 text-green-800 border-green-200"
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Mail className="mr-2 h-5 w-5 text-primary" />
          Today's Top Threads
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2">
        <ul className="space-y-4">
          {topThreads.map((thread) => (
            <li 
              key={thread.id} 
              className="border-b pb-3 last:border-0 cursor-pointer"
              onClick={() => openEmailModal(thread)}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">{thread.senderName}</span>
                <Badge className={urgencyStyles[thread.urgency]}>
                  {thread.urgency}
                </Badge>
              </div>
              
              <h4 className="text-sm font-medium">{thread.subject}</h4>
              
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {thread.summary}
              </p>
              
              <div className="flex mt-2">
                <Badge variant="outline" className="text-xs">
                  {thread.suggestedAction}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link to="/" className="w-full">
          <Button variant="outline" className="w-full flex items-center justify-center">
            Go to Full Inbox
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TopThreadsCard;
