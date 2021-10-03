export const getEnvironmentValue = (
  key: string,
  defaultValue?: string,
): string => {
  const envValue = process.env[key] ?? defaultValue;
  if (!envValue) throw new Error(`env variable ${key} should be defined`);

  return envValue;
}
