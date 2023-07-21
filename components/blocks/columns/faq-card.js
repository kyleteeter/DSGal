import { Box } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { useColorModeValue } from '@chakra-ui/react'


export default function FAQCard({ content, title }) {
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <div>
      <Box
        as="dt"
        fontSize="lg"
        lineHeight="6"
        fontWeight="medium"
        color={textColor}
      >
        {title}
      </Box>
      <Box as="dd" mt={2} className="prose">
        <MDXRemote {...content.mdx} />
      </Box>
    </div>
  )
}
