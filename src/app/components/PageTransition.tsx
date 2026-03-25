import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router";

const DURATION = 350;

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [current, setCurrent] = useState(children);
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">(
    "visible"
  );
  const prevKey = useRef(location.key);

  useLayoutEffect(() => {
    if (location.key === prevKey.current) {
      setCurrent(children);
      return;
    }
    prevKey.current = location.key;

    setPhase("exiting");

    const exitTimer = setTimeout(() => {
      setCurrent(children);
      window.scrollTo({ top: 0 });
      setPhase("entering");

      const enterTimer = setTimeout(() => {
        setPhase("visible");
      }, DURATION);

      return () => clearTimeout(enterTimer);
    }, DURATION);

    return () => clearTimeout(exitTimer);
  }, [location.key, children]);

  return (
    <div
      className="transition-page"
      style={{
        opacity: phase === "exiting" ? 0 : 1,
        transform:
          phase === "exiting"
            ? "translateY(8px)"
            : phase === "entering"
              ? "translateY(0)"
              : "none",
        transition:
          phase === "visible"
            ? "none"
            : `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
      }}
    >
      {current}
    </div>
  );
}
