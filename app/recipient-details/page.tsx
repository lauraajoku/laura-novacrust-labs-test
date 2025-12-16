"use client";

import { useRouter } from "next/navigation";

import InputField from "@/components/InputField";
import PaymentMethod from "@/components/PaymentMethod";
import PrimaryActionButton from "@/components/PrimaryActionButton";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const RecipientDetails = () => {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState<string>("");

  return (
    <div className="bg-gray-200 h-dvh flex items-center px-4">
      <div className="w-full mx-auto rounded-[30px] md:max-w-160 py-10 px-6 md:px-16 bg-white">
        <div className="w-full mb-10 flex items-center">
          <IoIosArrowRoundBack
            size={24}
            className=""
            onClick={() => router.back()}
          />
          <h2 className="w-full font-outfit font-medium text-xl text-[#013941] text-center">
            Recipient details
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <PaymentMethod action={"Bank"} className="py-4" />
          {/* ------ account number ------ */}
          <InputField
            label={"Account number"}
            placeholder={"Enter your account number"}
            disabled={false}
            value={accountNumber}
            onChange={setAccountNumber}
          />
          {/* ------ account name ------ */}
          <InputField
            label={"Account name"}
            placeholder={""}
            disabled={true}
            value={"ODUTUGA GBEKE"}
          />
        </div>
        <PrimaryActionButton ctaLabel={"Next"} className="mt-42.5" />
      </div>
    </div>
  );
};

export default RecipientDetails;
