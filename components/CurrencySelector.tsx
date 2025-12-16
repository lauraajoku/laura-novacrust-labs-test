"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import bnbIcon from "@/public/icons/bnb.svg";
import celoIcon from "@/public/icons/celo.svg";
import ethIcon from "@/public/icons/eth.svg";
import nigeriaIcon from "@/public/icons/nigeria.svg";
import tonIcon from "@/public/icons/ton.svg";
import Image from "next/image";

export type Currency = {
  logo: string;
  id: string;
  label: string;
  displayLabel: string;
};

export const currencies: Currency[] = [
  {
    logo: celoIcon,
    id: "usdt-celo",
    label: "USDT - CELO",
    displayLabel: "CELO",
  },
  {
    logo: bnbIcon,
    id: "usdt-bnb",
    label: "USDT - BNB",
    displayLabel: "BNB",
  },
  {
    logo: ethIcon,
    id: "eth",
    label: "ETH",
    displayLabel: "ETH",
  },
  {
    logo: nigeriaIcon,
    id: "ngn",
    label: "NGN",
    displayLabel: "NGN",
  },
  {
    logo: tonIcon,
    id: "usdt-ton",
    label: "USDT - TON",
    displayLabel: "TON",
  },
];

const CurrencySelector = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<Currency>(currencies[2]);

  const filteredCoins = currencies.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-4xl bg-[#F7F7F7] px-3 py-2 border border-[#E0E0E0]"
      >
        <div className="flex items-center gap-1">
          <Image
            aria-hidden="true"
            alt={selected.displayLabel}
            src={selected.logo}
            width={20}
            height={20}
          />
          <p className="font-space-grotesk text-sm font-medium text-[#013941]">
            {selected.displayLabel}
          </p>
          <FaChevronDown height={20} width={20} color="#013941" />
        </div>
      </button>

      {/* ------ dropdown open ------ */}
      {open && (
        <div className="absolute right-0 font-outfit mt-1 bg-white w-66 flex flex-col gap-2 border px-3 py-4 rounded-4xl border-[#E0E0E0] z-50">
          {/* ------ search bar ------ */}
          <div className="flex relative items-center rounded-4xl border border-[#E0E0E0] px-4 py-3">
            <CiSearch className="absolute w-5 h-5" color="#828282" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(text) => setSearch(text.target.value)}
              className="w-full pl-7 focus:outline-none text-sm text-[#828282] placeholder:text-[#828282]"
            />
          </div>
          {/* ------ list of coins ------ */}
          <div className="relative flex flex-col gap-2">
            {filteredCoins.map((coin, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(coin);
                  setOpen(false);
                  setSearch("");
                }}
                className="w-full rounded-2xl active:bg-[#F5F5F5] hover:bg-[#F5F5F5]  flex items-center gap-2 p-3"
              >
                <Image
                  aria-hidden="true"
                  alt={coin.displayLabel}
                  src={coin.logo}
                />
                <p className="text-sm font-medium text-[#013941]">
                  {coin.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
