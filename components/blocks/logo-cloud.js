import { AspectRatio, Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

const imageDefaultStyles = {
  AspectRatio: '3/2',
}

export default function LogoCloud({ companies }) {
  if (!(companies || companies.length)) return null
  const bgColor = useColorModeValue('white', 'white')

  return (
    <Box bg={bgColor} mb={40}>
      <Box maxW="7xl" mx="auto" py={[6, 1]} px={[6, 6, null, 8]}>

        <Box display="flow-root" mt={{ base: 8, lg: 10 }}>
          <Flex
            mt={-8}
            ml={{ base: -8, lg: -4 }}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {companies.map((company) => (
              <Flex
                key={company.id}
                mt={0}
                ml={{ base: 8, lg: 4 }}
                flexGrow={{ base: 1, lg: 0 }}
                flexShrink="0"
              >
                <Box pos="relative" w={44}>
                  <Image
                    {...imageDefaultStyles}
                    // style={{ filter: 'grayscale(100%)'}}
                    src={company.logo.url}
                    height={company.logo.height}
                    width={company.logo.width}
                    layout="responsive"
                    alt={company.logo.title}
                  />
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
