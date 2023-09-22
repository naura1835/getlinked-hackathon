export default function validateInfo(values) {
  let newErrors = {};
  let valid = true;

  if (!values.email) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    newErrors.email = "Email is incorrect";
    valid = false;
  }
  if (!values.phoneNo) {
    newErrors.phoneNo = "Phone Number is required";
    valid = false;
  }
  if (!values.teamName.trim()) {
    newErrors.teamName = "Enter team Name";
    valid = false;
  }
  if (!values.topic) {
    newErrors.topic = "Enter topic";
    valid = false;
  }
  if (!values.messgae) {
    newErrors.message = "Message is empty";
    valid = false;
  }

  return { newErrors, valid };
}
