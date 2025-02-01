const JobItem = ({ title, description, price, location }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-red-500">{price}</span>
        <span className="text-gray-500">{location}</span>
      </div>
    </div>
  );
};

export default JobItem;
