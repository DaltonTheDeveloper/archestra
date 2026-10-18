// Mirrors archestra#8572: personal agents shared via agent_user are dropped from the picker
// because the filter only keeps agents the user authored. Keep authored OR shared-with-user agents.
export function filterAndSortInitialAgents(agents, userId) {
  return agents.filter((a) => a.authorId === userId);
}
