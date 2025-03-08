import React from "react";

const eventData = [
    {
    id: 1,
    title: "International Conference on Geological and Environmental Sustainability",
    description:
      "An Event on Geological and Environmental Sustainability.",
    date: "04 January 2025",
    location: "Bangalore, India",
    url: "https://www.sfe.net.in/conf/index.php?id=3109413",
  },
  {
    id: 2,
    title: "International Conference on Recycling and Waste Management",
    description:
      "An international gathering of experts to discuss innovative solutions for effective waste management and Recycling of waste.",
    date: "12 January 2025",
    location: " Bangalore, India",
    url: "https://nier.in/conf/index.php?id=3110466",
  },
  
  {
    id: 3,
    title: "Plastics Recycling World Expo India 2025",
    description:
      "Plastics Recycling World Expo India is a focused trade show for plastics compounding and recycling..",
    date: "14 - 15 May 2025",
    location: "Bombay Exhibition Centre (BEC), Mumbai, India",
    url: "https://10times.com/e1x3-83z9-hxhd",
  },
];

const Event = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
         <span className="text-green-400"> Waste Management </span>Events & Campaigns
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventData.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-400 mb-2">{event.description}</p>
            <p className="text-gray-300 mb-2">
              <span className="font-bold">Date:</span> {event.date}
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-bold">Location:</span> {event.location}
            </p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
