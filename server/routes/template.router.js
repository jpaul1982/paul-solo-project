const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET Routes

router.get('/selfies', (req, res) => {
    pool.query(`SELECT * FROM selfies ORDER BY "id"`)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log(`Error completing SELECT selfies query`, error);
            res.sendStatus(500);
        })
});

router.get('/artists', (req, res) => {
    const queryText = 'SELECT * FROM artists ORDER BY "id"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT artists query', error);
            res.sendStatus(500);
        })
});

router.get('/users', (req, res) => {
    const queryText = 'SELECT * FROM "user"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT user query', error);
            res.sendStatus(500);
        })
});


router.get('/pieces', (req, res) => {
    const queryText = 'SELECT * FROM pieces ORDER BY "id"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT pieces query', error);
            res.sendStatus(500);
        })
});

router.get('/comments', (req, res) => {
    const queryText = 'SELECT * FROM comments';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT comments query', error);
            res.sendStatus(500);
        })
});

router.get('/artistGallery/:id', (req, res) => {
    const queryText = `SELECT "pieces"."id", "image_url", "status","artist_id" FROM "pieces"
    JOIN "artists"
    ON "artists"."id" = "pieces"."artist_id"
    WHERE "artist_id" = $1
    ORDER BY "id";`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT "image_url" query', error);
            res.sendStatus(500);
        })
});

router.get('/gallerySpec/:id', (req, res) => {
    const queryText = `SELECT "image_url","title","year","status" FROM "pieces"
    JOIN "artists"
    ON "artists"."id" = "pieces"."artist_id"
    WHERE "pieces"."id" = $1`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT "image_url" query', error);
            res.sendStatus(500);
        })
});


// POST routes

router.post('/comments', (req, res) => {
    queryText = `INSERT INTO "comments"("comment") VALUES ($1)`;
    queryValues = [req.body.comment];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT comments query', err);
            res.sendStatus(500);
        });
});

router.post('/add-artist', (req, res) => {
    queryText = `INSERT INTO "artists" ("first_name", "last_name", "artist_medium", "img_url", "description") VALUES ($1,$2,$3,$4,$5)`;
    queryValues = [req.body.first_name, req.body.last_name, req.body.artist_medium, req.body.img_url, req.body.description];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(210); })
        .catch((err) => {
            console.log('Error completing INSERT artists query', err);
            res.sendStatus(500);

        })
})

router.post('/add-piece', (req, res) => {
    queryText = `INSERT INTO "pieces" ("title", "year", "status","image_url","artist_id") 
    VALUES ($1,$2,$3,$4,$5)`;
    piece = req.body;
    queryValues = [piece.title, piece.year, piece.status, piece.image_url, piece.artist_id];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(210); })
        .catch((err) => {
            console.log('Error completing INSERT pieces query', err);
            res.sendStatus(500);

        })
})

// PUT Routes

router.put('/status', (req, res) => {
    const queryText = `UPDATE "pieces" SET "status" = $1 WHERE "id" = $2`;
    const queryValues = [req.body.status, req.body.id];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
            console.log('update worked!');
        })
        .catch((err) => {
            console.log('Error completing UPDATE movie query', err);
            res.sendStatus(500)
        });
});

// Delete Routes

router.delete('/delete-piece/:id', (req, res) => {
    pool.query(
        `DELETE FROM "pieces" WHERE "id" = $1`, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE piece query', err);
            res.sendStatus(500);
        });
});

router.delete('/delete-comment/:id', (req, res) => {
    pool.query(
        `DELETE FROM "comments" WHERE "id" = $1`, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE comment query', err);
            res.sendStatus(500);
        });
});


module.exports = router;