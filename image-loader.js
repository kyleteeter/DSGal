// export function graphCmsLoader({src, width}) {
//     const match = /^(https?:\/\/media.graphcms.com)(?:\/[^\/]+)?\/([^\/]+)$/.exec(src);

//     if (!match) {
//       throw new Error('Invalid GraphCMS asset URL');
//     }

//     const [prefix, handle] = match.slice(1);
//     const resizedSrc = `${prefix}/resize=width:${width}/${handle}`;

//     return resizedSrc;
//   }

function imageLoader({ src, width }) {
  const relativeSrc = (src) => src.split('/').pop()

  return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
    src
  )}`
}
module.exports = imageLoader
