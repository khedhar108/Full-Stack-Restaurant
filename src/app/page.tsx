import Features from "@/components/Main/ServerSide/Features";
import Offer from "@/components/Main/ServerSide/Offer";
import Slider from "@/components/Main/ClientSide/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider />
      <Features />
      <Offer />
    </main>
  );
}
