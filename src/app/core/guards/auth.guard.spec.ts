import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    let mockauthService: any;
    let mockRouter: any;
    guard = new AuthGuard(mockauthService, mockRouter);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
