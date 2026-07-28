// twitter-image is a separate convention from opengraph-image with no
// automatic fallback, so reuse the same generated image.
// generateStaticParams must be re-exported too, or this route falls back to
// being rendered on demand instead of prerendered per locale.
export {
  default,
  alt,
  size,
  contentType,
  generateStaticParams,
} from "./opengraph-image";
