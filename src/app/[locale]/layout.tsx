import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  
  const isSpanish = locale === 'es';
  
  return {
    title: isSpanish 
      ? 'NEVA Estudio - Arquitectos en Gijón | Asturias'
      : 'NEVA Studio - Architects in Gijón | Asturias',
    description: isSpanish
      ? 'Estudio de arquitectura en Gijón con más de 10 años de experiencia. Proyectos residenciales, comerciales, reformas y diseño de interiores en Asturias.'
      : 'Architecture studio in Gijón with over 10 years of experience. Residential and commercial projects, renovations and interior design in Asturias.',
    keywords: isSpanish
      ? 'arquitectos gijón, arquitectura asturias, estudio arquitectura, proyectos residenciales, reformas, diseño interiores'
      : 'architects gijon, architecture asturias, architecture studio, residential projects, renovations, interior design',
    openGraph: {
      title: isSpanish ? 'NEVA Estudio - Arquitectos en Gijón' : 'NEVA Studio - Architects in Gijón',
      description: isSpanish ? 'Arquitectura cercana y humanista en Asturias' : 'Close and humanistic architecture in Asturias',
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
