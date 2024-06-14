import React, { useEffect, useState } from "react";

import "./TransporterDataTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TransporterDataTable = ({ clientDataArray }) => {
  const [activeState, setActiveState] = useState("ACTIVE");

  let initialDataArray = clientDataArray.filter(
    (object) => object.status === activeState
  );

  useEffect(() => {
    initialDataArray = clientDataArray.filter(
      (object) => object.status === activeState
    );
    setClientDataArray(initialDataArray);
  }, [activeState]);

  const [dataArray, setClientDataArray] = useState(initialDataArray);
  return (
    <div>
      <Table className="text">
        <TableHeader className="bg-cyan-50">
          <TableRow>
            <TableHead className="w-[100px] text-center">STATUS</TableHead>
            <TableHead className="text-center text-xs">USER ID</TableHead>
            <TableHead className="text-center text-xs">EMAIL ADDRESS</TableHead>
            <TableHead className="text-center text-xs w-[100px]">
              FIRST NAME
            </TableHead>
            <TableHead className="text-center text-xs w-[100px]">
              LAST NAME
            </TableHead>
            <TableHead className="text-center text-xs">USER ROLE</TableHead>
            <TableHead className="text-center text-xs">EXPIRY BY</TableHead>
            <TableHead className="text-center text-xs">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableRow className="text-center ">
          <DropdownMenu>
            <DropdownMenuTrigger className="dropdown-title">
              {activeState}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setActiveState(
                    activeState === "ACTIVE" ? "INACTIVE" : "ACTIVE"
                  );
                  setClientDataArray(initialDataArray);
                }}>
                {activeState === "ACTIVE" ? "INACTIVE" : "ACTIVE"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableRow>

        <TableBody>
          {dataArray.map((element) => (
            <TableRow className="text-sm wrapper" key={element.user_id}>
              <TableCell
                className={`text-xs text-center cell cell-padding ${
                  activeState === "ACTIVE" ? "color-active" : "color-inactive"
                }`}>
                {element.status}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.user_id}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.email}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.first_name}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.last_name}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.user_role}
              </TableCell>
              <TableCell className="text-xs text-center cell-padding">
                {element.expiry_by}
              </TableCell>
              <TableCell className="cell-padding">
                <button>Actions</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransporterDataTable;
