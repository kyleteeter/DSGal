import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  FormLabel,
  Select,
  Input,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { logoblack, logowhite } from '../assets';
import Image from 'next/image';

const imageLoader = require('image-loader');

const SocialButton = ({
  children,
  label,
  href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const router = useRouter()
  // const activeLocale = locales.find((locale) => locale.value === router.locale)
  // const setLocale = (event) => {
  //   router.push(router.asPath, router.asPath, { locale: event.target.value })
  // }
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              {/* <Image
                src={colorMode === "light" ? logowhite.src : logoblack.src}
                alt='Logo'
                width={200}
                height={80}
                loader={imageLoader}
              /> */}
            </Box>
            <Text fontSize={'sm'}>
              © 2023 DataScienceGal. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={'about'}>About</Link>
            <Link href={'project'}>Projects</Link>
            <Link href={'contact'}>Hire Me</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Top Skills</ListHeader>
            <Link href={'#'}>Data Visualization</Link>
            <Link href={'#'}>Data Wrangling</Link>
            <Link href={'#'}>Marketing Analyics</Link>
            <Link href={'#'}>Data Cleaning</Link>
            <Link href={'#'}>Consulting</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('palette.brown', 'palette.brown')}
                color={useColorModeValue('white', 'palette.brown')}
                _hover={{
                  bg: 'palette.black',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            {/* <Box mt={{ base: 12, xl: 0 }}>
              <ListHeader>Language</ListHeader>

              <Box as="form" mt={4} maxW={{ sm: 'xs' }}>
                <Box as="fieldset" w="full">
                  <VisuallyHidden as={FormLabel} htmlFor="language">
                    Language
                  </VisuallyHidden>

                  <Box position="relative">
                    <Select
                      id="language"
                      name="language"
                      color="white"
                      bg="palette.black"
                      borderColor="transparent"
                      fontSize={{ sm: 'sm' }}
                      // value={activeLocale.value}
                      onChange={setLocale}
                    >
                      {locales.map((locale) => (
                        <Box
                          as="option"
                          bg="#374151!important"
                          color="white"
                          key={locale.value}
                          value={locale.value}
                        >
                          {locale.label}
                        </Box>
                      ))}
                    </Select>
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}



