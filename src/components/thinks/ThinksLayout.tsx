import { ThinksNav } from "./ThinksNav";
import { ThinksFooter } from "./ThinksFooter";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function ThinksLayout() {
  return (
    <>
      <ThinksNav />
      <PageWrapper />
      <ThinksFooter />
    </>
  );
}
