import {Router} from "express";
import pool from "../dbServer";

const router = Router();

router.get("/", async (req, res) => {
        try {
            const result = await pool.query("SELECT * FROM useraccount");
            const users = result.rows;
            res.status(200).json(users);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
)

module.exports = router;