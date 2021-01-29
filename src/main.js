import Vue, { createApp } from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/milligram.css";

Sentry.init({
  Vue,
  dsn:
    "https://bfc8903acb82462fb00a09faa1a53c5a@o513138.ingest.sentry.io/5614466",
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
  logErrors: true,
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
