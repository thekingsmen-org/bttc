import { createClient } from 'contentful'

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN!,
})

type GetPageParams = {
  pageContentType: string
  slug: string
  locale: string
}

async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: params.pageContentType,
  }
  const {
    items: [page],
  } = await contentfulClient.getEntries(query)
  return page || null
}

export async function getGuests() {
  const { items } = await contentfulClient.getEntries({
    content_type: 'guests',
  })
  return items || []
}
