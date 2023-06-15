import { Select } from "@chakra-ui/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SelectType } from "../../../../type";
const FilterSearch = ({
  data,
  handleFilter,
  filters,
  filterByType,
  register,
}: any) => {
  return (
    <>
      <div className="hidden xl:grid grid-cols-3 gap-2 sm:gap-0 h-[120px] py-2 shadow-sm">
        <div className="sm:col-span-1 relative overflow-hidden pl-10 pr-5 border">
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            spaceBetween={10}
            mousewheel={true}
            modules={[Mousewheel, Pagination, Navigation]}
            navigation={true}
            className="mySwiper h-full"
          >
            {data &&
              data?.selectData?.year?.map((item: SelectType, index: number) => (
                <SwiperSlide
                  className="cursor-pointer"
                  key={index}
                  onClick={() => handleFilter("year", item)}
                >
                  <span
                    className={`${
                      item.value === filters.year && "border-b-2 border-red-500"
                    } font-semibold text-lg`}
                  >
                    {item.text}
                  </span>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="sm:col-span-1 relative overflow-hidden pl-10 pr-5 border">
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            spaceBetween={10}
            mousewheel={true}
            modules={[Mousewheel, Pagination, Navigation]}
            navigation={true}
            className="mySwiper h-full"
          >
            {data &&
              data?.selectData?.apiType?.map(
                (item: SelectType, index: number) => (
                  <SwiperSlide
                    className="cursor-pointer"
                    key={index}
                    onClick={() => handleFilter("apiType", item)}
                  >
                    <span
                      className={`${
                        item.value === filters.apiType &&
                        "border-b-2 border-red-500"
                      } font-semibold text-lg`}
                    >
                      {item.text}
                    </span>
                  </SwiperSlide>
                )
              )}
          </Swiper>
        </div>
        <div className="sm:col-span-1 relative overflow-hidden pl-10 pr-5 border">
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            spaceBetween={10}
            mousewheel={true}
            modules={[Mousewheel, Pagination, Navigation]}
            navigation={true}
            className="mySwiper h-full"
          >
            {data &&
              data?.selectData?.[filterByType]?.map(
                (item: SelectType, index: number) => (
                  <SwiperSlide
                    className="cursor-pointer"
                    key={index}
                    onClick={() => handleFilter("meetingKey", item)}
                  >
                    <span
                      className={`${
                        item.value === filters.meetingKey &&
                        "border-b-2 border-red-500"
                      } font-semibold text-lg`}
                    >
                      {item.text}
                    </span>
                  </SwiperSlide>
                )
              )}
          </Swiper>
        </div>
      </div>
      <form className="flex flex-col gap-3 xl:hidden">
        <Select {...register("year")}>
          {data?.selectData?.year?.map((item: SelectType, index: number) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </Select>
        <Select {...register("apiType")}>
          {data?.selectData?.apiType?.map((item: SelectType, index: number) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </Select>
        <Select {...register("meetingKey")}>
          {data?.selectData?.[filterByType]?.map(
            (item: SelectType, index: number) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            )
          )}
        </Select>
        <Select placeholder="Select option" {...register("race")}>
          {data?.selectData?.resultType?.map(
            (item: SelectType, index: number) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            )
          )}
        </Select>
      </form>
    </>
  );
};

export default FilterSearch;
