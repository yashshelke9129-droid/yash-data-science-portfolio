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
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold mb-4">
              Student Result Analysis
            </h2>

            <p className="text-gray-400 mb-5">
              Data analysis project using Python, Pandas,
              NumPy, and Matplotlib for analyzing student performance.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/student-result-analysis"
                target="_blank"
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="/projects/Result(2).ipynb"
                download
                className="bg-green-500 px-4 py-2 rounded-lg"
              >
                Download Code
              </a>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold mb-4">
              Iris Flower Classification
            </h2>

            <p className="text-gray-400 mb-5">
              Machine learning classification project
              using Scikit-learn and Python.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification"
                target="_blank"
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="/projects/CodeAlpha_Iris_Flower_Classification.ipynb"
                download
                className="bg-green-500 px-4 py-2 rounded-lg"
              >
                Download Code
              </a>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold mb-4">
              Car Price Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Regression-based machine learning model
              for predicting car prices.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction"
                target="_blank"
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="/projects/CodeAlpha_Car_Price_Prediction.ipynb"
                download
                className="bg-green-500 px-4 py-2 rounded-lg"
              >
                Download Code
              </a>

            </div>

          </div>

          {/* Project 4 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold mb-4">
              Sales Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Sales forecasting project using
              Machine Learning and predictive analytics.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction"
                target="_blank"
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="/projects/CodeAlpha_Sales_Prediction.ipynb"
                download
                className="bg-green-500 px-4 py-2 rounded-lg"
              >
                Download Code
              </a>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}