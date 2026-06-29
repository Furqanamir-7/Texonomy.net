import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CategoryPageLayout } from "@/components/trades/CategoryPageLayout";
import { getCategoryByPath } from "@/data/trades/trades.config";

const category = getCategoryByPath("/trades/home-textile")!;

export default function TradesHomeTextile() {
  return (
    <CategoryPageLayout
      eyebrow="Home Textile"
      title="Home Textile Collections"
      description="Export-quality home textile products for retail and hospitality buyers."
      className="bg-bg-secondary"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {category.subcategories.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 0.06}>
            <div id={item.slug} className="scroll-mt-24">
              <Card>
                <h2 className="font-display text-lg font-semibold mb-2">{item.label}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button to="/trades/rfq" size="lg">Request Quote</Button>
      </div>
    </CategoryPageLayout>
  );
}
