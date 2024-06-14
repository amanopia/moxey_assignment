import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import FormComponent from "../FormComponent/FormComponent";
import clientDataArray from "@/assets/initialSeedData";
import TransporterDataTable from "../TransporterDataTable/TransporterDataTable";

const Wrapper = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [countryData, setCountryData] = useState([]); // an empty object so that program won't crash while lopping over undefined
  const [customerData, setCustomerData] = useState(clientDataArray);
  console.log(customerData);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,idd"
      );
      const data = await response.json();
      setCountryData(data);
    };
    fetchCountryData();
  }, []);

  function toggler() {
    setIsDrawerOpen((prev) => !prev);
  }

  function customerDataGetter(customerData) {
    console.log(customerData);
    setCustomerData(customerData);
  }

  //   // Cloning
  //   const childrenWithProps = React.Children.map(children, (child) => {
  //     if (React.isValidElement(child)) {
  //       return React.cloneElement(child, { customerData });
  //     }
  //     return child;
  //   });
  return (
    <div className="p-4">
      <h1 className="text-[2rem] font-medium mb-6">Settings</h1>
      <div className="flex justify-between mb-5">
        <h2>Users List</h2>
        <button
          className="bg-green-500 px-4 py-1 rounded-md font-medium text-white"
          onClick={toggler}>
          + Add New User
        </button>
      </div>
      <TransporterDataTable
        clientDataArray={customerData}></TransporterDataTable>
      <FormComponent
        countryData={countryData}
        isDrawerOpen={isDrawerOpen}
        customerDataGetter={customerDataGetter}
        toggler={toggler}></FormComponent>
    </div>
  );
};

export default Wrapper;
