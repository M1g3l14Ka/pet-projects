import { ITariff } from "./types/types";
import PageWrapper from "./components/PageWrapper";

export default async function Home() {
  const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs', { cache: 'no-store' });
  const tariffs: ITariff[] = await res.json();
  return <PageWrapper tariffs={tariffs} />;
}
