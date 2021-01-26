import * as actions from '../authActions';

const testData = {
  userId: 'test',
  email: 'test@gmail.com',
};

describe('authActions', () => {
  it('should create an action setAuthUserData ', () => {
    const expectedAction = {
      type: 'SET_USER_DATA',
      payload: testData,
    };
    expect(actions.setAuthUserData(testData.userId, testData.email)).toEqual(expectedAction);
  });

  it('should create an action cleanAuthUserData ', () => {
    const expectedAction = {
      type: 'CLEAN_USER_DATA',
    };
    expect(actions.cleanAuthUserData()).toEqual(expectedAction);
  });
});
