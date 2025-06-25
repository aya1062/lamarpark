// محاكاة API calls
export const api = {
  // تسجيل الدخول
  login: async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'admin@lamarpark.sa' && password === '123456') {
      return {
        success: true,
        user: {
          id: '1',
          name: 'أحمد المدير',
          email: 'admin@lamarpark.sa',
          role: 'admin'
        }
      };
    }
    
    return { success: false, message: 'بيانات تسجيل الدخول غير صحيحة' };
  },

  // التسجيل
  register: async (userData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      user: {
        id: Date.now().toString(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: 'customer'
      }
    };
  },

  // الحصول على العقارات
  getProperties: async (filters?: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // هنا يمكن تطبيق الفلاتر
    return {
      success: true,
      data: [] // سيتم استبدالها ببيانات حقيقية
    };
  },

  // إنشاء حجز
  createBooking: async (bookingData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      booking: {
        id: `LP${Date.now()}`,
        ...bookingData,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }
    };
  },

  // إرسال رسالة اتصال
  sendContactMessage: async (messageData: any) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      message: 'تم إرسال رسالتك بنجاح'
    };
  }
};