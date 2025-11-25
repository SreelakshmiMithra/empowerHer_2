function evaluateEmployees(employees) {
  //  Filter employees with more than 5 tasks
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  //  Map to name + performance + keep rating
  const mapped = filtered.map(emp => {
    let performance;

    if (emp.rating > 4.5) performance = "Excellent";
    else if (emp.rating >= 3 && emp.rating <= 4.5) performance = "Good";
    else performance = "Needs Improvement";

    return { name: emp.name, performance, rating: emp.rating };
  });

  const removeLow = mapped.filter(emp => emp.performance !== "Needs Improvement");

  
  const priority = {
    "Excellent": 1,
    "Good": 2,
    "Needs Improvement": 3
  };

  const sorted = removeLow.sort((a, b) => {
    if (priority[a.performance] !== priority[b.performance]) {
      return priority[a.performance] - priority[b.performance];
    }
    return b.rating - a.rating;  
  });

  return sorted.map(({ name, performance }) => ({ name, performance }));
}


const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));


