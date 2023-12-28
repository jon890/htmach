import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="p-0 w-screen h-screen overflow-hidden absolute">
        <video
          id="main-video"
          src="/videos/bg-main.mp4"
          preload="none"
          muted
          playsInline
          loop
          autoPlay
          className="w-full h-full absolute top-[80px] object-cover"
        />
      </div>

      {/* <ScrollSection id={1} /> */}
    </main>
  );
}
