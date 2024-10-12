import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    description: 'Spacious 2-bedroom apartment with a stunning city view.',
    price: '$250,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 2,
    title: 'Cozy Family Home',
    description: '3-bedroom house with a large backyard, perfect for families.',
    price: '$350,000',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'Elegant 5-bedroom villa with a pool and panoramic views.',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
  },
];

const PropertyList = () => {
  return (
    <div id="properties" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Properties</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="h-48 w-full object-cover" src={property.image} alt={property.title} />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{property.title}</h3>
                <p className="mt-2 text-base text-gray-500">{property.description}</p>
                <p className="mt-4 text-xl font-semibold text-blue-600">{property.price}</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;