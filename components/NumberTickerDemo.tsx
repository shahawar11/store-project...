import { NumberTicker } from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={3000}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-green-800 dark:text-white"
    />
  );
}
