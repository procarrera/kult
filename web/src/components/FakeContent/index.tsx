import React from "react";

const FakeContent: React.FC = () => {
  return (
    <div className="flex flex-col bg-kult-secondary  min-h-screen px-8 pt-10 md:pt-6">
      <span className="text-4xl mb-8 font-bold text-primary animate-pulse">
        <div className="w-36 h-36 rounded-full bg-gray-400"></div>
        <p className="w-1/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
        <p className="w-2/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
        <p className="w-2/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
        <p className="w-3/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
        <p className="w-4/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
        <p className="w-2/4 bg-gray-400 h-4 rounded-xl mt-8 "></p>
      </span>
    </div>
  );
};

export default FakeContent;
