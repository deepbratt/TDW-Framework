function dateCreator() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let arr = [];
  for (let i = 1960; i <= currentYear; i++) {
    arr.push(i.toString());
  }
  return arr;
}

const onlyYears = dateCreator();

export default onlyYears;

export const extractError = (response: any) => {
  return {
    status: 'Error',
    message: response.response.data.message
  };
};
