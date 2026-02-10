import PipingSystemsClient from "@/components/page-clients/PipingSystemsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Průmyslové potrubní systémy | G&G Filtration",
  description: "Výroba a montáž robustních potrubních tras pro transport vzduchu, prachu a abrazivního materiálu. Skupina I, II a III.",
};

export default function PipingSystemsPage() {
  return <PipingSystemsClient />;
}
