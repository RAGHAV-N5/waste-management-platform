import React from "react";

const newsData = [
  {
    id: 1,
    title: "Hazardous Waste Management in Bhopal/Indore",
    description: "Trucks carrying hazardous waste are being transported for safe disposal.",
    url: "https://timesofindia.indiatimes.com/india/after-40-years-convoy-carrying-gas-tragedy-waste-heads-out-of-bhopal/articleshow/116867788.cms",
  },
  {
    id: 2,
    title: "Improper Recycling of Used Solar Panels: NGT Issues Notice",
    description: "The National Green Tribunal addresses inadequate recycling methods for photovoltaic solar panels, citing potential environmental damage.",
    url: "https://economictimes.indiatimes.com/industry/renewables/ngt-issues-notice-to-centre-others-over-improper-recycling-of-used-solar-panels/articleshow/116714698.cms",
  },
  {
    id: 3,
    title: "Mounting Solid Untreated Waste Crisis a 'Disastrous Situation': SC",
    description: "The Supreme Court highlights the escalating crisis caused by untreated solid waste, emphasizing urgent need for systemic reforms.",
    url: "https://economictimes.indiatimes.com/news/india/mounting-solid-untreated-waste-crisis-a-disastrous-situation-sc/articleshow/116480865.cms",
  },
  {
    id: 4,
    title: "Country saw 72 per cent increase in e-waste in 5 years: Government ",
    description: "The country saw an increase of around 72 percent in e-waste generated from electrical and electronic equipments. ",
    url: "https://economictimes.indiatimes.com/news/india/country-saw-72-per-cent-increase-in-e-waste-in-5-years-government/articleshow/116377023.cms",
  },
  {
    id: 5,
    title: "From better roads to waste management: Residents outline Bengaluru's new year wishlist",
    description: "Residents are renewing their calls for better roads, efficient solid waste management, walkable footpaths, improved public transport facility and healthier drainage systems",
    url: "https://www.deccanherald.com/india/karnataka/bengaluru/from-better-roads-to-waste-management-residents-outline-bengalurus-new-year-wishlist-3338633",
  },
  {
    id: 6,
    title: "Delay in hiring new agencies hampers waste management at Bandhwari landfill",
    description: "The work on processing and bio-remediation of solid waste at the Bandhwari landfill site has been suspended for over six weeks, ever since the contract of private agencies hired by the Municipal Corporation Gurugram (MCG) expired.",
    url: "https://economictimes.indiatimes.com/news/india/country-saw-72-per-cent-increase-in-e-waste-in-5-years-government/articleshow/116377023.cms",
  },
  
  
];

const NewsDisplay = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Latest News on <span className="text-green-500 shadow-sm">Waste Management</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-400 mb-4">{news.description}</p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDisplay;
