import { getCourseNames } from '../database/commands';

export class GetCourseNamesService {
  async getCourseNames(): Promise<string[]> {
    const result = await getCourseNames();
    return result.map((row) => row.nome_curso.trim());
  }
}
