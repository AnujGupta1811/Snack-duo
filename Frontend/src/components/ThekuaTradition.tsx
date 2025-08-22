// components/ThekuaTradition.jsx
import React from 'react';

const ThekuaTradition = () => {
  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Recipe and tradition of thekua</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here you can see how to make thekua and culture of Bihar that how thekua use as parshad in chhath pooja
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Large Video */}
        <div className="lg:col-span-2">
          <div className="aspect-video w-full shadow-lg rounded-md overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ot2MB-j-Yoc"
              title="Thekua recipe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Two Side Videos */}
        <div className="space-y-6">
          <div className="aspect-video w-full shadow-md rounded-md overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aVh4M1NZe7Q"
              title="thekua short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="aspect-video w-full shadow-md rounded-md overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PWkBsEdTkz4"
              title="healthy thekua ad"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThekuaTradition;
