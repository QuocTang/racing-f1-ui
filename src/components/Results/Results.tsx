import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FilterType, SelectType } from "../../../type";
import { filterResults } from "../../services/results.service";
import FilterSearch from "../features/FilterSearch/FilterSearch";
import TableForm from "../features/TableForm/TableForm";
import BarChart from "../features/BarChart/BarChart";
const initialForm = {
  year: "2023",
  apiType: "races",
  meetingKey: "",
  race: "",
};

const Results = () => {
  const [data, setData] = useState<any>({});
  const [filterByType, setFilterByType] = useState<any>("meetingKey");
  const [filters, setFilters] = useState(initialForm);

  const { getValues, setValue, control, register } = useForm<FilterType>({
    defaultValues: initialForm,
  });

  const year = useWatch({
    name: "year",
    control,
  });
  const apiType = useWatch({
    name: "apiType",
    control,
  });
  const meetingKey = useWatch({
    name: "meetingKey",
    control,
  });
  const race = useWatch({
    name: "race",
    control,
  });

  const memoYear: string = useMemo(() => year, [year]);
  const memoApiType: string = useMemo(() => apiType, [apiType]);
  const memoMeetingKey: string = useMemo(() => meetingKey, [meetingKey]);
  const memoRace: string = useMemo(() => race, [race]);

  useEffect(() => {
    if (Object.keys(data)?.length > 0) {
      mutate(getValues());
    }
  }, [memoYear, memoApiType, memoMeetingKey, memoRace]);

  const handleFilter = (
    name: "year" | "apiType" | "meetingKey" | "race",
    item: SelectType
  ) => {
    const { value } = item;
    setValue(name, value);

    let dataPost = { ...filters, [name]: value };
    if (name === "apiType") {
      dataPost = {
        ...filters,
        [name]: value,
        meetingKey: value === "races" || value === "fastest-laps" ? "" : "all",
      };
      setValue("meetingKey", "");
    }
    setFilters(dataPost);
    mutate(dataPost);
  };

  // MUTATION
  const { mutate } = useMutation((data: FilterType) => filterResults(data), {
    onSuccess: ({ data, status }) => {
      if (status) {
        for (const i in data.selectData) {
          if (i !== "apiType" && i !== "year" && i !== "resultType") {
            setFilterByType(i);
          }
        }
        setData(data);
      }
    },
  });

  useEffect(() => {
    mutate(initialForm);
    return () => {};
  }, []);

  return (
    <div className="py-5 px-3 bg-slate-100">
      <FilterSearch
        register={register}
        data={data}
        handleFilter={handleFilter}
        filters={filters}
        filterByType={filterByType}
      />
      <div
        dangerouslySetInnerHTML={{
          __html:
            data?.titleElement?.replace(
              'src="/content',
              'src="https://www.formula1.com/content'
            ) ?? "",
        }}
        className="resultsarchive-content-header"
      ></div>
      <TableForm data={data} handleFilter={handleFilter} filters={filters} />
      <BarChart
        data={data?.tableData?.bodyData}
        type={getValues("apiType")}
        notAll={getValues("meetingKey")}
      />
    </div>
  );
};

export default Results;
