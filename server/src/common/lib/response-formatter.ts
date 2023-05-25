export class ResponseFormatter {
  public static success(
    message = 'request was successful',
    data: object | null = null,
    pagination: Record<string, unknown> | null = null,
  ) {
    return {
      status: 'success',
      message,
      data,
      pagination: pagination || undefined,
    };
  }
}
