import CryptoConvert from "./crypto-convert/page";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-dvh px-4">
      <main className="flex h-full justify-center">
        <CryptoConvert />
      </main>
    </div>
  );
}
