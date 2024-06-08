import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";

export default function Home() {
  return (
    <div>
      <h1>Hello from the index page!</h1>
      <ThemeToggle />
    </div>
  );
}
