export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 px-5 py-3 rounded-lg"
      >
        Download Resume
      </a>
    </div>
  );
}