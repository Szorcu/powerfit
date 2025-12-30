import { PageHeader } from "@/components/organisms/PageHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import path from "node:path";
import { readFile } from "node:fs/promises";

const PrivacyPolicyPage = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "polityka-prywatnosci",
    "consts",
    "polityka-prywatnosci.md",
  );
  const content = await readFile(filePath, "utf8");

  return (
    <>
      <PageHeader
        title="Polityka prywatności"
        crumbLabel="Polityka prywatności"
      />
      <section className="flex w-full justify-center">
        <div className="container py-7 leading-relaxed sm:py-20 [&_*+h2]:mt-6 [&_h2]:mb-2 [&_ol,ul]:pl-6 [&_p+p]:mt-2 [&_ul]:list-inside [&_ul]:list-disc">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>

          <p className="text-muted-foreground mt-8 text-sm">
            *Polityka prywatności udostępniona na niniejszej stronie
            internetowej ma charakter informacyjny. W przypadku wystąpienia
            rozbieżności pomiędzy treścią polityki prywatności opublikowaną na
            stronie internetowej a treścią polityki prywatności udostępnioną w
            formacie PDF, pierwszeństwo oraz moc wiążącą posiada polityka
            prywatności w formacie PDF.{" "}
            <a
              className="underline"
              href="polityka-prywatnosci.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pobierz politykę prywatności.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
