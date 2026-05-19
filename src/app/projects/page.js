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

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Iris Flower Classification
            </h2>

            <p className="text-gray-400 mb-5">
              Machine learning model for predicting iris flower species.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Car Price Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Regression-based ML model for predicting car prices.
            </p>

            <a
              href="https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction"
              target="_blank"
              className="text-blue-400"
            >
              View Project →
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Sales Prediction
            </h2>

            <p className="text-gray-400 mb-5">
              Sales forecasting project using Machine Learning.
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
}