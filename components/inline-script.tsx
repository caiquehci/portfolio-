/**
 * Renders an inline script that runs before hydration.
 *
 * The type flips to `text/plain` on the client so React doesn't warn about
 * rendering a `<script>` tag, and `suppressHydrationWarning` covers the
 * resulting type mismatch. Pattern from Next's "preventing flash before
 * hydration" guide.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
