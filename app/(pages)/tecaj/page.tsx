"use client";

import { useGetTecaj } from "@/query/tecaj/useGetTecaj";

const TecajPage = () => {
  const { tecaj } = useGetTecaj("2024-01-01");
  // return <div>123</div>;
  return <div>123</div>;
};
export default TecajPage;
