"use client";

import { useEffect, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const PARTNERS = [
  { src: "/partners/fao.png", alt: "FAO" },
  { src: "/partners/pole_digital.png", alt: "Pôle Digital" },
  { src: "/partners/deutsche.png", alt: "Deutsche" },
  { src: "/partners/tech-57.png", alt: "Tech 57" },
  { src: "/partners/siemens.png", alt: "Siemens" },
  { src: "/partners/royaumemaroc.png", alt: "Royaume du Maroc" },
  { src: "/partners/fromage.png", alt: "Fromage" },
];

const PLATFORM_FEATURES = [
  { label: "Real-Time Data Visualization", src: "/platform/1.jpeg", alt: "Real-time data dashboard", caption: "Monitor your farm data in real time with live charts and indicators." },
  { label: "Customizable Dashboards", src: "/platform/2.jpeg", alt: "Customizable dashboards", caption: "Build dashboards that fit your workflow and key metrics." },
  { label: "Automated Alerts and Notifications", src: "/platform/1.jpeg", alt: "Automated alerts", caption: "Get notified when thresholds are reached or action is needed." },
  { label: "Data Integration And Historical Analysis", src: "/platform/2.jpeg", alt: "Data and analytics", caption: "Integrate all your data sources and analyze historical trends." },
  { label: "User Management", src: "/platform/1.jpeg", alt: "User management", caption: "Manage roles, teams, and access across your organization." },
  { label: "AI Decision Making", src: "/platform/2.jpeg", alt: "White-label platform", caption: "Customize the platform to provide a unified, branded experience for your precision agriculture applications." },
];

export default function AgrilogyLanding() {
  const { colorMode, toggleColorMode } = useColorMode();

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const partnersSectionBg = useColorModeValue("gray.50", "gray.800");
  const navLinkHoverBg = useColorModeValue("green.50", "whiteAlpha.100");
  const sectionAltBg = useColorModeValue("gray.50", "gray.800");
  const cardHoverShadow = useColorModeValue("card-hover", "dark-lg");

  const modernCard = {
    bg: cardBg,
    borderRadius: "2xl",
    boxShadow: "card",
    borderWidth: "1px",
    borderColor,
    overflow: "hidden" as const,
    transition: "all 0.2s ease",
    _hover: { boxShadow: cardHoverShadow, borderTopColor: "green.300" },
    borderTopWidth: "3px",
    borderTopColor: "transparent",
  };

  const NAV_BAR_HEIGHT = 64;
  const LOGO_HEIGHT = 88;

  const [activeSection, setActiveSection] = useState<string>("home");
  const [activePlatformFeature, setActivePlatformFeature] = useState(0);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "products",
      "platform",
      "industry",
      "equipment",
      "partners",
      "contact",
    ];

    const handleScroll = () => {
      let current = "home";
      let minOffset = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const offset = Math.abs(rect.top - NAV_BAR_HEIGHT);

        if (offset < minOffset && rect.bottom > NAV_BAR_HEIGHT + 40) {
          minOffset = offset;
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      {/* Header - fixed + blur, always visible while scrolling */}
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1500}
        h={`${NAV_BAR_HEIGHT}px`}
        minH={`${NAV_BAR_HEIGHT}px`}
        display="flex"
        alignItems="center"
        overflow="visible"
        bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
        backdropFilter="blur(14px)"
        sx={{ WebkitBackdropFilter: "blur(14px)" }}
        borderBottom="1px"
        borderColor={borderColor}
        boxShadow={useColorModeValue("sm", "dark-lg")}
        transition="box-shadow 0.2s, background 0.2s"
      >
        <Container maxW="7xl" h="full" py={0} display="flex" alignItems="center">
          <Flex justify="space-between" align="center" w="full" h="full">
            <Link href="#home" display="flex" alignItems="center" h="full" _hover={{ opacity: 0.9 }}>
              <Image
                src="/img/logo_Plan de travail 1.png"
                alt="Agrilogy Logo"
                h={{ base: "72px", md: `${LOGO_HEIGHT}px` }}
                w="auto"
                objectFit="contain"
                sx={{ marginTop: "0" }}
              />
            </Link>

            <HStack spacing={6} display={{ base: "none", md: "flex" }} as="nav">
              <Link
                href="#home"
                onClick={() => setActiveSection("home")}
                color={activeSection === "home" ? "green.600" : textColor}
                fontWeight={activeSection === "home" ? "semibold" : "normal"}
                fontSize="sm"
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "home" ? "green.600" : "transparent"}
                bg={activeSection === "home" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600" }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={() => setActiveSection("about")}
                fontSize="sm"
                color={activeSection === "about" ? "green.600" : textColor}
                opacity={activeSection === "about" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "about" ? "green.600" : "transparent"}
                bg={activeSection === "about" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                About us
              </Link>
              <Link
                href="#services"
                onClick={() => setActiveSection("services")}
                fontSize="sm"
                color={activeSection === "services" ? "green.600" : textColor}
                opacity={activeSection === "services" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "services" ? "green.600" : "transparent"}
                bg={activeSection === "services" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Services
              </Link>
              <Link
                href="#products"
                onClick={() => setActiveSection("products")}
                fontSize="sm"
                color={activeSection === "products" ? "green.600" : textColor}
                opacity={activeSection === "products" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "products" ? "green.600" : "transparent"}
                bg={activeSection === "products" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Products
              </Link>
              <Link
                href="#platform"
                onClick={() => setActiveSection("platform")}
                fontSize="sm"
                color={activeSection === "platform" ? "green.600" : textColor}
                opacity={activeSection === "platform" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "platform" ? "green.600" : "transparent"}
                bg={activeSection === "platform" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Platform
              </Link>
              <Link
                href="#industry"
                onClick={() => setActiveSection("industry")}
                fontSize="sm"
                color={activeSection === "industry" ? "green.600" : textColor}
                opacity={activeSection === "industry" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "industry" ? "green.600" : "transparent"}
                bg={activeSection === "industry" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Industry 4.0
              </Link>
              <Link
                href="#equipment"
                onClick={() => setActiveSection("equipment")}
                fontSize="sm"
                color={activeSection === "equipment" ? "green.600" : textColor}
                opacity={activeSection === "equipment" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "equipment" ? "green.600" : "transparent"}
                bg={activeSection === "equipment" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Equipment
              </Link>
              <Link
                href="#partners"
                onClick={() => setActiveSection("partners")}
                fontSize="sm"
                color={activeSection === "partners" ? "green.600" : textColor}
                opacity={activeSection === "partners" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "partners" ? "green.600" : "transparent"}
                bg={activeSection === "partners" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Partners
              </Link>
              <Link
                href="#contact"
                onClick={() => setActiveSection("contact")}
                fontSize="sm"
                color={activeSection === "contact" ? "green.600" : textColor}
                opacity={activeSection === "contact" ? 1 : 0.9}
                py={2}
                px={2}
                borderRadius="md"
                borderBottomWidth={2}
                borderColor={activeSection === "contact" ? "green.600" : "transparent"}
                bg={activeSection === "contact" ? navLinkHoverBg : "transparent"}
                _hover={{ bg: navLinkHoverBg, color: "green.600", opacity: 1 }}
                transition="background 0.2s, color 0.2s, border-color 0.2s"
              >
                Contact
              </Link>
            </HStack>

            <HStack spacing={2}>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                color="green.600"
                size="sm"
                borderRadius="md"
                _hover={{ bg: navLinkHoverBg }}
              />
              <Button
                size="sm"
                leftIcon={<Image src="/img/mamoroccoflag_111704.png" w="20px" alt="" />}
                colorScheme="green"
                variant="outline"
                borderRadius="md"
                _hover={{ bg: navLinkHoverBg }}
              >
                MA
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Spacer so content is not under fixed navbar */}
      <Box h={`${NAV_BAR_HEIGHT}px`} flexShrink={0} aria-hidden />

      {/* Hero Section - Swiper */}
      <Box id="home" position="relative" h="80vh" minH="420px" overflow="hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={600}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="hero-swiper"
          style={{ height: "100%", width: "100%" }}
        >
          <SwiperSlide style={{ height: "100%" }}>
            <Box position="relative" w="100%" h="100%">
              <Image src="/img/Picture1.jpg" alt="Agricultural landscape" w="100%" h="100%" objectFit="cover" />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, blackAlpha.500 0%, blackAlpha.700 100%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <VStack spacing={6} textAlign="center" color="white" px={4}>
                  <Badge colorScheme="whiteAlpha" fontSize="xs" letterSpacing="wider" textTransform="uppercase" px={3} py={1} borderRadius="full">
                    Smart Agriculture
                  </Badge>
                  <Heading size={{ base: "xl", md: "2xl" }} fontWeight="700" letterSpacing="tight">
                    Welcome to Agrogo
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="560px" opacity={0.95}>
                    Smart solutions for modern agriculture
                  </Text>
                  <Link href="#about">
                    <Button colorScheme="green" size="lg" borderRadius="xl" px={8} _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                      Learn More
                    </Button>
                  </Link>
                  <Text fontSize="xs" opacity={0.8} letterSpacing="wider">
                    Trusted by industry leaders
                  </Text>
                </VStack>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100%" }}>
            <Box position="relative" w="100%" h="100%">
              <Image src="/img/Picture1.jpg" alt="Agriculture" w="100%" h="100%" objectFit="cover" />
              <Box position="absolute" inset={0} bg="blackAlpha.600" display="flex" alignItems="center" justifyContent="center">
                <VStack spacing={6} textAlign="center" color="white" px={4}>
                  <Heading size={{ base: "xl", md: "2xl" }} fontWeight="700">IoT & Smart Irrigation</Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="560px">Precision farming with data-driven decisions.</Text>
                  <Link href="#products">
                    <Button colorScheme="green" size="lg" borderRadius="xl" px={8} _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                      Our Products
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100%" }}>
            <Box position="relative" w="100%" h="100%">
              <Image src="/img/Picture1.jpg" alt="Green fields" w="100%" h="100%" objectFit="cover" />
              <Box position="absolute" inset={0} bg="blackAlpha.600" display="flex" alignItems="center" justifyContent="center">
                <VStack spacing={6} textAlign="center" color="white" px={4}>
                  <Heading size={{ base: "xl", md: "2xl" }} fontWeight="700">Sustainable Agriculture</Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="560px">From study to implementation — we support you at every step.</Text>
                  <Link href="#contact">
                    <Button colorScheme="green" size="lg" borderRadius="xl" px={8} _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                      Contact Us
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* About Section */}
      <Box id="about" py={{ base: 16, md: 24 }} bg={sectionAltBg} position="relative">
        <Box position="absolute" left={0} top="20%" w="4px" h="120px" bgGradient="linear(to-b, green.400, green.600)" borderRadius="full" opacity={0.6} display={{ base: "none", md: "block" }} />
        <Container maxW="6xl">
          <VStack spacing={10} align="stretch">
            <Box>
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Who we are
              </Text>
              <Heading size="xl" color="green.600" mb={2}>About Us</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" />
            </Box>

            <Text fontSize="lg" lineHeight="tall" maxW="4xl">
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

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <Heading size="md" color="green.600">Products</Heading>
                </CardHeader>
                <CardBody pt={0}>
                  <VStack align="start" spacing={3}>
                    <HStack align="start" spacing={3}>
                      <Icon as={FaCheck} color="green.500" mt={0.5} />
                      <Text>Smart irrigation and watering system based on IoT technology</Text>
                    </HStack>
                    <HStack align="start" spacing={3}>
                      <Icon as={FaCheck} color="green.500" mt={0.5} />
                      <Text>Irrigation devices and accessories</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <Heading size="md" color="green.600">Services</Heading>
                </CardHeader>
                <CardBody pt={0}>
                  <VStack align="start" spacing={3}>
                    <HStack align="start" spacing={3}>
                      <Icon as={FaCheck} color="green.500" mt={0.5} />
                      <Text>Maintenance and installation of smart irrigation (IoT)</Text>
                    </HStack>
                    <HStack align="start" spacing={3}>
                      <Icon as={FaCheck} color="green.500" mt={0.5} />
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
      <Box id="services" position="relative" py={{ base: 16, md: 24 }} overflow="hidden">
        <Box
          position="absolute"
          inset={0}
          bgImage="url('/img/Picture1.jpg')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.99}
          pointerEvents="none"
        />
        <Box position="absolute" inset={0} bg={useColorModeValue("white", "gray.900")} opacity={0.1} pointerEvents="none" />
        <Box position="relative">
          <Container maxW="6xl">
            <VStack spacing={12}>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.500" textTransform="uppercase" mb={1}>
                What we offer
              </Text>
              <Heading size="xl" color="white" mb={2}>Our Services</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaLeaf} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Studies & Sustainable Solutions</Heading>
                    <Text fontSize="sm" color={textColor} opacity={0.9}>
                      Agricultural projects: irrigation, production, solar energy
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaWrench} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Installation Services</Heading>
                    <Text fontSize="sm" color={textColor} opacity={0.9}>
                      Irrigation systems, solar pumping solutions, and IoT integration
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaChartLine} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Precision Agriculture</Heading>
                    <Text fontSize="sm" color={textColor} opacity={0.9}>
                      Advanced farming techniques using IoT and data analytics
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaBuilding} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Green Spaces Management</Heading>
                    <Text fontSize="sm" color={textColor} opacity={0.9}>
                      Comprehensive management solutions for green spaces
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
          </Container>
        </Box>
      </Box>

      {/* Products Section */}
      <Box id="products" py={{ base: 16, md: 24 }} bg={sectionAltBg}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Solutions
              </Text>
              <Heading size="xl" color="green.600" mb={2}>Products</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
              <Card {...modernCard}>
                <CardBody p={6} textAlign="center">
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaWifi} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">IoT Sensors</Heading>
                    <Text fontSize="sm">Weather stations, soil sensors, and environmental monitoring devices</Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardBody p={6} textAlign="center">
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaCog} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Irrigation Controllers</Heading>
                    <Text fontSize="sm">Smart controllers for automated irrigation management</Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardBody p={6} textAlign="center">
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaMobile} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Smart Farming Web App</Heading>
                    <Text fontSize="sm">Comprehensive web application for farm management</Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Card {...modernCard} display="flex" flexDirection="column" overflow="hidden">
                <Image src="/img/image 5.png" alt="Agrilogy Mini" borderTopRadius="2xl" height="800px" objectFit="cover" flexShrink={0} />
                <CardBody p={6} display="flex" flexDirection="column" flex={1}>
                  <VStack align="stretch" spacing={4} flex={1}>
                    <Heading size="sm" color="green.600" textDecoration="underline" textUnderlineOffset={4} textDecorationColor="green.400">
                      Agrilogy Mini
                    </Heading>
                    <Box pl={3} borderLeft="3px solid" borderColor="green.400" py={1}>
                      <Text fontSize="sm" lineHeight="tall">
                        An irrigation device installed in the garden and linked with a mobile application, allowing you to control and monitor the irrigation process remotely.
                      </Text>
                    </Box>
                    <Button colorScheme="green" variant="solid" as="a" href="#contact" borderRadius="xl" size="md" mt="auto" w="40%" alignSelf="center">
                      Contact Us
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard} display="flex" flexDirection="column" overflow="hidden">
                <Image src="/img/image 6.png" alt="Agrilogy Pro" borderTopRadius="2xl" height="520px" objectFit="cover" flexShrink={0} />
                <CardBody p={6} display="flex" flexDirection="column" flex={1}>
                  <VStack align="stretch" spacing={4} flex={1}>
                    <Heading size="sm" color="green.600" textDecoration="underline" textUnderlineOffset={4} textDecorationColor="green.400">
                      Agrilogy Pro
                    </Heading>
                    <Text fontSize="sm">An irrigation device installed in farms, allowing farmers through mobile or laptop application to get:</Text>
                    <Box pl={3} borderLeft="3px solid" borderColor="green.400" py={1}>
                      <VStack align="start" spacing={2} fontSize="sm">
                        <Text><strong>1. Irrigation Schedules:</strong> Gives irrigation schedules, saving water while keeping crops healthier.</Text>
                        <Text><strong>2. Conserve & Connect:</strong> Optimizes water use to reduce needless waste.</Text>
                        <Text><strong>3. Control From Anywhere:</strong> Control watering from anywhere with the easy-to-use app.</Text>
                      </VStack>
                    </Box>
                    <Button colorScheme="green" variant="solid" as="a" href="#contact" borderRadius="xl" size="md" mt="auto" w="40%" alignSelf="center">
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
      <Box id="platform" py={{ base: 16, md: 24 }} bg={bgColor}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Technology
              </Text>
              <Heading size="xl" color="green.600" mb={2}>Agrilogy Platform</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>

            <Text fontSize="lg" textAlign="center" maxW="4xl" color={textColor} opacity={0.9}>
              Agrilogy platform is a smart web application for irrigation and fertilization management. It collects sensor data and transforms it into accurate indicators to support better decision-making.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <Heading size="md" color="green.600">Key Features</Heading>
                </CardHeader>
                <CardBody pt={0}>
                  <VStack align="start" spacing={3}>
                    <HStack align="start" spacing={3}><Icon as={FaChartLine} color="green.500" mt={0.5} /><Text fontSize="sm">Real-time monitoring of soil and climate conditions</Text></HStack>
                    <HStack align="start" spacing={3}><Icon as={FaWater} color="green.500" mt={0.5} /><Text fontSize="sm">Scheduling and management of irrigation and fertilization based on scientific standards</Text></HStack>
                    <HStack align="start" spacing={3}><Icon as={FaBell} color="green.500" mt={0.5} /><Text fontSize="sm">Smart alerts when action is needed or risks are detected</Text></HStack>
                    <HStack align="start" spacing={3}><Icon as={FaCog} color="green.500" mt={0.5} /><Text fontSize="sm">Remote control of pumps and irrigation systems</Text></HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <Heading size="md" color="green.600">Benefits</Heading>
                </CardHeader>
                <CardBody pt={0}>
                  <VStack align="start" spacing={3}>
                    <Text fontSize="sm"><strong>Water and fertilizer consumption analysis</strong> to improve efficiency and reduce costs.</Text>
                    <Text fontSize="sm">With the integration of <Text as="span" color="green.600" fontWeight="semibold">IoT and Artificial Intelligence</Text>, we help you achieve more productive and sustainable farming.</Text>
               
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
            <Box w="100%" display="flex" justifyContent="center" >
              <Button
                as="a"
                href="#contact"
                colorScheme="green"
                variant="solid"
                size="lg"
                borderRadius="xl"
                px={8}
              >
                Book a Demo
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Platform features & dashboard section */}
      <Box id="platform-features" p={2} py={{ base: 20, md: 28 }} px={{ base: 4, md: 8 }} bg={bgColor} w="100%">
        <Box w="60%" h="1px" bgGradient="linear(to-r, transparent, green.400, transparent)" mx="auto" mb={6} flexShrink={0} opacity={0.7} />
        <Box textAlign="center" mb={6}>
          <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
            Platform capabilities
          </Text>
        </Box>
        <Container maxW="full"  w="100%" px={{ base: 0, md: 8 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 20 }}
            align={{ base: "stretch", lg: "center" }}
            justify="space-between"
            w="100%"
            
          >
            <VStack align="stretch" spacing={4} flex={1} maxW={{ lg: "420px" }} w="100%">
              {PLATFORM_FEATURES.map((feature, index) => (
                <Button
                  key={feature.label}
                  variant={activePlatformFeature === index ? "solid" : "outline"}
                  colorScheme="green"
                  size="lg"
                  justifyContent="flex-start"
                  textAlign="left"
                  whiteSpace="normal"
                  h="auto"
                  py={4}
                  px={5}
                  borderRadius="xl"
                  fontWeight="medium"
                  onClick={() => setActivePlatformFeature(index)}
                  _hover={{ bg: activePlatformFeature === index ? "green.600" : "green.50" }}
                  _dark={{ _hover: { bg: activePlatformFeature === index ? "green.600" : "whiteAlpha.100" } }}
                >
                  {feature.label}
                </Button>
              ))}
            </VStack>

            <Box flex={1}  p={2} display="flex" flexDirection="column" alignItems="center" w="100%" maxW={{ lg: "800px" }}>
              <Box
                h={{ base: "420px", md: "560px" }}
                w="100%"
                flexShrink={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  key={activePlatformFeature}
                  src={PLATFORM_FEATURES[activePlatformFeature].src}
                  alt={PLATFORM_FEATURES[activePlatformFeature].alt}
                  maxH="100%"
                  maxW="100%"
                  w="auto"
                  h="auto"
                  objectFit="contain"
                  transition="opacity 0.2s"
                />
              </Box>
              <Text
                fontSize="sm"
                color={textColor}
                opacity={0.85}
                textAlign="center"
                mt={6}
                maxW="480px"
                px={2}
              >
                {PLATFORM_FEATURES[activePlatformFeature].caption}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Industry 4.0 Section */}
      <Box id="industry" py={{ base: 16, md: 24 }} bg={sectionAltBg}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Expertise
              </Text>
              <Heading size="xl" color="green.600" mb={2}>Industry 4.0 Expertise</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>

            <Text fontSize="lg" textAlign="center" maxW="4xl" color={textColor} opacity={0.9}>
              We are committed to supporting you at every stage of your project, from study and design to manufacturing and implementation. With our multidisciplinary expertise, we develop advanced, functional prototypes that integrate cutting-edge technologies, customized to meet your specific needs.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaLeaf} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Study & Design</Heading>
                    <Text fontSize="sm">Comprehensive project analysis and innovative design solutions</Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box p={3} borderRadius="xl" bg={useColorModeValue("green.50", "whiteAlpha.100")}>
                      <Icon as={FaCog} boxSize={8} color="green.500" />
                    </Box>
                    <Heading size="sm" color="green.600">Creation & Adaptation</Heading>
                    <Text fontSize="sm">Custom manufacturing and tailored implementation</Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            <Text fontSize="lg" textAlign="center" color="green.600" fontWeight="semibold" mb={4}>
              At Agrogo, our team unites diverse expertise to deliver innovative, tailored solutions for your needs.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaMicrochip} color="green.500" /><Heading size="sm" color="green.600">Electronics</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <List spacing={2} fontSize="sm">
                    <ListItem><ListIcon as={FaCheck} color="green.500" />PCB design</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />PCB printing</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Component placement</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Testing & validation</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaCog} color="green.500" /><Heading size="sm" color="green.600">Automation</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <List spacing={2} fontSize="sm">
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Integration of PLCs</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />PLC repair</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Preventive maintenance</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaCube} color="green.500" /><Heading size="sm" color="green.600">3D Design & Printing</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <List spacing={2} fontSize="sm">
                    <ListItem><ListIcon as={FaCheck} color="green.500" />3D modeling</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />3D design</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Model prototyping</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />3D simulation</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />High-quality 3D printing</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaWrench} color="green.500" /><Heading size="sm" color="green.600">Machining</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <List spacing={2} fontSize="sm">
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Precision machining of custom parts</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />High-quality component manufacturing</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaMobile} color="green.500" /><Heading size="sm" color="green.600">App Development</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <List spacing={2} fontSize="sm">
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Mobile app & web development</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />IT infrastructure</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />System integration</ListItem>
                    <ListItem><ListIcon as={FaCheck} color="green.500" />Embedded systems</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card {...modernCard} gridColumn={{ base: "1", lg: "1 / -1" }}>
                <CardHeader pb={2}>
                  <HStack><Icon as={FaWifi} color="green.500" /><Heading size="sm" color="green.600">IoT Systems</Heading></HStack>
                </CardHeader>
                <CardBody pt={0}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <List spacing={2} fontSize="sm">
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Design and deployment of IoT-based solutions</ListItem>
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Integration of sensors and actuators</ListItem>
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Wired & Wireless data communication</ListItem>
                    </List>
                    <List spacing={2} fontSize="sm">
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Real-time monitoring and control</ListItem>
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Cloud connectivity and dashboards</ListItem>
                      <ListItem><ListIcon as={FaCheck} color="green.500" />Maintenance and troubleshooting of IoT networks</ListItem>
                    </List>
                  </SimpleGrid>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Equipment Section */}
      <Box id="equipment" py={{ base: 16, md: 24 }} bg={bgColor}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Hardware
              </Text>
              <Heading size="xl" color="green.600" mb={2}>Equipment</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Card {...modernCard}>
                <CardBody p={6}>
                  <VStack align="start" spacing={4}>
                    <Heading size="sm" color="green.600">Enhancing Water Management in Agriculture with AGRILOGY Weather Stations</Heading>
                    <Text fontSize="sm">Because of climate change in agriculture, we need to know how much water plants need. The AGRILOGY weather stations allow us to know farm water needs precisely, helping optimize irrigation schedules and resource management.</Text>
                    <Image src="/img/image 8.jpg" alt="Weather Station" borderRadius="xl" w="100%" />
                  </VStack>
                </CardBody>
              </Card>

              <Card {...modernCard}>
                <CardBody p={6}>
                  <VStack align="start" spacing={4}>
                    <Heading size="sm" color="green.600">Optimizing Irrigation Processes and Resource Efficiency with Agrilogy Sensors</Heading>
                    <Text fontSize="sm">For the success of the irrigation process without wasting resources and water, Agrilogy sensors monitor soil changes and development, providing important information for successful agriculture.</Text>
                    <Text fontSize="sm"><strong>Features:</strong> Better management of water and effective management of fertilizers.</Text>
                    <Image src="/img/image 7.jpg" alt="Sensors" borderRadius="xl" w="100%" />
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Partners Section */}
      <Box id="partners" py={{ base: 16, md: 24 }} bg={partnersSectionBg} position="relative">
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, green.400, transparent)" opacity={0.5} />
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="wider" color="green.600" textTransform="uppercase" mb={1}>
                Trusted by
              </Text>
              <Heading size="xl" color="green.600" mb={2}>Partners</Heading>
              <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
            </Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={12}
            align={{ base: "stretch", lg: "center" }}
            justify="space-between"
          >
            <Box flex={{ base: "1", lg: "1" }} minW={0} w="100%">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{ 480: { slidesPerView: 3 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 3 } }}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                speed={2000}
                grabCursor
                className="partners-swiper"
              >
                {PARTNERS.map((partner, i) => (
                  <SwiperSlide key={i}>
                    <Card {...modernCard} h="full" w="full">
                      <CardBody
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        minH={{ base: "400px", md: "300px" }}
                        minW={{ base: "200px", md: "200px" }}
                        p={{ base: 6, md: 1 }}
                      >
                        <Image
                          src={partner.src}
                          alt={partner.alt}
                          maxH={{ base: "96px", md: "140px" }}
                          maxW="100%"
                          objectFit="contain"
                        />
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <VStack flex={{ base: "1", lg: "1" }} align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }} spacing={6} maxW={{ lg: "420px" }}>
              <Heading size="lg" lineHeight="tall">
                Proven <Text as="span" color="green.600">Success</Text> in the Field
              </Heading>
              <Text color={textColor} fontSize="md" opacity={0.9}>
              Agrogo works with clients ranging from small-scale farmers to large agricultural enterprises, helping them streamline operations, improve efficiency, and consistently achieve higher crop yields through smarter, data-driven decisions.
              </Text>
              <Button as="a" href="#contact" colorScheme="green" size="lg" borderRadius="xl" px={8} _hover={{ transform: "scale(1.02)" }} transition="transform 0.2s">
                Contact Us
              </Button>
            </VStack>
          </Flex>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={{ base: 16, md: 24 }} bg={sectionAltBg}>
        <ContactSection />
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg={useColorModeValue("gray.100", "gray.900")}
        color={textColor}
        borderTop="2px"
        borderColor="green.500"
        py={10}
      >
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }} gap={4}>
            <Text fontSize="sm">
              Copyright © <Text as="span" color="green.600" fontWeight="semibold">Agroro</Text> — 2026 All rights reserved.
            </Text>
            <HStack spacing={4}>
              <Link href="https://www.facebook.com/p/Agrogo-%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D9%88%D8%A5%D9%86%D8%AC%D8%A7%D8%B2-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%B3%D9%82%D9%8A-%D8%A7%D9%84%D8%B0%D9%83%D9%8A-%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-100092259103519/" isExternal>
                <Icon as={FaFacebook} boxSize={5} color="green.500" _hover={{ color: "green.600" }} transition="color 0.2s" />
              </Link>
              <Link href="https://www.instagram.com/agrilogy_officiel/" isExternal>
                <Icon as={FaInstagram} boxSize={5} color="green.500" _hover={{ color: "green.600" }} transition="color 0.2s" />
              </Link>
              <Link href="https://wa.me/212763938935" isExternal>
                <Icon as={FaWhatsapp} boxSize={5} color="green.500" _hover={{ color: "green.600" }} transition="color 0.2s" />
              </Link>
              <Link href="https://www.linkedin.com/company/agrilogy/" isExternal>
                <Icon as={FaLinkedin} boxSize={5} color="green.500" _hover={{ color: "green.600" }} transition="color 0.2s" />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
