import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <section className="top-[80px] h-[calc(100vh-80px)] w-full overflow-hidden">
        <div className="absolute bottom-[10vh] z-10 w-full space-y-10 text-center text-white">
          <h1 className="text-5xl font-bold">
            회전체 기기의 모든 것, HTM이 함께 합니다.
          </h1>
          <h2 className="text-lg font-semibold">
            회전체 기기의 재제조 업무를 기반으로 고객의 요구에 부합할 수 있는
            최선의 결과를 위해 노력합니다.
          </h2>
        </div>
        <video
          id="main-video"
          src="/videos/bg-main.mp4"
          preload="none"
          muted
          playsInline
          loop
          autoPlay
          className="absolute h-[calc(100vh-80px)] w-full object-cover"
        />
      </section>

      <ScrollSection />

      <Footer />
    </main>
  );
}
