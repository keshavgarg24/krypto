import { Box, Image} from "@chakra-ui/react";
import React from "react";
import home3 from "../assets/home3.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"black"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
         mx="auto" 
          w={["auto", "28%"]} 
          h={"auto"}
          objectFit={"contain"}
          src={home3}
          alt="Your Alt Text"

        />
      </motion.div>
    </Box>
  );
};

export default Home;