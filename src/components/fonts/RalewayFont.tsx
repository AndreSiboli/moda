import { ReactNode } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RalewayFont({ children }: { children: ReactNode }) {
  return <span className={raleway.className}>{children}</span>;
}
