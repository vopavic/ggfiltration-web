import VOCFiltrationClient from "@/components/page-clients/VOCFiltrationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odsávání VOC látek | G&G Filtration",
  description: "Katalytická oxidace, adsorpce a kondenzace pro snižování emisí VOC látek. Rekuperace tepla až 95%.",
};

export default function VOCFiltrationPage() {
  return <VOCFiltrationClient />;
}
