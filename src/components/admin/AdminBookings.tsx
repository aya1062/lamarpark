import React, { useState } from 'react';
import { Search, Filter, Calendar, User, MapPin, CreditCard, Eye, Check, X } from 'lucide-react';

const AdminBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const bookings = [
    {
      id: 'LP001',
      guest: {
        name: 'أحمد محمد العلي',
        email: 'ahmed@email.com',
        phone: '+966 50 123 4567'
      },
      property: {
        name: 'فندق الريتز كارلتون الرياض',
        type: 'hotel',
        location: 'الرياض'
      },
      dates: {
        checkIn: '2024-02-15',
        checkOut: '2024-02-17',
        nights: 2
      },
      guests: 2,
      amount: 2400,
      status: 'confirmed',
      paymentStatus: 'paid',
      bookingDate: '2024-02-10',
      specialRequests: 'غرفة بإطلالة على المدينة'
    },
    {
      id: 'LP002',
      guest: {
        name: 'فاطمة علي السعيد',
        email: 'fatima@email.com',
        phone: '+966 55 987 6543'
      },
      property: {
        name: 'شاليه الواحة الذهبية',
        type: 'chalet',
        location: 'أبها'
      },
      dates: {
        checkIn: '2024-02-16',
        checkOut: '2024-02-18',
        nights: 2
      },
      guests: 4,
      amount: 1600,
      status: 'pending',
      paymentStatus: 'pending',
      bookingDate: '2024-02-11',
      specialRequests: ''
    },
    {
      id: 'LP003',
      guest: {
        name: 'محمد الخالد',
        email: 'mohammed@email.com',
        phone: '+966 56 456 7890'
      },
      property: {
        name: 'منتجع كورال الشاطئ',
        type: 'hotel',
        location: 'جدة'
      },
      dates: {
        checkIn: '2024-02-17',
        checkOut: '2024-02-20',
        nights: 3
      },
      guests: 2,
      amount: 2850,
      status: 'confirmed',
      paymentStatus: 'paid',
      bookingDate: '2024-02-12',
      specialRequests: 'وجبة إفطار إضافية'
    },
    {
      id: 'LP004',
      guest: {
        name: 'سارة أحمد',
        email: 'sara@email.com',
        phone: '+966 54 321 0987'
      },
      property: {
        name: 'شاليه الجبل الأخضر',
        type: 'chalet',
        location: 'الطائف'
      },
      dates: {
        checkIn: '2024-02-18',
        checkOut: '2024-02-19',
        nights: 1
      },
      guests: 3,
      amount: 650,
      status: 'cancelled',
      paymentStatus: 'refunded',
      bookingDate: '2024-02-13',
      specialRequests: ''
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'مؤكد';
      case 'pending': return 'قيد المراجعة';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'مدفوع';
      case 'pending': return 'في الانتظار';
      case 'refunded': return 'مسترد';
      default: return status;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.property.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">إدارة الحجوزات</h1>
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-sm text-gray-600">
                إجمالي الحجوزات: {filteredBookings.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في الحجوزات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-rtl pr-10"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-rtl"
            >
              <option value="all">جميع الحالات</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد المراجعة</option>
              <option value="cancelled">ملغي</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="input-rtl"
            >
              <option value="all">جميع التواريخ</option>
              <option value="today">اليوم</option>
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
            </select>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">
                {filteredBookings.length} حجز
              </span>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    رقم الحجز
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    العميل
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    العقار
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التواريخ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المبلغ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحالة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">#{booking.id}</div>
                      <div className="text-sm text-gray-500">{booking.bookingDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gold bg-opacity-20 flex items-center justify-center">
                            <User className="h-5 w-5 text-gold" />
                          </div>
                        </div>
                        <div className="mr-4">
                          <div className="text-sm font-medium text-gray-900">{booking.guest.name}</div>
                          <div className="text-sm text-gray-500">{booking.guest.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.property.name}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 ml-1" />
                        {booking.property.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 ml-1" />
                        {booking.dates.checkIn}
                      </div>
                      <div className="text-sm text-gray-500">
                        {booking.dates.nights} ليلة، {booking.guests} أشخاص
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {booking.amount.toLocaleString('ar-SA')} ريال
                      </div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {getPaymentStatusText(booking.paymentStatus)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        {booking.status === 'pending' && (
                          <>
                            <button className="text-green-600 hover:text-green-900">
                              <Check className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">الحجوزات المؤكدة</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'confirmed').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">قيد المراجعة</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">الحجوزات الملغية</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'cancelled').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-gold bg-opacity-20 rounded-lg">
                <CreditCard className="h-6 w-6 text-gold" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">إجمالي الإيرادات</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.reduce((sum, b) => sum + b.amount, 0).toLocaleString('ar-SA')} ريال
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;