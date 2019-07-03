const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/artists', (req, res) => {
    const queryText = 'SELECT * FROM artists';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT artists query', error);
            res.sendStatus(500);
        })
});

router.get('/pieces', (req, res) => {
    const queryText = 'SELECT * FROM pieces';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT pieces query', error);
            res.sendStatus(500);
        })
});

router.get('/artistGallery/:id', (req, res) => {
    const queryText = `SELECT "pieces"."id", "image_url", "status" FROM "pieces"
    JOIN "artists"
    ON "artists"."id" = "pieces"."artist_id"
    WHERE "artist_id" = $1;`;
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

/**
 * POST route template
 */
router.post('/comments', (req, res) => {

});

router.put('/status', (req, res) => {
    console.log('update route hit!');
    console.log(req.body);
    
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

module.exports = router;