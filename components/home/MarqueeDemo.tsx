
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Anand Kumar",
    rating: "⭐⭐⭐⭐",
    body: "I needed high-quality fertilizers for my farm, and vivasayi made it easy to find the right products.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 2,
    name: "Thamizharasan",
    rating: "⭐⭐⭐⭐",
    body: "Got quality seeds for my farm. Their team was helpful, but response time could be quicker.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 3,
    name: "Golkulnath",
    rating: "⭐⭐⭐⭐⭐",
    body: "Contacted vivasayi for pesticides, got good recommendations and fair pricing. Will use again.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 4,
    name: "Kavin Dharshan",
    rating: "⭐⭐⭐⭐",
    body: "The herbicides worked well, and the price was reasonable. Happy with the purchase.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    id: 5,
    name: "Rajasekar S",
    rating: "⭐⭐⭐⭐⭐",
    body: "Bought fertilizers, and the quality was excellent. Helped improve my crop yield.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    id: 6,
    name: "Kumaresan",
    rating: "⭐⭐⭐⭐⭐",
    body: "I've been the regular customer from years. Their products helped me to increase my yield.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  rating,
  body,
}: {
  img: string;
  name: string;
  rating: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <p className="text-base font-medium dark:text-white/40 p-1 mx-auto text-left">{rating}</p>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="py-16 font-bold text-gray-800 dark:text-white text-3xl">
        What Our Customers Say
      </h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}


