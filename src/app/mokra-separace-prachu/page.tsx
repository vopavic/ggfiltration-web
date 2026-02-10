import WetSeparationClient from "@/components/page-clients/WetSeparationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mokrá separace prachu | G&G Filtration",
  description: "Bezpečná filtrace výbušných prachů (hliník, titan, hořčík). Mokré odlučovače s automatickým vynášením kalu.",
};

export default function WetSeparationPage() {
  return <WetSeparationClient />;
}
