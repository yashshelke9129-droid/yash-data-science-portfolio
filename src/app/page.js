import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">

          <img
            src="/profile.jpeg"
            alt="Profile"
            width="160"
            height="160"
            className="rounded-full mx-auto mb-6 border-4 border-blue-500"
          />

          <h1 className="text-5xl font-bold mb-4">
            Yash Shelke
          </h1>

          <p className="text-xl text-gray-400 mb-6">
            Data Scientist | Machine Learning Enthusiast
          </p>

          <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600">
            View Resume
          </button>

        </div>
      </main>
    </>
  );
}