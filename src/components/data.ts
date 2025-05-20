
export interface EmailThread {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  summary: string;
  urgency: 'High' | 'Medium' | 'Low';
  suggestedAction: 'Reply' | 'Defer' | 'FYI' | 'Archive';
  timestamp: string;
  unread: boolean;
}

export const emailThreads: EmailThread[] = [
  {
    id: '1',
    senderName: 'Sarah Johnson',
    senderEmail: 'sarah.johnson@example.com',
    subject: 'Quarterly Marketing Report',
    summary: 'The quarterly marketing report is ready for your review. Key metrics show a 15% increase in engagement and 8% growth in conversions compared to last quarter.',
    urgency: 'High',
    suggestedAction: 'Reply',
    timestamp: '10:45 AM',
    unread: true
  },
  {
    id: '2',
    senderName: 'Tech Team',
    senderEmail: 'tech@example.com',
    subject: 'System Maintenance Schedule',
    summary: 'Scheduled server maintenance will occur this weekend. No action required from your end, but expect brief service interruptions on Saturday night.',
    urgency: 'Low',
    suggestedAction: 'FYI',
    timestamp: '9:32 AM',
    unread: false
  },
  {
    id: '3',
    senderName: 'Alex Chen',
    senderEmail: 'alex.chen@example.com',
    subject: 'Project Timeline Update',
    summary: 'The project timeline has been adjusted due to resource constraints. New delivery date is set for next month. Please review the updated Gantt chart.',
    urgency: 'Medium',
    suggestedAction: 'Defer',
    timestamp: 'Yesterday',
    unread: true
  },
  {
    id: '4',
    senderName: 'HR Department',
    senderEmail: 'hr@example.com',
    subject: 'New Health Benefits Information',
    summary: 'Updates to our health benefits package will take effect next quarter. Open enrollment begins next week. No immediate action needed.',
    urgency: 'Low',
    suggestedAction: 'Archive',
    timestamp: 'Yesterday',
    unread: false
  },
  {
    id: '5',
    senderName: 'David Miller',
    senderEmail: 'david.miller@example.com',
    subject: 'Urgent: Client Meeting Rescheduled',
    summary: 'The meeting with Enterprise Client has been moved to tomorrow at 2pm due to a scheduling conflict. Please confirm your availability ASAP.',
    urgency: 'High',
    suggestedAction: 'Reply',
    timestamp: '2 days ago',
    unread: true
  },
  {
    id: '6',
    senderName: 'Finance Team',
    senderEmail: 'finance@example.com',
    subject: 'Budget Approval Request',
    summary: 'The Q3 budget proposal needs your approval before Friday. There are several new line items related to the expansion project.',
    urgency: 'Medium',
    suggestedAction: 'Reply',
    timestamp: '2 days ago',
    unread: false
  },
  {
    id: '7',
    senderName: 'Product Team',
    senderEmail: 'product@example.com',
    subject: 'New Feature Launch',
    summary: 'We\'re launching the new dashboard features next week. Here\'s a preview of what users will see and the communications plan.',
    urgency: 'Medium',
    suggestedAction: 'FYI',
    timestamp: '3 days ago',
    unread: false
  },
  {
    id: '8',
    senderName: 'Customer Support',
    senderEmail: 'support@example.com',
    subject: 'Weekly Support Ticket Summary',
    summary: 'This week\'s support tickets showed a 12% decrease. Main issues reported were related to the login process and export functionality.',
    urgency: 'Low',
    suggestedAction: 'Defer',
    timestamp: '4 days ago',
    unread: false
  }
];
