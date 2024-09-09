import { TERMS } from "./constants";

export const extractCourseNumbers = (subjectCodes) => {
  return subjectCodes.map((courseCode) => {
    const parts = courseCode.split(" ");
    const lastPart = parts[parts.length - 1];
    const number = parseInt(lastPart);
    return isNaN(number) ? 0 : number;
  });
};

export function getNextTerm(startTerm) {
  const currentIndex = TERMS.findIndex((term) => term.value === startTerm);
  if (currentIndex === -1) {
    throw new Error("Invalid start term");
  }
  const nextIndex = (currentIndex + 1) % TERMS.length;
  const nextTerm = TERMS[nextIndex].value;
  return nextTerm;
}
export const toSentenceCase = (str) => {
  return str?.charAt(0).toUpperCase() + str.slice(1);
};

export const getTermLabel = (value) => {
  const term = TERMS.find((term) => term.value === value);
  return term ? term.label : null;
};

export const getNextYears = (count) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < count; i++) {
    years.push({ label: currentYear + i, value: currentYear + i });
  }
  return years;
};

export const abbreviateTerm = (term) => {
  switch (term.toLowerCase()) {
    case "fall":
      return "F";
    case "spring":
      return "S";
    case "summer":
      return "X";
    default:
      return term;
  }
};
