import { Box, Flex, Text } from '@chakra-ui/react'

import Button from '@/components/button'

const themeColor = {
  WARNING: 'orange.600'
}

export default function Banner({ content, href, theme = 'WARNING' }) {
  if (!content || !href) return null

  return (
    <Box bg={'palette.brown'} color={themeColor[theme] || 'palette.black'}>
      <Box maxW={1280} mx="auto" py={3} px={[3, 6, null, 8]}>
        <Text fontWeight="medium" color="palette.black" align="center">
          {content}
        </Text>
      </Box>
    </Box>
  )
}
