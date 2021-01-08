import { Router } from "oak";

const api = new Router();

api.post("/exists", async (ctx) => {});

api.post("/sign-in", async (ctx) => {});
api.post("/sign-up", async (ctx) => {});
api.post("/refresh", async (ctx) => {});

api.delete("/sign-out", async (ctx) => {});

export default api;
