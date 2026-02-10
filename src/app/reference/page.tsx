import ReferencesClient from "@/components/page-clients/ReferencesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reference | G&G Filtration",
  description: "Přehled realizovaných projektů průmyslové filtrace a odsávání. Přes 500 úspěšně dokončených instalací.",
};

export default function ReferencesPage() {
  return <ReferencesClient />;
}
