"use client";

import { useEffect } from "react";

type SetHtmlLangProps = {
  lang: "en" | "ml";
};

export function SetHtmlLang({ lang }: SetHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle("locale-ml", lang === "ml");

    return () => {
      document.documentElement.lang = "en";
      document.body.classList.remove("locale-ml");
    };
  }, [lang]);

  return null;
}
