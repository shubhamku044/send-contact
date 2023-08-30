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
  SolutionForSociety,
  Benefits
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className=''>
        <Hero />
        <DownloadSendContact />
        <Benefits />
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
