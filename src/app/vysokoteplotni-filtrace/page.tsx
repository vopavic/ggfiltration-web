import HighTempFiltrationClient from "@/components/page-clients/HighTempFiltrationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vysokoteplotní filtrace | G&G Filtration",
  description: "Pokročilé systémy s keramickými elementy pro teploty až 900 °C. Komplexní čištění spalin: odprášení + odsíření + DeNOx v jednom kroku.",
};

export default function HighTempFiltrationPage() {
  return <HighTempFiltrationClient />;
}
