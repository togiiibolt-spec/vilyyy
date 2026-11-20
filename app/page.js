"use client";

export default function Home() {
  return (
    <main className="app-shell">
      <iframe
        className="legacy-app"
        src="/vily.html"
        title="VILY Movies and Series"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
      />
    </main>
  );
}
