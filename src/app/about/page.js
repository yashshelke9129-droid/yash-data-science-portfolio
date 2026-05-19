import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-10 py-16">

        <h1 className="text-5xl font-bold mb-10 text-blue-500">
          About Me
        </h1>

        <div className="text-xl text-gray-300 space-y-6 leading-9">

          <p>
            Hello! I'm <span className="text-blue-400 font-bold">Yash Shelke</span>,
            currently studying in <span className="text-blue-400">TYBSc Computer Science</span>.
          </p>

          <p>
            I am passionate about Data Science, Machine Learning,
            Artificial Intelligence, and modern technologies.
          </p>

          <p>
            I love building real-world projects using Python,
            Data Analysis, Machine Learning models, and visualization tools.
          </p>

          <p>
            Currently, I am continuously learning and improving my skills
            in Data Science, AI, Web Development, and Problem Solving.
          </p>

          <p>
            My goal is to become a successful Data Scientist
            and work on impactful AI-driven solutions.
          </p>

        </div>

      </main>
    </>
  );
}