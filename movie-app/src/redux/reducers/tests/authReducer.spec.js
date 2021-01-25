import authReducer from '../authReducer';

const initialState = { // initialState for SET_USER_DATA
  userId: '',
  email: '',
};

const initialState2 = { // initialState for CLEAN_USER_DATA
  userId: 'something',
  email: 'something@gmail.com',
};

const testData = {
  userId: 'test',
  email: 'test@gmail.com',
};

describe('authReducer SET_USER_DATA', () => { // tests for authReducer SET_USER_DATA
  it('should get with data', () => {
    let state;
    state = authReducer(initialState, {
      type: 'SET_USER_DATA',
      payload: testData,
    });

    expect(state).toEqual(testData);
  });
});

describe('authReducer CLEAN_USER_DATA', () => { // tests for authReducer CLEAN_USER_DATA
  it('should work', () => {
    let state;
    state = authReducer(initialState2, {
      type: 'CLEAN_USER_DATA',
    });
    expect(state.userId).toEqual('');
    expect(state.email).toEqual('');
  });
});

describe('authReducer without initialState', () => { // tests for authReducer without initialState
  it('', () => {
    let state;
    state = authReducer(undefined, {
      type: 'SET_USER_DATA',
      payload: testData,
    });
    expect(state).toEqual(testData);
  });
});

describe('authReducer without action data', () => { // tests for authReducer without action data
  it('', () => {
    let state;
    state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });
});

describe('authReducer with wrong type', () => { // tests for authReducer with wrong type
  it('should dont get', () => {
    let state;
    state = authReducer(initialState, {
      type: 'SET_USER_DATA2',
      payload: testData,
    });

    expect(state).toEqual(initialState);
  });
});
