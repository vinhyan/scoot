import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  position: relative;
  padding: 0 160px;
  @media (max-width: 1230px) {
    padding: 0 97px;
    margin-bottom: 120px;
  }
  @media (max-width: 670px) {
    padding: 0 32px;
  }
`;
