export class TestService {
  private testParam: number;

  constructor(testParam: number) {
    this.testParam = testParam;
  }

  public getTestParam(): number {
    return this.testParam;
  }

  public setTestParam(testParam: number) {
    this.testParam = testParam;
  }

  public increaseTestParam(increaseAmount: number) {
    this.setTestParam(this.getTestParam() + increaseAmount);
  };

  public testServiceFunc(testParam: string): string {
    this.increaseTestParam(1);

    const result = testParam + this.testParam;
    return result;
  }
}
