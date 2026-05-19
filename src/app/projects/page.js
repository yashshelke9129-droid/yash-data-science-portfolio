import Navbar from "../../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-10 py-16">

        <h1 className="text-5xl font-bold mb-12 text-blue-500">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Student Result Analysis
            </h2>

            <p className="text-gray-400 mb-5">
              Analyzed student academic performance using Python,
              Pandas, and Data Visualization techniques.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/student-result-analysis"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Iris Flower Classification
            </h2>

            <p className="text-gray-400 mb-5">
              Machine learning model for predicting iris flower species
              using Scikit-learn.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Car Price Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Regression-based ML model for predicting car prices
              using machine learning techniques.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Sales Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Predictive analytics project for forecasting future sales
              using regression models.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

        </div>

      </main>
    </>
  );
}import Navbar from "../../components/Navbar";

export default function Resume() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

        <h1 className="text-5xl font-bold mb-10 text-blue-500">
          My Resume
        </h1>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-blue-500 px-8 py-4 rounded-xl text-xl hover:bg-blue-600"
        >
          Open Resume PDF
        </a>

      </main>
    </>
  );
}