import Navbar from "../../components/Navbar";

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