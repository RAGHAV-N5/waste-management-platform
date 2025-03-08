// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const WasteManagementEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to fetch waste management events
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.post('https://eventregistry.org/api/v1/event/getEvents', {
//           resultType: 'events',
//           keyword: 'waste management',  // You can modify the keyword here
//           eventsPage: 1,  // Fetch the first page
//           eventsCount: 50,  // Limit to 50 events
//           eventsSortBy: 'rel',  // Sort by relevance
//           eventsSortByAsc: false,  // Sort in descending order
//           forceMaxDataTimeWindow: 31,  // Fetch events from the last 31 days
//           apiKey: 'YOUR_API_KEY'  // Replace with your actual API key
//         });

//         // Set the fetched events in state
//         setEvents(response.data.events);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch events');
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>Waste Management Events</h2>
//       {events && events.length > 0 ? (
//         <div>
//           {events.map((event) => (
//             <div key={event.uri} style={{ marginBottom: '20px' }}>
//               <h3>{event.title}</h3>
//               <p>{event.description}</p>
//               <p><strong>Date:</strong> {event.date}</p>
//               <a href={event.url} target="_blank" rel="noopener noreferrer">More Details</a>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No events found.</p>
//       )}
//     </div>
//   );
// };

// export default WasteManagementEvents;
