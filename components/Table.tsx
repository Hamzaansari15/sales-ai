"use client";

import React from "react";
import { ConfigProvider, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Image from "next/image";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-1">
      <p>{title}</p>
      <Image width={10} height={10} src="/images/tablearrow.svg" alt="Table" />
    </div>
  );
};

interface DataType {
  key: React.Key;
  contact: string;
  domain: string;
  region: string;
  date: string;
  start: string;
  end: string;
  duration: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Contact",
    dataIndex: "contact",
  },
  {
    title: <Title title="Domain" />,
    dataIndex: "domain",
  },
  {
    title: <Title title="Region" />,
    dataIndex: "region",
  },
  {
    title: <Title title="Date" />,
    dataIndex: "date",
  },
  {
    title: <Title title="Start Time" />,
    dataIndex: "start",
  },
  {
    title: <Title title="End Time" />,
    dataIndex: "end",
  },
  {
    title: <Title title="Duration" />,
    dataIndex: "duration",
  },
  {
    title: <Title title="Status" />,
    dataIndex: "status",
  },
];

const dataArray = Array.from({ length: 500 }, (_, i) => ({
  key: `${i + 1}`,
  contact: "Contact",
  domain: "Domain",
  region: "Region",
  date: "Date",
  start: "Start Time",
  end: "End Time",
  duration: "5 min 2 sec",
  status: "lead",
}));

const data: DataType[] = dataArray;

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CustomTable: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Table: {
          headerBg: "#E3F0FF",
          headerBorderRadius: 25,
        },
      },
    }}
  >
    {" "}
    <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
  </ConfigProvider>
);

export default CustomTable;
