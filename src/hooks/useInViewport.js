import { useEffect, useState } from "react";

// Reports whether the element is on screen (any pixel); with `once`, stays true after the first time.
function useInViewport(ref, { rootMargin = "0px", once = false } = {}) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, rootMargin, once]);

  return inViewport;
}

export default useInViewport;
