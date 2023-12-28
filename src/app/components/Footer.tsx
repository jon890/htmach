import { BeakerIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full flex justify-center items-center flex-col space-y-5 py-10">
      <p className="space-x-2 flex flex-row">
        <MapIcon className="w-6 h-6" />
        <span>
          부산광역시 금정구 부산대학로63번길 2 (장전동) 제 1공학관 HTM
        </span>
      </p>

      <p className="space-x-2 flex flex-row">
        <PhoneIcon className="w-6 h-6" />
        <span>junho@htmach.co.kr</span>
      </p>

      <p>Copyright &#169; 2023 HTM. All Rights Reserved.</p>
    </footer>
  );
}
