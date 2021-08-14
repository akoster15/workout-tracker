const db = require("../models/");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post('/api/workouts/', (req, res) => {
    console.log(req.body)
        models.Workout.create(req.body)
          .then((db) => res.json(db))
          .catch(err => res.status(400).json(err));
});

router.put('/api/workouts/id:', (req, res) => {
    console.log(req.body)
        models.Workout.create(req.body)
          .then((db) => res.json(db))
          .catch(err => res.status(400).json(err));
});

router.get('/api/workouts/', (req, res) => {
    models.Workout.aggregate( [{
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'}
            }
        }])

      .then(db => res.json(db))
      .catch(err => res.status(400).json(err));
      
});

module.exports = router;