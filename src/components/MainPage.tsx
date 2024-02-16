import { Calculator } from '../components/Calculator/Calculator';
import { Services } from '../components/Services/Services';
import HowItWorks from './HowItWorks/HowItWorks';
import Members from './Members/Members';

export function MainPage() {
  return (
    <div className="main_page">
      <Calculator />
      <Services />
      <HowItWorks />
      <Members />
    </div>
  );
}
