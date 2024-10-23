import InViewHelper from "@/components/in-view-helper";
import HTMBreadcrumb from "@/components/layout/htm-breadcrumb";
import SubTopArea from "@/components/layout/sub-top-area";

/**
 * 회사 소개 페이지
 */
export default function Introduce() {
  return (
    <section className="pt-[100px]">
      <HTMBreadcrumb />
      <SubTopArea
        imageSrc="/images/background/bg_company.jpg"
        title="HTM 소개"
      />

      <article className="container flex flex-col items-start justify-start px-10 container:px-0">
        <InViewHelper anyClass="mt-20">
          <p className="text-xl font-semibold text-primary">기업소개</p>
        </InViewHelper>

        <InViewHelper anyClass="mt-6">
          <p className="text-5xl leading-[60px]">
            회전제 기기의 모든 것, <br />
            <span className="font-bold text-primary">HTM</span>이 함께 합니다.
          </p>
        </InViewHelper>

        <InViewHelper anyClass="mt-12 mb-40">
          <p className="text-xl">
            HTM은 회전기기(펌프, 터빈, 압축기)에 대한 설계, 재제조 분야에 강점을
            갖고있습니다.
          </p>
          <p className="text-xl">
            회전기기의 로터에 대한 설계, 역설계 연구 역량을 보유하고 있으며,
            전산유체역학(CFD)를 통해 로터의 효율, 성능을 예측하며, 로터의
            강건성을 확보하기 위한 구조해석(CAE)의 축계의 안정성을 확보하기 위한
            회전체 동역학(Rotor-dynamics)을 통해 최적화 및 로터의 안정성을
            확보한 설계를 위한 노하우를 갖췄습니다.
          </p>
          <p className="text-xl">
            또한 IOT(Internet of things)를 통한 회전체의 자동화 운전, 나아가
            Smart Grid 구축을 위한 애플리케이션 제작 및 유저 친화적인 시스템
            구축을 진행하고 있습니다.
          </p>
        </InViewHelper>
      </article>
    </section>
  );
}
