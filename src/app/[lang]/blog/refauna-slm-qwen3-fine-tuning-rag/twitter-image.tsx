// twitter-image is a separate convention from opengraph-image with no
// automatic fallback, so reuse the same generated image — same approach as the
// landing page.
export {
  default,
  alt,
  size,
  contentType,
  generateStaticParams,
} from "./opengraph-image";
