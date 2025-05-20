
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, AlertCircle, Clock, Flag, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeFilter, 
  setActiveFilter,
  isOpen,
  setIsOpen
}) => {
  const isMobile = useIsMobile();

  const filters = [
    { id: 'all', name: 'All Emails', icon: Mail },
    { id: 'urgent', name: 'Urgent', icon: AlertCircle },
    { id: 'action', name: 'Action Needed', icon: MessageSquare },
    { id: 'fyi', name: 'FYI', icon: Flag }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={cn(
        "h-full bg-sidebar border-r transition-all duration-300 z-50",
        isMobile ? "fixed left-0 top-0 bottom-0" : "relative",
        isOpen ? "w-64" : isMobile ? "-ml-64 w-64" : "w-16"
      )}>
        <div className="p-4 flex justify-between items-center">
          <h2 className={cn("font-semibold text-lg", !isOpen && !isMobile && "hidden")}>Filters</h2>
          {!isMobile && (
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '«' : '»'}
            </button>
          )}
        </div>
        <nav className="mt-6 px-2">
          <ul className="space-y-1">
            {filters.map((filter) => (
              <li key={filter.id}>
                <button
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                    activeFilter === filter.id 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <filter.icon className="h-5 w-5" />
                  {(isOpen || isMobile) && <span className="ml-3">{filter.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
