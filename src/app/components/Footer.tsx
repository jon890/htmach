import { MapIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center space-y-5 bg-black py-10 text-white">
      <p className="flex flex-row space-x-2">
        <MapIcon className="h-6 w-6" />
        <span>
          부산광역시 금정구 부산대학로63번길 2 (장전동) 제 1공학관 HTM
        </span>
      </p>

      <p className="flex flex-row space-x-2">
        <PhoneIcon className="h-6 w-6" />
        <span>junho@htmach.co.kr</span>
      </p>

      <p>Copyright &#169; 2023 HTM. All Rights Reserved.</p>
    </footer>
  );
}
