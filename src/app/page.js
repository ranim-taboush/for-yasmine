import Image from "next/image";
import EyesCanvas from "@/components/eyesCanvas";
import BlinkingEyes from "@/components/blinkingEye";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between absolute z-20 w-screen h-[100dvh]">
      <div className="h-[10dvh] w-full bg-eyes relative"></div>
      <div className="h-[10dvh] w-full bg-eyes relative"></div>
      <div className="absolute w-[5vw] h-full max-lg:hidden bg-v-eyes left-0 top-0 rotate-180"></div>
      <div className="absolute w-[5vw] h-full max-lg:hidden bg-v-eyes right-0 top-0"></div>
      <EyesCanvas />
      {/* <BlinkingEyes /> */}
    </main>
  );
}
