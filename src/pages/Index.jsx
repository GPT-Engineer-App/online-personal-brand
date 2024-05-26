import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" mt={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTY3NjMwODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hello! I'm John, a passionate full stack developer with experience in building web applications using modern technologies like React, Node.js, and more. I love creating efficient and scalable solutions that make a difference.
          </Text>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            <Button colorScheme="teal" variant="outline">
              JavaScript
            </Button>
            <Button colorScheme="teal" variant="outline">
              React
            </Button>
            <Button colorScheme="teal" variant="outline">
              Node.js
            </Button>
            <Button colorScheme="teal" variant="outline">
              HTML
            </Button>
            <Button colorScheme="teal" variant="outline">
              CSS
            </Button>
            <Button colorScheme="teal" variant="outline">
              MongoDB
            </Button>
            <Button colorScheme="teal" variant="outline">
              SQL
            </Button>
          </HStack>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2}>A brief description of the project goes here. It highlights the main features and technologies used.</Text>
              <Link href="#" color="teal.500" mt={2} display="block">
                View Project
              </Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2}>A brief description of the project goes here. It highlights the main features and technologies used.</Text>
              <Link href="#" color="teal.500" mt={2} display="block">
                View Project
              </Link>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" mt={8}>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" color="gray.700">
            Feel free to reach out to me on any of the platforms below:
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" colorScheme="teal" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="teal" />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="teal" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
