
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/50 to-transparent dark:from-purple-900/20 rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Who We Are Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Who We Are
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">WHO WE ARE</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Euro Vision 2000 was founded by Mr. Arif Rafiq, former President Attock Chamber of Commerce & Industry and also the former Chairman – Senior Vice Chairman FPCCI Standing Committee on Commerce, Vice Chairman FPCCI Standing Committee on Diplomatic Affairs, Trade Fairs & Exhibitions with the vision to provide market assistance to Pakistani companies in the best trade shows all over the world.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Euro Vision 2000 is the largest trade fair marketing organization in Pakistan with more than 30 years experience. Our strength is our team of talented people who have a vast experience of international commerce & trade. With the belief of successful bi-lateral trade, we plan and encourage participation of companies in Worldwide International Leading Trade Fairs and further also assist overseas trade fair organizers to explore business opportunities in Pakistani market.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Euro Vision 2000 facilitates and encourages participation of Pakistani exporters at leading international trade fairs worldwide. We also provide services to overseas trade fair – exhibition organizers in Pakistan. As a pioneer in the promotion and marketing of exhibitions we have strong relations with manufacturers, exporters, exhibitors related to Agriculture Tools & Machinery, Home Textiles & Fabrics, Apparels, Carpets & Rugs, Food & Beverages, Halal Products, Home Decoration & Handicrafts, Furniture & Interiors, Jewelry, Gifts & Toys, Cutlery, Scissors & Knives, Sporting Goods & Bicycles, Fitness Equipment, Leather Products & Gloves, Footwear & Luggage, Tent & Canvas, Industrial Clothing & Uniforms, Surgical & Dental Instruments, Medical & Pharmaceuticals, Engineering, Electrical & Machinery, Auto Parts, Pumps & Motors, Construction & Flooring, Marble & Granite, I.T, Telecom & Security System, Stationary Plastic, Print & Pack, Sanitary & Ceramics sectors in Pakistan.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="http://www.eurovision2000.org/wp-content/uploads/2015/07/pakus.png"
                  alt="Who We Are"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Our Credentials
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Credentials"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">OUR CREDENTIALS</h3>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">CREDENTIALS:</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    With the advantages of a decade of staying at the forefront, we are sensitive to areas of growth and opportunity in new technologies. We have learnt what it takes to be a full-service organizer / representative. Our skills lie in ensuring that all our customers enjoy the continuity of a one to one relationship from beginning to end, enabling us to gain a deeper understanding of their business and put them in touch with the right markets throughout the world. Our interactions with the Central and the Provincial governments at all levels are continuous and meaningful. We work closely with ministries, chambers, associations.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    This partnership brings together both public and private sectors and helps secure greater participation at international exhibitions and allows us to form high profile national pavilions. Such arrangements help us provide innovative and affordable solutions to Pakistani companies.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>CHAMBERS, ASSOCIATIONS OF TRADE & INDUSTRY IN PAKISTAN.</strong> We are working closely with all the chambers, trade associations and government agencies in Pakistan for promoting Pakistan's International Trade and are playing a pivotal role to open new markets for the chambers, associations and their members to the International market environment and have a close co-operation with them for our various trade shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
