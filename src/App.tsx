import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gateway from "@/pages/Gateway";
import { ThinksLayout } from "@/components/thinks/ThinksLayout";
import { TradesLayout } from "@/components/trades/TradesLayout";
import ThinksHome from "@/pages/thinks/Home";
import ThinksTraining from "@/pages/thinks/Training";
import ThinksConsulting from "@/pages/thinks/Consulting";
import ThinksContact from "@/pages/thinks/Contact";
import TradesHome from "@/pages/trades/Home";
import TradesYarn from "@/pages/trades/Yarn";
import TradesFabrics from "@/pages/trades/Fabrics";
import TradesHomeTextile from "@/pages/trades/HomeTextile";
import TradesGarments from "@/pages/trades/Garments";
import TradesRfq from "@/pages/trades/Rfq";
import TradesContact from "@/pages/trades/Contact";
import SuppliersCertifications from "@/pages/trades/SuppliersCertifications";
import TradingAlliances from "@/pages/trades/TradingAlliances";
import SellersAudit from "@/pages/trades/SellersAudit";
import { GlobalChrome } from "@/components/shared/GlobalChrome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Gateway />} />

        <Route path="thinks" element={<ThinksLayout />}>
          <Route index element={<ThinksHome />} />
          <Route path="training" element={<ThinksTraining />} />
          <Route path="consulting" element={<ThinksConsulting />} />
          <Route path="intelligence" element={<Navigate to="/thinks" replace />} />
          <Route path="research" element={<Navigate to="/thinks" replace />} />
          <Route path="insights" element={<Navigate to="/thinks" replace />} />
          <Route path="case-studies" element={<Navigate to="/thinks" replace />} />
          <Route path="contact" element={<ThinksContact />} />
        </Route>

        <Route path="trades" element={<TradesLayout />}>
          <Route index element={<TradesHome />} />
          <Route path="yarn" element={<TradesYarn />} />
          <Route path="fabrics" element={<TradesFabrics />} />
          <Route path="home-textile" element={<TradesHomeTextile />} />
          <Route path="garments" element={<TradesGarments />} />
          <Route path="export-markets" element={<Navigate to="/trades/suppliers-certifications" replace />} />
          <Route path="suppliers-certifications" element={<SuppliersCertifications />} />
          <Route path="trading-alliances" element={<TradingAlliances />} />
          <Route path="sellers-audit" element={<SellersAudit />} />
          <Route path="rfq" element={<TradesRfq />} />
          <Route path="contact" element={<TradesContact />} />
        </Route>

        {/* Legacy redirects */}
        <Route path="about" element={<Navigate to="/thinks" replace />} />
        <Route path="consultation" element={<Navigate to="/thinks/consulting" replace />} />
        <Route path="training" element={<Navigate to="/thinks/training" replace />} />
        <Route path="insights" element={<Navigate to="/thinks" replace />} />
        <Route path="contact" element={<Navigate to="/thinks/contact" replace />} />
      </Routes>
      <GlobalChrome />
    </BrowserRouter>
  );
}
