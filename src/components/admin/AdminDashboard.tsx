import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Building, 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  Eye,
  Plus,
  Bell,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'إجمالي الحجوزات',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'العقارات النشطة',
      value: '89',
      change: '+3',
      changeType: 'increase',
      icon: Building,
      color: 'bg-green-500'
    },
    {
      title: 'إجمالي الإيرادات',
      value: '2.4M ريال',
      change: '+18%',
      changeType: 'increase',
      icon: CreditCard,
      color: 'bg-gold'
    },
    {
      title: 'العملاء الجدد',
      value: '156',
      change: '+8%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-purple-500'
    }
  ];

  const recentBookings = [
    {
      id: 'LP001',
      guest: 'أحمد محمد',
      property: 'فندق الريتز كارلتون',
      checkIn: '2024-02-15',
      amount: '2,400 ريال',
      status: 'مؤكد'
    },
    {
      id: 'LP002',
      guest: 'فاطمة علي',
      property: 'شاليه الواحة الذهبية',
      checkIn: '2024-02-16',
      amount: '1,600 ريال',
      status: 'قيد المراجعة'
    },
    {
      id: 'LP003',
      guest: 'محمد الخالد',
      property: 'منتجع كورال الشاطئ',
      checkIn: '2024-02-17',
      amount: '2,850 ريال',
      status: 'مؤكد'
    }
  ];

  const quickActions = [
    {
      title: 'إضافة عقار جديد',
      description: 'أضف فندق أو شاليه جديد',
      icon: Plus,
      link: '/admin/properties',
      color: 'bg-green-500'
    },
    {
      title: 'عرض الحجوزات',
      description: 'إدارة ومتابعة الحجوزات',
      icon: Eye,
      link: '/admin/bookings',
      color: 'bg-blue-500'
    },
    {
      title: 'تقارير الإيرادات',
      description: 'عرض التقارير المالية',
      icon: BarChart3,
      link: '/admin/payments',
      color: 'bg-gold'
    },
    {
      title: 'إدارة المستخدمين',
      description: 'إضافة وإدارة المستخدمين',
      icon: Users,
      link: '/admin/users',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
              </button>
              <Link to="/admin/settings" className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">إجراءات سريعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">أحدث الحجوزات</h2>
              <Link to="/admin/bookings" className="text-gold hover:text-gold-light text-sm font-medium">
                عرض الكل
              </Link>
            </div>
            <div className="space-y-4">
              {recentBookings.map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{booking.guest}</h3>
                      <span className="text-sm text-gray-500">#{booking.id}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{booking.property}</p>
                    <p className="text-xs text-gray-500">تاريخ الوصول: {booking.checkIn}</p>
                  </div>
                  <div className="text-left ml-4">
                    <p className="font-semibold text-gray-900">{booking.amount}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      booking.status === 'مؤكد' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">الإيرادات الشهرية</h2>
            <div className="h-64 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">مخطط الإيرادات</p>
                <p className="text-sm opacity-80">سيتم عرض البيانات هنا</p>
              </div>
            </div>
          </div>

          {/* Bookings Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">إحصائيات الحجوزات</h2>
            <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">مخطط الحجوزات</p>
                <p className="text-sm opacity-80">سيتم عرض البيانات هنا</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;