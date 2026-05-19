export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-between">
      <h1 className="text-2xl font-bold">YS</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}