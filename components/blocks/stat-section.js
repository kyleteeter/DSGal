import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

export default function StatSection({
  columns,
  gridSubtitle,
  gridTitle,
  ...props
}) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('gray.900', 'white')
  const sectionbgColor = useColorModeValue('gray.50', 'gray.800')
  const columnColor = useColorModeValue('white', 'gray.600')
  const columnLabel = useColorModeValue('gray.500', 'white')
  const borderColor = useColorModeValue('gray.100', 'white')

  if (!(columns || columns.length)) return <></>

  return (
    <Box bg={bgColor} pt={[12, 16]}>
      {(gridTitle || gridSubtitle) && (
        <Box maxW="7xl" mx="auto" px={[4, 6, null, 8]}>
          <Box maxW="4xl" mx="auto" textAlign="center">
            {gridTitle && (
              <Heading
                as="h2"
                fontSize={['3xl', '4xl']}
                fontWeight="extrabold"
                color={headerColor}
              >
                {gridTitle}
              </Heading>
            )}
            {gridSubtitle && (
              <Box mt={[3, 4]} mx="auto" className="prose prose-xl">
                <MDXRemote {...gridSubtitle.mdx} />
              </Box>
            )}
          </Box>
        </Box>
      )}
      <Box mt={10} pb={[12, 16]} bg={sectionbgColor}>
        <Box pos="relative">
          {/* <Box pos="absolute" inset="0" h="50%" bg={useColorModeValue('white', 'gray.800')}></Box> */}
          <Box pos="relative" maxW="7xl" mx="auto" px={[4, 6, null, 8]}>
            <Box maxW="4xl" mx="auto">
              <Box
                as="dl"
                borderRadius="lg"
                bg={columnColor}
                boxShadow="lg"
                display={{ sm: 'grid' }}
                gridTemplateColumns={{ sm: 'repeat(3, 1fr)' }}
              >
                {columns.map((column, index) => {
                  const firstColumn = index === 0
                  const lastColumn = index === columns.length - 1

                  const hasColumn = firstColumn || lastColumn

                  return (
                    <Flex
                      key={column.id}
                      flexDirection="column"
                      borderColor={borderColor}
                      p={6}
                      textAlign="center"
                      borderBottomWidth={['1px', !hasColumn ? '1px' : '0px']}
                      borderRightWidth={{
                        sm: firstColumn || !hasColumn ? '1px' : 0
                      }}
                      borderTopWidth={lastColumn || (!hasColumn && '1px')}
                      borderLeftWidth={{
                        sm: lastColumn || !hasColumn ? '1px' : 0
                      }}
                    >
                      <Box
                        as="dt"
                        order="2"
                        mt={2}
                        fontSize="lg"
                        lineHeight="6"
                        fontWeight="medium"
                        color={columnLabel}
                      >
                        {column.label}
                      </Box>
                      <Box
                        as="dd"
                        order="1"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        color="pink.500"
                      >
                        {column.value}
                      </Box>
                    </Flex>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
