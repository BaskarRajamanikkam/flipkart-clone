import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import { setProducts } from "../../redux/features/ProductSlice";
import MetaData from "../../components/Layouts/MetaData";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../Home/Banner/Banner";
import { getDeliveryDate, getDiscount } from "../../utils/functions";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CachedIcon from "@mui/icons-material/Cached";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';

const PRoductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.id;
  const [open, setOpen] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const { product } = useSelector((state) => state.product.value);

  useEffect(() => {
    const getDetails = async () => {
      const res = await productApi.getDetail(productId);
      dispatch(setProducts(res));
    };
    getDetails();
  }, [dispatch, productId]);

  const addToWishlistHandler = () => {
    // if (itemInWishlist) {
    //     dispatch(removeFromWishlist(productId));
    //     enqueueSnackbar("Remove From Wishlist", { variant: "success" });
    // } else {
    //     dispatch(addToWishlist(productId));
    //     enqueueSnackbar("Added To Wishlist", { variant: "success" });
    // }
  };
  const handleDialogClose = () => {
    setOpen(!open);
}

const reviewSubmitHandler = () => {
    // if (rating === 0 || !comment.trim()) {
    //     enqueueSnackbar("Empty Review", { variant: "error" });
    //     return;
    // }
    // const formData = new FormData();
    // formData.set("rating", rating);
    // formData.set("comment", comment);
    // formData.set("productId", productId);
    // dispatch(newReview(formData));
    // setOpen(false);
}
  return (
    <>
      <MetaData title={product?.name} />
      <main>
        <div className="w-full flex flex-col sm:flex-row bg-white sm:p-2 relative">
          <div className="w-full sm:w-2/5 sm:sticky top-16 sm:h-screen">
            <div className="flex flex-col gap-3 m-3">
              <div className="w-full h-full pb-6 border relative">
                <Slider {...settings}>
                  {product?.images &&
                    product?.images.map((item, i) => (
                      <img
                        draggable="false"
                        className="w-full h-96 object-contain"
                        src={item.url}
                        alt={product?.name}
                        key={i}
                      />
                    ))}
                </Slider>
                <div className="absolute top-4 right-4 shadow-lg bg-white w-9 h-9 border flex items-center justify-center rounded-full">
                  <span
                    onClick={addToWishlistHandler}
                    className={`${
                      "itemInWishlist"
                        ? "text-red-500"
                        : "hover:text-red-500 text-gray-300"
                    } cursor-pointer`}
                  >
                    <FavoriteIcon sx={{ fontSize: "18px" }} />
                  </span>
                </div>
              </div>
              <div className="w-full flex gap-3">
                {/* <!-- add to cart btn --> */}
                {product?.stock > 0 && (
                  <button
                    // onClick={itemInCart ? goToCart : addToCartHandler}
                    className="p-4 w-1/2 flex items-center justify-center gap-2 text-black bg-primary-yellow rounded-sm shadow hover:shadow-lg"
                  >
                    <ShoppingCartIcon />
                    <span>ADD TO CART</span>
                    {/* {"itemInCart" ? "GO TO CART" : "ADD TO CART"} */}
                  </button>
                )}
                <button
                  //   onClick={buyNow}
                  disabled={product?.stock < 1 ? true : false}
                  className={
                    product?.stock < 1
                      ? "p-4 w-full flex items-center justify-center gap-2 text-black bg-red-600 cursor-not-allowed rounded-sm shadow hover:shadow-lg"
                      : "p-4 w-1/2 flex items-center justify-center gap-2 text-black bg-primary-orange rounded-sm shadow hover:shadow-lg"
                  }
                >
                  <FlashOnIcon />
                  {product?.stock < 1 ? "OUT OF STOCK" : "BUY NOW"}
                </button>
                {/* <!-- add to cart btn --> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-xl">{product?.name}</h2>
              <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
                  {product?.ratings && product?.ratings.toFixed(1)}{" "}
                  {/* <StarIcon sx={{ fontSize: "12px" }} /> */}
                </span>
                <span>{product?.numOfReviews} Reviews</span>
              </span>
              {/* <!-- price desc --> */}
              <span className="text-primary-green text-sm font-medium">
                Special Price
              </span>
              <div className="flex items-baseline gap-2 text-3xl font-medium">
                <span className="text-gray-800">
                  ₹{product?.cuttedPrice?.toLocaleString()}
                </span>
                <span className="text-base text-gray-500 line-through">
                  ₹{product?.price?.toLocaleString()}
                </span>
                <span className="text-base text-primary-green">
                  {getDiscount(product?.cuttedPrice, product?.price)}%&nbsp;off
                </span>
              </div>
              {product?.stock <= 10 && product?.stock > 0 && (
                <span className="text-red-500 text-sm font-medium">
                  Hurry, Only {product?.stock} left!
                </span>
              )}
              {/* <!-- price desc --> */}

              {/* <!-- banks offers --> */}
              <p className="text-md font-medium">Available offers</p>
              {Array(3)
                .fill("")
                .map((el, i) => (
                  <p className="text-sm flex items-center gap-1" key={i}>
                    <span className="text-primary-lightGreen">
                      <LocalOfferIcon sx={{ fontSize: "20px" }} />
                    </span>
                    <span className="font-medium ml-2">Bank Offer</span> 15%
                    Instant discount on first Flipkart Pay Later order of 500
                    and above{" "}
                    <Link className="text-primary-blue font-medium" to="/">
                      T&C
                    </Link>
                  </p>
                ))}
              {/* <!-- banks offers --> */}
              {/* <!-- warranty & brand --> */}
              <div className="flex gap-8 mt-2 items-center text-sm">
                <img
                  draggable="false"
                  className="w-20 h-8 p-0.5 border object-contain"
                  src={product?.brand?.logo[0].url}
                  alt={product?.brand?.name}
                />
                <span>
                  {product?.warranty} Year Warranty{" "}
                  <Link className="font-medium text-primary-blue" to="/">
                    Know More
                  </Link>
                </span>
              </div>
              {/* <!-- warranty & brand --> */}
              {/* <!-- delivery details --> */}
              <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                <p className="text-gray-500">Delivery</p>
                <span>Delivery by {getDeliveryDate()}</span>
              </div>
              {/* <!-- delivery details --> */}

              <div className="flex flex-col sm:flex-row justify-between">
                {/* <!-- highlights details --> */}
                <div className="flex gap-16 mt-4 items-stretch text-sm">
                  <p className="text-gray-500 font-medium">Highlights</p>

                  <ul className="list-disc flex flex-col gap-2 w-64">
                    {product?.highlights?.map((highlight, i) => (
                      <li key={i}>
                        <p>{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <!-- highlights details --> */}
                {/* <!-- services details --> */}
                <div className="flex gap-16 mt-4 mr-6 items-stretch text-sm">
                  <p className="text-gray-500 font-medium">Services</p>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <p className="flex items-center gap-3">
                        <span className="text-primary-blue">
                          <VerifiedUserIcon sx={{ fontSize: "18px" }} />
                        </span>{" "}
                        {product?.warranty} Year
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-3">
                        <span className="text-primary-blue">
                          <CachedIcon sx={{ fontSize: "18px" }} />
                        </span>{" "}
                        7 Days Replacement Policy
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-3">
                        <span className="text-primary-blue">
                          <CurrencyRupeeIcon sx={{ fontSize: "18px" }} />
                        </span>{" "}
                        Cash on Delivery available
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <!-- services details --> */}
              </div>

              {/* <!-- seller details --> */}
              <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                <p className="text-gray-500">Seller</p>
                <Link
                  className="font-medium text-primary-blue ml-3 uppercase"
                  to="/"
                >
                  {product?.brand && product?.brand?.name}
                </Link>
              </div>
              {/* <!-- seller details --> */}

              {/* <!-- flipkart plus banner --> */}
              <div className="sm:w-1/2 mt-4 border">
                <img
                  draggable="false"
                  className="w-full h-full object-contain"
                  src="https://rukminim1.flixcart.com/lockin/763/305/images/promotion_banner_v2_active.png"
                  alt=""
                />
              </div>
              {/* <!-- flipkart plus banner --> */}

              {/* <!-- reviews border box --> */}
              <div className="w-full mt-4 rounded-sm border flex flex-col">
                <div className="flex justify-between items-center border-b px-6 py-4">
                  <h1 className="text-2xl font-medium">Ratings & Reviews</h1>
                  <button
                    onClick={handleDialogClose}
                    className="shadow bg-primary-yellow text-black px-4 py-2 rounded-sm hover:shadow-lg"
                  >
                    Rate Product
                  </button>
                </div>

                <Dialog
                  aria-labelledby="review-dialog"
                  open={open}
                  onClose={handleDialogClose}
                >
                  <DialogTitle className="border-b">Submit Review</DialogTitle>
                  <DialogContent className="flex flex-col m-1 gap-4">
                    <Rating
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                      size="large"
                      precision={0.5}
                    />
                    <TextField
                      label="Review"
                      multiline
                      rows={3}
                      sx={{ width: 400 }}
                      size="small"
                      variant="outlined"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </DialogContent>
                  <DialogActions>
                    <button
                      onClick={handleDialogClose}
                      className="py-2 px-6 rounded shadow bg-white border border-red-500 hover:bg-red-100 text-red-600 uppercase"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={reviewSubmitHandler}
                      className="py-2 px-6 rounded bg-green-600 hover:bg-green-700 text-white shadow uppercase"
                    >
                      Submit
                    </button>
                  </DialogActions>
                </Dialog>

                <div className="flex items-center border-b">
                  <h1 className="px-6 py-3 text-3xl font-semibold">
                    {product?.ratings && product?.ratings.toFixed(1)}
                    <StarIcon />
                  </h1>
                  <p className="text-lg text-gray-500">
                    ({product?.numOfReviews}) Reviews
                  </p>
                </div>

                {viewAll
                  ? product?.reviews
                      ?.map((rev, i) => (
                        <div
                          className="flex flex-col gap-2 py-4 px-6 border-b"
                          key={i}
                        >
                          <Rating
                            name="read-only"
                            value={rev.rating}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                          <p>{rev.comment}</p>
                          <span className="text-sm text-gray-500">
                            by {rev.name}
                          </span>
                        </div>
                      ))
                      .reverse()
                  : product?.reviews
                      ?.slice(-3)
                      .map((rev, i) => (
                        <div
                          className="flex flex-col gap-2 py-4 px-6 border-b"
                          key={i}
                        >
                          <Rating
                            name="read-only"
                            value={rev.rating}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                          <p>{rev.comment}</p>
                          <span className="text-sm text-gray-500">
                            by {rev.name}
                          </span>
                        </div>
                      ))
                      .reverse()}
                {product?.reviews?.length > 3 && (
                  <button
                    onClick={() => setViewAll(!viewAll)}
                    className="w-1/3 m-2 rounded-sm shadow hover:shadow-lg py-2 bg-primary-blue text-white"
                  >
                    {viewAll ? "View Less" : "View All"}
                  </button>
                )}
              </div>
              {/* <!-- reviews border box --> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PRoductDetails;
