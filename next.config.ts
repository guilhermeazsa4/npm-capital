import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera HTML/CSS/JS puro em out/, para subir por FTP em hospedagem
  // compartilhada (Locaweb Hospedagem GO). Sem servidor Node.
  output: "export",

  turbopack: {
    root: process.cwd(),
  },

  images: {
    // O otimizador de imagens do Next precisa de servidor. Sem ele, as imagens
    // são servidas direto de public/assets como estão no disco.
    unoptimized: true,
  },

  // Os cabeçalhos de cache que ficavam aqui não funcionam com output: "export"
  // (não há servidor para enviá-los). Foram para public/.htaccess, que o
  // Apache da hospedagem lê.
};

export default nextConfig;
