import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TransporterDataTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>STATUS</TableHead>
            <TableHead>USER ID</TableHead>
            <TableHead>EMAIL ADDRESS</TableHead>
            <TableHead>FIRST NAME</TableHead>
            <TableHead>LAST NAME</TableHead>
            <TableHead>USER ROLE</TableHead>
            <TableHead>EXPIRY BY</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default TransporterDataTable;
