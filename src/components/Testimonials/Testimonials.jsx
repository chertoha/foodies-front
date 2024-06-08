import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Author,
  Card,
  Introduction,
  SliderWrapper,
  SwiperPagination,
  Text,
  TitleWrapper,
} from "./Testimonials.styled";
import MainTitle from "components/MainTitle/MainTitle";

const testimonials = [
  {
    _id: "1",
    testimonial: `Foodies has transformed my cooking experience! With its diverse recipe collection
                and user-friendly interface, I can easily find, save, and cook delicious meals for
                any occasion. From quick dinners to elaborate feasts, this app has become my go-to
                kitchen companion. Highly recommended!`,
    username: "GoIT",
  },
  {
    _id: "2",
    testimonial: `Foodies is a must-have for any home cook! With its extensive recipe collection and
                easy-to-use interface, I've discovered new culinary delights and streamlined my meal
                planning. Cooking has never been this enjoyable!`,
    username: "Foodies user",
  },
  {
    _id: "3",
    testimonial: `Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned
                out to be not only tasty, but also incredibly colorful. This has become a favorite
                family meal!`,
    username: "Larry Pageim",
  },
];

const Testimonials = () => {
  return (
    <>
      <Introduction>What our customer say</Introduction>

      <TitleWrapper>
        <MainTitle
          label="Testimonials"
          as="h2"
        />
      </TitleWrapper>

      <SliderWrapper>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          speed={2000}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (_index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
        >
          {testimonials.map(({ _id, testimonial, username }) => (
            <SwiperSlide key={_id}>
              <Card>
                <Text>{testimonial}</Text>
                <Author>{username}</Author>
              </Card>
            </SwiperSlide>
          ))}

          <SwiperPagination className="swiper-pagination"></SwiperPagination>
        </Swiper>
      </SliderWrapper>
    </>
  );
};

export default Testimonials;
