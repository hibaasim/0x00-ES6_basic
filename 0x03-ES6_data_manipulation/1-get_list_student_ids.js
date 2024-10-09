/**
 * Retrieves ids from a list of students.
 *
 * @param {array} students - The list of students.
 * @return {array} List of IDs
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
