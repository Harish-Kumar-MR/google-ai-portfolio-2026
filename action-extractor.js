const extractTasks = (text) => {
  const tasks = text.match(/(?:need to|will|must)\s+([^.!?]+)/gi) || [];
  return tasks.map(t => ({ task: t.trim(), status: 'Pending' }));
};
