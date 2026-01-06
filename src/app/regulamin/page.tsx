import { Metadata } from "next";
import { PageHeader } from "@/components/organisms/PageHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import path from "node:path";
import { readFile } from "node:fs/promises";
import { buildPath } from "@/utils/buildPath";
import { ROUTE_PATHS } from "@/consts/routePaths";

export const metadata: Metadata = {
  title: "Regulamin | Power Fit Białystok",
  description:
    "Poznaj Power Fit – nową siłownię z Białegostoku z pozytywnym klimatem i trenerami, którzy rozumieją, że forma to proces, nie wyścig.",
  alternates: { canonical: buildPath(ROUTE_PATHS.termsAndConditions) },
};

const TermsAndConditionsPage = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "regulamin",
    "consts",
    "regulamin.md",
  );
  const content = await readFile(filePath, "utf8");

  return (
    <>
      <PageHeader title="Regulamin" crumbLabel="Regulamin" />
      <section className="flex w-full justify-center">
        <div className="container py-7 leading-relaxed sm:py-20 [&_*+h2]:mt-6 [&_h2]:mb-2 [&_ol,ul]:pl-6 [&_ul]:list-inside [&_ul]:list-disc">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
          >
            {content}
          </ReactMarkdown>

          <p className="text-muted-foreground mt-8 text-sm">
            *Regulamin udostępniony na niniejszej stronie internetowej ma
            charakter informacyjny. W przypadku wystąpienia rozbieżności
            pomiędzy treścią regulaminu opublikowaną na stronie internetowej a
            treścią regulaminu udostępnioną w formacie PDF, pierwszeństwo oraz
            moc wiążącą posiada regulamin w formacie PDF.{" "}
            <a
              className="underline"
              href="regulamin.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pobierz regulamin.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
