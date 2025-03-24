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
import { useColorModeValue } from '@chakra-ui/react'
import Navigation from '@/components/navigation'
import LargeWithNewsletter from '@/components/footer'

export default function contact({ navigation }) {
  const textColor = useColorModeValue("gray.900", "white");
  const subColor = useColorModeValue("gray.600", "#F8F8FF");
  const iconColor = useColorModeValue("#E7D3C6", "#D9B49D");
  return (
    <Box>
      <Navigation {...navigation} />
      <Box
        color={textColor}
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem w="30%">
            <Box m={16}>
              <Heading >Contact</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color={subColor}>
                Send me an email or schedule a call if you would like to chat. 
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={2} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color={textColor}
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdPhone color={iconColor} size="20px" />}
                    onClick={() => {
                      window.location.href = 'tel:+16124702007 ';
                    }}
                  >
                    +1 (612) 470-2007 
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color={textColor}
                    _hover={{ border: '2px solid #E7D3C6' }}
                    leftIcon={<MdEmail color={iconColor} size="20px" />}
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
                    color={textColor}
                    _hover={{ border: 'none' }}
                    leftIcon={<MdLocationOn color={iconColor} size="20px" />}
                  >
                    Twin Cities, Minnesota
                  </Button>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem w="50%" bg="gray.900" borderRadius="lg">
            <Box m={16} color="#white" w="100%">
            <div className="calendly-inline-widget" data-url="https://calendly.com/jiannina-pinto/analytics_discussion_opportunities" style={{ minWidth: '320px', height: '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
      <LargeWithNewsletter />
    </Box>
  )
}
