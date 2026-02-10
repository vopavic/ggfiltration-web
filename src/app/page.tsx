import HomeClient from "@/components/page-clients/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G&G Filtration | Průmyslová filtrace a odsávání",
  description: "Výroba a dodávka průmyslových filtračních systémů, odsávání a rekuperace tepla. Čistý vzduch pro váš průmysl.",
};

export default function HomePage() {
  return <HomeClient />;
}
