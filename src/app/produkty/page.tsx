import ProductsClient from "@/components/page-clients/ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog produktů | G&G Filtration",
  description: "Přehled technologií pro průmyslovou filtraci a odsávání. Suchá filtrace, mokrá separace, vysokoteplotní systémy a komponenty.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
