import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-10 py-16">

        <h1 className="text-5xl font-bold mb-12 text-blue-500">
          Contact Me
        </h1>

        <div className="space-y-8 text-2xl">

          <p>
            📧 Email:
            <a
              href="mailto:yashshelke9129@gmail.com"
              className="text-blue-400 ml-3"
            >
              yashshelke9129@gmail.com
            </a>
          </p>

          <p>
            📞 Contact:
            <a
              href="tel:+919136486029"
              className="text-blue-400 ml-3"
            >
              +91 9136486029
            </a>
          </p>

          <p>
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/yash-shelke-69b397327"
              target="_blank"
              className="text-blue-400 ml-3"
            >
              View LinkedIn
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/yashshelke9129-droid"
              target="_blank"
              className="text-blue-400 ml-3"
            >
              View GitHub
            </a>
          </p>

        </div>

      </main>
    </>
  );
}