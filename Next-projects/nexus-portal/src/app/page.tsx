import PageWrapper from "./components/PageWrapper";
import { tiles } from './data/tiles'
import { mainBtns } from "./data/mainBtns";
import { mainContexts } from "./data/mainContents";
import { faqData } from "./data/FAQData";


export default async function Home() {
  return (
    <div className="min-h-screen min-w-screen w-auto h-auto">
      <PageWrapper tiles={tiles} mainBtns={mainBtns} mainContexts={mainContexts} faqData={faqData}/> 
    </div>
  );
}
