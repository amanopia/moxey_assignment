import React from "react";
import { useForm } from "react-hook-form";

import clientDataArray from "@/assets/initialSeedData";
// Drawer imports
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

const FormComponent = ({
  isDrawerOpen,
  toggler,
  countryData,
  customerDataGetter,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function generateCustomerId() {
    const prefix = "CUST";
    const fourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    const threeLetterCode = generateRandomLetters(3);
    const randomAlphanumeric = generateRandomAlphanumeric(6);
    return `${prefix}-${fourDigitNumber}-${threeLetterCode}-${randomAlphanumeric}`;
  }

  function generateRandomLetters(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateRandomAlphanumeric(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const onSubmit = (data) => {
    data.user_id = generateCustomerId();
    clientDataArray.push(data);
    console.log(clientDataArray);
    customerDataGetter(clientDataArray);

    const noErrors = Object.keys(errors).length === 0;

    if (noErrors) {
      toggler();
    }
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* // Call country via API */}
      {/* COUNTRIES */}
      <div className="flex gap-2 flex-col">
        <label htmlFor="Country">Country</label>
        <select
          id="country"
          {...register("country", { required: "Required Field" })}
          className="p-2 border-slate-300 border-2 rounded-md">
          {countryData.map((country) => {
            return (
              <option value={country.name.common}>{country.name.common}</option>
            );
          })}
        </select>
        <p className="text-red-600">{errors.country?.message}</p>
      </div>
      {/* USER ROLE */}
      <div className="flex gap-2 flex-col mt-10">
        <label htmlFor="user_role">User Role</label>
        <select
          id="user_role"
          {...register("user_role", { required: "Required Field" })}
          className="p-2 border-slate-300 border-2 rounded-md">
          <option value="Head cashier">Head Cashier</option>
          <option value="Assistant Manager">Assistant Manager</option>
          <option value="Sales Representative">Sales Representative</option>
        </select>
        <p className="text-red-600">{errors.user_role?.message}</p>
      </div>
      {/* SUPERVISOR */}
      <div className="flex gap-2 flex-col mt-10">
        <label htmlFor="supervisor">Supervisor</label>
        <select
          id="supervisor"
          className="flex gap-2 flex-col p-2 border-slate-300 border-2 rounded-md"
          {...register("supervisor", { required: "Required Field" })}>
          <option value="Adit Mala">Adit Mala</option>
          <option value="Raj Viru">Raj Viru</option>
          <option value="Sahil Gupta">Sahil Gupta</option>
        </select>
        <p className="text-red-600">{errors.supervisor?.message}</p>
      </div>
      {/* ACTIVE STATUS */}
      <div className="flex gap-2 flex-col mt-10">
        <label htmlFor="status">Active Status</label>
        <select
          id="status"
          className="flex gap-2 flex-col p-2 border-slate-300 border-2 rounded-md"
          {...register("status", { required: "Required Field" })}>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
        <p className="text-red-600">{errors.status?.message}</p>
      </div>

      {/* NAMES */}
      <div className="flex gap-2 mt-10">
        {/* FIRST NAME */}
        <div className="flex flex-col gap-2 w-full">
          <label>First Name</label>
          <input
            type="text"
            {...register("first_name", { required: "Required Field" })}
            className="border-2 border-slate-300 p-2"
          />
          <p className="text-red-600">{errors.first_name?.message}</p>
        </div>

        {/* LAST NAME */}
        <div className="flex flex-col gap-2 w-full">
          <label>Last Name</label>
          <input
            type="text"
            {...register("last_name", { required: "Required field" })}
            className="border-2 border-slate-300 p-2"
          />
          <p className="text-red-600">{errors.last_name?.message}</p>
        </div>
      </div>

      {/*  MOBILE NUMBER */}
      <div className="flex flex-col gap-2 mt-10">
        <label>Mobile Number</label>
        <input
          type="text"
          {...register("mobile_number", {
            required: "Enter Mobile Number",
          })}
          className="border-2 border-slate-300 p-2"
        />
        <p className="text-red-600">{errors.mobile_number?.message}</p>
      </div>

      {/*  EMAIL */}
      <div className="flex flex-col gap-2 mt-10">
        <label>Email</label>
        <input
          type="text"
          {...register("email", { required: "Required Field" })}
          className="border-2 border-slate-300 p-2"
        />
        <p className="text-red-600">{errors.email?.message}</p>
      </div>

      <div className="flex gap-2 mt-10">
        {/* CARD LOAD LIMIT */}
        <div className="flex flex-col gap-2 w-full">
          {" "}
          <label>Card Load Limit</label>
          <input
            type="number"
            {...register("card_load_limit", {
              required: "Required Field",
            })}
            className="border-2 border-slate-300 p-2"
          />
          <p className="text-red-600">{errors.card_load_limit?.message}</p>
        </div>

        {/*  PAYMENTN LIMIT*/}
        <div className="flex flex-col gap-2 w-full">
          <label>Payment Limit</label>
          <input
            type="number"
            {...register("payment_limit", {
              required: "Required Field",
            })}
            className="border-2 border-slate-300 p-2"
          />
          <p className="text-red-600">{errors.payment_limit?.message}</p>
        </div>
      </div>

      {/* SUBMIT */}
      <div className="flex gap-4">
        <input
          type="submit"
          className="bg-green-500 px-4 py-1 rounded-md font-medium text-white mt-10 cursor-pointer"
          value="+ Add User"
        />
        <button
          className="bg-slate-100 px-4 py-1 rounded-md font-medium mt-10"
          onClick={(event) => {
            event.preventDefault();
            toggler();
          }}>
          Cancel
        </button>
      </div>
    </form>
  );
  return (
    <div>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggler}
        className="p-4">
        <CloseIcon onClick={toggler} className="cursor-pointer"></CloseIcon>
        <Box p={2} width="500px" role="presentation">
          {form}
        </Box>
      </Drawer>
    </div>
  );
};

export default FormComponent;
