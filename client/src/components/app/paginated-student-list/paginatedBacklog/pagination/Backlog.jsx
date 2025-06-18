export function Backlog() {
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