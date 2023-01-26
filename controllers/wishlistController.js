const Wishlist = require("../models/wishlistModel");
const User = require("../models/userModel");
const async = require("async");
const Food = require("../models/foodModel");

const getWishlistItem = async (req, res) => {
  try {
    let id = req.params.userId;
    let wishlistItems = await Wishlist.find({ userId: id });
    console.log(wishlistItems)
    let users = await async.map(wishlistItems, async (user) => {
      let res1 = await Recipe.findOne({ _id: user.recipeId });
      
      if (res1) {
        res1 = JSON.parse(JSON.stringify(res1));
        res1.wishlistId = user._id;
        return res1;
      } else {
        return {};
      }
    });
    res.send(users);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

const addToWishlist = async (req, res) => {
  try {
    let existsObj = await Wishlist.findOne({
      userId: req.body.userId,
      foodId: req.body.foodId,
    });
    if (existsObj) {
      existsObj.delete();
      return res.send({ message: "success", res: existsObj });
    }
    let response = await new Wishlist(req.body).save();
    res.send({ message: "success", res: response });
  } catch (e) {
    //console.log(e)
    res.status(500).send({ message: "failed" });
  }
};

const removeWishlistItem = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Wishlist.deleteOne({ _id: id });
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

// const getWishlistItemAndRecipeIds = async (req, res) => {
//   try {
//     let userId = req.params.userId;
//     let result = await Wishlist.find({ userId: userId });
//     let finalObj = { outletIds: [], itemIds: [] };
//     result.map((item) => {
//       if (item.type === "OUTLET") {
//         finalObj.recipeIds.push(user.userOrReceipeId);
//       } else {
//         finalObj.userIds.push(user.userOrReceipeId);
//       }
//     });
//     res.send(finalObj);
//   } catch (e) {
//     res.status(500).send({ message: "failed" });
//   }
// };

module.exports = {
  addToWishlist,
  getWishlistItem,
  removeWishlistItem,
  // getWishlistItemAndRecipeIds,
};
