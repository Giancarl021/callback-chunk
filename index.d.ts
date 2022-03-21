type Nullable<T> = T | null;
type Logger = Nullable<(message: string) => void | Promise<void>>;

type Callbacks<T> = (() => Promise<T[] | void>)[];

declare function chunk<T = void>(callbacks: (() => Promise<T>)[], ticks: number, logger?: Logger): Promise<T[]>;
export = chunk;
