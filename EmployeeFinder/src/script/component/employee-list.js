import './employee-item.js';
     
class EmployeeList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set employees(employees) {
    this._employees = employees;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '' ;
    this._employees.forEach(employee => {
      const employeeItemElement = document.createElement('employee-item');
      employeeItemElement.employee = employee;
      this.shadowDOM.appendChild(employeeItemElement);
    });
  }
}
 
customElements.define('employee-list', EmployeeList);