'use client'
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Search, X } from "lucide-react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  ref?: React.Ref<HTMLInputElement> | null;
};

export const SearchInput = ({ ref, ...props }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-[480px]">
      <div className="relative flex items-center w-full">
        <input
          className="w-full px-4 py-2 rounded-3xl border border-zinc-300 focus:outline-none focus:ring-1 focus:ring-zinc-700 text-zinc-950"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          ref={ref}
          {...props}
        />

        <div className="absolute right-2 flex gap-2 items-center">
          {searchValue && 
            <button
              onClick={() => setSearchValue("")}
              className="bg-zinc-400 rounded-full p-1 hover:bg-zinc-500 transition duration-200 ease-in-out"
            >
              <X size={12} />
            </button>
          }
          <button className="bg-zinc-700 rounded-full p-2 hover:bg-zinc-600 transition duration-200 ease-in-out">
            <Search size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
