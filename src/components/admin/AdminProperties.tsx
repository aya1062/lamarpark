import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, MapPin, Star } from 'lucide-react';

const AdminProperties = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const properties = [
    {
      id: '1',
      name: 'فندق الريتز كارلتون الرياض',
      type: 'hotel',
      location: 'الرياض',
      price: 1200,
      rating: 4.9,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bookings: 45,
      revenue: '54,000 ريال'
    },
    {
      id: '2',
      name: 'شاليه الواحة الذهبية',
      type: 'chalet',
      location: 'أبها',
      price: 800,
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bookings: 32,
      revenue: '25,600 ريال'
    },
    {
      id: '3',
      name: 'منتجع كورال الشاطئ',
      type: 'hotel',
      location: 'جدة',
      price: 950,
      rating: 4.7,
      status: 'inactive',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bookings: 28,
      revenue: '26,600 ريال'
    }
  ];

  const [newProperty, setNewProperty] = useState({
    name: '',
    type: 'hotel',
    location: '',
    price: '',
    description: '',
    amenities: '',
    images: ''
  });

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding property:', newProperty);
    setShowAddModal(false);
    setNewProperty({
      name: '',
      type: 'hotel',
      location: '',
      price: '',
      description: '',
      amenities: '',
      images: ''
    });
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || property.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">إدارة العقارات</h1>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn-gold flex items-center space-x-2 space-x-reverse"
            >
              <Plus className="h-5 w-5" />
              <span>إضافة عقار جديد</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في العقارات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-rtl pr-10"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="input-rtl"
            >
              <option value="all">جميع العقارات</option>
              <option value="hotel">الفنادق</option>
              <option value="chalet">الشاليهات</option>
            </select>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">
                {filteredProperties.length} عقار
              </span>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {property.status === 'active' ? 'نشط' : 'غير نشط'}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type === 'hotel' ? 'فندق' : 'شاليه'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 ml-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gold fill-current ml-1" />
                    <span className="font-semibold">{property.rating}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">
                      {property.price.toLocaleString('ar-SA')}
                    </span>
                    <span className="text-gray-600 mr-1">ريال</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-900">{property.bookings}</div>
                    <div className="text-gray-600">حجز</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-900">{property.revenue}</div>
                    <div className="text-gray-600">إيراد</div>
                  </div>
                </div>

                <div className="flex items-center justify-between space-x-2 space-x-reverse">
                  <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="h-4 w-4 ml-1" />
                    <span className="text-sm">عرض</span>
                  </button>
                  <button className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                    <Edit className="h-4 w-4 ml-1" />
                    <span className="text-sm">تعديل</span>
                  </button>
                  <button className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center">
                    <Trash2 className="h-4 w-4 ml-1" />
                    <span className="text-sm">حذف</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">إضافة عقار جديد</h2>
            </div>
            
            <form onSubmit={handleAddProperty} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم العقار *
                  </label>
                  <input
                    type="text"
                    value={newProperty.name}
                    onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                    required
                    className="input-rtl"
                    placeholder="أدخل اسم العقار"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع العقار *
                  </label>
                  <select
                    value={newProperty.type}
                    onChange={(e) => setNewProperty({...newProperty, type: e.target.value})}
                    className="input-rtl"
                  >
                    <option value="hotel">فندق</option>
                    <option value="chalet">شاليه</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الموقع *
                  </label>
                  <input
                    type="text"
                    value={newProperty.location}
                    onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                    required
                    className="input-rtl"
                    placeholder="المدينة"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السعر لليلة (ريال) *
                  </label>
                  <input
                    type="number"
                    value={newProperty.price}
                    onChange={(e) => setNewProperty({...newProperty, price: e.target.value})}
                    required
                    className="input-rtl"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الوصف
                </label>
                <textarea
                  value={newProperty.description}
                  onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                  rows={4}
                  className="input-rtl"
                  placeholder="وصف العقار..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المرافق والخدمات
                </label>
                <textarea
                  value={newProperty.amenities}
                  onChange={(e) => setNewProperty({...newProperty, amenities: e.target.value})}
                  rows={3}
                  className="input-rtl"
                  placeholder="واي فاي، مسبح، مطعم... (منفصلة بفواصل)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  روابط الصور
                </label>
                <textarea
                  value={newProperty.images}
                  onChange={(e) => setNewProperty({...newProperty, images: e.target.value})}
                  rows={3}
                  className="input-rtl"
                  placeholder="روابط الصور (منفصلة بأسطر جديدة)"
                />
              </div>

              <div className="flex items-center justify-end space-x-4 space-x-reverse pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="btn-gold px-6 py-3"
                >
                  إضافة العقار
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProperties;