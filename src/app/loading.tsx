import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading",
};

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}
