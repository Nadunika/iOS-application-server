const router = require("express").Router();
const {
  addToWishlist,
  getWishlistItem,
  removeWishlistItem,
  //getWishlistItemAndOutletIds
} = require("../controllers/wishlistController");

router.post("/", addToWishlist);
router.get("/:userId", getWishlistItem);
//router.get("/recipes-users-ids/:userId", getWishlistItemAndOutletIds);
router.delete("/:id", removeWishlistItem);

module.exports = router;
