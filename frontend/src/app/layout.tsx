export const metadata = {
  title: 'Meu Site',
  description: 'Descrição do meu site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children} {/* Aqui o conteúdo de todas as páginas será renderizado */}
      </body>
    </html>
  );
}
