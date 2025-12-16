"use client";

import React, { useState } from "react";
import metamaskIcon from "@/public/icons/metamask.svg";
import rainbowIcon from "@/public/icons/rainbow.svg";
import walletConnectIcon from "@/public/icons/wallet-connect.svg";
import walletIcon from "@/public/icons/wallet.svg";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface PaymentMethodProps {
  action: string;
  className?: string;
}

type Method = {
  logo: string;
  label: string;
};

const methods: Method[] = [
  { logo: metamaskIcon, label: "Metamask" },
  { logo: rainbowIcon, label: "Rainbow" },
  { logo: walletConnectIcon, label: "WalletConnect" },
  {
    logo: walletIcon,
    label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
  },
];

const PaymentMethod: React.FC<PaymentMethodProps> = ({ action, className }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Method | null>(null);
  return (
    <div className="flex flex-col gap-4 font-outfit">
      <p className="font-medium text-[#013941] text-base">{action}</p>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            `w-full rounded-[30px] bg-white p-6 border border-[#E0E0E0] max-h-15 flex`,
            className
          )}
        >
          <div className="w-full flex items-center justify-between gap-3 font-outfit">
            {selected ? (
              <div className="flex gap-2">
                <Image
                  aria-hidden="true"
                  alt={selected.label ?? ""}
                  src={selected.logo}
                  width={20}
                  height={20}
                />
                <p className="text-base text-justify text-[#013941]">
                  {selected.label}
                </p>
              </div>
            ) : (
              <p className="text-base text-[#013941]">Select an option</p>
            )}
            <FaChevronDown height={20} width={20} color="#013941" />
          </div>
        </button>

        {/* -------- dropdown open ------ */}
        {open && (
          <div className="absolute px-3 py-4 border border-[#E0E0E0] bg-white rounded-4xl z-50">
            {methods.map((method, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(method);
                  setOpen(false);
                }}
                className="w-full rounded-2xl active:bg-[#F5F5F5] hover:bg-[#F5F5F5]  flex items-center gap-2 p-3"
              >
                <Image
                  aria-hidden="true"
                  alt={method.label}
                  src={method.logo}
                />
                <p className="text-sm text-justify font-medium text-[#013941]">
                  {method.label}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
