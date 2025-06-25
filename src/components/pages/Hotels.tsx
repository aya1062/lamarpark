import React, { useState } from 'react';
import { MapPin, Filter, SlidersHorizontal, Award } from 'lucide-react';
import PropertyCard from '../shared/PropertyCard';

const Hotels = () => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    stars: '',
    amenities: []
  });

  const [showFilters, setShowFilters] = useState(false);

  const hotels = [
    {
      id: '1',
      name: 'فندق الريتز كارلتون الرياض',
      type: 'hotel' as const,
      location: 'الرياض',
      price: 1200,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['واي فاي مجاني', 'مسبح', 'سبا', 'مطعم']
    },
    {
      id: '3',
      name: 'منتجع كورال الشاطئ',
      type: 'hotel' as const,
      location: 'جدة',
      price: 950,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['شاطئ خاص', 'مطاعم متعددة', 'نادي صحي', 'غرف بحرية']
    },
    {
      id: '5',
      name: 'فندق فورسيزونز الدمام',
      type: 'hotel' as const,
      location: 'الدمام',
      price: 1100,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['إطلالة بحرية', 'مركز مؤتمرات', 'نادي رياضي', 'خدمة الغرف']
    },
    {
      id: '10',
      name: 'فندق هيلتون جدة',
      type: 'hotel' as const,
      location: 'جدة',
      price: 850,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['موقع متميز', 'مطاعم فاخرة', 'صالة رياضية', 'خدمات أعمال']
    },
    {
      id: '11',
      name: 'منتجع الفيصلية أبها',
      type: 'hotel' as const,
      location: 'أبها',
      price: 780,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['إطلالة جبلية', 'هواء نقي', 'مرافق ترفيهية', 'مطعم بانوراما']
    },
    {
      id: '12',
      name: 'فندق شيراتون الطائف',
      type: 'hotel' as const,
      location: 'الطائف',
      price: 680,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['طقس معتدل', 'حدائق واسعة', 'مسبح خارجي', 'قاعات اجتماعات']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            الفنادق الفاخرة
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            استمتع بإقامة مميزة في أرقى الفنادق والمنتجعات في المملكة العربية السعودية
          </p>
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-gold to-gold-light rounded-xl p-6 mb-8 text-white text-center">
          <div className="flex items-center justify-center mb-3">
            <Award className="h-8 w-8 ml-2" />
            <h3 className="text-2xl font-bold">عروض حصرية</h3>
          </div>
          <p className="text-lg opacity-90">
            احصل على خصم يصل إلى 30% على حجوزات الفنادق الفاخرة لفترة محدودة
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="h-5 w-5 ml-2 text-gold" />
              تصفية النتائج
            </h3>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-gold px-4 py-2 text-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
              <select 
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="input-rtl"
              >
                <option value="">جميع المواقع</option>
                <option value="الرياض">الرياض</option>
                <option value="جدة">جدة</option>
                <option value="الدمام">الدمام</option>
                <option value="أبها">أبها</option>
                <option value="الطائف">الطائف</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نطاق السعر</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="input-rtl"
              >
                <option value="">جميع الأسعار</option>
                <option value="0-700">أقل من 700 ريال</option>
                <option value="700-1000">700 - 1000 ريال</option>
                <option value="1000-1500">1000 - 1500 ريال</option>
                <option value="1500+">أكثر من 1500 ريال</option>
              </select>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">تصنيف النجوم</label>
              <select 
                value={filters.stars}
                onChange={(e) => setFilters({...filters, stars: e.target.value})}
                className="input-rtl"
              >
                <option value="">جميع التصنيفات</option>
                <option value="5">5 نجوم</option>
                <option value="4">4 نجوم</option>
                <option value="3">3 نجوم</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full btn-gold">
                تطبيق الفلاتر
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            تم العثور على <span className="font-semibold text-gray-900">{hotels.length}</span> فندق
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hotels.map((hotel) => (
            <PropertyCard key={hotel.id} property={hotel} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <button className="btn-gold px-8 py-3">
            عرض المزيد من الفنادق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;