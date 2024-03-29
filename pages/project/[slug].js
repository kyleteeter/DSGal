import {
  Box,
  Heading,
  List,
  VisuallyHidden,
  Link,
  Stack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { gql } from 'graphql-request'
import { MDXRemote } from 'next-mdx-remote'

import { blogPostQuery } from '@/lib/_queries'
import { getContentLayout } from '@/layout'
import { hygraphClient } from '@/lib/_client'
import { parsePostData } from '@/utils/_parsePostData'
import SEO from '@/components/seo'
const imageLoader = require('image-loader');

export default function BlogPost({ nextPost, post, previousPost }) {
  const authorNameStyle = useColorModeValue('gray.900', 'gray.300')
  const postNavStyle = useColorModeValue('gray.500', 'white')
  return (
    <>
      <SEO {...post.seo} />
      <Box
        as="article"
        pos="relative"
        maxW={{ base: 'xl', lg: '7xl' }}
        mx="auto"
        px={[4, 6, null, 8]}
        py={[8, 12, null, 20]}
      >
        <Box as="header" pt={6} pb={{ lg: 10 }}>
          <Stack spacing={1} textAlign="center">
            <Stack as="dl" spacing={10}>
              <div>
                <VisuallyHidden as="dt">Published on</VisuallyHidden>
                <Box
                  as="dd"
                  fontSize="md"
                  lineHeight="6"
                  fontWeight="medium"
                  color={useColorModeValue('gray.500', 'gray.400')}
                >
                  <Box as="time" dateTime={post.published}>
                    {post.formattedPublished}
                  </Box>
                </Box>
              </div>
            </Stack>
            <div>
              <Heading
                as="h1"
                fontWeight="extrabold"
                color={useColorModeValue('gray.900', 'white')}
                lineHeight="none"
                letterSpacing="tight"
                fontSize={['4xl', '5xl', '6xl', '5xl', '6xl']}
              >
                {post.title}
              </Heading>
            </div>
          </Stack>
        </Box>
        <Box
          display={{ lg: 'grid' }}
          pb={{ base: 16, lg: 20 }}
          gridTemplateColumns={{ lg: 'repeat(4, 1fr)' }}
          gridTemplateRows="auto 1fr"
          gridColumnGap={6}
        >
          <Box as="dl" pt={{ base: 6, lg: '44px' }} pb={10}>
            <VisuallyHidden as="dt">Author</VisuallyHidden>
            <Box as="dd">
              <List
                display={{ base: 'flex', lg: 'block' }}
                justifyContent="center"
              >
                {post.authors.map((author) => (
                  <HStack
                    key={author.id}
                    display="flex"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box w={10} h={10} pos="relative">
                      <Image
                        className="avatar"
                        src={author.photo.url}
                        alt={author.name}
                        title={author.name}
                        layout="fill"
                        loader={imageLoader}
                      />
                    </Box>
                    <Box
                      as="dl"
                      flex="1 1 0"
                      fontSize="sm"
                      fontWeight="medium"
                      lineHeight="5"
                    >
                      <VisuallyHidden as="dt">Name</VisuallyHidden>
                      <Box as="dd" color={authorNameStyle}>
                        {author.name}
                      </Box>
                    </Box>
                  </HStack>
                ))}
              </List>
            </Box>
          </Box>
          <Box
            pb={{ lg: 0 }}
            gridColumn="span 3 / span 3"
            gridRow="span 2 / span 2"
          >
            {post.coverImage && (
              <Box mx="auto">
                <Image
                  className="cover-image"
                  src={post.coverImage.url}
                  alt={post.coverImage.title}
                  title={post.coverImage.title}
                  height={post.coverImage.height}
                  width={post.coverImage.width}
                  objectFit="cover"
                  loader={imageLoader}
                />
              </Box>
            )}
            <Box maxW="none" pt={10} pb={8} color={useColorModeValue('gray.500', 'white')} className="prose">
              <MDXRemote {...post.content.mdx} />
            </Box>
          </Box>
          <Box
            as="footer"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="5"
            gridColumnStart={{ lg: '1' }}
            gridRowStart={{ lg: '2' }}
          >
            {(nextPost || previousPost) && (
              <Stack
                py={8}
                borderWidth="1px 0"
                borderStyle="solid"
                borderColor="gray.200"
                spacing={8}
              >
                {nextPost && (
                  <div>
                    <Heading
                      as="h2"
                      fontSize="xs"
                      fontWeight="medium"
                      letterSpacing="wide"
                      textTransform="uppercase"
                      lineHeight="4"
                      color={postNavStyle}
                    >
                      Next Post
                    </Heading>
                    <Box
                      color="pink.500"
                      _hover={{
                        color: 'pink.500'
                      }}
                    >
                      <NextLink href={`/project/${nextPost.slug}`}>
                        <a>{nextPost.title}</a>
                      </NextLink>
                    </Box>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <Heading
                      as="h2"
                      fontSize="xs"
                      fontWeight="medium"
                      letterSpacing="wide"
                      textTransform="uppercase"
                      lineHeight="4"
                      color={postNavStyle}
                    >
                      Previous Post
                    </Heading>
                    <Box
                      color="pink.500"
                      _hover={{
                        color: 'pink.500'
                      }}
                    >
                      <NextLink href={`/project/${previousPost.slug}`}>
                        <a>{previousPost.title}</a>
                      </NextLink>
                    </Box>
                  </div>
                )}
              </Stack>
            )}
            <Box pt={8}>
              <NextLink href="/project">
                <Link
                  color="pink.500"
                  _hover={{
                    color: 'pink.500'
                  }}
                >
                  &larr; Back to the projects
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const client = hygraphClient(preview)

  const { allPosts, page, post } = await client.request(blogPostQuery, {
   slug: params.slug
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  const postIndex = allPosts.findIndex(({ id }) => id === post.id)

  const nextPost = allPosts[postIndex + 1] || null
  const previousPost = allPosts[postIndex - 1] || null

  const parsedPostData = await parsePostData(post)

  return {
    props: {
      nextPost,
      page,
      post: parsedPostData,
      previousPost,
      preview
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  let paths = []

  const client = hygraphClient()

  const { posts } = await client.request(gql`
    {
      posts: blogPosts {
        slug
      }
    }
  `)

  // for (const locale of locales) {
    paths = [
      ...paths,
      ...posts.map((post) => ({ params: { slug: post.slug } }))
    ]
  // }

  return {
    paths,
    fallback: 'blocking'
  }
}

BlogPost.getLayout = getContentLayout
