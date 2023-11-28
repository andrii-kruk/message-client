import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const $instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3030/api",
});

$instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const signIn = createAsyncThunk("auth/sign-in", async (user, thunkAPI) => {
  try {
    const { data } = await $instance.post("/sign-in", user);
    localStorage.setItem("token", data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk("auth/sign-up", async (user, thunkAPI) => {
  try {
    const { data } = await $instance.post("/sign-up", user);
    localStorage.setItem("token", data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signOut = createAsyncThunk("auth/sign-out", async (_, thunkAPI) => {
  try {
    await $instance.post("/sign-out");
    localStorage.setItem("token", "");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrent = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  try {
    const { data } = await $instance.get("/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
