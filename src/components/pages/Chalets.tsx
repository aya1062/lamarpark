import React, { useState } from 'react';
import { MapPin, Filter, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../shared/PropertyCard';

const Chalets = () => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    rooms: '',
    amenities: []
  });

  const [showFilters, setShowFilters] = useState(false);

  const chalets = [
    {
      id: '2',
      name: 'شاليه الواحة الذهبية',
      type: 'chalet' as const,
      location: 'أبها',
      price: 800,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['شرفة خاصة', 'مطبخ مجهز', 'مسبح خاص', 'حديقة']
    },
    {
      id: '4',
      name: 'شاليه الجبل الأخضر',
      type: 'chalet' as const,
      location: 'الطائف',
      price: 650,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['إطلالة جبلية', 'موقد خشبي', 'شرفة واسعة', 'هواء نقي']
    },
    {
      id: '6',
      name: 'شاليه الصحراء الساحرة',
      type: 'chalet' as const,
      location: 'الرياض',
      price: 750,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['تجربة صحراوية', 'نجوم صافية', 'مخيم فاخر', 'رحلات سفاري']
    },
    {
      id: '7',
      name: 'شاليه الشاطئ الأزرق',
      type: 'chalet' as const,
      location: 'جدة',
      price: 900,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['إطلالة بحرية', 'شاطئ خاص', 'شرفة بحرية', 'أنشطة مائية']
    },
    {
      id: '8',
      name: 'شاليه الوادي الأخضر',
      type: 'chalet' as const,
      location: 'أبها',
      price: 720,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['طبيعة خلابة', 'هواء جبلي', 'حديقة واسعة', 'شلالات قريبة']
    },
    {
      id: '9',
      name: 'شاليه النجوم الذهبية',
      type: 'chalet' as const,
      location: 'العلا',
      price: 1100,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['إطلالة تاريخية', 'تصميم فاخر', 'خصوصية تامة', 'تجربة فريدة']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            الشاليهات الفاخرة
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة مميزة من الشاليهات الفاخرة في أجمل المواقع الطبيعية
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
                <option value="أبها">أبها</option>
                <option value="الطائف">الطائف</option>
                <option value="الرياض">الرياض</option>
                <option value="جدة">جدة</option>
                <option value="العلا">العلا</option>
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
                <option value="0-500">أقل من 500 ريال</option>
                <option value="500-800">500 - 800 ريال</option>
                <option value="800-1200">800 - 1200 ريال</option>
                <option value="1200+">أكثر من 1200 ريال</option>
              </select>
            </div>

            {/* Rooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">عدد الغرف</label>
              <select 
                value={filters.rooms}
                onChange={(e) => setFilters({...filters, rooms: e.target.value})}
                className="input-rtl"
              >
                <option value="">أي عدد</option>
                <option value="1">غرفة واحدة</option>
                <option value="2">غرفتان</option>
                <option value="3">3 غرف</option>
                <option value="4+">4 غرف أو أكثر</option>
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
            تم العثور على <span className="font-semibold text-gray-900">{chalets.length}</span> شاليه
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {chalets.map((chalet) => (
            <PropertyCard key={chalet.id} property={chalet} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <button className="btn-gold px-8 py-3">
            عرض المزيد من الشاليهات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chalets;