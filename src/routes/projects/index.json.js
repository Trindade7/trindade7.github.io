import projects from './_projects.js';

const contents = JSON.stringify(projects.map(project => {
    return {
      mainTool: project.tags.shift(),
      tags: project.tags,
      title: project.title,
      description: project.description,
      slug: project.slug
    };
  }));

export function get(req, res) {
  res.writeHead(200,{
    'Content-Type': 'application/json'
  });

  res.end(contents);
}