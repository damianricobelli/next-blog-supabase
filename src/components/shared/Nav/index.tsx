import React from "react"
import Link from "next/link"

import {
  Stack,
  Box,
  IconButton,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useColorModeValue,
  Container
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import { AiFillGithub } from "react-icons/ai"

interface indexProps {}

const Links = ["Inicio", "Crear post", "Perfil"]

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link href="/profile">
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700")
      }}
    >
      {children}
    </Box>
  </Link>
)

const Nav: React.FC<indexProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container p={4} maxW="7xl">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} rounded="md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontWeight="bold" fontSize="xl">
                Blogsabase
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box
              cursor="pointer"
              p={1}
              rounded="lg"
              transition="0.3s"
              opacity="0.6"
              _hover={{
                bg: "gray.400",
                opacity: "1"
              }}
              onClick={() => console.log("click repo")}
            >
              <AiFillGithub size={34} />
            </Box>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  )
}

export default Nav
