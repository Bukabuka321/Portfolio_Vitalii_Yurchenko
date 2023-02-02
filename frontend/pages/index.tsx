import Link from "next/link";
import Landing from "./components/Landing";
import About from "./components/About";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Landing />
      <About />
      <Technologies />
    </div>
  );
}
