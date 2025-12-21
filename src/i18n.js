import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  cs: {
    translation: {
      appTitle: "Nákupní seznamy",
      overview: "Přehled",
      detailTitle: "Nákupní seznam",
      back: "Zpět",
      notFound: "Seznam nebyl nalezen",
      noLists: "Zatím nemáte žádné nákupní seznamy.",
      items: "Položky",
      completed: "Hotovo",
      remaining: "Zbývá",

      createNew: "Vytvořit nový",
      download: "Stáhnout",
      removeList: "Smazat seznam",

      newList: "Nový seznam",
      date: "Datum",
      itemsPlaceholder: "Položky (každá na nový řádek)",
      cancel: "Zrušit",
      create: "Vytvořit",
      fillDateAndItem: "Vyplňte prosím datum a alespoň jednu položku.",

      listsChartTitle: "Počet položek v seznamech",
      completionChartTitle: "Stav položek",
      donePercent: "Dokončeno",

      theme: "Motiv",
      language: "Jazyk",
      light: "Světlý",
      dark: "Tmavý",
    },
  },
  en: {
    translation: {
      appTitle: "Shopping Lists",
      overview: "Overview",
      detailTitle: "Shopping list",
      back: "Back",
      notFound: "List not found",
      noLists: "No shopping lists yet.",
      items: "Items",
      completed: "Completed",
      remaining: "Remaining",

      createNew: "Create new",
      download: "Download",
      removeList: "Remove list",

      newList: "New list",
      date: "Date",
      itemsPlaceholder: "Items (one per line)",
      cancel: "Cancel",
      create: "Create",
      fillDateAndItem: "Please enter a date and at least one item.",

      listsChartTitle: "Items count per list",
      completionChartTitle: "Items completion",
      donePercent: "Completed",

      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lng") || "cs",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => localStorage.setItem("lng", lng));

export default i18n;
