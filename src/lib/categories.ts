// Categorias oficiais do Blog Radar F5.
export const CATEGORIES = [
  { slug: "marketing-de-afiliados", name: "Marketing de Afiliados", description: "Guias, plataformas de afiliados e estratégias de divulgação de produtos digitais." },
  { slug: "ferramentas-para-afiliados", name: "Ferramentas para Afiliados", description: "Ferramentas digitais, hospedagem, criação de conteúdo e produtividade para afiliados." },
  { slug: "reviews-e-comparativos", name: "Reviews e Comparativos", description: "Análises e comparações de produtos digitais, plataformas e serviços para decisões informadas." },
] as const;

export type CategoryName = (typeof CATEGORIES)[number]["name"];

export const CATEGORY_NAMES = CATEGORIES.map((c) => c.name) as [
  CategoryName,
  ...CategoryName[],
];

export function getCategoryByName(name: string) {
  return CATEGORIES.find((c) => c.name === name);
}

export function categoryHref(name: string) {
  const category = getCategoryByName(name);
  return category ? `/categorias/${category.slug}/` : "/artigos/";
}
