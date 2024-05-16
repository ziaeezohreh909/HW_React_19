interface userInfoType {
  name: string;
  family: string;
  mobile: string;
  relative: string;
  mail: string;
}

export const postUserData = async (userInfo: userInfoType) => {
  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInfo.name,
        family: userInfo.family,
        mobile: userInfo.mobile,
        relative: userInfo.relative,
        mail: userInfo.mail,
      }),
    });
    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export const getUserData = async () => {
  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
