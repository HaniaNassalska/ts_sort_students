
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const ascOrDesc = order === 'asc';

  if (sortBy === SortType.Name) {
    return ascOrDesc
      ? studentsCopy.sort((a, b) => a.name.localeCompare(b.name))
      : studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    return ascOrDesc
      ? studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname))
      : studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    return ascOrDesc
      ? studentsCopy.sort((a, b) => a.age - b.age)
      : studentsCopy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married) {
    return ascOrDesc
      ? studentsCopy.sort((a, b) => Number(a.married) - Number(b.married))
      : studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
  }

  const avrageGrades
    = (arr: number[]): number => arr
      .reduce((sum: number, grade: number) => sum + grade, 0) / arr.length;

  return ascOrDesc
    ? studentsCopy
      .sort((a, b) => (avrageGrades(a.grades)) - (avrageGrades(b.grades)))
    : studentsCopy
      .sort((a, b) => (avrageGrades(b.grades)) - (avrageGrades(a.grades)));
}
