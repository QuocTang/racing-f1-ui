export type FilterType = {
  year: string;
  apiType: string;
  meetingKey: string;
  race: string;
};

export type SelectType = {
  value: string;
  text: string;
};

export type DataType = {
  status: boolean;
  selectData: {
    year: SelectType[];
    apiType: SelectType[];
    meetingKey: SelectType[];
    resultType: SelectType[];
    driverRef: SelectType[];
    teamKey: SelectType[];
  };
  tableData: {
    headData: Pick<SelectType, "text">[];
    bodyData: [];
  };
  titleElement: string;
};

export type FilterByType = "meetingKey" | "driverRef" | "teamKey";
