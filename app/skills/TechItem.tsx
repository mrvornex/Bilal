interface TechItemProps {
  name: string;
  icon: string;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-default">

      <img
        src={`/${icon}`}
        alt={name}
        className="w-10 h-10 mb-4"
      />

      <p className="text-sm font-medium text-gray-700 text-center">
        {name}
      </p>

    </div>
  );
};

export default TechItem;