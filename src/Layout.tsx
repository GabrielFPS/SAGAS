import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { PropsWithChildren } from 'react';

export default function Layout({ children  }: PropsWithChildren<{}>) {
  return (
    <div className="flex w-full flex-col min-h-screen ">
      <Header />

      <main className="flex-1 flex b-panal">{children}</main>

      <Footer />
    </div>
  );
}
