import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { WarpBackground } from "../components/ui/warp-background";

export function WarpBackgroundDemo() {
  return (
    
    <WarpBackground className="">
      <Card className=" bg-[#7B3F00] -mt-12 ">
        <CardContent className="flex flex-col gap-2 p-4">
          <CardTitle className="text-white ">A legacy built with trust</CardTitle>
          <CardDescription className="text-primary text-xl font-medium ">
            "With over 3+ years of a Vivasayi's trust, we move forward focusing
            on quality and reliability. Let us accompany you on this journey to
            success."
          </CardDescription>
        </CardContent>
      </Card>
    </WarpBackground>
  );
}
