import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.1 });
  view ? controls.start("show") : controls.start("hide");
  return [element, controls];
};
