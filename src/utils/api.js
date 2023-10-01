export const submitToApi = async (raw, url, method = "POST") => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: method,
    headers: myHeaders,
    ...(method == "POST" && { body: raw }),
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("error", error);
  }
};
