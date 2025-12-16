"use client";

import { useState } from "react";
import AmountCard from "@/components/AmountCard";
import ConversionTabs from "@/components/ConversionTabs";
import PaymentMethod from "@/components/PaymentMethod";
import PrimaryActionButton from "@/components/PrimaryActionButton";

const CryptoConvert = () => {
  const [payAmount, setPayAmount] = useState<string>("");
  const [payError, setPayError] = useState<string>("");


  const handlePayAmountChange = (value: string) => {
    const numericValue = value.replace(/[^\d.]/g, "");
    const asNumber = parseFloat(numericValue);

    if (asNumber <= 0) {
      setPayError("Please enter an amount greater than 0");
    } else {
      setPayError("");
    }
    setPayAmount(numericValue);
  };

  return (
    <div className="w-full mx-auto flex flex-col rounded-[30px] md:max-w-160 py-10 px-6 md:px-16 bg-white">
      <div className="flex flex-col gap-10">
        <div className="self-center">
          <ConversionTabs />
        </div>
        <div className="flex flex-col items-stretch gap-6">
          {/* ------ amount you pay ------ */}
          <AmountCard
            action={"pay"}
            amount={payAmount}
            onAmountChange={handlePayAmountChange}
            error={payError}
          />
          {/* ------ amount you receive ------ */}
          <AmountCard
            action={"receive"}
            amount={payAmount}
            onAmountChange={handlePayAmountChange}
            error={payError}
          />
          {/* ------ pay from ------ */}
          <PaymentMethod action={"Pay from"} />
          {/* ------ pay to ------ */}
          <PaymentMethod action={"Pay To"} />
        </div>
        <PrimaryActionButton
          ctaLabel="Convert Now"
          ctaHref="/recipient-details"
        />
      </div>
    </div>
  );
};

export default CryptoConvert;
