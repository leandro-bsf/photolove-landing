import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://photolove.com.br"; // Altere para o seu domínio oficial

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Bloqueia rotas de API para não gastar o crawl budget do Google
        "/dashboard/", // Se tiver áreas logadas/painéis internos, adicione aqui
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}