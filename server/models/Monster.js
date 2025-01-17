// Best practices for models:
// Name files a singular noun, PascalCase
import mongoose from "mongoose";

const monsterScheme = new mongoose.Schema({
  name0: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9! ]*$/
  },
  word0: {
    type: String,
    required: true,
    validate: /^[A-Za-z]*$/
  },
  name1: {
    type: String,
    validate: /^[A-Za-z0-9! ]*$/
  },
  word1: {
    type: String,
    validate: /^[A-Za-z]*$/
  },
  name2: {
    type: String,
    validate: /^[A-Za-z0-9! ]*$/
  },
  word2: {
    type: String,
    validate: /^[A-Za-z]*$/
  },
  canvas: {
    type: [Boolean],
    required: true,
    validate: {
      // this function allows an array of booleans and always returns true. could applly logic to check the array contents instead try Array.isArray(canvas) ...ect
      validator: function(canvas) {
        return true;
      },
      message: "Canvas is invalid!"
    }
  },
  progress: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        if (v in [0, 1, 2] === false) {
          // if(![0,1,2].includes(v)) try this and see if this works
          return false;
        }

        // I would also suggest not using nested if statements for the aditional checks and combine them with && opperator
        // if (v >= 1){
        //   if (!name1 || !word1){
        //     return false;
        //   }
        // }
        // if (v >= 2){
        //   if (!name1 || !word1){
        //     return false;
        //   }
        // }
        return true;
      },
      message: "{VALUE} is not a valid progress amount!"
    }
  }
});

const Monster = mongoose.model("Monster", monsterScheme);

export default Monster;
