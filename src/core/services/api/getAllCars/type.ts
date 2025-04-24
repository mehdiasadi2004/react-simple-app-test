export interface ICarsDetails {
  courseId: string; // شناسه دوره
  courseTitle: string; // عنوان دوره
  describe: string; // توضیحات دوره
  favoriteId: string; // شناسه علاقه‌مندی
  lastUpdate: string; // تاریخ آخرین به‌روزرسانی
  levelName: string; // سطح دوره
  teacheName: string; // نام مدرس
  teacherId: number; // شناسه مدرس
  tumbImageAddress: string; // آدرس تصویر دوره
  typeName: string; // نوع دوره
}
export interface CarsDto {
  cars: ICarsDetails[];
  totalCount: number;
}
