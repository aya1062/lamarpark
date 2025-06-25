import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer' | 'manager';
  phone?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          // محاكاة API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // بيانات وهمية للمستخدمين
          const mockUsers = [
            {
              id: '1',
              name: 'أحمد المدير',
              email: 'admin@lamarpark.sa',
              role: 'admin' as const,
              phone: '+966 50 123 4567'
            },
            {
              id: '2',
              name: 'فاطمة العميل',
              email: 'customer@example.com',
              role: 'customer' as const,
              phone: '+966 55 987 6543'
            }
          ];

          const user = mockUsers.find(u => u.email === email);
          
          if (user && password === '123456') {
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false 
            });
            return true;
          } else {
            set({ isLoading: false });
            return false;
          }
        } catch (error) {
          set({ isLoading: false });
          return false;
        }
      },

      register: async (userData: any) => {
        set({ isLoading: true });
        
        try {
          // محاكاة API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const newUser: User = {
            id: Date.now().toString(),
            name: `${userData.firstName} ${userData.lastName}`,
            email: userData.email,
            role: 'customer',
            phone: userData.phone
          };

          set({ 
            user: newUser, 
            isAuthenticated: true, 
            isLoading: false 
          });
          return true;
        } catch (error) {
          set({ isLoading: false });
          return false;
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false 
        });
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ 
            user: { ...currentUser, ...userData } 
          });
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);