import React from 'react';
import { useNavigate } from 'react-router-dom';

const wasteCategories = [
  {
    id: 'plastic-waste',
    title: 'Plastic Waste',
    description: 'Non-biodegradable waste from items like bottles, bags, and packaging materials.',
    image: '/images/plastic-waste.jpeg',
  },
  {
    id: 'organic-waste',
    title: 'Organic Waste',
    description: 'Biodegradable waste such as food scraps, garden waste, and agricultural residues.',
    image: '/images/organic-waste.jpeg',
  },
  {
    id: 'e-waste',
    title: 'E-Waste',
    description: 'Discarded electronic devices like phones, laptops, and batteries.',
    image: '/images/electronic-waste.jpeg',
  },
  // Add more categories as needed
];

const WasteCategories = () => {
  const navigate = useNavigate();

  const handleLearnMore = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <section className="py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          <span className='text-green-300'>Different</span> Categories of Waste
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {wasteCategories.map((category) => (
            <div
              key={category.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-neutral-300">{category.title}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
                <button
                  className="mt-4 text-blue-600 hover:text-blue-800"
                  onClick={() => handleLearnMore(category.id)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WasteCategories;
