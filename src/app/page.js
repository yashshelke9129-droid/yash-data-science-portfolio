import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center text-center px-6">

        <div>

          <img
            src="/profile.jpeg"
            alt="Profile"
            width="180"
            height="180"
            className="rounded-full mx-auto border-4 border-blue-500 mb-6"
          />

          <h1 className="text-6xl font-bold mb-4">
            Yash Shelke
          </h1>

          <p className="text-2xl text-gray-400 mb-8">
            Data Science Student | Machine Learning Enthusiast
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            View Resume
          </a>

        </div>

      </main>
    </>
  );
}