import api from '../config/api';

export class ReviewsApiService {
  static async getCourseNames(): Promise<string[]> {
    try {
      const response = await api.get<string[]>('/get-course-names');
      return response.data;
    } catch (error: any) {
      console.error('Error fetching course names:', error);
      return [];
    }
  }
}
