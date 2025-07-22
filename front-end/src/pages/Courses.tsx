import { useState } from "react";
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

const Courses = () => {
  const [selectedId, setSelectedId] = useState(playlists[0].id);
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${selectedId}`;

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-3xl font-bold">📚 Your Courses</h2>

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

      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={embedUrl}
          title="YouTube Playlist Player"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Courses;
