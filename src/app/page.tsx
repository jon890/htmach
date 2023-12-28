import Header from "@/app/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <section className="p-0 w-screen h-[calc(100vh-80px)] overflow-hidden top-[80px] flex justify-center items-center">
        <div className="absolute z-10 text-white max-w-[1000px] space-y-10">
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
          className="w-full h-full relative object-cover"
        />
      </section>

      <section>
        <article>
          <h1>재제조</h1>
          <p>
            펌프 One-Stop 재제조 서비스를 통한 로터에 대한 설계, 역설계 연구
            역랴을 보유하고 있습니다.
          </p>
        </article>

        <article>
          <h1>설계</h1>
          <p>
            펌프, 터빈, 압축기 로터에 대한 설계, 역설계 연구 역량을 기반으로
            수준 높은 설계를 구현합니다.
          </p>
        </article>

        <article>
          <h1>유동해석</h1>
          <p>전산유체역학(CFD)를 통해 로터의 효율, 성능을 예측합니다.</p>
        </article>

        <article>
          <h1>구조해석</h1>
          <p>
            로터의 강건성을 확보하기 위한 구조해석(CAE) 역량을 보유하고
            있습니다.
          </p>
        </article>

        <article>
          <h1>축계 해석</h1>
          <p>
            축계의 안정성을 확보하기 위한 회전체 동역학을 통해 안정성을 확보한
            설계를 구축합니다.
          </p>
        </article>
      </section>

      <footer>
        <p>
          <span>주소</span>
          <span>
            부산광역시 금정구 부산대학로63번길 2 (장전동) 제 1공학관 HTM
          </span>
        </p>

        <p>
          <span>연락처</span>
          <span>junho@htmach.co.kr</span>
        </p>

        <p>Copyright (c) 2023 HTM. All rights reserved.</p>
      </footer>
    </main>
  );
}
