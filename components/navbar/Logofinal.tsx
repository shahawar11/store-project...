import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";

export default function Logofinal() {
  return (
    <div>
      <div className="flex min-w-max items-center">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-2xl font-semibold text-blue-950 dark:text-gray-300"
        >
          <Image
            src="/wheat.svg"
            alt="wheat"
            className="p-1 rounded-md border bg-muted"
            width={30}
            height={32}
          />
          <Logo />
        </Link>
      </div>
    </div>
  );
}
