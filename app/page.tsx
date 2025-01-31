import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatCards from "./Components/StatsCard"
export default function Home() {
  return (
    <div className="m-5 poppins">
      <Card>
        <Navbar/>
        <StatCards/>
      </Card>
    </div>
  );
}
