"use client";

import React from "react";
import CurrencySelector from "./CurrencySelector";

interface AmountCardProps {
  action: string;
  amount: string;
  onAmountChange: (value: string) => void;
  error: string;
}

const AmountCard: React.FC<AmountCardProps> = ({
  action,
  amount,
  onAmountChange,
  error,
}) => {
  return (
    <div>
      <div className="font-outfit w-full flex flex-col p-6 gap-2 border border-[#E0E0E0] rounded-[1.875rem]">
        <p className="font-semibold text-[#828282]">{`You ${action}`}</p>
        <div className="flex items-center justify-between">
          <input
            placeholder="1.00"
            inputMode="decimal"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="font-semibold text-lg md:text-2xl max-w-40 md:max-w-full outline-none"
          />
          <CurrencySelector />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default AmountCard;
