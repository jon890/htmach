import HTMBreadcrumb from "@/components/layout/htm-breadcrumb";
import SubTopArea from "@/components/layout/sub-top-area";
import { getCurrentMenu } from "@/constants/menu.const";

type Props = {
  params: {
    type: string;
  };
};

export default function BoardListPage({ params }: Props) {
  return (
    <section className="pt-[100px]">
      <HTMBreadcrumb />
      <SubTopArea imageSrc="/images/background/bg_news.jpg" title="실적/사례" />
    </section>
  );
}
