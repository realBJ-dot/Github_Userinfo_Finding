import requestInfo from './model/parse_profile';
test('test getting createdAt correct info', () => {
    const created = requestInfo('realBJ-dot').createdAt
    expect(created).toBe("2019-12-01T22:08:31Z");
});
test('test getting email correct info', () => {
    const created = requestInfo('realBJ-dot').email
    expect(created).toBe("");
});
test('test getting userName correct info', () => {
    const created = requestInfo('realBJ-dot').userName
    expect(created).toBe("BarneyJin");
});
test('test getting user login correct info', () => {
    const created = requestInfo('realBJ-dot').userLogin
    expect(created).toBe("realBJ-dot");
});
test('test getting email correct info', () => {
    const created = requestInfo('realBJ-dot').email
    expect(created).toBe("");
});
test('test getting avatar correct info', () => {
    const created = requestInfo('realBJ-dot').avatar
    expect(created).toBe("https://avatars.githubusercontent.com/u/58403870?v=4");
});



