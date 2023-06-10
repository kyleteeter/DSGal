import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import Navigation from '@/components/navigation'
import LargeWithNewsletter from '@/components/footer'

export default function contact({ navigation }) {
  return (
    <Box>
      <Navigation {...navigation} />
      <Box
        color="gray.900"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem w="40%">
            <Box m={16}>
              <Heading>Contact</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.600">
                Fill up the form below to contact
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-end">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="gray.900"
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdPhone color="#E7D3C6" size="20px" />}
                  >
                    +1 (763) 200-4020
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="gray.900"
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdEmail color="#E7D3C6" size="20px" />}
                  >
                    jianninapinto
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="gray.900"
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdLocationOn color="#E7D3C6" size="20px" />}
                  >
                    Twin Cities, Minnesota
                  </Button>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem w="40%" bg="gray.900" borderRadius="lg">
            <Box m={16} color="#white" w="100%">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel color="white">Your Name</FormLabel>
                  <InputGroup bg="white" borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.200" />
                    </InputLeftElement>
                    <Input type="text" size="md" w="100%" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel color="white">Mail</FormLabel>
                  <InputGroup bg="white" borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.200" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel color="white">Message</FormLabel>
                  <Textarea
                    bg="white"
                    borderRadius="lg"
                    _hover={{
                      borderRadius: 'white'
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="palette.brown"
                    color="gray.900"
                    w="100%"
                    p="6"
                    _hover={{}}
                  >
                    Let&apos;s Chat!
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
      <LargeWithNewsletter />
    </Box>
  )
}
