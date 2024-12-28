import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container>
        <p>Portfolio</p>
        <Button>Click Me</Button>
      </Container>
    </div>
  );
}
