import './globals.css'

export const metadata = {
  title: 'TrueWisdom',
  description: 'Web site created with Next.js.',
}
export default function RootLayout({ children }) {
  return (
<html lang="en">
  <body>
    <div id="root">{children}</div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  )
}