"use client";

import {
  Box, Container, VStack, Heading, Text, Card, CardBody, Stack, SimpleGrid,
  FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.900");
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
    } catch (err) {
      // toast({ title: "Failed to send the email", description: String(err), status: "error", duration: 5000 });
      toast({ title: "Failed to send the email", description: "Oops there was an error sending the email please contact us at contact.agrilogy@gmail.com", status: "error", duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact" py={20} bg={useColorModeValue("green.50", "gray.800")}>
      <Container maxW="4xl">
        <VStack spacing={8}>
          <Heading size="xl" color="green.600" textAlign="center">Contact Us</Heading>

          <Text textAlign="center" fontSize="lg">
            Do you have any questions about our projects, products, services or our site in general? Do you have any
            comments or ideas you would like to share with us? Please send us a message. We&apos;d love to hear from you!
          </Text>

          <Card bg={cardBg} borderColor="green.200" borderWidth="1px" w="100%">
            <CardBody>
              <form ref={formRef} onSubmit={onSubmit}>
                <Stack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="green.600">Nom</FormLabel>
                      <Input name="last_name" placeholder="Nom" borderColor="green.200" _focus={{ borderColor: "green.500" }} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="green.600">Prénom</FormLabel>
                      <Input name="first_name" placeholder="Prénom" borderColor="green.200" _focus={{ borderColor: "green.500" }} />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel color="green.600">Email</FormLabel>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="Email"
                      borderColor="green.200"
                      _focus={{ borderColor: "green.500" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="green.600">Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Message..."
                      rows={4}
                      borderColor="green.200"
                      _focus={{ borderColor: "green.500" }}
                    />
                  </FormControl>

                  {/* Honeypot anti-bot */}
                  <Input name="website" display="none" tabIndex={-1} autoComplete="off" />

                  <Button type="submit" colorScheme="green" size="lg" w="100%" isLoading={loading}>
                    Send
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
}
