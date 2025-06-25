import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Camera, Calendar, Users, Shield, Award } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  // Mock data - in real app, this would come from API
  const property = {
    id: '1',
    name: 'فندق الريتز كارلتون الرياض',
    type: 'hotel',
    location: 'الرياض، المملكة العربية السعودية',
    price: 1200,
    rating: 4.9,
    reviewCount: 324,
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'يقع فندق الريتز كارلتون في قلب الرياض، ويوفر تجربة إقامة فاخرة لا تُنسى. يتميز الفندق بتصميمه الأنيق وخدماته المتميزة التي تلبي جميع احتياجات النزلاء. استمتع بالفخامة والراحة في أجواء تجمع بين الأصالة والحداثة.',
    amenities: [
      'واي فاي مجاني',
      'مسبح خارجي',
      'سبا ومركز صحي',
      'مطاعم فاخرة',
      'مركز أعمال',
      'صالة رياضية',
      'خدمة الغرف 24/7',
      'موقف سيارات مجاني',
      'قاعات اجتماعات',
      'خدمة النقل من المطار'
    ],
    features: {
      rooms: '4 غرف نوم',
      type: 'جناح فاخر',
      facilities: 'جميع المرافق',
      cancellation: 'إلغاء مجاني حتى 24 ساعة'
    }
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * property.price : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={property.images[selectedImage]} 
                  alt={property.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg flex items-center">
                  <Camera className="h-4 w-4 ml-1" />
                  <span className="text-sm">{property.images.length} صور</span>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-gold' : ''
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`صورة ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-gold fill-current" />
                      <span className="font-semibold mr-1">{property.rating}</span>
                    </div>
                    <span className="text-gray-600">({property.reviewCount} تقييم)</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 ml-2 text-gold" />
                  <span>{property.location}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{property.features.rooms}</div>
                  <div className="text-sm text-gray-600">عدد الغرف</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{property.features.type}</div>
                  <div className="text-sm text-gray-600">نوع الإقامة</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{property.features.facilities}</div>
                  <div className="text-sm text-gray-600">المرافق</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 text-green-600">
                    <Shield className="h-5 w-5 mx-auto mb-1" />
                  </div>
                  <div className="text-sm text-gray-600">{property.features.cancellation}</div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">المرافق والخدمات</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-4 w-4 text-gold ml-2" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {property.price.toLocaleString('ar-SA')} ريال
                </div>
                <div className="text-gray-600">لليلة الواحدة</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ الوصول
                  </label>
                  <input 
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="input-rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ المغادرة
                  </label>
                  <input 
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="input-rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عدد الأشخاص
                  </label>
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
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

              {checkIn && checkOut && (
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>عدد الليالي</span>
                    <span>{Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>السعر لليلة</span>
                    <span>{property.price.toLocaleString('ar-SA')} ريال</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
                    <span>المجموع</span>
                    <span>{calculateTotal().toLocaleString('ar-SA')} ريال</span>
                  </div>
                </div>
              )}

              <Link 
                to={`/booking/${property.id}`}
                className="block w-full btn-gold text-center text-lg py-4"
              >
                احجز الآن
              </Link>

              <div className="text-center text-sm text-gray-600 mt-4">
                لن يتم خصم أي مبلغ حتى تأكيد الحجز
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;