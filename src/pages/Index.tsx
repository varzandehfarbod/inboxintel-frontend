
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import EmailCard from '@/components/EmailCard';
import { emailThreads, EmailThread } from '@/components/data';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredEmails, setFilteredEmails] = useState<EmailThread[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let filtered: EmailThread[];
    
    switch (activeFilter) {
      case 'urgent':
        filtered = emailThreads.filter(email => email.urgency === 'High');
        break;
      case 'action':
        filtered = emailThreads.filter(email => 
          email.suggestedAction === 'Reply' || email.suggestedAction === 'Defer'
        );
        break;
      case 'fyi':
        filtered = emailThreads.filter(email => 
          email.suggestedAction === 'FYI' || email.suggestedAction === 'Archive'
        );
        break;
      default:
        filtered = [...emailThreads];
    }
    
    setFilteredEmails(filtered);
  }, [activeFilter]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <TopBar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {activeFilter === 'all' && 'All Emails'}
                {activeFilter === 'urgent' && 'Urgent Emails'}
                {activeFilter === 'action' && 'Emails Needing Action'}
                {activeFilter === 'fyi' && 'FYI Emails'}
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({filteredEmails.length})
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEmails.map(email => (
                <EmailCard key={email.id} email={email} />
              ))}
            </div>
            
            {filteredEmails.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No emails match this filter.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
