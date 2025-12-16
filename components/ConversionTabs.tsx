import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const tabValues = [
  { value: "crypto-to-cash", label: "Crypto to cash" },
  { value: "cash-to-crypto", label: "Cash to crypto" },
  { value: "crypto-loan", label: "Crypto to fiat loan" },
];

const ConversionTabs = () => {
  return (
    <div>
      <Tabs defaultValue="crypto-to-cash">
        <TabsList className="flex w-full overflow-x-auto font-outfit rounded-full bg-[#F2F2F2] p-0">
          {tabValues.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className="text-[#828282] px-2 md:px-4 py-2 rounded-full font-medium text-xs md:text-sm data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB]"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ConversionTabs;
