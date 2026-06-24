import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export function PageWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="min-h-screen pt-14"
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
}
