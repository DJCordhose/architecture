import { NgrxSandboxModule } from './ngrx-sandbox.module';

describe('NgrxSandboxModule', () => {
  let ngrxSandboxModule: NgrxSandboxModule;

  beforeEach(() => {
    ngrxSandboxModule = new NgrxSandboxModule();
  });

  it('should create an instance', () => {
    expect(ngrxSandboxModule).toBeTruthy();
  });
});
