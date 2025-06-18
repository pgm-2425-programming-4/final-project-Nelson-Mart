export function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}