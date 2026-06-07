import { SetHtmlLang } from "@/components/set-html-lang";

export default function NiosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="ml" className="locale-ml">
      <SetHtmlLang lang="ml" />
      {children}
    </div>
  );
}
