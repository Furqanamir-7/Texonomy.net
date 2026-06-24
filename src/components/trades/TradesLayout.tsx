import { TradesNav } from "./TradesNav";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function TradesLayout() {
  return (
    <>
      <TradesNav />
      <PageWrapper />
      <SiteFooter division="trades" />
    </>
  );
}
