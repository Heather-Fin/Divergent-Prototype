import { createContext } from 'react';
import employees from './data/employees';

const EmployeeContext = createContext([employees, () => {} ])

export default EmployeeContext;