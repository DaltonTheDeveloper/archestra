import { test } from "node:test";
import assert from "node:assert/strict";
import { filterAndSortInitialAgents } from "./filter-agents.mjs";
const agents = [{ id: 1, authorId: "u1", sharedWith: [] }, { id: 2, authorId: "u2", sharedWith: ["u1"] }, { id: 3, authorId: "u3", sharedWith: [] }];
test("keeps authored", () => assert.ok(filterAndSortInitialAgents(agents, "u1").some((a) => a.id === 1)));
test("keeps shared-with-user", () => assert.ok(filterAndSortInitialAgents(agents, "u1").some((a) => a.id === 2)));
test("drops unrelated", () => assert.ok(!filterAndSortInitialAgents(agents, "u1").some((a) => a.id === 3)));
