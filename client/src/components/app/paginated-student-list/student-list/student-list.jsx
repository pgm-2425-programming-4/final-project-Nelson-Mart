export function StudentList({ students }) {
  // TO DO
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <p>{student.attributes.firstName} - {student.attributes.age}</p>
        </li>
      ))}
    </ul>
  );
}
