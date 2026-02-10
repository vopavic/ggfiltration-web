import DryFiltrationClient from "@/components/page-clients/DryFiltrationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Průmyslová suchá filtrace prachu | G&G Filtration",
  description: "Textilní filtrační jednotky G&G JET BAG s automatickou regenerací. Robustní řešení pro nejtěžší provozy s garancí emisních limitů.",
};

export default function DryFiltrationPage() {
  return <DryFiltrationClient />;
}
