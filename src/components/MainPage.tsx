import { Calculator } from '../components/Calculator/Calculator';
import { Services } from '../components/Services/Services';
import HowItWorks from './HowItWorks/HowItWorks';
import Members from './Members/Members';
import { Slider } from './Slider/Slider';

export function MainPage() {
  return (
    <div className="main_page">
      <Slider />
      <Calculator />
      <Services />
      <HowItWorks />
      <Members />
    </div>
  );
}
