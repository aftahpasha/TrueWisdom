import ClientOnly from './client'

export function generateStaticParams() {
  return [{ slug: ['pages'] }]
}
 
export default function Page() {
    return <ClientOnly />
}