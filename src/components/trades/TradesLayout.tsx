import { TradesNav } from "./TradesNav";
import { TradesFooter } from "./TradesFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function TradesLayout() {
  return (
    <>
      <TradesNav />
      <PageWrapper />
      <TradesFooter />
    </>
  );
}
