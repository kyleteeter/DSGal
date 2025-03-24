import {
    Box,
    Wrap,
  } from '@chakra-ui/react'
  import { useColorModeValue } from '@chakra-ui/react'
  import Navigation from '@/components/navigation'
  import LargeWithNewsletter from '@/components/footer'
  
  export default function contact({ navigation }) {
    const titleColor = useColorModeValue("palette.black", "white");
    const textColor = useColorModeValue("gray.600", "#F8F8FF");
    return (
      <Box>
        <Navigation {...navigation} />
        <Box
          color={textColor}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} style={{ fontSize: '20px', color: textColor, }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, textAlign: 'center', width: '100%' }} color={titleColor}>About Me</h1>

            <p>My journey began with a passion for numbers, technology, and data, leading me to study Economics and Finance in college. While my career initially started in administrative and customer service roles, these experiences sparked my interest in data analytics and helped me develop key skills in communication, organization, and problem-solving.</p>
            <p>To pursue this passion, I sharpened my skills in statistics, SQL, and Python through a comprehensive data science training program. I've also had the opportunity to work with one of the world’s largest employers and technology companies, applying data-driven solutions to real-world challenges.</p>
            <p>To me, data is more than just numbers—it’s a powerful tool for uncovering insights, driving decisions, and fostering business growth. I specialize in transforming complex datasets into actionable insights through data preparation, reporting, and visualizations, helping organizations make smarter, data-driven decisions.</p>
            <p>I leverage my background to develop solutions that empower key business areas, including operations, marketing, finance, supply chain, and customer insights. If you're seeking someone to transform your data into actionable insights, let's connect and unlock its full potential.</p>

          </Wrap>
        </Box>
        <LargeWithNewsletter />
      </Box>
    )
  }
  