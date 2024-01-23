import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={{ base: "2", md: "4" }}
      justifyContent="space-between" 
      align="center" 
      shadow="base"
      bgColor="blackAlpha.900"
    >
      <Heading as="h1" size="lg" color="white" fontFamily="'Roboto Mono', monospace">
        Krypto.
      </Heading>
      <HStack spacing="4">
        <Button variant="unstyled" color="white">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="unstyled" color="red">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant="unstyled" color="yellow">
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
