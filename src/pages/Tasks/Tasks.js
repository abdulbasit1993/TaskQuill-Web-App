import React, { useState, useEffect } from "react";
import "./Tasks.css";
import moment from "moment";
import Header from "../../components/Header/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../services/apiService";
import { GET_TASKS } from "../../constants/apiEndpoints";

const TaskTable = ({ data }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>

          {data.map((item, index) => (
            <tr key={index}>
              <td>{item?.title}</td>
              <td>{item?.description}</td>
              <td>{moment(item?.dueDate).format("dddd, DD MMMM YYYY")}</td>
              <td>{item?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tasks = () => {
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState([]);
  console.log("tastaskData ===>>> ", taskData);

  const temp_token = localStorage.getItem("token");
  const token = JSON.parse(temp_token);

  const getUserTasks = async () => {
    try {
      const response = await apiService.getCall(GET_TASKS, token);
      console.log("response data tasks ===>> ", response);
      setTaskData(response?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (token) {
      getUserTasks();
    }
  }, [token]);

  useEffect(() => {}, [taskData]);

  return (
    <Box m="20px" sx={{ backgroundColor: "#151828" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Header title="TASKS" subtitle="" />

        <Button
          variant="outlined"
          sx={{ color: "#FFF", border: "1px solid #FFF" }}
          onClick={() => navigate("/tasks/add")}
        >
          Add Task
        </Button>
      </Box>

      <Box>
        {taskData?.length > 0 ? (
          <TaskTable data={taskData} />
        ) : (
          <Box>
            <Typography
              variant="h4"
              color={"#fff"}
              fontWeight="bold"
              sx={{ mb: "5px" }}
            >
              No Tasks Added
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Tasks;
