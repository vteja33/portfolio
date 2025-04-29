export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Vamshi Vallala. All rights reserved.
        </p>
        <div className="space-x-4 text-sm">
          <a
            href="https://github.com/vteja33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="mailto:vteja33@gmail.com" className="hover:underline">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/vamshi-teja-vallala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
