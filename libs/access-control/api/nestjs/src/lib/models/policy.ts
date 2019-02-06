export class Policy {
  constructor(
    private readonly description: string,
    private readonly permissions: string[] = []
  ) {}
}
