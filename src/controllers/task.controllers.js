import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { SubTask } from "../models/subtask.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";


const getTasks = asyncHandler(async (req, res) => {
    //chaiCode
});

const createTask = asyncHandler(async (req, res) => {
  //chaiCode
});

const getTaskById = asyncHandler(async (req, res) => {
  //chaiCode
});

const updateTask = asyncHandler(async (req, res) => {
  //chaiCode
});

const deleteTask = asyncHandler(async (req, res) => {
  //chaiCode
});

const createSubTask = asyncHandler(async (req, res) => {
  //chaiCode
});

const updateSubTask = asyncHandler(async (req, res) => {
  //chaiCode
});

const deleteSubTask = asyncHandler(async (req, res) => {
  //chaiCode
});

export {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  createSubTask,
  updateSubTask,
  deleteSubTask,
};