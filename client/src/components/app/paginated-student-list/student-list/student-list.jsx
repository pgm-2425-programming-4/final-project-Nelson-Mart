export function StudentList({ students }) {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          <p>
            {student.firstName} - {student.age}
          </p>
        </li>
      ))}
    </ul>
  );
}