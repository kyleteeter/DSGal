import { assetQuery } from '@/lib/_queries'
import { hygraphClient } from '@/lib/_client'

const client = hygraphClient

async function getAssetUrl(filename)                                                                       {
  try {
    const { assets } = await client.request(assetQuery)
    console.log("assets", assets)
    const node = assets?.data.page.edges.find(edge => edge.node.fileName === filename)?.node;
    return node?.url ?? null;
  } catch (error) {
    console.error('Error in getAssetUrl:', error);
    return null; // Return null or throw an error here, depending on your needs
  }
}

module.exports = getAssetUrl
