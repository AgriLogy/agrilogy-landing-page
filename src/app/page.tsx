"use client"

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  VStack,
  HStack,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorMode,
  useColorModeValue,
  IconButton,
  Link,
  Badge,
  Stack,
} from "@chakra-ui/react"
import {
  FaHandshake,
  FaWrench,
  FaBuilding,
  FaSun,
  FaMoon,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaCheck,
} from "react-icons/fa"

export default function AgrilogyLanding() {
  const { colorMode, toggleColorMode } = useColorMode()

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.900")
  const textColor = useColorModeValue("gray.800", "white")
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      {/* Header */}
      <Box as="header" bg={useColorModeValue("green.50", "gray.800")} borderBottom="1px" borderColor={borderColor}>
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Image src="/img/logo_Plan de travail 1.png" alt="Agrilogy Logo" h="50px" />

            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Link href="#home" color="green.600" fontWeight="semibold">
                Home
              </Link>
              <Link href="#about" _hover={{ color: "green.600" }}>
                About us
              </Link>
              <Link href="#services" _hover={{ color: "green.600" }}>
                Services
              </Link>
              <Link href="#products" _hover={{ color: "green.600" }}>
                Products
              </Link>
              <Link href="#equipment" _hover={{ color: "green.600" }}>
                Equipment
              </Link>
              <Link href="#contact" _hover={{ color: "green.600" }}>
                Contact
              </Link>
            </HStack>

            <HStack>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                color="green.600"
              />
              <Button size="sm" leftIcon={<Image src="/img/mamoroccoflag_111704.png" w="20px" />}>
                MA
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="home" position="relative" h="60vh" overflow="hidden">
        <Image src="/img/Picture1.jpg" alt="Agricultural landscape" w="100%" h="100%" objectFit="cover" />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.400"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4} textAlign="center" color="white">
            <Heading size="2xl" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
              Welcome to AgriLogy
            </Heading>
            <Text fontSize="xl" maxW="600px" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Smart irrigation solutions for modern agriculture
            </Text>
            <Button colorScheme="green" size="lg" mt={4}>
              Learn More
            </Button>
          </VStack>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" py={20} bg={useColorModeValue("gray.50", "gray.800")}>
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading size="xl" color="green.600">
              About Us
            </Heading>

            <Text fontSize="lg" lineHeight="tall">
              <Text as="span" fontWeight="bold" color="green.600">
                AgriLogy
              </Text>{" "}
              is a company specializing in the agricultural field, especially irrigation services and products. We help
              farmers and gardeners to irrigate and monitor their crops with fewer resources and efforts, with higher
              yields.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <Heading size="md" color="green.600">
                    Products
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text>Smart irrigation and watering system based on IoT technology</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text>Irrigation devices and accessories</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <Heading size="md" color="green.600">
                    Services
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text>Maintenance and installation of smart irrigation (IoT)</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text>Installation and maintenance of solar pumping system</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Heading size="xl" color="green.600" textAlign="center">
              Our Services
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px" textAlign="center">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaHandshake} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      SolariTech
                    </Heading>
                    <Text>Maintenance and installation of smart irrigation system and solar pumping system.</Text>
                    <Image src="/img/image2.png" alt="SolariTech" borderRadius="md" width={80} height={120} objectFit="cover"  />
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px" textAlign="center">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaWrench} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      AgriTech
                    </Heading>
                    <Text>Precision agriculture, robotics and automation (IoT).</Text>
                    <Image src="/img/image 3.png" alt="AgriTech" borderRadius="md" width={80} height={120} objectFit="cover"  />
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px" textAlign="center">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaBuilding} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Solar Pumping
                    </Heading>
                    <Text>Efficient solar-powered water pumping solutions for sustainable agriculture.</Text>
                    <Image src="/img/image 4.png" alt="Solar Pumping" borderRadius="md" width={80} height={120} objectFit="cover"  />
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Products Section */}
      <Box id="products" py={20} bg={useColorModeValue("gray.50", "gray.800")}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Heading size="xl" color="green.600" textAlign="center">
              Products
            </Heading>

            <Text fontSize="lg" textAlign="center" maxW="4xl">
              Our main products objective are to reduce water consumption and protect crops from heat waves and other
              extreme weather conditions and give the farmer the ability to monitor and control the irrigation process
              in the easiest way based on the latest{" "}
              <Text as="span" color="green.600" fontWeight="semibold">
                technologies such as precision irrigation.
              </Text>
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <Image src="/img/image 5.png" alt="Agrilogy Mini" borderTopRadius="md"  maxH="600px"/>
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Badge colorScheme="green" fontSize="sm">
                      Agrilogy Mini
                    </Badge>
                    <Text>
                      An irrigation device installed in the garden and linked with a mobile application, allowing you to
                      control and monitor the irrigation process remotely.
                    </Text>
                    <Button colorScheme="green" variant="outline" as="a" href="#contact">
                      Contact Us
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <Image src="/img/image 6.png" alt="Agrilogy Pro" borderTopRadius="md" maxH="600px" />
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Badge colorScheme="green" fontSize="sm">
                      Agrilogy Pro
                    </Badge>
                    <Text>
                      An irrigation device installed in farms, allowing farmers through mobile or laptop application to
                      get:
                    </Text>
                    <VStack align="start" spacing={2} fontSize="sm">
                      <Text>
                        <strong>1. Irrigation Schedules:</strong> Gives irrigation schedules, saving water while keeping
                        crops healthier.
                      </Text>
                      <Text>
                        <strong>2. Conserve & Connect:</strong> Optimizes water use to reduce needless waste.
                      </Text>
                      <Text>
                        <strong>3. Control From Anywhere:</strong> Control watering from anywhere with the easy-to-use
                        app.
                      </Text>
                    </VStack>
                    <Button colorScheme="green" variant="outline" as="a" href="#contact">
                      Contact Us
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Equipment Section */}
      <Box id="equipment" py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Heading size="xl" color="green.600" textAlign="center">
              Equipment
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <VStack align="start" spacing={6}>
                <Heading size="md" color="green.600">
                  Enhancing Water Management in Agriculture with AGRILOGY Weather Stations
                </Heading>
                <Text>
                  Because of climate change in agriculture, we need to know how much water plants need. The AGRILOGY
                  weather stations allow us to know farm water needs precisely, helping optimize irrigation schedules
                  and resource management.
                </Text>
                <Text fontWeight="semibold" color="green.600">
                  Some Photos:
                </Text>
                <Image src="/img/image 8.jpg" alt="Weather Station" borderRadius="md" />
              </VStack>

              <VStack align="start" spacing={6}>
                <Heading size="md" color="green.600">
                  Optimizing Irrigation Processes and Resource Efficiency with Agrilogy Sensors
                </Heading>
                <Text>
                  For the success of the irrigation process without wasting resources and water, Agrilogy sensors
                  monitor soil changes and development, providing important information for successful agriculture.
                </Text>
                <Text>
                  <strong>Features:</strong> Better management of water and effective management of fertilizers.
                </Text>
                <Text fontWeight="semibold" color="green.600">
                  Some Photos:
                </Text>
                <Image src="/img/image 7.jpg" alt="Sensors" borderRadius="md" />
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} bg={useColorModeValue("green.50", "gray.800")}>
        <Container maxW="4xl">
          <VStack spacing={8}>
            <Heading size="xl" color="green.600" textAlign="center">
              Contact Us
            </Heading>

            <Text textAlign="center" fontSize="lg">
              Do you have any questions about our projects, products, services or our site in general? Do you have any
              comments or ideas you would like to share with us? Please send us a message. We&apos;d love to hear from you!
            </Text>

            <Card bg={cardBg} borderColor="green.200" borderWidth="1px" w="100%">
              <CardBody>
                <Stack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl>
                      <FormLabel color="green.600">Nom</FormLabel>
                      <Input placeholder="Nom" borderColor="green.200" _focus={{ borderColor: "green.500" }} />
                    </FormControl>
                    <FormControl>
                      <FormLabel color="green.600">Prénom</FormLabel>
                      <Input placeholder="Prénom" borderColor="green.200" _focus={{ borderColor: "green.500" }} />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel color="green.600">Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      borderColor="green.200"
                      _focus={{ borderColor: "green.500" }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="green.600">Message</FormLabel>
                    <Textarea
                      placeholder="Message..."
                      rows={4}
                      borderColor="green.200"
                      _focus={{ borderColor: "green.500" }}
                    />
                  </FormControl>

                  <Button colorScheme="green" size="lg" w="100%">
                    Send
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("gray.800", "gray.900")} color="white" py={8}>
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }} gap={4}>
            <Text>
              Copyright ©{" "}
              <Text as="span" color="green.400" fontWeight="semibold">
                Agrilogy
              </Text>
            </Text>

            <HStack spacing={4}>
              <Link href="https://web.facebook.com/p/AgriLogy-100087042591029/" isExternal>
                <Icon as={FaFacebook} boxSize={6} color="green.400" _hover={{ color: "green.300" }} />
              </Link>
              <Link href="https://www.instagram.com/agrilogy_officiel/" isExternal>
                <Icon as={FaInstagram} boxSize={6} color="green.400" _hover={{ color: "green.300" }} />
              </Link>
              <Link href="https://wa.me/message/PGWD3K6AFXWXO1?src=qr" isExternal>
                <Icon as={FaWhatsapp} boxSize={6} color="green.400" _hover={{ color: "green.300" }} />
              </Link>
              <Link href="https://www.linkedin.com/company/agrilogy/" isExternal>
                <Icon as={FaLinkedin} boxSize={6} color="green.400" _hover={{ color: "green.300" }} />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
