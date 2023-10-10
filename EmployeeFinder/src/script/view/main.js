import '../component/employee-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const employeeListElement = document.querySelector('employee-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchEmployee(searchElement.value);
      renderResult(result);
    } catch (message) {
      console.log(result)
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    employeeListElement.employees = results;
  };
 
  const fallbackResult = message => {
    employeeListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;