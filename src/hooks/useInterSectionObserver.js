import { useRef, useEffect, useState } from "react";

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}
