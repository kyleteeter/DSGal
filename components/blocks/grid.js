import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import * as Columns from '@/columns'
import { DotsSVG } from '@/svgs'

export default function Grid({
  children,
  columnComponent,
  columns,
  gridHeadline,
  gridSubtitle,
  gridTag,
  gridTitle,
  layout = 'STACKED',
  width = 1
}) {
  if (!columns || !columns.length) return null

  const stackLayout = layout === 'STACK'
  const splitLayout = layout === 'SPLIT'
  const bgColor = useColorModeValue('white', 'gray.800')
  const subtitleColor = useColorModeValue('gray.500', 'white')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box overflow="hidden" bg={bgColor}>
      <Box pos="relative" maxW="7xl" mx="auto" py={12} px={[4, 6, null, 8]}>
        {splitLayout && (
          <Box
            as={DotsSVG}
            color="gray.200"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            top="100%"
            right="100%"
            left="auto"
            transform="translate(66.66%, -75%)"
          />
        )}

        <Box
          position="relative"
          display={{ lg: splitLayout && 'grid' }}
          gridColumnGap={{ lg: splitLayout && 8 }}
          gridTemplateColumns={{ lg: splitLayout && 'repeat(3, 1fr)' }}
        >
          <Box
            textAlign={{ lg: stackLayout && 'center' }}
            gridColumn={{ lg: splitLayout && 'span 1 / span 1' }}
          >
            {gridHeadline && (
              <Heading
                as="h2"
                fontSize="md"
                fontWeight="semibold"
                color="pink.500"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                {gridHeadline}
              </Heading>
            )}
            <Text
              mt={2}
              fontSize={['3xl', '4xl']}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="9"
              color={textColor}
            >
              {gridTitle}
            </Text>

            {gridSubtitle && (
              <Box
                mt={4}
                maxW="2xl"
                fontSize="xl"
                color={subtitleColor}
                mx={{ lg: 'auto' }}
              >
                <MDXRemote {...gridSubtitle.mdx} />
              </Box>
            )}
          </Box>
          <Stack
            as={gridTag || 'dl'}
            mt={{ base: 10, lg: splitLayout && 0 }}
            spacing={[10, 0]}
            display={{ sm: 'grid' }}
            gridColumnGap={{ sm: 8 }}
            gridRowGap={{ sm: 10 }}
            gridColumn={{ lg: 'span 2 / span 2' }}
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              lg: `repeat(${width}, 1fr)`
            }}
          >
            {children
              ? children()
              : columns.map((column) => {
                  const Component =
                    Columns[columnComponent] || Columns[column.__typename]

                  if (!Component) return null

                  return <Component key={column.id} {...column} />
                })}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
