// Employee Interface
interface Employee {
  name: string;
  baseSalary: number;
  experience: number;
  rating: number;
}

// Employee Data
const employees: Employee[] = [
  { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
  { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
  { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
  { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
  { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

// Map to store Employee Name and Hike Percentage
const hikeMap: Map<string, number> = new Map();

for (const emp of employees) {
  let variablePayPercent = 0;
  let bonus = 0;
  let reward = 0;

  // Determine Variable Pay % and Bonus based on Rating
  if (emp.rating >= 4.0) {
    variablePayPercent = 15;
    bonus = 1500;
  } else if (emp.rating >= 3 && emp.rating < 4) {
    variablePayPercent = 10;
    bonus = 1200;
  } else {
    variablePayPercent = 3;
    bonus = 300;
  }

  // Extra Reward for Experience >= 5 years
  if (emp.experience >= 5) {
    reward = 5000;
  }

  // Calculate Hike Amount
  const hike =
    (emp.baseSalary * variablePayPercent) / 100 +
    bonus +
    reward;

  // Calculate Hike Percentage
  const hikePercentage = (hike / emp.baseSalary) * 100;

  // Store in Map
  hikeMap.set(emp.name, Number(hikePercentage.toFixed(2)));
}

// Print Map Values
console.log("Employee Hike Percentages:");

for (const [name, hikePercentage] of hikeMap) {
  console.log(`${name} = ${hikePercentage}%`);
}

