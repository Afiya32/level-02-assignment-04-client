
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure this import is present

const reviews = [
  {
    name: "John Doe",
    review: "Amazing keyboard! The build quality is top-notch and the typing experience is unparalleled.",
    image: "https://tagembed.com/blog/wp-content/uploads/2022/03/customer-reviews-examples.jpg",
  },
  {
    name: "Jane Smith",
    review: "I love the customizable features of these keyboards. Highly recommend!",
    image: "https://embedsocial.com/wp-content/uploads/2021/09/positive-review-examples-hero.jpg",
  },
  {
    name: "Sam Wilson",
    review: "Great customer service and an excellent product. Will buy again.",
    image: "https://embedsocial.com/wp-content/uploads/2022/06/positive-reviews-examples_9ea0d0f1d5beeb32166babf51c70fea6_2000.jpg",
  },
  {
    name: "Lisa Brown",
    review: "The best mechanical keyboard I've ever used. It's perfect for gaming and work.",
    image: "https://cdn.taggbox.com/v7/cloud.tagbox.com/website/tagbox/assets/section-library/images/review-platform/hero-image.png",
  },
];

const CustomerReviews = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Customer Reviews</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="max-w-4xl mx-auto"
      >
        {reviews.map((review, index) => (
          <div key={index} className="p-4 flex flex-col items-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-[70%] h-[70vh] object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{review.name}</h3>
            <p className="text-sm mt-2 text-center">{review.review}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
