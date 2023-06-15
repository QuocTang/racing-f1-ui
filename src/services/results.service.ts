import http from "../utils/http";

const url = "results";
type FilterType = {
  year: string;
  apiType: string;
  meetingKey: string;
  race: string;
};
const filterResults = (data: FilterType) => {
  return http.post(url, data);
};

export { filterResults };
