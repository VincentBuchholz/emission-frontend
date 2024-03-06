import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
    CategoryScale,
    BarElement
} from 'chart.js';

function MyApp({ Component, pageProps }) {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale,BarElement);
  return <Component {...pageProps} />
}

export default MyApp
