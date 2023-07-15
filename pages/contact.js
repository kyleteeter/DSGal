import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from 'react-icons/md'
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
                <VStack pl={0} spacing={3} justify="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="gray.900"
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdPhone color="#E7D3C6" size="20px" />}
                    onClick={() => {
                      window.location.href = 'tel:+16125640070';
                    }}
                  >
                    +1 (612) 564-0070
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="gray.900"
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdEmail color="#E7D3C6" size="20px" />}
                    onClick={() => {
                      window.location.href = 'mailto:jiannina.pinto@gmail.com';
                    }}
                  >
                    jiannina.pinto
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
            <div className="calendly-inline-widget" data-url="https://calendly.com/jiannina-pinto/20min" style={{ minWidth: '320px', height: '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
      <LargeWithNewsletter />
    </Box>
  )
}
