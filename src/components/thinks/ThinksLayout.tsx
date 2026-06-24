import { ThinksNav } from "./ThinksNav";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function ThinksLayout() {
  return (
    <>
      <ThinksNav />
      <PageWrapper />
      <SiteFooter division="thinks" />
    </>
  );
}
