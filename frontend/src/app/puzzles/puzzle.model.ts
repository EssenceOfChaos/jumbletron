export class Puzzle {
  constructor(
    public question: string,
    public words: Array<string>,
    public answer?: string,
    public _id?: number,
    public updatedAt?: Date,
    public createdAt?: Date,
    public lastUpdatedBy?: string
  ) {}
}
