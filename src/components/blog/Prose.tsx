/**
 * Typography primitives for post bodies.
 *
 * Posts are plain TSX — no MDX, no Markdown — so instead of styling raw tags
 * globally (which would leak into the landing page) each element is a small
 * component built from the same tokens used across the site.
 */

interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

/** Vertical rhythm for the whole article body. */
export function Prose({ children, className = "" }: ChildrenProps) {
  return (
    <div className={`text-[#374151] ${className}`}>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}

/** Opening paragraph — one step up from body copy, same as section subtitles. */
export function Lead({ children }: ChildrenProps) {
  return (
    <p className="text-lg sm:text-xl leading-relaxed text-[#374151]">
      {children}
    </p>
  );
}

export function P({ children }: ChildrenProps) {
  return (
    <p className="text-base sm:text-[17px] leading-[1.75] text-[#374151]">
      {children}
    </p>
  );
}

interface HeadingProps extends ChildrenProps {
  id?: string;
}

export function H2({ children, id }: HeadingProps) {
  return (
    <h2
      id={id}
      className="mt-6 scroll-mt-24 text-[24px] sm:text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111]"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: HeadingProps) {
  return (
    <h3
      id={id}
      className="mt-4 scroll-mt-24 text-[19px] sm:text-[21px] font-semibold leading-snug text-[#111111]"
    >
      {children}
    </h3>
  );
}

export function UL({ children }: ChildrenProps) {
  return (
    <ul
      role="list"
      className="flex flex-col gap-2.5 pl-5 list-disc marker:text-[#898989] text-base sm:text-[17px] leading-[1.75] text-[#374151]"
    >
      {children}
    </ul>
  );
}

export function OL({ children }: ChildrenProps) {
  return (
    <ol
      className="flex flex-col gap-2.5 pl-5 list-decimal marker:text-[#898989] marker:font-medium text-base sm:text-[17px] leading-[1.75] text-[#374151]"
    >
      {children}
    </ol>
  );
}

export function LI({ children }: ChildrenProps) {
  return <li className="pl-1">{children}</li>;
}

export function Quote({ children }: ChildrenProps) {
  return (
    <blockquote className="border-l-2 border-[#111111] pl-5 text-lg leading-relaxed text-[#111111] italic">
      {children}
    </blockquote>
  );
}

export function InlineCode({ children }: ChildrenProps) {
  return (
    <code className="rounded-[4px] bg-[#f5f5f5] px-1.5 py-0.5 font-mono text-[0.875em] text-[#111111]">
      {children}
    </code>
  );
}

interface CodeBlockProps {
  /** Shown above the block — usually a filename or a short caption. */
  label?: string;
  children: string;
}

export function CodeBlock({ label, children }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#101010]">
      {label && (
        <figcaption className="border-b border-[#1a1a1a] px-5 py-2.5 font-mono text-xs text-[#a1a1aa]">
          {label}
        </figcaption>
      )}
      <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-relaxed text-white">
        <code>{children}</code>
      </pre>
    </figure>
  );
}

interface CalloutProps extends ChildrenProps {
  title?: string;
}

/** Aside for context that supports the argument without interrupting it. */
export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] p-6">
      {title && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7280]">
          {title}
        </p>
      )}
      <div className="text-base leading-[1.7] text-[#374151]">{children}</div>
    </aside>
  );
}

interface ProseLinkProps extends ChildrenProps {
  href: string;
  external?: boolean;
}

export function ProseLink({ href, external, children }: ProseLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="font-medium text-[#111111] underline underline-offset-2 decoration-[#e5e7eb] hover:decoration-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
    >
      {children}
    </a>
  );
}

export function Divider() {
  return <hr className="my-4 border-t border-[#e5e7eb]" />;
}
