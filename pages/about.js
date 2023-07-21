import {
    Box,
    Wrap,
  } from '@chakra-ui/react'
  import { useColorModeValue } from '@chakra-ui/react'
  import Navigation from '@/components/navigation'
  import LargeWithNewsletter from '@/components/footer'
  
  export default function contact({ navigation }) {
    const titleColor = useColorModeValue("gray.600", "white");
    const textColor = useColorModeValue("gray.600", "palette.black");
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

            <p>To me, data is not just a collection of numbers and statistics, but the key that unlocks transformative insights and endless possibilities. Each data point holds a unique story, and my passion lies in weaving those stories into actionable insights that drive meaningful impact in businesses and people’s lives. As a Data Scientist, I not only delve deep into the data to uncover valuable insights, but I also have a strong interest in using machine learning models to generate ethical and practical solutions for real-world challenges.</p>
            <p>My unique journey started as a kid fascinated by numbers, technology, and data. I pursued my passion and studied Economics and Finance in college, which gave me a strong foundation in quantitative analysis and a data-driven mindset. After college, I started my career as an administrative assistant and later transitioned to the finance industry as a bank teller. While these roles didn't directly involve data science, they deepened my curiosity and interest in data analytics and machine learning. Additionally, they taught me valuable skills in organization, communication, attention to detail, and problem-solving, which are crucial in the world of data.</p>
            <p>The spark of curiosity within me led me to nurture my skills and knowledge in the fundamentals of statistics, linear algebra, SQL, and Python. I thirsted for more knowledge, eager to make a meaningful impact in the rapidly evolving field of data science, so I decided to enroll in a comprehensive project-based data science training program, which covers a wide range of topics including statistics and modeling, machine learning, deep learning, natural language processing, data manipulation, database management, and data storytelling.</p>
            <p>Armed with my new data science toolkit, I am ready to unlock the potential of data and embrace the possibilities that technology offers to create a brighter future. Technology is a powerful tool that is revolutionizing the way we live and work, and I am fascinated by its integration into our daily lives.</p>
            <p>If you're searching for a data-driven problem solver, someone who can turn data into a language of its own, then let's connect. Together, we'll uncover the untold stories hidden within your data and unleash their potential to drive success for your organization.</p>

          </Wrap>
        </Box>
        <LargeWithNewsletter />
      </Box>
    )
  }
  