
import React, { useState } from 'react';
import { useEmailModal } from '@/hooks/useEmailModal';
import { MessageSquare, Clock, Flag, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const EmailModal = () => {
  const { isOpen, currentEmail, closeEmailModal } = useEmailModal();
  const { toast } = useToast();
  const [suggestedReply, setSuggestedReply] = useState(
    "Thank you for your email. I have reviewed the information and will get back to you shortly."
  );

  if (!currentEmail) return null;

  const urgencyStyles = {
    High: "bg-red-100 text-red-800 border-red-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Low: "bg-green-100 text-green-800 border-green-200"
  };

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

  const ActionIcon = actionStyles[currentEmail.suggestedAction].icon;

  const handleSendSuggestion = () => {
    toast({
      title: "Reply sent",
      description: `Your reply to ${currentEmail.senderName} has been sent.`,
    });
    closeEmailModal();
  };

  const handleDefer = () => {
    toast({
      title: "Email deferred",
      description: "This email has been deferred for later.",
    });
    closeEmailModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeEmailModal}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{currentEmail.subject}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 my-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{currentEmail.senderName}</h4>
              <p className="text-sm text-muted-foreground">{currentEmail.senderEmail}</p>
            </div>
            <span className="text-sm text-muted-foreground">{currentEmail.timestamp}</span>
          </div>

          <div className="flex gap-2 mt-2">
            <span className={cn(
              "px-2.5 py-0.5 rounded-full text-xs font-medium border",
              urgencyStyles[currentEmail.urgency]
            )}>
              {currentEmail.urgency}
            </span>
            
            <span className={cn(
              "px-2.5 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1",
              actionStyles[currentEmail.suggestedAction].bg
            )}>
              <ActionIcon className="h-3 w-3" />
              <span>{currentEmail.suggestedAction}</span>
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h5 className="font-medium mb-2">Email Summary</h5>
            <p className="text-sm">{currentEmail.summary}</p>
          </div>

          <div>
            <h5 className="font-medium mb-2">Suggested Reply</h5>
            <Textarea 
              value={suggestedReply}
              onChange={(e) => setSuggestedReply(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleDefer}>
            <Clock className="mr-2 h-4 w-4" />
            Defer
          </Button>
          <Button onClick={handleSendSuggestion}>
            <Send className="mr-2 h-4 w-4" />
            Send Suggestion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
