export class DateUtils {
  public static convertStringToIsoDate(originalDate: string): string {
    return new Date(originalDate).toISOString();
  }

  public static convertDate(originalDate: string): string {
    const breakPosition = originalDate.indexOf('T');
    return originalDate.substring(0, breakPosition);
  }
}
