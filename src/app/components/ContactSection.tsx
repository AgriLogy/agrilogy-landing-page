"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactSection() {
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.900");
  const infoBlockBg = useColorModeValue("green.50", "gray.800");
  const infoBlockHoverBg = useColorModeValue("green.100", "gray.700");
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      const serviceId = "service_e0j42vj";
      const templateId = "template_5r9jmuj";
      const publicKey = "TrQFyZbU7gtk2iEzq";

      // Sends all <input name="..."> values to your EmailJS template
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });

      formRef.current.reset();
      toast({ title: "Email sent successfully ✅", status: "success", duration: 4000 });
    } catch {
      toast({
        title: "Failed to send the email",
        description:
          "Oops there was an error sending the email please contact us at contact.agrilogy@gmail.com",
        status: "error",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container maxW="4xl">
      <VStack spacing={10} position="relative" paddingTop={10} width="full">
        <Box
          w="80px"
          h="2px"
          bgGradient="linear(to-r, transparent, green.500, transparent)"
          mx="auto"
          position="absolute"
          top={0}
          left="50%"
          transform="translateX(-50%)"
        />
        <Box textAlign="center">
          <Text
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wider"
            color="green.600"
            textTransform="uppercase"
            mb={1}
          >
            Get in touch
          </Text>
          <Heading size="xl" color="green.600" mb={2}>
            Contact Us
          </Heading>
          <Box w="48px" h="1" bg="green.500" borderRadius="full" mx="auto" />
        </Box>

        <Text textAlign="center" fontSize="lg" maxW="2xl">
          Do you have any questions about our projects, products, services or our site in general?
          Do you have any comments or ideas you would like to share with us? Please send us a
          message. We&apos;d love to hear from you!
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="100%">
          <Card
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="card"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
            _hover={{ boxShadow: "card-hover" }}
            transition="all 0.2s"
          >
            <CardBody p={6}>
              <form ref={formRef} onSubmit={onSubmit}>
                <Stack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="green.600" fontSize="sm">
                        Nom
                      </FormLabel>
                      <Input
                        name="last_name"
                        placeholder="Nom"
                        borderRadius="xl"
                        borderColor={borderColor}
                        focusBorderColor="green.500"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="green.600" fontSize="sm">
                        Prénom
                      </FormLabel>
                      <Input
                        name="first_name"
                        placeholder="Prénom"
                        borderRadius="xl"
                        borderColor={borderColor}
                        focusBorderColor="green.500"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel color="green.600" fontSize="sm">
                      Email
                    </FormLabel>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="Email"
                      borderRadius="xl"
                      borderColor={borderColor}
                      focusBorderColor="green.500"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="green.600" fontSize="sm">
                      Message
                    </FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Message..."
                      rows={4}
                      borderRadius="xl"
                      borderColor={borderColor}
                      focusBorderColor="green.500"
                    />
                  </FormControl>

                  <Input name="website" display="none" tabIndex={-1} autoComplete="off" />

                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    w="100%"
                    borderRadius="xl"
                    isLoading={loading}
                    _hover={{ transform: "scale(1.01)" }}
                    transition="transform 0.2s"
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>

          <Card
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="card"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
            _hover={{ boxShadow: "card-hover" }}
            transition="all 0.2s"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={6}
              py={8}
              px={6}
            >
              <Heading size="md" color="green.600" mb={2}>
                Get in touch
              </Heading>
              <VStack align="stretch" spacing={4}>
                <HStack
                  align="flex-start"
                  spacing={4}
                  p={4}
                  borderRadius="xl"
                  bg={infoBlockBg}
                  _hover={{ bg: infoBlockHoverBg }}
                  transition="background 0.2s"
                >
                  <Box
                    flexShrink={0}
                    w={10}
                    h={10}
                    borderRadius="xl"
                    bg="green.500"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={HiOutlineMail} boxSize={5} />
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      color="green.600"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={1}
                    >
                      Email
                    </Text>
                    <Link
                      href="mailto:contact@agrogo.ma"
                      color="green.700"
                      fontWeight="medium"
                      _dark={{ color: "green.300" }}
                      _hover={{ textDecoration: "underline" }}
                    >
                      contact@agrogo.ma
                    </Link>
                  </Box>
                </HStack>
                <HStack
                  align="flex-start"
                  spacing={4}
                  p={4}
                  borderRadius="xl"
                  bg={infoBlockBg}
                  _hover={{ bg: infoBlockHoverBg }}
                  transition="background 0.2s"
                >
                  <Box
                    flexShrink={0}
                    w={10}
                    h={10}
                    borderRadius="xl"
                    bg="green.500"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={HiOutlinePhone} boxSize={5} />
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      color="green.600"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={1}
                    >
                      Phone
                    </Text>
                    <Link
                      href="tel:+2120684433054"
                      color="green.700"
                      fontWeight="medium"
                      _dark={{ color: "green.300" }}
                      _hover={{ textDecoration: "underline" }}
                    >
                      +(212) 06 84 43 30 54
                    </Link>
                  </Box>
                </HStack>
                <HStack
                  align="flex-start"
                  spacing={4}
                  p={4}
                  borderRadius="xl"
                  bg={infoBlockBg}
                  _hover={{ bg: infoBlockHoverBg }}
                  transition="background 0.2s"
                >
                  <Box
                    flexShrink={0}
                    w={10}
                    h={10}
                    borderRadius="xl"
                    bg="green.500"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={HiOutlineLocationMarker} boxSize={5} />
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      color="green.600"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={1}
                    >
                      Visit us
                    </Text>
                    <Text color="green.700" fontWeight="medium" _dark={{ color: "green.300" }}>
                      Morocco, Casablanca
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
