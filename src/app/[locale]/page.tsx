import MainBusiness from "@/components/main/business/main-business";
import MainCarousel from "@/components/main/carousel/main-carousel";
import { LocaleType } from "@/types/locale-type";

type Props = {
  params: { locale: LocaleType };
};

export default async function Home({ params: { locale } }: Props) {
  return (
    <>
      <MainCarousel />
      <MainBusiness />
    </>
  );
}
