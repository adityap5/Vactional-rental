import { useState, useEffect } from 'react';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('https://vactional-rental.onrender.com/api/properties');
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path to static image in the public folder
              alt={property.Hotel_Name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.Hotel_Name}</h3>
              <p className="text-gray-600 text-sm">{property.Location}</p>
              <p className="mt-2 text-gray-800">Category : {property.Review}</p>
              <p className="mt-1 text-gray-600 text-sm">
                Total Reviews: <span className="font-medium">{property.Total_Review}</span>
              </p>
              <p className="mt-1 text-gray-600 text-sm">
                Rating: <span className="font-bold">{property.Rating}</span> / 10
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;