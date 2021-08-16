const router = require("express").Router();
const db = require("../models/");

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then(workoutdb => {
      console.log(workoutdb);
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
      .then(workoutdb => {
        res.json(workoutdb);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .sort({ _id: -1 })
    .limit(7)
    .then(workoutdb => {
      console.log(workoutdb);
      res.json(workoutdb);
      console.log(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;