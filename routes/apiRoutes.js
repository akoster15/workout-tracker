const mongoose = require("mongoose");
const db = require("../models/");
const router = require("express").Router();

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

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

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .sort({ _id: -1 })
    .limit(7)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;