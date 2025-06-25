import React, { useState } from 'react';
import { Search, Filter, CreditCard, TrendingUp, DollarSign, Calendar, Download } from 'lucide-react';

const AdminPayments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('month');

  const payments = [
    {
      id: 'PAY001',
      bookingId: 'LP001',
      guest: 'أحمد محمد العلي',
      property: 'فندق الريتز كارلتون الرياض',
      amount: 2400,
      method: 'credit_card',
      status: 'completed',
      date: '2024-02-10',
      transactionId: 'TXN123456789'
    },
    {
      id: 'PAY002',
      bookingId: 'LP002',
      guest: 'فاطمة علي السعيد',
      property: 'شاليه الواحة الذهبية',
      amount: 1600,
      method: 'cash',
      status: 'pending',
      date: '2024-02-11',
      transactionId: 'TXN123456790'
    },
    {
      id: 'PAY003',
      bookingId: 'LP003',
      guest: 'محمد الخالد',
      property: 'منتجع كورال الشاطئ',
      amount: 2850,
      method: 'credit_card',
      status: 'completed',
      date: '2024-02-12',
      transactionId: 'TXN123456791'
    },
    {
      id: 'PAY004',
      bookingId: 'LP004',
      guest: 'سارة أحمد',
      property: 'شاليه الجبل الأخضر',
      amount: 650,
      method: 'credit_card',
      status: 'refunded',
      date: '2024-02-13',
      transactionId: 'TXN123456792'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'مكتمل';
      case 'pending': return 'في الانتظار';
      case 'failed': return 'فاشل';
      case 'refunded': return 'مسترد';
      default: return status;
    }
  };

  const getMethodText = (method: string) => {
    switch (method) {
      case 'credit_card': return 'بطاقة ائتمانية';
      case 'cash': return 'نقداً';
      case 'bank_transfer': return 'تحويل بنكي';
      default: return method;
    }
  };

  const totalRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0);
  const refundedAmount = payments.filter(p => p.status === 'refunded').reduce((sum, p) => sum + p.amount, 0);

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">إدارة المدفوعات</h1>
            <button className="btn-gold flex items-center space-x-2 space-x-reverse">
              <Download className="h-5 w-5" />
              <span>تصدير التقرير</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">إجمالي الإيرادات</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalRevenue.toLocaleString('ar-SA')} ريال
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">مدفوعات معلقة</p>
                <p className="text-2xl font-bold text-gray-900">
                  {pendingAmount.toLocaleString('ar-SA')} ريال
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">مبالغ مستردة</p>
                <p className="text-2xl font-bold text-gray-900">
                  {refundedAmount.toLocaleString('ar-SA')} ريال
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-gold bg-opacity-20 rounded-full">
                <CreditCard className="h-6 w-6 text-gold" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-600">إجمالي المعاملات</p>
                <p className="text-2xl font-bold text-gray-900">{payments.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في المدفوعات..."
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
              <option value="completed">مكتمل</option>
              <option value="pending">في الانتظار</option>
              <option value="failed">فاشل</option>
              <option value="refunded">مسترد</option>
            </select>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="input-rtl"
            >
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
              <option value="quarter">هذا الربع</option>
              <option value="year">هذا العام</option>
            </select>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">
                {filteredPayments.length} معاملة
              </span>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    رقم المعاملة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    العميل
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    العقار
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المبلغ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    طريقة الدفع
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحالة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التاريخ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">#{payment.id}</div>
                      <div className="text-sm text-gray-500">حجز: {payment.bookingId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{payment.guest}</div>
                      <div className="text-sm text-gray-500">{payment.transactionId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payment.property}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.amount.toLocaleString('ar-SA')} ريال
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 text-gray-400 ml-2" />
                        <span className="text-sm text-gray-900">{getMethodText(payment.method)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payment.status)}`}>
                        {getStatusText(payment.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {payment.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">تطور الإيرادات</h2>
          <div className="h-64 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">مخطط الإيرادات الشهرية</p>
              <p className="text-sm opacity-80">سيتم عرض البيانات التفصيلية هنا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;