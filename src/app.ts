import { app } from "./server";

export default app.listen(3333, () => {
    console.log("HTTP server running!")
})