//Get project.md files, extract and export data

const fs = require("fs");
const fm = require("front-matter");
const marked = require("marked");

const files = fs.readdirSync("projects");

const projects = [];

files.forEach(file => {
  const content = fs.readFileSync(`projects/${file}`, { encoding: "utf-8" });

  const { body, ...frontMater } = fm(content);

  const html = marked(body);
  projects.push({ html, ...frontMater.attributes });
});

// for (let i = 0; i < files.length; i++) {
//   const content = fs.readFileSync(`projects/${files[i]}`, { encoding: "utf-8" });

//   const { body, ...frontMater } = fm(content);

//   const html = marked(body);
//   projects.push({ html, ...frontMater.attributes });

// }

export default projects;