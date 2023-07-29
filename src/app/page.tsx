import { Header, Footer } from '@/components';
import {
  Hero,
  BluetoothProblem,
  BluetoothDiscover,
  ConnectEffortless,
  CustomerReview,
  DecentralizedOS,
  DownloadSendContact,
  FAQ,
  JoinMission,
  SellStreamlined,
  SendContactBenefits,
  ShowCasingProduct,
  SolutionForSociety
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className=''>
        <Hero />
        <DownloadSendContact />
        <ConnectEffortless />
        <BluetoothDiscover />
        <ShowCasingProduct />
        <SellStreamlined />
        <SendContactBenefits />
        <DecentralizedOS />
        <BluetoothProblem />
        <SolutionForSociety />
        <JoinMission />
        <CustomerReview />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
