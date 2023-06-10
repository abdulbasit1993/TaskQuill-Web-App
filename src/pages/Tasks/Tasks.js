import React, { useEffect } from "react";
import "./Tasks.css";
import moment from "moment";
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserTasks } from "../../redux/actions/taskAction";

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
  const dispatch = useDispatch();

  const token = useSelector((state) => state.loginReducer.data.token);

  const taskData = useSelector((state) => state.taskReducer.data);

  useEffect(() => {
    dispatch(getUserTasks(token));
  }, []);

  return (
    <Box m="20px" sx={{ backgroundColor: "#151828" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TASKS" subtitle="" />
      </Box>

      <Box>
        {taskData?.data?.length > 0 ? (
          <TaskTable data={taskData?.data} />
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
