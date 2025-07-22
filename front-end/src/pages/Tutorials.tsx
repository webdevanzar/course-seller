import { useEffect, useRef, useState } from "react";
import AddTutorials from "../components/AddTutorials";
const playlists = [
  {
    name: "english",
    id: "PL2IkMHFHWdEo-t2mIKmk_HwrJYOTwlT0i",
  },
  {
    name: "hindi",
    id: "PLY5Fr2gk1HQC5nFuOlPSLjIg_D_ADOG8s",
  },
  {
    name: "malayalam",
    id: "PLwC0xxmX46mFPvKehli1f-CwE4uOLqYCo",
  },
];

const Tutorials = () => {
  const [selectedId, setSelectedId] = useState(playlists[0].id);
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${selectedId}`;
  const [addTutorial, setAddTutorial] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addTutorial &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setAddTutorial(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [addTutorial]);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center  border-b-2 pb-4">
        <h2 className="text-3xl font-bold">Tutorials</h2>
        <button
          onClick={() => setAddTutorial(!addTutorial)}
          className="flex items-center gap-1 font-bold  rounded-md px-4 py-1  border-2 border-gray-600 cursor-pointer"
        >
          Add tutorials
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => setSelectedId(playlist.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedId === playlist.id
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {playlist.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={embedUrl}
          title="YouTube Playlist Player"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {addTutorial && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs  flex items-center justify-center z-50">
          <div ref={modalRef} className="w-1/3">
            <AddTutorials />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorials;
