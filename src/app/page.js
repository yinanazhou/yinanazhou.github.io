import ClientHome from './components/ClientHome';
import { getLastEditDate } from './utils/getLastEditDate';

export default function Home() {
  const lastEditDate = getLastEditDate();

  return <ClientHome lastEditDate={lastEditDate} />;
}
