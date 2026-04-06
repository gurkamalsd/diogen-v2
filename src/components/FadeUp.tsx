import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFallback(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView || fallback ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
