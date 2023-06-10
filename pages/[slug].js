import { gql } from 'graphql-request'

import { getPageLayout } from '@/layout'
import { hygraphClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function Page({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ params, preview = false }) {
  const client = hygraphClient(preview)

  const { page } = await client.request(pageQuery, {
   slug: params.slug
  })

  if (!page) {
    return {
      notFound: true
    }
  }

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData,
      preview
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  let paths = []

  const client = hygraphClient()

  const { pages } = await client.request(gql`
    {
      pages(where: { slug_not_in: ["home", "projects"] }) {
        slug
      }
    }
  `)

  // for (const locale of locales) {
    paths = [
      ...paths,
      ...pages.map((page) => ({ params: { slug: page.slug } }))
    ]
  // }

  return {
    paths,
    fallback: 'blocking'
  }
}

Page.getLayout = getPageLayout
