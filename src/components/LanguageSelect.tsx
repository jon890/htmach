"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { locales, usePathname, useRouter } from "../navigation";
import { cn } from "@/lib/utils";

export default function LanguageSelect() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (locale: string) => {
    setValue(locale === value ? "" : locale);
    setOpen(false);
    router.push(locale + pathname);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="ml-4 w-[200px] justify-between"
        >
          {value
            ? locales.find((locale) => locale === value) ?? ""
            : "Select Locales..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {locales.map((locale) => (
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
