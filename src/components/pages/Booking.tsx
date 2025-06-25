import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Banknote, User, Mail, Phone, Calendar, MapPin, Shield } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: 2,
    specialRequests: '',
    paymentMethod: 'cash'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock property data
  const property = {
    id: '1',
    name: 'فندق الريتز كارلتون الرياض',
    location: 'الرياض، المملكة العربية السعودية',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    checkIn: '2024-02-15',
    checkOut: '2024-02-17',
    nights: 2,
    pricePerNight: 1200,
    total: 2400
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            تم تأكيد حجزك بنجاح!
          </h2>
          <p className="text-gray-600 mb-6">
            سيتم إرسال تفاصيل الحجز إلى بريدك الإلكتروني قريباً
          </p>
          <p className="text-sm text-gray-500 mb-8">
            رقم الحجز: <span className="font-semibold">#LP{Date.now().toString().slice(-6)}</span>
          </p>
          <button 
            onClick={() => navigate('/')}
            className="btn-gold w-full"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إتمام الحجز</h1>
          <p className="text-gray-600">أكمل بياناتك لتأكيد حجزك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 ml-2 text-gold" />
                  البيانات الشخصية
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="input-rtl"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-rtl"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-rtl"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      عدد الأشخاص
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="input-rtl"
                    >
                      <option value={1}>شخص واحد</option>
                      <option value={2}>شخصان</option>
                      <option value={3}>3 أشخاص</option>
                      <option value={4}>4 أشخاص</option>
                      <option value={5}>5 أشخاص</option>
                      <option value={6}>6+ أشخاص</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    طلبات خاصة (اختياري)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="input-rtl"
                    placeholder="أي طلبات خاصة أو ملاحظات..."
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="h-5 w-5 ml-2 text-gold" />
                  طريقة الدفع
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="ml-3 text-gold focus:ring-gold"
                    />
                    <Banknote className="h-5 w-5 ml-3 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">الدفع عند الوصول</div>
                      <div className="text-sm text-gray-600">ادفع نقداً أو بالبطاقة عند الوصول للفندق</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="ml-3 text-gold focus:ring-gold"
                    />
                    <CreditCard className="h-5 w-5 ml-3 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">الدفع بالبطاقة الائتمانية</div>
                      <div className="text-sm text-gray-600">ادفع الآن بأمان باستخدام بطاقتك الائتمانية</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-6">
                  <Shield className="h-5 w-5 mt-1 ml-3 text-gold" />
                  <div className="text-sm text-gray-600">
                    <p>بالضغط على "تأكيد الحجز"، أنت توافق على 
                      <a href="#" className="text-gold hover:underline mx-1">الشروط والأحكام</a>
                      و
                      <a href="#" className="text-gold hover:underline mx-1">سياسة الخصوصية</a>
                      الخاصة بلمار بارك.
                    </p>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'btn-gold'
                  }`}
                >
                  {isSubmitting ? 'جاري تأكيد الحجز...' : 'تأكيد الحجز'}
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">ملخص الحجز</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-20 h-20 rounded-lg object-cover ml-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{property.name}</h4>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin className="h-4 w-4 ml-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 ml-2" />
                    <span className="text-sm">
                      {new Date(property.checkIn).toLocaleDateString('ar-SA')} - {new Date(property.checkOut).toLocaleDateString('ar-SA')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>عدد الليالي</span>
                    <span>{property.nights}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>السعر لليلة</span>
                    <span>{property.pricePerNight.toLocaleString('ar-SA')} ريال</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>عدد الأشخاص</span>
                    <span>{formData.guests}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>المجموع</span>
                      <span className="text-gold">{property.total.toLocaleString('ar-SA')} ريال</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-800 text-sm">
                  <CheckCircle className="h-4 w-4 ml-2" />
                  <span>إلغاء مجاني حتى 24 ساعة قبل الوصول</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;