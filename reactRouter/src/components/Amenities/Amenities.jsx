import React from 'react';
import wifiIcon from '../../assets/icons/wifi.png';
import poolIcon from '../../assets/icons/pool.png';
import gymIcon from '../../assets/icons/gym.png';
import parkingIcon from '../../assets/icons/parking.png';

function Amenities() {
  const amenities = [
    { name: 'Free Wi-Fi', icon: wifiIcon },
    { name: 'Swimming Pool', icon: poolIcon },
    { name: 'Fully Equipped Gym', icon: gymIcon },
    { name: 'Free Parking', icon: parkingIcon },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800">Our Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <img src={amenity.icon} alt={amenity.name} className="w-32 h-32 mb-4" loading="lazy" />
              <span className="text-lg font-semibold text-green-900 text-center">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;
