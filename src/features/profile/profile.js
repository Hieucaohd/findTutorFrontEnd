import { server_name } from "../../namespace";

export const getParentProfile = async ({id}) => {
    try {
        const response = await fetch(`${server_name}/findTutor/parentDetail/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.log("Failed to get parent profile : ", error)
    }
}

export const getTutorProfile = async ({id}) => {
    try {
        const response = await fetch(`${server_name}/findTutor/tutorDetail/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.log("Failed to get tutor profile : ", error)
    }
}

export const formatBirthDay = (birthday) => {
  if(!birthday || birthday.length === 0) return "";
  const newBirthDay = `${birthday.slice(-2)}-${birthday.slice(5,7)}-${birthday.slice(0,4)}`
  return newBirthDay;
}