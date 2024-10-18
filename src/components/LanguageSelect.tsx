"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types/locale-type";
import { Check, ChevronsUpDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { i18n } from "../i18n";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";

export default function LanguageSelect() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    (pathname.split("/").filter((it) => it !== "")[0] as LocaleType) ??
    i18n.defaultLocale;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<LocaleType>(currentLocale);

  const handleSelect = (locale: string) => {
    setValue(locale as LocaleType);
    setOpen(false);

    const pathSplits = pathname.split("/").filter((it) => it !== "");
    if (i18n.locales.includes(pathSplits[0] as LocaleType)) {
      pathSplits[0] = locale;
    }
    const path = "/" + pathSplits.join("/");
    console.log("path splits", locale, pathSplits, path);
    router.push(path);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="ml-4 w-[80px] justify-between"
        >
          {value
            ? i18n.locales.find((locale) => locale === value) ?? ""
            : "Locales"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No locale found.</CommandEmpty>
          <CommandGroup>
            {i18n.locales.map((locale) => (
              <CommandItem key={locale} value={locale} onSelect={handleSelect}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === locale ? "opacity-100" : "opacity-0",
                  )}
                />
                {locale}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
