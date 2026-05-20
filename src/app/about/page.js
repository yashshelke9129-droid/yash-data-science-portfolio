import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-10 py-16">

        <h1 className="text-5xl font-bold text-blue-500 mb-10">
          About Me
        </h1>

        {/* Introduction */}
        <div className="bg-gray-900 p-8 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-5">
            Hello, I'm Yash Shelke
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            I am a passionate Data Science student currently pursuing
            TYBSc CS with strong interest in Machine Learning,
            Artificial Intelligence, Data Analytics, and Python
            Development.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            I enjoy solving real-world problems using data-driven
            approaches and continuously improving my technical
            skills by building practical projects.
          </p>

          <p className="text-gray-300 leading-8">
            My goal is to become a skilled Data Scientist and work on
            innovative AI and Machine Learning technologies that create
            real impact in the industry.
          </p>

        </div>

        {/* Education */}
        <div className="bg-gray-900 p-8 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-5 text-blue-400">
            Education
          </h2>

          <p className="text-gray-300 leading-8">
            Currently pursuing Third Year Bachelor of Science in
            Computer Science (TYBSc CS) with focus on programming,
            data structures, machine learning, databases,
            and software development.
          </p>

        </div>

        {/* Skills */}
        <div className="bg-gray-900 p-8 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-5 text-blue-400">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ul className="text-gray-300 leading-8">
              <li>• Python Programming</li>
              <li>• Machine Learning</li>
              <li>• Data Analysis</li>
              <li>• Pandas & NumPy</li>
              <li>• Matplotlib</li>
            </ul>

            <ul className="text-gray-300 leading-8">
              <li>• Git & GitHub</li>
              <li>• VS Code</li>
              <li>• Jupyter Notebook</li>
              <li>• HTML, CSS & JavaScript</li>
              <li>• Next.js & React</li>
            </ul>

          </div>

        </div>

        {/* Interests */}
        <div className="bg-gray-900 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-5 text-blue-400">
            Interests & Goals
          </h2>

          <p className="text-gray-300 leading-8">
            Apart from coding and data science, I enjoy learning about
            emerging technologies, exploring AI tools, building creative
            projects, and continuously improving my technical knowledge.
            I am highly motivated to grow in the field of Data Science
            and contribute to innovative technology solutions.
          </p>

        </div>

      </main>
    </>
  );
}