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
import { useGetTestimonialsQuery } from "../../redux/testimonials/testimonialsApi";

const Testimonials = () => {
  const { data, isError } = useGetTestimonialsQuery({ page: 1, limit: 5 });

  //console.log(data);

  if (!data) return;

  return (
    data.result.length !== 0 &&
    !isError && (
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
            {data.result.map(({ _id, testimonial, owner: { name } }) => (
              <SwiperSlide key={_id}>
                <Card>
                  <Text>{testimonial}</Text>
                  <Author>{name}</Author>
                </Card>
              </SwiperSlide>
            ))}

            <SwiperPagination className="swiper-pagination"></SwiperPagination>
          </Swiper>
        </SliderWrapper>
      </>
    )
  );
};

export default Testimonials;
