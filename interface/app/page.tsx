import PageView from "@/components/PageView";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contract Bridger",
  description:
    "a tool for taking a contract already existing on one chain and deploying it to another chain",
};

export default function Home() {
  return <PageView />;
}
