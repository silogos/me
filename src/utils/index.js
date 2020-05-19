export { default as getAsset } from './getAsset';
export { default as useResponsive } from './useResponsive';

export const flattenStyle = arr => arr.reduce((g, i) => ({ ...g, ...i }), {});
