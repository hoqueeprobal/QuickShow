import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* VIDEO */}
      <div className="relative mt-6 max-w-4xl mx-auto">
        <BlurCircle top="-100px" right="-100px" />

        {/* Responsive iframe */}
        <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden">
          <iframe
            src={`${currentTrailer.videoUrl.replace(
              "watch?v=",
              "embed/"
            )}?autoplay=1&mute=1&rel=0`}
            title="Trailer video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative hover:-translate-y-1 duration-300 transition cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
