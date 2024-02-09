import React from "react";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 text-center text-gray-600">
      <p>
        <small className="mb-2 text-xs">
          &copy; {new Date().getFullYear()} {""} Jaczenkó Benedek
        </small>
      </p>
      <p className="text-sm">
        A weboldal React.js, Next.js, TypeScript, TailwindCSS használatával
        készült.
      </p>
    </footer>
  );
}
