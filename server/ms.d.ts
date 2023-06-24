declare module 'ms' {
  type Unit =
    | 'Years'
    | 'Year'
    | 'Yrs'
    | 'Yr'
    | 'Y'
    | 'Weeks'
    | 'Week'
    | 'W'
    | 'Days'
    | 'Day'
    | 'D'
    | 'Hours'
    | 'Hour'
    | 'Hrs'
    | 'Hr'
    | 'H'
    | 'Minutes'
    | 'Minute'
    | 'Mins'
    | 'Min'
    | 'M'
    | 'Seconds'
    | 'Second'
    | 'Secs'
    | 'Sec'
    | 's'
    | 'Milliseconds'
    | 'Millisecond'
    | 'Msecs'
    | 'Msec'
    | 'Ms';

  type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;

  export type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;

  interface Options {
    /**
     * Set to `true` to use verbose formatting. Defaults to `false`.
     */
    long?: boolean;
  }

  /**
   * Parse or format the given value.
   *
   * @param value - The string or number to convert
   * @param options - Options for the conversion
   * @throws Error if `value` is not a non-empty string or a number
   */
  declare function msFn(value: StringValue, options?: Options): number;

  /**
   * Parse the given `value` and return milliseconds.
   *
   * @param {StringValue} value
   * @return {Number}
   */
  declare function msFn(value: number, options?: Options): string;

  export default msFn;
}
