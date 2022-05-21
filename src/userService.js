const axios = require("axios");
export async function getAllMessages() {
  try {
    let res = await axios.get("http://localhost:8000/api/message/list");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function sendMessage(data) {
  try {
    const res = axios.post("http://localhost:8000/api/message", data);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getOtp(data) {
  let res = await axios.post("http://localhost:8000/api/get-otp", data);
  return res.data;
}
export async function registerUser(data) {
  try {
    const res = await axios.post("http://localhost:8000/api/user", data);
    return res.data;
  } catch (err) {
    return [];
  }
}

export async function isRegistered(data) {
  try {
    const res = await axios.post("http://localhost:8000/api/checkuser", data);
    if (res.data.message == "clean") {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

export async function getUser() {
  try {
    let res = await axios.get("http://localhost:8000/api/getUser");
    return res.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function updateUser(data) {
  try {
    let res = await axios.post("http://localhost:8000/api/updateUser", data);
    return res.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}
