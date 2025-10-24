import { Router } from "express";
import { delPlayersById, getPlayers, getPlayersById, postPlayer, UpdatePlayersById } from "./controllers/player-controllers";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:Id", getPlayersById);

router.post("/players",postPlayer);
router.delete("/player/:id", delPlayersById);
router.delete("/player/:id", UpdatePlayersById);

export default router;