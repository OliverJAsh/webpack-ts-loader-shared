export const shared = 'shared';

// This should be type checked against both TS configs.
// "browser" has enabled "noImplicitAny", so this should fail for "browser", but pass for
// "service-worker".
const fn = (a) => {

}
