import { Router } from "oak";

import account from "./account/index.ts";

const router = new Router();

router.use("/api/account", account.allowedMethods(), account.routes());

export default router;
