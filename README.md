# Blog Radar F5

Blog brasileiro de marketing de afiliados e produtos digitais. Astro + Vercel. Domínio: https://blog.radarf5.com. Contato: contato@radarf5.com.

## Desenvolvimento

Use Node.js >= 22.19.0 (preferencialmente uma versão LTS compatível com a Vercel).

```sh
npm ci
npm run dev
npm run build
```

Configure a Vercel para usar Astro, sem substituir o build por publicação do index.html da raiz. O conteúdo começa vazio intencionalmente. Preserve as pastas de conteúdo e imagens.

## Formulário

Copie `.env.example` para `.env` localmente se necessário. Configure RESEND_API_KEY apenas no servidor e CONTACT_TO_EMAIL na Vercel. O remetente é contato@radarf5.com; verifique o domínio no Resend e a entrega na caixa postal antes de publicar o formulário como operacional. Sem chave, a API responde 503. Não envie segredos ao GitHub.

## Publicidade

Mantenha ADS_ENABLED=false nesta fase, inclusive na Vercel. Revise consentimento e políticas antes de ativar. Consulte ADS-SETUP.md.

## Próximas etapas

Build local, deploy, domínio e formulário (Resend, Cloudflare, Vercel), testes reais, conteúdo e artigo pilar Hostinger. Consulte CONTENT-GUIDE.md e SECURITY-NOTES.md. Não foram alteradas as versões das dependências.
