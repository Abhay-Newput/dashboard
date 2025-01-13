import { Table } from "@chakra-ui/react";
// import items from "./constant";
import { useQuery } from "@tanstack/react-query";
import { fetchTableData } from "../../api/api";

const DashboardTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tableData'],
    queryFn: fetchTableData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" h={'300px'} >
        <Table.Root  size="sm" interactive border="2px solid #E2E8F0" showColumnBorder>
        <Table.Header>
            <Table.Row >
            <Table.ColumnHeader p={'16px'}>Name</Table.ColumnHeader>
            <Table.ColumnHeader p={'16px'}>Progress</Table.ColumnHeader>
            <Table.ColumnHeader p={'16px'}>Quantity</Table.ColumnHeader>
            <Table.ColumnHeader p={'16px'} textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {data.map((item) => (
            <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.progress}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>
        </Table.Root>
    </Table.ScrollArea>
  )
}


export default DashboardTable;