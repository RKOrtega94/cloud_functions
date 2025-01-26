export class ResponseModel {
  constructor(
    public status: number,
    public message: string,
    public data: any
  ) {}
}
