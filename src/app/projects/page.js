export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-900 p-5 rounded-xl">
          <h2 className="text-2xl font-bold">
            Iris Flower Classification
          </h2>

          <p className="text-gray-400 mt-3">
            Machine learning classification project using Scikit-learn.
          </p>
        </div>

      </div>
    </div>
  );
}