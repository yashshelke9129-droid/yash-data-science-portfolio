import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        {/* Profile Image */}
        <img
          src="/profile.jpeg"
          alt="Yash Shelke"
          className="w-52 h-52 rounded-full border-4 border-blue-500 object-cover mb-6"
        />

        {/* Name */}
        <h1 className="text-5xl font-bold mb-4">
          Yash Shelke
        </h1>

        {/* Role */}
        <p className="text-xl text-gray-400 mb-6">
          Data Science Student | Machine Learning Enthusiast
        </p>

        {/* Small Intro */}
        <p className="max-w-3xl text-center text-gray-300 leading-8 mb-8">
          Passionate Data Science student currently pursuing TYBSc CS,
          focused on Machine Learning, Data Analysis, Python Development,
          and Artificial Intelligence. Skilled in building ML projects,
          analyzing datasets, and creating modern data-driven solutions.
          Constantly learning and exploring new technologies to improve
          problem-solving and analytical skills.
        </p>

        {/* Buttons */}
        <div className="flex gap-5">

          <a
            href="/resume"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            View Resume
          </a>

          <a
            href="/projects"
            className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

        </div>

      </main>
    </>
  );
}