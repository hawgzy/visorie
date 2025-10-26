import React from "react";

export default function VisorieLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <main className="text-center">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
          visorie
        </h1>
        <p className="mt-3 text-xl md:text-2xl font-medium text-gray-700">
          Coming soon
        </p>
      </main>
      <footer className="flex items-center justify-between w-full max-w-2xl py-6 px-4 text-sm text-gray-500 mt-16">
        <div>© {new Date().getFullYear()} Visorie</div>
        <div className="flex gap-4 items-center">
          <a href="#" className="underline underline-offset-2">Privacy</a>
          <a href="mailto:matt@visorie.com" className="underline underline-offset-2">Contact</a>
        </div>
      </footer>
    </div>
  );
}
