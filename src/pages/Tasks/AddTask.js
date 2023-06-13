import React, { forwardRef, useState } from "react";
import { apiService } from "../../services/apiService";
import { BASE_URL } from "../../constants/apiUrl";
import { ADD_TASK } from "../../constants/apiEndpoints";
import { Box, Button, TextField, DateInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header/Header";
import DatePicker from "react-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "./AddTask.css";

const temp_token = localStorage.getItem("token");
const token = JSON.parse(temp_token);

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });
  console.log(" file: AddTask.js:18 ~ AddTask ~ inputData:", inputData);

  const handleSubmit = async () => {
    console.log("selected date is ==>> ", selectedDate.toISOString());

    const dataObj = {
      title: inputData?.title,
      description: inputData?.description,
      dueDate: selectedDate.toDateString(),
    };

    try {
      if (inputData?.title == "") {
        toast("Please enter a title", { type: "error" });
        return;
      }

      if (inputData?.description == "") {
        toast("Please enter a description", { type: "error" });
        return;
      }

      const response = await apiService.postCall(ADD_TASK, dataObj, token);

      console.log("response data addTask ==>> ", response);
    } catch (err) {
      console.log(err);
    }
  };

  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#FFF",
    },
    "& input": {
      color: "#FFF",
    },
    "& label": {
      color: "#FFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFF",
    },
    "& .MuiOutlinedInput-root": {
      "& label": {
        color: "#FFF",
      },
      "& fieldset": {
        borderColor: "#FFF",
        color: "#FFF !important",
      },
      "&:hover fieldset": {
        borderColor: "#FFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFF",
      },
    },
  });

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date-input" onClick={onClick} ref={ref}>
      <CalendarMonthIcon sx={{ mr: 1 }} />
      {value}
    </button>
  ));

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={6}
      >
        <Header title="ADD TASK" subtitle="" />
      </Box>

      <Box display="flex" sx={{ flexDirection: "column", width: "40%" }}>
        <p style={{ margin: 0, padding: 0, marginBottom: 10, color: "#FFF" }}>
          Title:
        </p>
        <input
          type="text"
          id="title"
          name="title"
          className="input-box"
          onChange={handleInputChange}
        />

        <Box sx={{ m: 3 }}></Box>

        <p style={{ margin: 0, padding: 0, marginBottom: 10, color: "#FFF" }}>
          Description:
        </p>
        <input
          type="text"
          id="description"
          name="description"
          className="input-box"
          onChange={handleInputChange}
        />

        <Box sx={{ m: 3 }}></Box>

        <p style={{ margin: 0, padding: 0, marginBottom: 10, color: "#FFF" }}>
          Due Date:
        </p>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          customInput={<CustomDateInput />}
        />

        <Box sx={{ m: 3 }}></Box>

        <Box>
          <Button
            sx={{ color: "#FFF", border: "1px solid #FFF", width: "30%" }}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTask;
