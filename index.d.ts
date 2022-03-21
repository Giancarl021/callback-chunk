type Nullable<T> = T | null;
type Logger = Nullable<(message: string) => void | Promise<void>>;

declare function chunk<T = void>(callbacks: (() => Promise<T>)[], ticks: number, logger?: Logger): Promise<T[]>;
export = chunk;
