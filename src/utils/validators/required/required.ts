import { ValidatorFn } from "../types"

export const required: ValidatorFn<unknown, boolean> = (value) => value !== '';