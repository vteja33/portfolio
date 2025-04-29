import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="w-full px-4 py-3 shadow-md sticky top-0 bg-white z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Vamshi's Porfolio</h1>
        <div className="space-x-4">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button variant="outline">Contact</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
