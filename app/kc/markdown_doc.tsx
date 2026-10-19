import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Server component: the markdown is read and rendered at build time, so it only
// ships in the HTML for its own route and never in the client JS bundle.
export default async function MarkdownDoc({ file }: { file: string }) {
  const source = await readFile(
    path.join(process.cwd(), "content", "kc", file),
    "utf8",
  );

  return (
    <article className="prose prose-invert prose-stone max-w-none prose-headings:tracking-tight prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:mt-12 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-muted-foreground prose-li:my-1">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              {...(href?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {children}
            </a>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </article>
  );
}
