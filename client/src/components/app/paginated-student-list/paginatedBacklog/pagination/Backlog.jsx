export function Backlog() {
  const tasks = [
    "Create pipeline with Github Actions",
    "Release v1.0",
    "Set up Strapi on Render",
    "Initialize Git repository on Github",
    "Document data model",
    "Add formatting with Prettier",
    "Add listing with ESLint",
    "Add installation steps to readme",
    "Implement static design",
    "Set-up React project for automatic deployment on Vercel",
  ];

  return (
    <table className="backlog-table">
      <thead>
        <tr>
          <th>Backlog for PGM3</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr key={i}>
            <td>{task}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}