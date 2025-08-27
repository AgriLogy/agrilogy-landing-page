"use client";

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
  useColorMode,
  useColorModeValue,
  IconButton,
  Link,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaWrench,
  FaBuilding,
  FaSun,
  FaMoon,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaCheck,
  FaCog,
  FaMicrochip,
  FaCube,
  FaMobile,
  FaWifi,
  FaLeaf,
  FaChartLine,
  FaBell,
  FaWater,
} from "react-icons/fa";
import ContactSection from "./components/ContactSection";

export default function AgrilogyLanding() {
  const { colorMode, toggleColorMode } = useColorMode();

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      {/* Header */}
      <Box
        as="header"
        bg={useColorModeValue("green.50", "gray.800")}
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Image
              src="/img/logo_Plan de travail 1.png"
              alt="Agrilogy Logo"
              h="50px"
              w="auto"
            />

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
              <Link href="#platform" _hover={{ color: "green.600" }}>
                Platform
              </Link>
              <Link href="#industry" _hover={{ color: "green.600" }}>
                Industry 4.0
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
              <Button
                size="sm"
                leftIcon={
                  <Image src="/img/mamoroccoflag_111704.png" w="20px" />
                }
              >
                MA
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="home" position="relative" h="60vh" overflow="hidden">
        <Image
          src="/img/Picture1.jpg"
          alt="Agricultural landscape"
          w="100%"
          h="100%"
          objectFit="cover"
        />
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
              Welcome to Agrogo
            </Heading>
            <Text
              fontSize="xl"
              maxW="600px"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              Smart solutions for modern agriculture
            </Text>
            <Link href="#about" _hover={{ color: "green.600" }}>
              <Button colorScheme="green" size="lg" mt={4}>
                Learn More
              </Button>
            </Link>
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
                Agrogo
              </Text>{" "}
              is a leading technology company specializing in the development of
              smart, integrated solutions that combine Internet of Things (IoT),
              electromechanical systems, and web and mobile applications to
              address critical challenges in key sectors such as agriculture,
              water management, energy, and the environment. At AGROGO, we merge
              engineering, software development, and environmental innovation to
              deliver modern products and services that help individuals and
              organizations improve operational efficiency and make data-driven
              decisions.
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
                      <Text>
                        Smart irrigation and watering system based on IoT
                        technology
                      </Text>
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
                      <Text>
                        Maintenance and installation of smart irrigation (IoT)
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheck} color="green.500" />
                      <Text>
                        Installation and maintenance of solar pumping system
                      </Text>
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

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaLeaf} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Studies & Sustainable Solutions
                    </Heading>
                    <Text fontSize="sm">
                      Agricultural projects: irrigation, production, solar
                      energy
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaWrench} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Installation Services
                    </Heading>
                    <Text fontSize="sm">
                      Irrigation systems, solar pumping solutions, and IoT
                      integration
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaChartLine} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Precision Agriculture
                    </Heading>
                    <Text fontSize="sm">
                      Advanced farming techniques using IoT and data analytics
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaBuilding} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Green Spaces Management
                    </Heading>
                    <Text fontSize="sm">
                      Comprehensive management solutions for green spaces
                    </Text>
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

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={FaWifi} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      IoT Sensors
                    </Heading>
                    <Text>
                      Weather stations, soil sensors, and environmental
                      monitoring devices
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={FaCog} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Irrigation Controllers
                    </Heading>
                    <Text>
                      Smart controllers for automated irrigation management
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={FaMobile} boxSize={12} color="green.500" />
                    <Heading size="md" color="green.600">
                      Smart Farming Web App
                    </Heading>
                    <Text>
                      Comprehensive web application for farm management
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <Image
                  src="/img/image 5.png"
                  alt="Agrilogy Mini"
                  borderTopRadius="md"
                  height="500px"
                />
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Badge colorScheme="green" fontSize="sm">
                      Agrilogy Mini
                    </Badge>
                    <Text>
                      An irrigation device installed in the garden and linked
                      with a mobile application, allowing you to control and
                      monitor the irrigation process remotely.
                    </Text>
                    <Button
                      colorScheme="green"
                      variant="outline"
                      as="a"
                      href="#contact"
                    >
                      Contact Us
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <Image
                  src="/img/image 6.png"
                  alt="Agrilogy Pro"
                  borderTopRadius="md"
                  height="500px"
                  objectFit="fill"
                />
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Badge colorScheme="green" fontSize="sm">
                      Agrilogy Pro
                    </Badge>
                    <Text>
                      An irrigation device installed in farms, allowing farmers
                      through mobile or laptop application to get:
                    </Text>
                    <VStack align="start" spacing={2} fontSize="sm">
                      <Text>
                        <strong>1. Irrigation Schedules:</strong> Gives
                        irrigation schedules, saving water while keeping crops
                        healthier.
                      </Text>
                      <Text>
                        <strong>2. Conserve & Connect:</strong> Optimizes water
                        use to reduce needless waste.
                      </Text>
                      <Text>
                        <strong>3. Control From Anywhere:</strong> Control
                        watering from anywhere with the easy-to-use app.
                      </Text>
                    </VStack>
                    <Button
                      colorScheme="green"
                      variant="outline"
                      as="a"
                      href="#contact"
                    >
                      Contact Us
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Agrilogy Platform Section */}
      <Box id="platform" py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Heading size="xl" color="green.600" textAlign="center">
              Agrilogy Platform
            </Heading>

            <Text fontSize="lg" textAlign="center" maxW="4xl">
              Agrilogy platform is a smart web application for irrigation and
              fertilization management. It collects sensor data and transforms
              it into accurate indicators to support better decision-making.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <Heading size="md" color="green.600">
                    Key Features
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <HStack>
                      <Icon as={FaChartLine} color="green.500" />
                      <Text>
                        Real-time monitoring of soil and climate conditions
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaWater} color="green.500" />
                      <Text>
                        Scheduling and management of irrigation and
                        fertilization based on scientific standards
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaBell} color="green.500" />
                      <Text>
                        Smart alerts when action is needed or risks are detected
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCog} color="green.500" />
                      <Text>
                        Remote control of pumps and irrigation systems
                      </Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <Heading size="md" color="green.600">
                    Benefits
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <Text>
                      <strong>Water and fertilizer consumption analysis</strong>{" "}
                      to improve efficiency and reduce costs.
                    </Text>
                    <Text>
                      With the integration of{" "}
                      <Text as="span" color="green.600" fontWeight="semibold">
                        IoT and Artificial Intelligence
                      </Text>
                      , we help you achieve more productive and sustainable
                      farming.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Industry 4.0 Section */}
      <Box id="industry" py={20} bg={useColorModeValue("gray.50", "gray.800")}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Heading size="xl" color="green.600" textAlign="center">
              Industry 4.0 Expertise
            </Heading>

            <Text fontSize="lg" textAlign="center" maxW="4xl">
              We are committed to supporting you at every stage of your project,
              from study and design to manufacturing and implementation. With
              our multidisciplinary expertise, we develop advanced, functional
              prototypes that integrate cutting-edge technologies, customized to
              meet your specific needs.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaLeaf} boxSize={10} color="green.500" />
                    <Heading size="md" color="green.600">
                      Study & Design
                    </Heading>
                    <Text>
                      Comprehensive project analysis and innovative design
                      solutions
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                textAlign="center"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaCog} boxSize={10} color="green.500" />
                    <Heading size="md" color="green.600">
                      Creation & Adaptation
                    </Heading>
                    <Text>
                      Custom manufacturing and tailored implementation
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            <Text
              fontSize="lg"
              textAlign="center"
              color="green.600"
              fontWeight="semibold"
              mb={8}
            >
              At Agrogo, our team unites diverse expertise to deliver
              innovative, tailored solutions for your needs.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <HStack>
                    <Icon as={FaMicrochip} color="green.500" />
                    <Heading size="md" color="green.600">
                      Electronics
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      PCB design
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      PCB printing
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Component placement
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Testing & validation
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <HStack>
                    <Icon as={FaCog} color="green.500" />
                    <Heading size="md" color="green.600">
                      Automation
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Integration of PLCs
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      PLC repair
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Preventive maintenance
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <HStack>
                    <Icon as={FaCube} color="green.500" />
                    <Heading size="md" color="green.600">
                      3D Design & Printing
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      3D modeling
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      3D design
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Model prototyping
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      3D simulation
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      High-quality 3D printing
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <HStack>
                    <Icon as={FaWrench} color="green.500" />
                    <Heading size="md" color="green.600">
                      Machining
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Precision machining of custom parts
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      High-quality component manufacturing
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card bg={cardBg} borderColor="green.200" borderWidth="1px">
                <CardHeader>
                  <HStack>
                    <Icon as={FaMobile} color="green.500" />
                    <Heading size="md" color="green.600">
                      App Development
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Mobile app & web development
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      IT infrastructure
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      System integration
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheck} color="green.500" />
                      Embedded systems
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card
                bg={cardBg}
                borderColor="green.200"
                borderWidth="1px"
                gridColumn={{ base: "1", lg: "1 / -1" }}
              >
                <CardHeader>
                  <HStack>
                    <Icon as={FaWifi} color="green.500" />
                    <Heading size="md" color="green.600">
                      IoT Systems
                    </Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Design and deployment of IoT-based solutions
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Integration of sensors and actuators
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Wired & Wireless data communication
                      </ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Real-time monitoring and control
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Cloud connectivity and dashboards
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheck} color="green.500" />
                        Maintenance and troubleshooting of IoT networks
                      </ListItem>
                    </List>
                  </SimpleGrid>
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
                  Enhancing Water Management in Agriculture with AGRILOGY
                  Weather Stations
                </Heading>
                <Text>
                  Because of climate change in agriculture, we need to know how
                  much water plants need. The AGRILOGY weather stations allow us
                  to know farm water needs precisely, helping optimize
                  irrigation schedules and resource management.
                </Text>
                <Text fontWeight="semibold" color="green.600"></Text>
                <Image
                  src="/img/image 8.jpg"
                  alt="Weather Station"
                  borderRadius="md"
                />
              </VStack>

              <VStack align="start" spacing={6}>
                <Heading size="md" color="green.600">
                  Optimizing Irrigation Processes and Resource Efficiency with
                  Agrilogy Sensors
                </Heading>
                <Text>
                  For the success of the irrigation process without wasting
                  resources and water, Agrilogy sensors monitor soil changes and
                  development, providing important information for successful
                  agriculture.
                </Text>
                <Text>
                  <strong>Features:</strong> Better management of water and
                  effective management of fertilizers.
                </Text>
                <Text fontWeight="semibold" color="green.600"></Text>
                <Image src="/img/image 7.jpg" alt="Sensors" borderRadius="md" />
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} bg={useColorModeValue("green.50", "gray.800")}>
        <ContactSection />
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg={useColorModeValue("gray.800", "gray.900")}
        color="white"
        py={8}
      >
        <Container maxW="6xl">
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
            gap={4}
          >
            <Text>
              Copyright ©{" "}
              <Text as="span" color="green.400" fontWeight="semibold">
                Agrilogy
              </Text>
            </Text>

            <HStack spacing={4}>
              <Link
                href="https://www.facebook.com/p/Agrogo-%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D9%88%D8%A5%D9%86%D8%AC%D8%A7%D8%B2-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%B3%D9%82%D9%8A-%D8%A7%D9%84%D8%B0%D9%83%D9%8A-%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-100092259103519/"
                isExternal
              >
                <Icon
                  as={FaFacebook}
                  boxSize={6}
                  color="green.400"
                  _hover={{ color: "green.300" }}
                />
              </Link>
              <Link
                href="https://www.instagram.com/agrilogy_officiel/"
                isExternal
              >
                <Icon
                  as={FaInstagram}
                  boxSize={6}
                  color="green.400"
                  _hover={{ color: "green.300" }}
                />
              </Link>
              <Link href="https://wa.me/212763938935" isExternal>
                <Icon
                  as={FaWhatsapp}
                  boxSize={6}
                  color="green.400"
                  _hover={{ color: "green.300" }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/agrilogy/"
                isExternal
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  color="green.400"
                  _hover={{ color: "green.300" }}
                />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
