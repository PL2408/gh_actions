import { onCLS, onINP, onLCP, CLSMetric, INPMetric, LCPMetric } from 'web-vitals';

export function logMetric(metric: CLSMetric | INPMetric | LCPMetric) {
  console.log(metric);
}

function sendToAnalytics(metric: CLSMetric | INPMetric | LCPMetric) {
  const body = JSON.stringify(metric);
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', { body, method: 'POST', keepalive: true });
}

onCLS(sendToAnalytics);  // Надсилаємо CLS метрику
onINP(sendToAnalytics);  // Надсилаємо INP метрику
onLCP(sendToAnalytics);  // Надсилаємо LCP метрику

export default sendToAnalytics;
