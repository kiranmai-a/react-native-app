/**
 * Created by senthil on 03/01/18.
 */

export const required = value => (value ? undefined : "Required");
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const email = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? "Invalid User Name" : undefined;
export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined;