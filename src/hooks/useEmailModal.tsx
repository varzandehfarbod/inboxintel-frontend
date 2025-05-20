
import { create } from 'zustand';
import { EmailThread } from '@/components/data';

interface EmailModalState {
  isOpen: boolean;
  currentEmail: EmailThread | null;
  openEmailModal: (email: EmailThread) => void;
  closeEmailModal: () => void;
}

export const useEmailModal = create<EmailModalState>((set) => ({
  isOpen: false,
  currentEmail: null,
  openEmailModal: (email) => set({ isOpen: true, currentEmail: email }),
  closeEmailModal: () => set({ isOpen: false })
}));
