
import React from 'react';
import { cn } from '@/lib/utils';
import { EmailThread } from './data';
import { MessageSquare, Clock, Flag } from 'lucide-react';
import { useEmailModal } from '@/hooks/useEmailModal';

interface EmailCardProps {
  email: EmailThread;
}

const EmailCard: React.FC<EmailCardProps> = ({ email }) => {
  const {
    senderName,
    subject,
    summary,
    urgency,
    suggestedAction,
    timestamp,
    unread
  } = email;

  const { openEmailModal } = useEmailModal();

  // Define urgency badge styles
  const urgencyStyles = {
    High: "bg-red-100 text-red-800 border-red-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Low: "bg-green-100 text-green-800 border-green-200"
  };

  // Define action badge styles
  const actionStyles = {
    Reply: {
      bg: "bg-blue-100 text-blue-800 border-blue-200",
      icon: MessageSquare
    },
    Defer: {
      bg: "bg-purple-100 text-purple-800 border-purple-200",
      icon: Clock
    },
    FYI: {
      bg: "bg-gray-100 text-gray-800 border-gray-200",
      icon: Flag
    },
    Archive: {
      bg: "bg-gray-100 text-gray-800 border-gray-200",
      icon: Flag
    }
  };

  const ActionIcon = actionStyles[suggestedAction].icon;

  return (
    <div 
      className={cn(
        "bg-white rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
        unread && "border-l-4 border-l-primary"
      )}
      onClick={() => openEmailModal(email)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className={cn(
          "text-base font-medium",
          unread && "font-semibold"
        )}>
          {senderName}
        </h3>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>
      
      <h4 className="text-sm font-medium mb-2">{subject}</h4>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {summary}
      </p>
      
      <div className="flex flex-wrap gap-2 items-center mt-auto">
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-xs font-medium border",
          urgencyStyles[urgency]
        )}>
          {urgency}
        </span>
        
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1",
          actionStyles[suggestedAction].bg
        )}>
          <ActionIcon className="h-3 w-3" />
          <span>{suggestedAction}</span>
        </span>
      </div>
    </div>
  );
};

export default EmailCard;
