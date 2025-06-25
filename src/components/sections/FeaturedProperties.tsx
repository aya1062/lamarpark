import React from 'react';
import PropertyCard from '../shared/PropertyCard';
import villa1 from '../../image/صور فيلا رقم\u00A01.jpg';
import villa2 from '../../image/صور فيلا رقم\u00A02.jpg';
import villa3 from '../../image/صور فيلا رقم\u00A03.jpg';
import villa4 from '../../image/صور فيلا رقم\u00A04.jpg';
import villa5 from '../../image/صور فيلا رقم\u00A05.jpg';
import villa6 from '../../image/صور فيلا رقم\u00A06.jpg';


const FeaturedProperties = () => {
  const properties = [
    {
      id: '1',
      name: 'فيلا رقم 1',
      type: 'chalet',
      location: 'الرياض',
      price: 1200,
      rating: 4.9,
      image: villa1,
      features: ['واي فاي مجاني', 'مسبح', 'سبا', 'مطعم']
    },
    {
      id: '2',
      name: 'فيلا رقم 2',
      type: 'chalet',
      location: 'أبها',
      price: 800,
      rating: 4.8,
      image: villa2,
      features: ['شرفة خاصة', 'مطبخ مجهز', 'مسبح خاص', 'حديقة']
    },
    {
      id: '3',
      name: 'فيلا رقم 3',
      type: 'chalet',
      location: 'جدة',
      price: 950,
      rating: 4.7,
      image: villa3,
      features: ['شاطئ خاص', 'مطاعم متعددة', 'نادي صحي', 'غرف بحرية']
    },
    {
      id: '4',
      name: 'فيلا رقم 4',
      type: 'chalet',
      location: 'الطائف',
      price: 650,
      rating: 4.6,
      image: villa4,
      features: ['إطلالة جبلية', 'موقد خشبي', 'شرفة واسعة', 'هواء نقي']
    },
    {
      id: '5',
      name: 'فيلا رقم 5',
      type: 'chalet',
      location: 'الدمام',
      price: 1100,
      rating: 4.8,
      image: villa5,
      features: ['إطلالة بحرية', 'مركز مؤتمرات', 'نادي رياضي', 'خدمة الغرف']
    },
    {
      id: '6',
      name: 'فيلا رقم 6',
      type: 'chalet',
      location: 'الدمام',
      price: 1100,
      rating: 4.8,
      image: villa6,
      features: ['إطلالة بحرية', 'مركز مؤتمرات', 'نادي رياضي', 'خدمة الغرف']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            فنادق وشاليهات لامار بارك
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة مختارة من أفضل الفنادق والشاليهات في المملكة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-gold text-lg px-8 py-4">
            عرض جميع العقارات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;