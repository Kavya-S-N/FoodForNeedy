const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,

    required: [true, "Please add a title for the review"],
    maxlength: 100,
  },
  text: {
    type: String,
    // required: [true, "Please add some text"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "Please add a rating between 1 and 10"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  food: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must can not be more than 10"],
  },
  averageCost: Number,
});

// Prevent user from submitting more than one review per vendor
// ReviewSchema.index({ vendor: 1, user: 1 }, { unique: true });

// Static method to get avg rating and save
ReviewSchema.statics.getAverageRating = async function (foodId) {
  const obj = await this.aggregate([
    {
      $match: { food: foodId },
    },
    {
      $group: {
        _id: "$food",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  try {
    await this.model("Foods").findByIdAndUpdate(foodId, {
      averageRating: obj[0].averageRating,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageCost after save
ReviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.food);
});

// Call getAverageCost before remove
ReviewSchema.pre("remove", function () {
  this.constructor.getAverageRating(this.food);
});

module.exports = mongoose.model("Review", ReviewSchema);
