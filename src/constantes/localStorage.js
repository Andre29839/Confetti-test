export const handleChange = (e, field) => {
  if (typeof window !== "undefined") {
    let formValues = {};
    const savedValues = localStorage.getItem("formValues");
    if (savedValues) {
      try {
        formValues = JSON.parse(savedValues);
      } catch (e) {
        console.error("Error parsing formValues from localStorage:", e);
      }
    }
    formValues[e.target.name] = e.target.value;
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }
  field.onChange(e);
};
