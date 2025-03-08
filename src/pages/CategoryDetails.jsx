import React from 'react';
import { useParams } from 'react-router-dom';

// Reusable Bulletin Section component
const BulletinSection = ({ title, items }) => {
  return (
    <div className="space-y-2 text-neutral-800">
      <p className="font-semibold text-green-400 text-2xl">{title}:</p>
      <ul className="list-disc pl-5 space-y-1 text-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const categoryDetails = {
  'plastic-waste': {
    title: 'Plastic Waste',
    harmfulEffects: [
      'Pollutes oceans, rivers, and landscapes, severely harming wildlife.',
      'Non-biodegradable, taking hundreds of years to decompose.',
      'Marine animals often mistake plastic for food, causing injury or death.',
      'Breaks into microplastics, which contaminate the food chain, including humans.',
    ],
    disposal: [
      'Recycling by sorting and cleaning plastics before processing.',
      'Repurposing into creative or useful products to extend plastic’s lifecycle.',
      'Reducing plastic consumption by switching to eco-friendly alternatives.',
    ],
    recycling: [
      'Mechanical recycling: Shredding, melting, and reshaping into new products.',
      'Chemical recycling: Breaking plastic down into its original building blocks for new products.',
      'Energy recovery: Burning plastic in controlled waste-to-energy plants to generate electricity.',
    ],
  },
  'organic-waste': {
    title: 'Organic Waste',
    harmfulEffects: [
      'Produces methane when left untreated in landfills, contributing to climate change.',
      'Wastes valuable resources that could otherwise be composted or used in biogas production.',
      'Improper disposal can lead to foul odors and attract pests.',
    ],
    disposal: [
      'Composting: A natural process that turns organic matter into rich, fertile soil.',
      'Anaerobic digestion: Converts organic waste into biogas and compost, providing renewable energy.',
    ],
    recycling: [
      'Composting for enriching soil in gardens, parks, and farms.',
      'Turning organic waste into biogas for electricity or heating.',
      'Use of composted materials to improve soil health and reduce dependency on chemical fertilizers.',
    ],
  },
  'e-waste': {
    title: 'E-Waste',
    harmfulEffects: [
      'Leaches toxic substances like lead, mercury, and cadmium into soil and water.',
      'Harmful to human health, especially when exposed to chemicals during improper disposal.',
      'Waste of valuable resources, such as metals, plastics, and rare earth elements.',
    ],
    disposal: [
      'Proper recycling through certified e-waste collection centers and certified recyclers.',
      'Ensuring no harmful exposure by following proper handling protocols.',
      'Avoiding landfill disposal to prevent hazardous chemicals from contaminating the environment.',
    ],
    recycling: [
      'Extracting valuable metals like gold, silver, copper, and aluminum from electronic devices.',
      'Repurposing reusable components for new products, such as screens, motherboards, and batteries.',
      'Environmentally friendly techniques for breaking down e-waste without harming the surroundings.',
    ],
  },
};

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const category = categoryDetails[categoryId];

  if (!category) {
    return <p>Category not found!</p>;
  }

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 flex flex-col gap-5">
        <h2 className=" font-bold text-white mb-4 text-4xl justify-center">{category.title}</h2>
        <BulletinSection title="Harmful Effects" items={category.harmfulEffects} />
        <BulletinSection title="Disposal Methods" items={category.disposal} />
        <BulletinSection title="Recycling Options" items={category.recycling} />
      </div>
    </section>
  );
};

export default CategoryDetails;
