import { Application, Router } from "oak";

import env from "./app/env.ts";

import router from "./routes/index.ts";

const app = new Application();

app.use(router.allowedMethods(), router.routes());

await app.listen({ port: Number(env.PORT || 8080) });
