const Project = require("../project");
const Org = require("../org");
const mongoose = require("mongoose");

describe("Org model", () => {
  test("removes projects when org is remove", async () => {
    //creating organization
    const org = await Org.create({ name: "org" });
    //creating projects for that organization
    await Project.create([
      { name: "project1", org: org.id },
      { name: "project", org: org.id }
    ]);
    //removing organization
    await org.remove();
    //after removing the org we should have the length of 0 for the project of that organization
    const matchedProjects = await Project.find({ org: org._id }).exec();
    expect(matchedProjects).toHaveLength(0);
  });
});
