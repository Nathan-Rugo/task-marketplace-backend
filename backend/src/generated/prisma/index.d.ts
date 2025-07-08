
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskApplications
 * 
 */
export type TaskApplications = $Result.DefaultSelection<Prisma.$TaskApplicationsPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model RevokedToken
 * 
 */
export type RevokedToken = $Result.DefaultSelection<Prisma.$RevokedTokenPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  CREATED: 'CREATED',
  REVIEW: 'REVIEW',
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskApplicationStatus: {
  ACCEPTED: 'ACCEPTED',
  PENDING: 'PENDING',
  DENIED: 'DENIED'
};

export type TaskApplicationStatus = (typeof TaskApplicationStatus)[keyof typeof TaskApplicationStatus]


export const AuthProvider: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TaskPaymentStatus: {
  UNCONFIRMED: 'UNCONFIRMED',
  POSTER_CONFIRMED: 'POSTER_CONFIRMED',
  CONFIRMED: 'CONFIRMED',
  CONFLICT: 'CONFLICT'
};

export type TaskPaymentStatus = (typeof TaskPaymentStatus)[keyof typeof TaskPaymentStatus]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskApplicationStatus = $Enums.TaskApplicationStatus

export const TaskApplicationStatus: typeof $Enums.TaskApplicationStatus

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TaskPaymentStatus = $Enums.TaskPaymentStatus

export const TaskPaymentStatus: typeof $Enums.TaskPaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskApplications`: Exposes CRUD operations for the **TaskApplications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskApplications
    * const taskApplications = await prisma.taskApplications.findMany()
    * ```
    */
  get taskApplications(): Prisma.TaskApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revokedToken`: Exposes CRUD operations for the **RevokedToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevokedTokens
    * const revokedTokens = await prisma.revokedToken.findMany()
    * ```
    */
  get revokedToken(): Prisma.RevokedTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Task: 'Task',
    TaskApplications: 'TaskApplications',
    Review: 'Review',
    RevokedToken: 'RevokedToken',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "task" | "taskApplications" | "review" | "revokedToken" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskApplications: {
        payload: Prisma.$TaskApplicationsPayload<ExtArgs>
        fields: Prisma.TaskApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          findFirst: {
            args: Prisma.TaskApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          findMany: {
            args: Prisma.TaskApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>[]
          }
          create: {
            args: Prisma.TaskApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          createMany: {
            args: Prisma.TaskApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          update: {
            args: Prisma.TaskApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.TaskApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskApplicationsPayload>
          }
          aggregate: {
            args: Prisma.TaskApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskApplications>
          }
          groupBy: {
            args: Prisma.TaskApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<TaskApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      RevokedToken: {
        payload: Prisma.$RevokedTokenPayload<ExtArgs>
        fields: Prisma.RevokedTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevokedTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevokedTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          findFirst: {
            args: Prisma.RevokedTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevokedTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          findMany: {
            args: Prisma.RevokedTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[]
          }
          create: {
            args: Prisma.RevokedTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          createMany: {
            args: Prisma.RevokedTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevokedTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          update: {
            args: Prisma.RevokedTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          deleteMany: {
            args: Prisma.RevokedTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevokedTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevokedTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          aggregate: {
            args: Prisma.RevokedTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevokedToken>
          }
          groupBy: {
            args: Prisma.RevokedTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevokedTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevokedTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RevokedTokenCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    taskApplications?: TaskApplicationsOmit
    review?: ReviewOmit
    revokedToken?: RevokedTokenOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    postedTasks: number
    assignedTasks: number
    taskApplications: number
    reviewsGiven: number
    reviewsReceived: number
    Payment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedTasks?: boolean | UserCountOutputTypeCountPostedTasksArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    taskApplications?: boolean | UserCountOutputTypeCountTaskApplicationsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    Payment?: boolean | UserCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskApplicationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    taskersApplied: number
    reviews: number
    Payment: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskersApplied?: boolean | TaskCountOutputTypeCountTaskersAppliedArgs
    reviews?: boolean | TaskCountOutputTypeCountReviewsArgs
    Payment?: boolean | TaskCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskersAppliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskApplicationsWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
    tasksPosted: number | null
    tasksCompleted: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
    tasksPosted: number | null
    tasksCompleted: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    profilePicture: string | null
    rating: number | null
    tasksPosted: number | null
    tasksCompleted: number | null
    isTasker: boolean | null
    authProvider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    profilePicture: string | null
    rating: number | null
    tasksPosted: number | null
    tasksCompleted: number | null
    isTasker: boolean | null
    authProvider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    phone: number
    password: number
    profilePicture: number
    rating: number
    tasksPosted: number
    tasksCompleted: number
    isTasker: number
    authProvider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
    tasksPosted?: true
    tasksCompleted?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
    tasksPosted?: true
    tasksCompleted?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    profilePicture?: true
    rating?: true
    tasksPosted?: true
    tasksCompleted?: true
    isTasker?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    profilePicture?: true
    rating?: true
    tasksPosted?: true
    tasksCompleted?: true
    isTasker?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    profilePicture?: true
    rating?: true
    tasksPosted?: true
    tasksCompleted?: true
    isTasker?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    phone: string | null
    password: string | null
    profilePicture: string | null
    rating: number
    tasksPosted: number
    tasksCompleted: number
    isTasker: boolean
    authProvider: $Enums.AuthProvider
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profilePicture?: boolean
    rating?: boolean
    tasksPosted?: boolean
    tasksCompleted?: boolean
    isTasker?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedTasks?: boolean | User$postedTasksArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    taskApplications?: boolean | User$taskApplicationsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profilePicture?: boolean
    rating?: boolean
    tasksPosted?: boolean
    tasksCompleted?: boolean
    isTasker?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "phone" | "password" | "profilePicture" | "rating" | "tasksPosted" | "tasksCompleted" | "isTasker" | "authProvider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedTasks?: boolean | User$postedTasksArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    taskApplications?: boolean | User$taskApplicationsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      postedTasks: Prisma.$TaskPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      taskApplications: Prisma.$TaskApplicationsPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      phone: string | null
      password: string | null
      profilePicture: string | null
      rating: number
      tasksPosted: number
      tasksCompleted: number
      isTasker: boolean
      authProvider: $Enums.AuthProvider
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedTasks<T extends User$postedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$postedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskApplications<T extends User$taskApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends User$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly tasksPosted: FieldRef<"User", 'Int'>
    readonly tasksCompleted: FieldRef<"User", 'Int'>
    readonly isTasker: FieldRef<"User", 'Boolean'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.postedTasks
   */
  export type User$postedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.taskApplications
   */
  export type User$taskApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    where?: TaskApplicationsWhereInput
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    cursor?: TaskApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskApplicationsScalarFieldEnum | TaskApplicationsScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.Payment
   */
  export type User$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    offer: number | null
  }

  export type TaskSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    offer: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    offer: number | null
    status: $Enums.TaskStatus | null
    taskerRated: boolean | null
    taskPosterRated: boolean | null
    taskPosterId: string | null
    taskerAssignedId: string | null
    taskPayment: $Enums.TaskPaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    offer: number | null
    status: $Enums.TaskStatus | null
    taskerRated: boolean | null
    taskPosterRated: boolean | null
    taskPosterId: string | null
    taskerAssignedId: string | null
    taskPayment: $Enums.TaskPaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    location: number
    latitude: number
    longitude: number
    offer: number
    status: number
    taskerRated: number
    taskPosterRated: number
    taskPosterId: number
    taskerAssignedId: number
    taskPayment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    offer?: true
  }

  export type TaskSumAggregateInputType = {
    latitude?: true
    longitude?: true
    offer?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    offer?: true
    status?: true
    taskerRated?: true
    taskPosterRated?: true
    taskPosterId?: true
    taskerAssignedId?: true
    taskPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    offer?: true
    status?: true
    taskerRated?: true
    taskPosterRated?: true
    taskPosterId?: true
    taskerAssignedId?: true
    taskPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    offer?: true
    status?: true
    taskerRated?: true
    taskPosterRated?: true
    taskPosterId?: true
    taskerAssignedId?: true
    taskPayment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    location: string
    latitude: number
    longitude: number
    offer: number
    status: $Enums.TaskStatus
    taskerRated: boolean
    taskPosterRated: boolean
    taskPosterId: string
    taskerAssignedId: string | null
    taskPayment: $Enums.TaskPaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    offer?: boolean
    status?: boolean
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId?: boolean
    taskerAssignedId?: boolean
    taskPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskPoster?: boolean | UserDefaultArgs<ExtArgs>
    taskerAssigned?: boolean | Task$taskerAssignedArgs<ExtArgs>
    taskersApplied?: boolean | Task$taskersAppliedArgs<ExtArgs>
    reviews?: boolean | Task$reviewsArgs<ExtArgs>
    Payment?: boolean | Task$PaymentArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    offer?: boolean
    status?: boolean
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId?: boolean
    taskerAssignedId?: boolean
    taskPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "location" | "latitude" | "longitude" | "offer" | "status" | "taskerRated" | "taskPosterRated" | "taskPosterId" | "taskerAssignedId" | "taskPayment" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskPoster?: boolean | UserDefaultArgs<ExtArgs>
    taskerAssigned?: boolean | Task$taskerAssignedArgs<ExtArgs>
    taskersApplied?: boolean | Task$taskersAppliedArgs<ExtArgs>
    reviews?: boolean | Task$reviewsArgs<ExtArgs>
    Payment?: boolean | Task$PaymentArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      taskPoster: Prisma.$UserPayload<ExtArgs>
      taskerAssigned: Prisma.$UserPayload<ExtArgs> | null
      taskersApplied: Prisma.$TaskApplicationsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      location: string
      latitude: number
      longitude: number
      offer: number
      status: $Enums.TaskStatus
      taskerRated: boolean
      taskPosterRated: boolean
      taskPosterId: string
      taskerAssignedId: string | null
      taskPayment: $Enums.TaskPaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskPoster<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskerAssigned<T extends Task$taskerAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskerAssignedArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taskersApplied<T extends Task$taskersAppliedArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskersAppliedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Task$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Task$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Task$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Task$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly category: FieldRef<"Task", 'String'>
    readonly location: FieldRef<"Task", 'String'>
    readonly latitude: FieldRef<"Task", 'Float'>
    readonly longitude: FieldRef<"Task", 'Float'>
    readonly offer: FieldRef<"Task", 'Float'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly taskerRated: FieldRef<"Task", 'Boolean'>
    readonly taskPosterRated: FieldRef<"Task", 'Boolean'>
    readonly taskPosterId: FieldRef<"Task", 'String'>
    readonly taskerAssignedId: FieldRef<"Task", 'String'>
    readonly taskPayment: FieldRef<"Task", 'TaskPaymentStatus'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.taskerAssigned
   */
  export type Task$taskerAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.taskersApplied
   */
  export type Task$taskersAppliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    where?: TaskApplicationsWhereInput
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    cursor?: TaskApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskApplicationsScalarFieldEnum | TaskApplicationsScalarFieldEnum[]
  }

  /**
   * Task.reviews
   */
  export type Task$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Task.Payment
   */
  export type Task$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskApplications
   */

  export type AggregateTaskApplications = {
    _count: TaskApplicationsCountAggregateOutputType | null
    _min: TaskApplicationsMinAggregateOutputType | null
    _max: TaskApplicationsMaxAggregateOutputType | null
  }

  export type TaskApplicationsMinAggregateOutputType = {
    id: string | null
    appliedAt: Date | null
    status: $Enums.TaskApplicationStatus | null
    taskId: string | null
    userId: string | null
  }

  export type TaskApplicationsMaxAggregateOutputType = {
    id: string | null
    appliedAt: Date | null
    status: $Enums.TaskApplicationStatus | null
    taskId: string | null
    userId: string | null
  }

  export type TaskApplicationsCountAggregateOutputType = {
    id: number
    appliedAt: number
    status: number
    taskId: number
    userId: number
    _all: number
  }


  export type TaskApplicationsMinAggregateInputType = {
    id?: true
    appliedAt?: true
    status?: true
    taskId?: true
    userId?: true
  }

  export type TaskApplicationsMaxAggregateInputType = {
    id?: true
    appliedAt?: true
    status?: true
    taskId?: true
    userId?: true
  }

  export type TaskApplicationsCountAggregateInputType = {
    id?: true
    appliedAt?: true
    status?: true
    taskId?: true
    userId?: true
    _all?: true
  }

  export type TaskApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskApplications to aggregate.
     */
    where?: TaskApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskApplications to fetch.
     */
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskApplications
    **/
    _count?: true | TaskApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskApplicationsMaxAggregateInputType
  }

  export type GetTaskApplicationsAggregateType<T extends TaskApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskApplications[P]>
      : GetScalarType<T[P], AggregateTaskApplications[P]>
  }




  export type TaskApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskApplicationsWhereInput
    orderBy?: TaskApplicationsOrderByWithAggregationInput | TaskApplicationsOrderByWithAggregationInput[]
    by: TaskApplicationsScalarFieldEnum[] | TaskApplicationsScalarFieldEnum
    having?: TaskApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskApplicationsCountAggregateInputType | true
    _min?: TaskApplicationsMinAggregateInputType
    _max?: TaskApplicationsMaxAggregateInputType
  }

  export type TaskApplicationsGroupByOutputType = {
    id: string
    appliedAt: Date
    status: $Enums.TaskApplicationStatus
    taskId: string
    userId: string
    _count: TaskApplicationsCountAggregateOutputType | null
    _min: TaskApplicationsMinAggregateOutputType | null
    _max: TaskApplicationsMaxAggregateOutputType | null
  }

  type GetTaskApplicationsGroupByPayload<T extends TaskApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], TaskApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type TaskApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appliedAt?: boolean
    status?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskApplications"]>



  export type TaskApplicationsSelectScalar = {
    id?: boolean
    appliedAt?: boolean
    status?: boolean
    taskId?: boolean
    userId?: boolean
  }

  export type TaskApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appliedAt" | "status" | "taskId" | "userId", ExtArgs["result"]["taskApplications"]>
  export type TaskApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskApplications"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appliedAt: Date
      status: $Enums.TaskApplicationStatus
      taskId: string
      userId: string
    }, ExtArgs["result"]["taskApplications"]>
    composites: {}
  }

  type TaskApplicationsGetPayload<S extends boolean | null | undefined | TaskApplicationsDefaultArgs> = $Result.GetResult<Prisma.$TaskApplicationsPayload, S>

  type TaskApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskApplicationsCountAggregateInputType | true
    }

  export interface TaskApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskApplications'], meta: { name: 'TaskApplications' } }
    /**
     * Find zero or one TaskApplications that matches the filter.
     * @param {TaskApplicationsFindUniqueArgs} args - Arguments to find a TaskApplications
     * @example
     * // Get one TaskApplications
     * const taskApplications = await prisma.taskApplications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskApplicationsFindUniqueArgs>(args: SelectSubset<T, TaskApplicationsFindUniqueArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskApplications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskApplicationsFindUniqueOrThrowArgs} args - Arguments to find a TaskApplications
     * @example
     * // Get one TaskApplications
     * const taskApplications = await prisma.taskApplications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsFindFirstArgs} args - Arguments to find a TaskApplications
     * @example
     * // Get one TaskApplications
     * const taskApplications = await prisma.taskApplications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskApplicationsFindFirstArgs>(args?: SelectSubset<T, TaskApplicationsFindFirstArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskApplications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsFindFirstOrThrowArgs} args - Arguments to find a TaskApplications
     * @example
     * // Get one TaskApplications
     * const taskApplications = await prisma.taskApplications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskApplications
     * const taskApplications = await prisma.taskApplications.findMany()
     * 
     * // Get first 10 TaskApplications
     * const taskApplications = await prisma.taskApplications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskApplicationsWithIdOnly = await prisma.taskApplications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskApplicationsFindManyArgs>(args?: SelectSubset<T, TaskApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskApplications.
     * @param {TaskApplicationsCreateArgs} args - Arguments to create a TaskApplications.
     * @example
     * // Create one TaskApplications
     * const TaskApplications = await prisma.taskApplications.create({
     *   data: {
     *     // ... data to create a TaskApplications
     *   }
     * })
     * 
     */
    create<T extends TaskApplicationsCreateArgs>(args: SelectSubset<T, TaskApplicationsCreateArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskApplications.
     * @param {TaskApplicationsCreateManyArgs} args - Arguments to create many TaskApplications.
     * @example
     * // Create many TaskApplications
     * const taskApplications = await prisma.taskApplications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskApplicationsCreateManyArgs>(args?: SelectSubset<T, TaskApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskApplications.
     * @param {TaskApplicationsDeleteArgs} args - Arguments to delete one TaskApplications.
     * @example
     * // Delete one TaskApplications
     * const TaskApplications = await prisma.taskApplications.delete({
     *   where: {
     *     // ... filter to delete one TaskApplications
     *   }
     * })
     * 
     */
    delete<T extends TaskApplicationsDeleteArgs>(args: SelectSubset<T, TaskApplicationsDeleteArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskApplications.
     * @param {TaskApplicationsUpdateArgs} args - Arguments to update one TaskApplications.
     * @example
     * // Update one TaskApplications
     * const taskApplications = await prisma.taskApplications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskApplicationsUpdateArgs>(args: SelectSubset<T, TaskApplicationsUpdateArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskApplications.
     * @param {TaskApplicationsDeleteManyArgs} args - Arguments to filter TaskApplications to delete.
     * @example
     * // Delete a few TaskApplications
     * const { count } = await prisma.taskApplications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskApplicationsDeleteManyArgs>(args?: SelectSubset<T, TaskApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskApplications
     * const taskApplications = await prisma.taskApplications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskApplicationsUpdateManyArgs>(args: SelectSubset<T, TaskApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskApplications.
     * @param {TaskApplicationsUpsertArgs} args - Arguments to update or create a TaskApplications.
     * @example
     * // Update or create a TaskApplications
     * const taskApplications = await prisma.taskApplications.upsert({
     *   create: {
     *     // ... data to create a TaskApplications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskApplications we want to update
     *   }
     * })
     */
    upsert<T extends TaskApplicationsUpsertArgs>(args: SelectSubset<T, TaskApplicationsUpsertArgs<ExtArgs>>): Prisma__TaskApplicationsClient<$Result.GetResult<Prisma.$TaskApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsCountArgs} args - Arguments to filter TaskApplications to count.
     * @example
     * // Count the number of TaskApplications
     * const count = await prisma.taskApplications.count({
     *   where: {
     *     // ... the filter for the TaskApplications we want to count
     *   }
     * })
    **/
    count<T extends TaskApplicationsCountArgs>(
      args?: Subset<T, TaskApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskApplicationsAggregateArgs>(args: Subset<T, TaskApplicationsAggregateArgs>): Prisma.PrismaPromise<GetTaskApplicationsAggregateType<T>>

    /**
     * Group by TaskApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: TaskApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskApplications model
   */
  readonly fields: TaskApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskApplications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskApplications model
   */
  interface TaskApplicationsFieldRefs {
    readonly id: FieldRef<"TaskApplications", 'String'>
    readonly appliedAt: FieldRef<"TaskApplications", 'DateTime'>
    readonly status: FieldRef<"TaskApplications", 'TaskApplicationStatus'>
    readonly taskId: FieldRef<"TaskApplications", 'String'>
    readonly userId: FieldRef<"TaskApplications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskApplications findUnique
   */
  export type TaskApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which TaskApplications to fetch.
     */
    where: TaskApplicationsWhereUniqueInput
  }

  /**
   * TaskApplications findUniqueOrThrow
   */
  export type TaskApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which TaskApplications to fetch.
     */
    where: TaskApplicationsWhereUniqueInput
  }

  /**
   * TaskApplications findFirst
   */
  export type TaskApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which TaskApplications to fetch.
     */
    where?: TaskApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskApplications to fetch.
     */
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskApplications.
     */
    cursor?: TaskApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskApplications.
     */
    distinct?: TaskApplicationsScalarFieldEnum | TaskApplicationsScalarFieldEnum[]
  }

  /**
   * TaskApplications findFirstOrThrow
   */
  export type TaskApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which TaskApplications to fetch.
     */
    where?: TaskApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskApplications to fetch.
     */
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskApplications.
     */
    cursor?: TaskApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskApplications.
     */
    distinct?: TaskApplicationsScalarFieldEnum | TaskApplicationsScalarFieldEnum[]
  }

  /**
   * TaskApplications findMany
   */
  export type TaskApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which TaskApplications to fetch.
     */
    where?: TaskApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskApplications to fetch.
     */
    orderBy?: TaskApplicationsOrderByWithRelationInput | TaskApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskApplications.
     */
    cursor?: TaskApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskApplications.
     */
    skip?: number
    distinct?: TaskApplicationsScalarFieldEnum | TaskApplicationsScalarFieldEnum[]
  }

  /**
   * TaskApplications create
   */
  export type TaskApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskApplications.
     */
    data: XOR<TaskApplicationsCreateInput, TaskApplicationsUncheckedCreateInput>
  }

  /**
   * TaskApplications createMany
   */
  export type TaskApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskApplications.
     */
    data: TaskApplicationsCreateManyInput | TaskApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskApplications update
   */
  export type TaskApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskApplications.
     */
    data: XOR<TaskApplicationsUpdateInput, TaskApplicationsUncheckedUpdateInput>
    /**
     * Choose, which TaskApplications to update.
     */
    where: TaskApplicationsWhereUniqueInput
  }

  /**
   * TaskApplications updateMany
   */
  export type TaskApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskApplications.
     */
    data: XOR<TaskApplicationsUpdateManyMutationInput, TaskApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which TaskApplications to update
     */
    where?: TaskApplicationsWhereInput
    /**
     * Limit how many TaskApplications to update.
     */
    limit?: number
  }

  /**
   * TaskApplications upsert
   */
  export type TaskApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskApplications to update in case it exists.
     */
    where: TaskApplicationsWhereUniqueInput
    /**
     * In case the TaskApplications found by the `where` argument doesn't exist, create a new TaskApplications with this data.
     */
    create: XOR<TaskApplicationsCreateInput, TaskApplicationsUncheckedCreateInput>
    /**
     * In case the TaskApplications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskApplicationsUpdateInput, TaskApplicationsUncheckedUpdateInput>
  }

  /**
   * TaskApplications delete
   */
  export type TaskApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
    /**
     * Filter which TaskApplications to delete.
     */
    where: TaskApplicationsWhereUniqueInput
  }

  /**
   * TaskApplications deleteMany
   */
  export type TaskApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskApplications to delete
     */
    where?: TaskApplicationsWhereInput
    /**
     * Limit how many TaskApplications to delete.
     */
    limit?: number
  }

  /**
   * TaskApplications without action
   */
  export type TaskApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskApplications
     */
    select?: TaskApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskApplications
     */
    omit?: TaskApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    revieweeId: string | null
    taskId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    revieweeId: string | null
    taskId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    reviewerId: number
    revieweeId: number
    taskId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    taskId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    taskId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    taskId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    reviewerId: string
    revieweeId: string
    taskId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    taskId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    taskId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewerId" | "revieweeId" | "taskId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      reviewee: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewerId: string
      revieweeId: string
      taskId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
    readonly taskId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model RevokedToken
   */

  export type AggregateRevokedToken = {
    _count: RevokedTokenCountAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  export type RevokedTokenMinAggregateOutputType = {
    token: string | null
    expiresAt: Date | null
  }

  export type RevokedTokenMaxAggregateOutputType = {
    token: string | null
    expiresAt: Date | null
  }

  export type RevokedTokenCountAggregateOutputType = {
    token: number
    expiresAt: number
    _all: number
  }


  export type RevokedTokenMinAggregateInputType = {
    token?: true
    expiresAt?: true
  }

  export type RevokedTokenMaxAggregateInputType = {
    token?: true
    expiresAt?: true
  }

  export type RevokedTokenCountAggregateInputType = {
    token?: true
    expiresAt?: true
    _all?: true
  }

  export type RevokedTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedToken to aggregate.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevokedTokens
    **/
    _count?: true | RevokedTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevokedTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type GetRevokedTokenAggregateType<T extends RevokedTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRevokedToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevokedToken[P]>
      : GetScalarType<T[P], AggregateRevokedToken[P]>
  }




  export type RevokedTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevokedTokenWhereInput
    orderBy?: RevokedTokenOrderByWithAggregationInput | RevokedTokenOrderByWithAggregationInput[]
    by: RevokedTokenScalarFieldEnum[] | RevokedTokenScalarFieldEnum
    having?: RevokedTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevokedTokenCountAggregateInputType | true
    _min?: RevokedTokenMinAggregateInputType
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type RevokedTokenGroupByOutputType = {
    token: string
    expiresAt: Date
    _count: RevokedTokenCountAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  type GetRevokedTokenGroupByPayload<T extends RevokedTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevokedTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevokedTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
        }
      >
    >


  export type RevokedTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["revokedToken"]>



  export type RevokedTokenSelectScalar = {
    token?: boolean
    expiresAt?: boolean
  }

  export type RevokedTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token" | "expiresAt", ExtArgs["result"]["revokedToken"]>

  export type $RevokedTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevokedToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      token: string
      expiresAt: Date
    }, ExtArgs["result"]["revokedToken"]>
    composites: {}
  }

  type RevokedTokenGetPayload<S extends boolean | null | undefined | RevokedTokenDefaultArgs> = $Result.GetResult<Prisma.$RevokedTokenPayload, S>

  type RevokedTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevokedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevokedTokenCountAggregateInputType | true
    }

  export interface RevokedTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevokedToken'], meta: { name: 'RevokedToken' } }
    /**
     * Find zero or one RevokedToken that matches the filter.
     * @param {RevokedTokenFindUniqueArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevokedTokenFindUniqueArgs>(args: SelectSubset<T, RevokedTokenFindUniqueArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevokedToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevokedTokenFindUniqueOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevokedTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RevokedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevokedToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindFirstArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevokedTokenFindFirstArgs>(args?: SelectSubset<T, RevokedTokenFindFirstArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevokedToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindFirstOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevokedTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RevokedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevokedTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany()
     * 
     * // Get first 10 RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const revokedTokenWithTokenOnly = await prisma.revokedToken.findMany({ select: { token: true } })
     * 
     */
    findMany<T extends RevokedTokenFindManyArgs>(args?: SelectSubset<T, RevokedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevokedToken.
     * @param {RevokedTokenCreateArgs} args - Arguments to create a RevokedToken.
     * @example
     * // Create one RevokedToken
     * const RevokedToken = await prisma.revokedToken.create({
     *   data: {
     *     // ... data to create a RevokedToken
     *   }
     * })
     * 
     */
    create<T extends RevokedTokenCreateArgs>(args: SelectSubset<T, RevokedTokenCreateArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevokedTokens.
     * @param {RevokedTokenCreateManyArgs} args - Arguments to create many RevokedTokens.
     * @example
     * // Create many RevokedTokens
     * const revokedToken = await prisma.revokedToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevokedTokenCreateManyArgs>(args?: SelectSubset<T, RevokedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RevokedToken.
     * @param {RevokedTokenDeleteArgs} args - Arguments to delete one RevokedToken.
     * @example
     * // Delete one RevokedToken
     * const RevokedToken = await prisma.revokedToken.delete({
     *   where: {
     *     // ... filter to delete one RevokedToken
     *   }
     * })
     * 
     */
    delete<T extends RevokedTokenDeleteArgs>(args: SelectSubset<T, RevokedTokenDeleteArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevokedToken.
     * @param {RevokedTokenUpdateArgs} args - Arguments to update one RevokedToken.
     * @example
     * // Update one RevokedToken
     * const revokedToken = await prisma.revokedToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevokedTokenUpdateArgs>(args: SelectSubset<T, RevokedTokenUpdateArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevokedTokens.
     * @param {RevokedTokenDeleteManyArgs} args - Arguments to filter RevokedTokens to delete.
     * @example
     * // Delete a few RevokedTokens
     * const { count } = await prisma.revokedToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevokedTokenDeleteManyArgs>(args?: SelectSubset<T, RevokedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevokedTokens
     * const revokedToken = await prisma.revokedToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevokedTokenUpdateManyArgs>(args: SelectSubset<T, RevokedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RevokedToken.
     * @param {RevokedTokenUpsertArgs} args - Arguments to update or create a RevokedToken.
     * @example
     * // Update or create a RevokedToken
     * const revokedToken = await prisma.revokedToken.upsert({
     *   create: {
     *     // ... data to create a RevokedToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevokedToken we want to update
     *   }
     * })
     */
    upsert<T extends RevokedTokenUpsertArgs>(args: SelectSubset<T, RevokedTokenUpsertArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenCountArgs} args - Arguments to filter RevokedTokens to count.
     * @example
     * // Count the number of RevokedTokens
     * const count = await prisma.revokedToken.count({
     *   where: {
     *     // ... the filter for the RevokedTokens we want to count
     *   }
     * })
    **/
    count<T extends RevokedTokenCountArgs>(
      args?: Subset<T, RevokedTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevokedTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevokedTokenAggregateArgs>(args: Subset<T, RevokedTokenAggregateArgs>): Prisma.PrismaPromise<GetRevokedTokenAggregateType<T>>

    /**
     * Group by RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevokedTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevokedTokenGroupByArgs['orderBy'] }
        : { orderBy?: RevokedTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevokedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevokedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevokedToken model
   */
  readonly fields: RevokedTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevokedToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevokedTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevokedToken model
   */
  interface RevokedTokenFieldRefs {
    readonly token: FieldRef<"RevokedToken", 'String'>
    readonly expiresAt: FieldRef<"RevokedToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevokedToken findUnique
   */
  export type RevokedTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken findUniqueOrThrow
   */
  export type RevokedTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken findFirst
   */
  export type RevokedTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken findFirstOrThrow
   */
  export type RevokedTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken findMany
   */
  export type RevokedTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedTokens to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken create
   */
  export type RevokedTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a RevokedToken.
     */
    data: XOR<RevokedTokenCreateInput, RevokedTokenUncheckedCreateInput>
  }

  /**
   * RevokedToken createMany
   */
  export type RevokedTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevokedTokens.
     */
    data: RevokedTokenCreateManyInput | RevokedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevokedToken update
   */
  export type RevokedTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a RevokedToken.
     */
    data: XOR<RevokedTokenUpdateInput, RevokedTokenUncheckedUpdateInput>
    /**
     * Choose, which RevokedToken to update.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken updateMany
   */
  export type RevokedTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevokedTokens.
     */
    data: XOR<RevokedTokenUpdateManyMutationInput, RevokedTokenUncheckedUpdateManyInput>
    /**
     * Filter which RevokedTokens to update
     */
    where?: RevokedTokenWhereInput
    /**
     * Limit how many RevokedTokens to update.
     */
    limit?: number
  }

  /**
   * RevokedToken upsert
   */
  export type RevokedTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the RevokedToken to update in case it exists.
     */
    where: RevokedTokenWhereUniqueInput
    /**
     * In case the RevokedToken found by the `where` argument doesn't exist, create a new RevokedToken with this data.
     */
    create: XOR<RevokedTokenCreateInput, RevokedTokenUncheckedCreateInput>
    /**
     * In case the RevokedToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevokedTokenUpdateInput, RevokedTokenUncheckedUpdateInput>
  }

  /**
   * RevokedToken delete
   */
  export type RevokedTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter which RevokedToken to delete.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken deleteMany
   */
  export type RevokedTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedTokens to delete
     */
    where?: RevokedTokenWhereInput
    /**
     * Limit how many RevokedTokens to delete.
     */
    limit?: number
  }

  /**
   * RevokedToken without action
   */
  export type RevokedTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    checkoutRequestId: string | null
    merchantRequestId: string | null
    status: $Enums.PaymentStatus | null
    amount: number | null
    paidAt: Date | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    checkoutRequestId: string | null
    merchantRequestId: string | null
    status: $Enums.PaymentStatus | null
    amount: number | null
    paidAt: Date | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    checkoutRequestId: number
    merchantRequestId: number
    status: number
    amount: number
    paidAt: number
    receipt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    checkoutRequestId?: true
    merchantRequestId?: true
    status?: true
    amount?: true
    paidAt?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    checkoutRequestId?: true
    merchantRequestId?: true
    status?: true
    amount?: true
    paidAt?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    checkoutRequestId?: true
    merchantRequestId?: true
    status?: true
    amount?: true
    paidAt?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    checkoutRequestId: string
    merchantRequestId: string | null
    status: $Enums.PaymentStatus
    amount: number
    paidAt: Date | null
    receipt: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    checkoutRequestId?: boolean
    merchantRequestId?: boolean
    status?: boolean
    amount?: boolean
    paidAt?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    checkoutRequestId?: boolean
    merchantRequestId?: boolean
    status?: boolean
    amount?: boolean
    paidAt?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "checkoutRequestId" | "merchantRequestId" | "status" | "amount" | "paidAt" | "receipt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      checkoutRequestId: string
      merchantRequestId: string | null
      status: $Enums.PaymentStatus
      amount: number
      paidAt: Date | null
      receipt: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly taskId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly checkoutRequestId: FieldRef<"Payment", 'String'>
    readonly merchantRequestId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly receipt: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profilePicture: 'profilePicture',
    rating: 'rating',
    tasksPosted: 'tasksPosted',
    tasksCompleted: 'tasksCompleted',
    isTasker: 'isTasker',
    authProvider: 'authProvider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    offer: 'offer',
    status: 'status',
    taskerRated: 'taskerRated',
    taskPosterRated: 'taskPosterRated',
    taskPosterId: 'taskPosterId',
    taskerAssignedId: 'taskerAssignedId',
    taskPayment: 'taskPayment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskApplicationsScalarFieldEnum: {
    id: 'id',
    appliedAt: 'appliedAt',
    status: 'status',
    taskId: 'taskId',
    userId: 'userId'
  };

  export type TaskApplicationsScalarFieldEnum = (typeof TaskApplicationsScalarFieldEnum)[keyof typeof TaskApplicationsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    taskId: 'taskId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const RevokedTokenScalarFieldEnum: {
    token: 'token',
    expiresAt: 'expiresAt'
  };

  export type RevokedTokenScalarFieldEnum = (typeof RevokedTokenScalarFieldEnum)[keyof typeof RevokedTokenScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    checkoutRequestId: 'checkoutRequestId',
    merchantRequestId: 'merchantRequestId',
    status: 'status',
    amount: 'amount',
    paidAt: 'paidAt',
    receipt: 'receipt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profilePicture: 'profilePicture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TaskOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    location: 'location',
    taskPosterId: 'taskPosterId',
    taskerAssignedId: 'taskerAssignedId'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const TaskApplicationsOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId'
  };

  export type TaskApplicationsOrderByRelevanceFieldEnum = (typeof TaskApplicationsOrderByRelevanceFieldEnum)[keyof typeof TaskApplicationsOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    taskId: 'taskId',
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const RevokedTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type RevokedTokenOrderByRelevanceFieldEnum = (typeof RevokedTokenOrderByRelevanceFieldEnum)[keyof typeof RevokedTokenOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    checkoutRequestId: 'checkoutRequestId',
    merchantRequestId: 'merchantRequestId',
    receipt: 'receipt'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskPaymentStatus'
   */
  export type EnumTaskPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPaymentStatus'>
    


  /**
   * Reference to a field of type 'TaskApplicationStatus'
   */
  export type EnumTaskApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskApplicationStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    rating?: FloatFilter<"User"> | number
    tasksPosted?: IntFilter<"User"> | number
    tasksCompleted?: IntFilter<"User"> | number
    isTasker?: BoolFilter<"User"> | boolean
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    postedTasks?: TaskListRelationFilter
    assignedTasks?: TaskListRelationFilter
    taskApplications?: TaskApplicationsListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
    isTasker?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postedTasks?: TaskOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    taskApplications?: TaskApplicationsOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    rating?: FloatFilter<"User"> | number
    tasksPosted?: IntFilter<"User"> | number
    tasksCompleted?: IntFilter<"User"> | number
    isTasker?: BoolFilter<"User"> | boolean
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    postedTasks?: TaskListRelationFilter
    assignedTasks?: TaskListRelationFilter
    taskApplications?: TaskApplicationsListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id" | "username" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
    isTasker?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    rating?: FloatWithAggregatesFilter<"User"> | number
    tasksPosted?: IntWithAggregatesFilter<"User"> | number
    tasksCompleted?: IntWithAggregatesFilter<"User"> | number
    isTasker?: BoolWithAggregatesFilter<"User"> | boolean
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    category?: StringFilter<"Task"> | string
    location?: StringFilter<"Task"> | string
    latitude?: FloatFilter<"Task"> | number
    longitude?: FloatFilter<"Task"> | number
    offer?: FloatFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    taskerRated?: BoolFilter<"Task"> | boolean
    taskPosterRated?: BoolFilter<"Task"> | boolean
    taskPosterId?: StringFilter<"Task"> | string
    taskerAssignedId?: StringNullableFilter<"Task"> | string | null
    taskPayment?: EnumTaskPaymentStatusFilter<"Task"> | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    taskPoster?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskerAssigned?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    taskersApplied?: TaskApplicationsListRelationFilter
    reviews?: ReviewListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
    status?: SortOrder
    taskerRated?: SortOrder
    taskPosterRated?: SortOrder
    taskPosterId?: SortOrder
    taskerAssignedId?: SortOrderInput | SortOrder
    taskPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskPoster?: UserOrderByWithRelationInput
    taskerAssigned?: UserOrderByWithRelationInput
    taskersApplied?: TaskApplicationsOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    category?: StringFilter<"Task"> | string
    location?: StringFilter<"Task"> | string
    latitude?: FloatFilter<"Task"> | number
    longitude?: FloatFilter<"Task"> | number
    offer?: FloatFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    taskerRated?: BoolFilter<"Task"> | boolean
    taskPosterRated?: BoolFilter<"Task"> | boolean
    taskPosterId?: StringFilter<"Task"> | string
    taskerAssignedId?: StringNullableFilter<"Task"> | string | null
    taskPayment?: EnumTaskPaymentStatusFilter<"Task"> | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    taskPoster?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskerAssigned?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    taskersApplied?: TaskApplicationsListRelationFilter
    reviews?: ReviewListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
    status?: SortOrder
    taskerRated?: SortOrder
    taskPosterRated?: SortOrder
    taskPosterId?: SortOrder
    taskerAssignedId?: SortOrderInput | SortOrder
    taskPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    category?: StringWithAggregatesFilter<"Task"> | string
    location?: StringWithAggregatesFilter<"Task"> | string
    latitude?: FloatWithAggregatesFilter<"Task"> | number
    longitude?: FloatWithAggregatesFilter<"Task"> | number
    offer?: FloatWithAggregatesFilter<"Task"> | number
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    taskerRated?: BoolWithAggregatesFilter<"Task"> | boolean
    taskPosterRated?: BoolWithAggregatesFilter<"Task"> | boolean
    taskPosterId?: StringWithAggregatesFilter<"Task"> | string
    taskerAssignedId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    taskPayment?: EnumTaskPaymentStatusWithAggregatesFilter<"Task"> | $Enums.TaskPaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskApplicationsWhereInput = {
    AND?: TaskApplicationsWhereInput | TaskApplicationsWhereInput[]
    OR?: TaskApplicationsWhereInput[]
    NOT?: TaskApplicationsWhereInput | TaskApplicationsWhereInput[]
    id?: StringFilter<"TaskApplications"> | string
    appliedAt?: DateTimeFilter<"TaskApplications"> | Date | string
    status?: EnumTaskApplicationStatusFilter<"TaskApplications"> | $Enums.TaskApplicationStatus
    taskId?: StringFilter<"TaskApplications"> | string
    userId?: StringFilter<"TaskApplications"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: TaskApplicationsOrderByRelevanceInput
  }

  export type TaskApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskApplicationsWhereInput | TaskApplicationsWhereInput[]
    OR?: TaskApplicationsWhereInput[]
    NOT?: TaskApplicationsWhereInput | TaskApplicationsWhereInput[]
    appliedAt?: DateTimeFilter<"TaskApplications"> | Date | string
    status?: EnumTaskApplicationStatusFilter<"TaskApplications"> | $Enums.TaskApplicationStatus
    taskId?: StringFilter<"TaskApplications"> | string
    userId?: StringFilter<"TaskApplications"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    _count?: TaskApplicationsCountOrderByAggregateInput
    _max?: TaskApplicationsMaxOrderByAggregateInput
    _min?: TaskApplicationsMinOrderByAggregateInput
  }

  export type TaskApplicationsScalarWhereWithAggregatesInput = {
    AND?: TaskApplicationsScalarWhereWithAggregatesInput | TaskApplicationsScalarWhereWithAggregatesInput[]
    OR?: TaskApplicationsScalarWhereWithAggregatesInput[]
    NOT?: TaskApplicationsScalarWhereWithAggregatesInput | TaskApplicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskApplications"> | string
    appliedAt?: DateTimeWithAggregatesFilter<"TaskApplications"> | Date | string
    status?: EnumTaskApplicationStatusWithAggregatesFilter<"TaskApplications"> | $Enums.TaskApplicationStatus
    taskId?: StringWithAggregatesFilter<"TaskApplications"> | string
    userId?: StringWithAggregatesFilter<"TaskApplications"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    taskId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    taskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    reviewee?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    taskId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    taskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    revieweeId?: StringWithAggregatesFilter<"Review"> | string
    taskId?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type RevokedTokenWhereInput = {
    AND?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    OR?: RevokedTokenWhereInput[]
    NOT?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    token?: StringFilter<"RevokedToken"> | string
    expiresAt?: DateTimeFilter<"RevokedToken"> | Date | string
  }

  export type RevokedTokenOrderByWithRelationInput = {
    token?: SortOrder
    expiresAt?: SortOrder
    _relevance?: RevokedTokenOrderByRelevanceInput
  }

  export type RevokedTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    AND?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    OR?: RevokedTokenWhereInput[]
    NOT?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RevokedToken"> | Date | string
  }, "token">

  export type RevokedTokenOrderByWithAggregationInput = {
    token?: SortOrder
    expiresAt?: SortOrder
    _count?: RevokedTokenCountOrderByAggregateInput
    _max?: RevokedTokenMaxOrderByAggregateInput
    _min?: RevokedTokenMinOrderByAggregateInput
  }

  export type RevokedTokenScalarWhereWithAggregatesInput = {
    AND?: RevokedTokenScalarWhereWithAggregatesInput | RevokedTokenScalarWhereWithAggregatesInput[]
    OR?: RevokedTokenScalarWhereWithAggregatesInput[]
    NOT?: RevokedTokenScalarWhereWithAggregatesInput | RevokedTokenScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"RevokedToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RevokedToken"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    taskId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    checkoutRequestId?: StringFilter<"Payment"> | string
    merchantRequestId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payment"> | number
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    receipt?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    checkoutRequestId?: SortOrder
    merchantRequestId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    checkoutRequestId?: string
    taskId_userId?: PaymentTaskIdUserIdCompoundUniqueInput
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    taskId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    merchantRequestId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payment"> | number
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    receipt?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "checkoutRequestId" | "taskId_userId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    checkoutRequestId?: SortOrder
    merchantRequestId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    taskId?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    checkoutRequestId?: StringWithAggregatesFilter<"Payment"> | string
    merchantRequestId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    receipt?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskPoster: UserCreateNestedOneWithoutPostedTasksInput
    taskerAssigned?: UserCreateNestedOneWithoutAssignedTasksInput
    taskersApplied?: TaskApplicationsCreateNestedManyWithoutTaskInput
    reviews?: ReviewCreateNestedManyWithoutTaskInput
    Payment?: PaymentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskersApplied?: TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTaskInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskPoster?: UserUpdateOneRequiredWithoutPostedTasksNestedInput
    taskerAssigned?: UserUpdateOneWithoutAssignedTasksNestedInput
    taskersApplied?: TaskApplicationsUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskersApplied?: TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskApplicationsCreateInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    task: TaskCreateNestedOneWithoutTaskersAppliedInput
    user: UserCreateNestedOneWithoutTaskApplicationsInput
  }

  export type TaskApplicationsUncheckedCreateInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    taskId: string
    userId: string
  }

  export type TaskApplicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    task?: TaskUpdateOneRequiredWithoutTaskersAppliedNestedInput
    user?: UserUpdateOneRequiredWithoutTaskApplicationsNestedInput
  }

  export type TaskApplicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskApplicationsCreateManyInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    taskId: string
    userId: string
  }

  export type TaskApplicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
  }

  export type TaskApplicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
    task: TaskCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    task?: TaskUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenCreateInput = {
    token: string
    expiresAt: Date | string
  }

  export type RevokedTokenUncheckedCreateInput = {
    token: string
    expiresAt: Date | string
  }

  export type RevokedTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenCreateManyInput = {
    token: string
    expiresAt: Date | string
  }

  export type RevokedTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskApplicationsListRelationFilter = {
    every?: TaskApplicationsWhereInput
    some?: TaskApplicationsWhereInput
    none?: TaskApplicationsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
    isTasker?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
    isTasker?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
    isTasker?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
    tasksPosted?: SortOrder
    tasksCompleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPaymentStatus | EnumTaskPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPaymentStatus[]
    notIn?: $Enums.TaskPaymentStatus[]
    not?: NestedEnumTaskPaymentStatusFilter<$PrismaModel> | $Enums.TaskPaymentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
    status?: SortOrder
    taskerRated?: SortOrder
    taskPosterRated?: SortOrder
    taskPosterId?: SortOrder
    taskerAssignedId?: SortOrder
    taskPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
    status?: SortOrder
    taskerRated?: SortOrder
    taskPosterRated?: SortOrder
    taskPosterId?: SortOrder
    taskerAssignedId?: SortOrder
    taskPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
    status?: SortOrder
    taskerRated?: SortOrder
    taskPosterRated?: SortOrder
    taskPosterId?: SortOrder
    taskerAssignedId?: SortOrder
    taskPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    offer?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPaymentStatus | EnumTaskPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPaymentStatus[]
    notIn?: $Enums.TaskPaymentStatus[]
    not?: NestedEnumTaskPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskPaymentStatusFilter<$PrismaModel>
  }

  export type EnumTaskApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskApplicationStatus | EnumTaskApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskApplicationStatus[]
    notIn?: $Enums.TaskApplicationStatus[]
    not?: NestedEnumTaskApplicationStatusFilter<$PrismaModel> | $Enums.TaskApplicationStatus
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskApplicationsOrderByRelevanceInput = {
    fields: TaskApplicationsOrderByRelevanceFieldEnum | TaskApplicationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTaskApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskApplicationStatus | EnumTaskApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskApplicationStatus[]
    notIn?: $Enums.TaskApplicationStatus[]
    not?: NestedEnumTaskApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskApplicationStatusFilter<$PrismaModel>
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    taskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    taskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    taskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RevokedTokenOrderByRelevanceInput = {
    fields: RevokedTokenOrderByRelevanceFieldEnum | RevokedTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RevokedTokenCountOrderByAggregateInput = {
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type RevokedTokenMaxOrderByAggregateInput = {
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type RevokedTokenMinOrderByAggregateInput = {
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    checkoutRequestId?: SortOrder
    merchantRequestId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    checkoutRequestId?: SortOrder
    merchantRequestId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    checkoutRequestId?: SortOrder
    merchantRequestId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutTaskPosterInput = {
    create?: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput> | TaskCreateWithoutTaskPosterInput[] | TaskUncheckedCreateWithoutTaskPosterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPosterInput | TaskCreateOrConnectWithoutTaskPosterInput[]
    createMany?: TaskCreateManyTaskPosterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutTaskerAssignedInput = {
    create?: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput> | TaskCreateWithoutTaskerAssignedInput[] | TaskUncheckedCreateWithoutTaskerAssignedInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskerAssignedInput | TaskCreateOrConnectWithoutTaskerAssignedInput[]
    createMany?: TaskCreateManyTaskerAssignedInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskApplicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput> | TaskApplicationsCreateWithoutUserInput[] | TaskApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutUserInput | TaskApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: TaskApplicationsCreateManyUserInputEnvelope
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTaskPosterInput = {
    create?: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput> | TaskCreateWithoutTaskPosterInput[] | TaskUncheckedCreateWithoutTaskPosterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPosterInput | TaskCreateOrConnectWithoutTaskPosterInput[]
    createMany?: TaskCreateManyTaskPosterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput = {
    create?: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput> | TaskCreateWithoutTaskerAssignedInput[] | TaskUncheckedCreateWithoutTaskerAssignedInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskerAssignedInput | TaskCreateOrConnectWithoutTaskerAssignedInput[]
    createMany?: TaskCreateManyTaskerAssignedInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskApplicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput> | TaskApplicationsCreateWithoutUserInput[] | TaskApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutUserInput | TaskApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: TaskApplicationsCreateManyUserInputEnvelope
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutTaskPosterNestedInput = {
    create?: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput> | TaskCreateWithoutTaskPosterInput[] | TaskUncheckedCreateWithoutTaskPosterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPosterInput | TaskCreateOrConnectWithoutTaskPosterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskPosterInput | TaskUpsertWithWhereUniqueWithoutTaskPosterInput[]
    createMany?: TaskCreateManyTaskPosterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskPosterInput | TaskUpdateWithWhereUniqueWithoutTaskPosterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskPosterInput | TaskUpdateManyWithWhereWithoutTaskPosterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutTaskerAssignedNestedInput = {
    create?: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput> | TaskCreateWithoutTaskerAssignedInput[] | TaskUncheckedCreateWithoutTaskerAssignedInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskerAssignedInput | TaskCreateOrConnectWithoutTaskerAssignedInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskerAssignedInput | TaskUpsertWithWhereUniqueWithoutTaskerAssignedInput[]
    createMany?: TaskCreateManyTaskerAssignedInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskerAssignedInput | TaskUpdateWithWhereUniqueWithoutTaskerAssignedInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskerAssignedInput | TaskUpdateManyWithWhereWithoutTaskerAssignedInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskApplicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput> | TaskApplicationsCreateWithoutUserInput[] | TaskApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutUserInput | TaskApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: TaskApplicationsUpsertWithWhereUniqueWithoutUserInput | TaskApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskApplicationsCreateManyUserInputEnvelope
    set?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    disconnect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    delete?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    update?: TaskApplicationsUpdateWithWhereUniqueWithoutUserInput | TaskApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskApplicationsUpdateManyWithWhereWithoutUserInput | TaskApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTaskPosterNestedInput = {
    create?: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput> | TaskCreateWithoutTaskPosterInput[] | TaskUncheckedCreateWithoutTaskPosterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPosterInput | TaskCreateOrConnectWithoutTaskPosterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskPosterInput | TaskUpsertWithWhereUniqueWithoutTaskPosterInput[]
    createMany?: TaskCreateManyTaskPosterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskPosterInput | TaskUpdateWithWhereUniqueWithoutTaskPosterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskPosterInput | TaskUpdateManyWithWhereWithoutTaskPosterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput = {
    create?: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput> | TaskCreateWithoutTaskerAssignedInput[] | TaskUncheckedCreateWithoutTaskerAssignedInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskerAssignedInput | TaskCreateOrConnectWithoutTaskerAssignedInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskerAssignedInput | TaskUpsertWithWhereUniqueWithoutTaskerAssignedInput[]
    createMany?: TaskCreateManyTaskerAssignedInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskerAssignedInput | TaskUpdateWithWhereUniqueWithoutTaskerAssignedInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskerAssignedInput | TaskUpdateManyWithWhereWithoutTaskerAssignedInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput> | TaskApplicationsCreateWithoutUserInput[] | TaskApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutUserInput | TaskApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: TaskApplicationsUpsertWithWhereUniqueWithoutUserInput | TaskApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskApplicationsCreateManyUserInputEnvelope
    set?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    disconnect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    delete?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    update?: TaskApplicationsUpdateWithWhereUniqueWithoutUserInput | TaskApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskApplicationsUpdateManyWithWhereWithoutUserInput | TaskApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostedTasksInput = {
    create?: XOR<UserCreateWithoutPostedTasksInput, UserUncheckedCreateWithoutPostedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskApplicationsCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput> | TaskApplicationsCreateWithoutTaskInput[] | TaskApplicationsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutTaskInput | TaskApplicationsCreateOrConnectWithoutTaskInput[]
    createMany?: TaskApplicationsCreateManyTaskInputEnvelope
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput> | ReviewCreateWithoutTaskInput[] | ReviewUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTaskInput | ReviewCreateOrConnectWithoutTaskInput[]
    createMany?: ReviewCreateManyTaskInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTaskInput = {
    create?: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput> | PaymentCreateWithoutTaskInput[] | PaymentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTaskInput | PaymentCreateOrConnectWithoutTaskInput[]
    createMany?: PaymentCreateManyTaskInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput> | TaskApplicationsCreateWithoutTaskInput[] | TaskApplicationsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutTaskInput | TaskApplicationsCreateOrConnectWithoutTaskInput[]
    createMany?: TaskApplicationsCreateManyTaskInputEnvelope
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput> | ReviewCreateWithoutTaskInput[] | ReviewUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTaskInput | ReviewCreateOrConnectWithoutTaskInput[]
    createMany?: ReviewCreateManyTaskInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput> | PaymentCreateWithoutTaskInput[] | PaymentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTaskInput | PaymentCreateOrConnectWithoutTaskInput[]
    createMany?: PaymentCreateManyTaskInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskPaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPostedTasksNestedInput = {
    create?: XOR<UserCreateWithoutPostedTasksInput, UserUncheckedCreateWithoutPostedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedTasksInput
    upsert?: UserUpsertWithoutPostedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostedTasksInput, UserUpdateWithoutPostedTasksInput>, UserUncheckedUpdateWithoutPostedTasksInput>
  }

  export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type TaskApplicationsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput> | TaskApplicationsCreateWithoutTaskInput[] | TaskApplicationsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutTaskInput | TaskApplicationsCreateOrConnectWithoutTaskInput[]
    upsert?: TaskApplicationsUpsertWithWhereUniqueWithoutTaskInput | TaskApplicationsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskApplicationsCreateManyTaskInputEnvelope
    set?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    disconnect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    delete?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    update?: TaskApplicationsUpdateWithWhereUniqueWithoutTaskInput | TaskApplicationsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskApplicationsUpdateManyWithWhereWithoutTaskInput | TaskApplicationsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput> | ReviewCreateWithoutTaskInput[] | ReviewUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTaskInput | ReviewCreateOrConnectWithoutTaskInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTaskInput | ReviewUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReviewCreateManyTaskInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTaskInput | ReviewUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTaskInput | ReviewUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput> | PaymentCreateWithoutTaskInput[] | PaymentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTaskInput | PaymentCreateOrConnectWithoutTaskInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTaskInput | PaymentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: PaymentCreateManyTaskInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTaskInput | PaymentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTaskInput | PaymentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput> | TaskApplicationsCreateWithoutTaskInput[] | TaskApplicationsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskApplicationsCreateOrConnectWithoutTaskInput | TaskApplicationsCreateOrConnectWithoutTaskInput[]
    upsert?: TaskApplicationsUpsertWithWhereUniqueWithoutTaskInput | TaskApplicationsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskApplicationsCreateManyTaskInputEnvelope
    set?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    disconnect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    delete?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    connect?: TaskApplicationsWhereUniqueInput | TaskApplicationsWhereUniqueInput[]
    update?: TaskApplicationsUpdateWithWhereUniqueWithoutTaskInput | TaskApplicationsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskApplicationsUpdateManyWithWhereWithoutTaskInput | TaskApplicationsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput> | ReviewCreateWithoutTaskInput[] | ReviewUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTaskInput | ReviewCreateOrConnectWithoutTaskInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTaskInput | ReviewUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReviewCreateManyTaskInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTaskInput | ReviewUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTaskInput | ReviewUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput> | PaymentCreateWithoutTaskInput[] | PaymentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTaskInput | PaymentCreateOrConnectWithoutTaskInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTaskInput | PaymentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: PaymentCreateManyTaskInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTaskInput | PaymentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTaskInput | PaymentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskersAppliedInput = {
    create?: XOR<TaskCreateWithoutTaskersAppliedInput, TaskUncheckedCreateWithoutTaskersAppliedInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskersAppliedInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskApplicationsInput = {
    create?: XOR<UserCreateWithoutTaskApplicationsInput, UserUncheckedCreateWithoutTaskApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskApplicationStatus
  }

  export type TaskUpdateOneRequiredWithoutTaskersAppliedNestedInput = {
    create?: XOR<TaskCreateWithoutTaskersAppliedInput, TaskUncheckedCreateWithoutTaskersAppliedInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskersAppliedInput
    upsert?: TaskUpsertWithoutTaskersAppliedInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskersAppliedInput, TaskUpdateWithoutTaskersAppliedInput>, TaskUncheckedUpdateWithoutTaskersAppliedInput>
  }

  export type UserUpdateOneRequiredWithoutTaskApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutTaskApplicationsInput, UserUncheckedCreateWithoutTaskApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskApplicationsInput
    upsert?: UserUpsertWithoutTaskApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskApplicationsInput, UserUpdateWithoutTaskApplicationsInput>, UserUncheckedUpdateWithoutTaskApplicationsInput>
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TaskCreateWithoutReviewsInput, TaskUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutReviewsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type TaskUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TaskCreateWithoutReviewsInput, TaskUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutReviewsInput
    upsert?: TaskUpsertWithoutReviewsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutReviewsInput, TaskUpdateWithoutReviewsInput>, TaskUncheckedUpdateWithoutReviewsInput>
  }

  export type TaskCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TaskCreateWithoutPaymentInput, TaskUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TaskCreateOrConnectWithoutPaymentInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<TaskCreateWithoutPaymentInput, TaskUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TaskCreateOrConnectWithoutPaymentInput
    upsert?: TaskUpsertWithoutPaymentInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutPaymentInput, TaskUpdateWithoutPaymentInput>, TaskUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPaymentStatus | EnumTaskPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPaymentStatus[]
    notIn?: $Enums.TaskPaymentStatus[]
    not?: NestedEnumTaskPaymentStatusFilter<$PrismaModel> | $Enums.TaskPaymentStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPaymentStatus | EnumTaskPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPaymentStatus[]
    notIn?: $Enums.TaskPaymentStatus[]
    not?: NestedEnumTaskPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskApplicationStatus | EnumTaskApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskApplicationStatus[]
    notIn?: $Enums.TaskApplicationStatus[]
    not?: NestedEnumTaskApplicationStatusFilter<$PrismaModel> | $Enums.TaskApplicationStatus
  }

  export type NestedEnumTaskApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskApplicationStatus | EnumTaskApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskApplicationStatus[]
    notIn?: $Enums.TaskApplicationStatus[]
    not?: NestedEnumTaskApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskCreateWithoutTaskPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskerAssigned?: UserCreateNestedOneWithoutAssignedTasksInput
    taskersApplied?: TaskApplicationsCreateNestedManyWithoutTaskInput
    reviews?: ReviewCreateNestedManyWithoutTaskInput
    Payment?: PaymentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskersApplied?: TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTaskInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskPosterInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput>
  }

  export type TaskCreateManyTaskPosterInputEnvelope = {
    data: TaskCreateManyTaskPosterInput | TaskCreateManyTaskPosterInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutTaskerAssignedInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskPoster: UserCreateNestedOneWithoutPostedTasksInput
    taskersApplied?: TaskApplicationsCreateNestedManyWithoutTaskInput
    reviews?: ReviewCreateNestedManyWithoutTaskInput
    Payment?: PaymentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskerAssignedInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskersApplied?: TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTaskInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskerAssignedInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput>
  }

  export type TaskCreateManyTaskerAssignedInputEnvelope = {
    data: TaskCreateManyTaskerAssignedInput | TaskCreateManyTaskerAssignedInput[]
    skipDuplicates?: boolean
  }

  export type TaskApplicationsCreateWithoutUserInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    task: TaskCreateNestedOneWithoutTaskersAppliedInput
  }

  export type TaskApplicationsUncheckedCreateWithoutUserInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    taskId: string
  }

  export type TaskApplicationsCreateOrConnectWithoutUserInput = {
    where: TaskApplicationsWhereUniqueInput
    create: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput>
  }

  export type TaskApplicationsCreateManyUserInputEnvelope = {
    data: TaskApplicationsCreateManyUserInput | TaskApplicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
    task: TaskCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    revieweeId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    task: TaskCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeInput = {
    id?: string
    reviewerId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewCreateManyRevieweeInputEnvelope = {
    data: ReviewCreateManyRevieweeInput | ReviewCreateManyRevieweeInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    taskId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutTaskPosterInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTaskPosterInput, TaskUncheckedUpdateWithoutTaskPosterInput>
    create: XOR<TaskCreateWithoutTaskPosterInput, TaskUncheckedCreateWithoutTaskPosterInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTaskPosterInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTaskPosterInput, TaskUncheckedUpdateWithoutTaskPosterInput>
  }

  export type TaskUpdateManyWithWhereWithoutTaskPosterInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTaskPosterInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    category?: StringFilter<"Task"> | string
    location?: StringFilter<"Task"> | string
    latitude?: FloatFilter<"Task"> | number
    longitude?: FloatFilter<"Task"> | number
    offer?: FloatFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    taskerRated?: BoolFilter<"Task"> | boolean
    taskPosterRated?: BoolFilter<"Task"> | boolean
    taskPosterId?: StringFilter<"Task"> | string
    taskerAssignedId?: StringNullableFilter<"Task"> | string | null
    taskPayment?: EnumTaskPaymentStatusFilter<"Task"> | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutTaskerAssignedInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTaskerAssignedInput, TaskUncheckedUpdateWithoutTaskerAssignedInput>
    create: XOR<TaskCreateWithoutTaskerAssignedInput, TaskUncheckedCreateWithoutTaskerAssignedInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTaskerAssignedInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTaskerAssignedInput, TaskUncheckedUpdateWithoutTaskerAssignedInput>
  }

  export type TaskUpdateManyWithWhereWithoutTaskerAssignedInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTaskerAssignedInput>
  }

  export type TaskApplicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskApplicationsWhereUniqueInput
    update: XOR<TaskApplicationsUpdateWithoutUserInput, TaskApplicationsUncheckedUpdateWithoutUserInput>
    create: XOR<TaskApplicationsCreateWithoutUserInput, TaskApplicationsUncheckedCreateWithoutUserInput>
  }

  export type TaskApplicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskApplicationsWhereUniqueInput
    data: XOR<TaskApplicationsUpdateWithoutUserInput, TaskApplicationsUncheckedUpdateWithoutUserInput>
  }

  export type TaskApplicationsUpdateManyWithWhereWithoutUserInput = {
    where: TaskApplicationsScalarWhereInput
    data: XOR<TaskApplicationsUpdateManyMutationInput, TaskApplicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskApplicationsScalarWhereInput = {
    AND?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
    OR?: TaskApplicationsScalarWhereInput[]
    NOT?: TaskApplicationsScalarWhereInput | TaskApplicationsScalarWhereInput[]
    id?: StringFilter<"TaskApplications"> | string
    appliedAt?: DateTimeFilter<"TaskApplications"> | Date | string
    status?: EnumTaskApplicationStatusFilter<"TaskApplications"> | $Enums.TaskApplicationStatus
    taskId?: StringFilter<"TaskApplications"> | string
    userId?: StringFilter<"TaskApplications"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    taskId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    taskId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    checkoutRequestId?: StringFilter<"Payment"> | string
    merchantRequestId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payment"> | number
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    receipt?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutPostedTasksInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostedTasksInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostedTasksInput, UserUncheckedCreateWithoutPostedTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type TaskApplicationsCreateWithoutTaskInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    user: UserCreateNestedOneWithoutTaskApplicationsInput
  }

  export type TaskApplicationsUncheckedCreateWithoutTaskInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    userId: string
  }

  export type TaskApplicationsCreateOrConnectWithoutTaskInput = {
    where: TaskApplicationsWhereUniqueInput
    create: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput>
  }

  export type TaskApplicationsCreateManyTaskInputEnvelope = {
    data: TaskApplicationsCreateManyTaskInput | TaskApplicationsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTaskInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutTaskInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTaskInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput>
  }

  export type ReviewCreateManyTaskInputEnvelope = {
    data: ReviewCreateManyTaskInput | ReviewCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTaskInput = {
    id?: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTaskInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput>
  }

  export type PaymentCreateManyTaskInputEnvelope = {
    data: PaymentCreateManyTaskInput | PaymentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostedTasksInput = {
    update: XOR<UserUpdateWithoutPostedTasksInput, UserUncheckedUpdateWithoutPostedTasksInput>
    create: XOR<UserCreateWithoutPostedTasksInput, UserUncheckedCreateWithoutPostedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostedTasksInput, UserUncheckedUpdateWithoutPostedTasksInput>
  }

  export type UserUpdateWithoutPostedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskApplicationsUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskApplicationsWhereUniqueInput
    update: XOR<TaskApplicationsUpdateWithoutTaskInput, TaskApplicationsUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskApplicationsCreateWithoutTaskInput, TaskApplicationsUncheckedCreateWithoutTaskInput>
  }

  export type TaskApplicationsUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskApplicationsWhereUniqueInput
    data: XOR<TaskApplicationsUpdateWithoutTaskInput, TaskApplicationsUncheckedUpdateWithoutTaskInput>
  }

  export type TaskApplicationsUpdateManyWithWhereWithoutTaskInput = {
    where: TaskApplicationsScalarWhereInput
    data: XOR<TaskApplicationsUpdateManyMutationInput, TaskApplicationsUncheckedUpdateManyWithoutTaskInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTaskInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTaskInput, ReviewUncheckedUpdateWithoutTaskInput>
    create: XOR<ReviewCreateWithoutTaskInput, ReviewUncheckedCreateWithoutTaskInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTaskInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTaskInput, ReviewUncheckedUpdateWithoutTaskInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTaskInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTaskInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutTaskInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTaskInput, PaymentUncheckedUpdateWithoutTaskInput>
    create: XOR<PaymentCreateWithoutTaskInput, PaymentUncheckedCreateWithoutTaskInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTaskInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTaskInput, PaymentUncheckedUpdateWithoutTaskInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTaskInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutTaskersAppliedInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskPoster: UserCreateNestedOneWithoutPostedTasksInput
    taskerAssigned?: UserCreateNestedOneWithoutAssignedTasksInput
    reviews?: ReviewCreateNestedManyWithoutTaskInput
    Payment?: PaymentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskersAppliedInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTaskInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskersAppliedInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskersAppliedInput, TaskUncheckedCreateWithoutTaskersAppliedInput>
  }

  export type UserCreateWithoutTaskApplicationsInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskApplicationsInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskApplicationsInput, UserUncheckedCreateWithoutTaskApplicationsInput>
  }

  export type TaskUpsertWithoutTaskersAppliedInput = {
    update: XOR<TaskUpdateWithoutTaskersAppliedInput, TaskUncheckedUpdateWithoutTaskersAppliedInput>
    create: XOR<TaskCreateWithoutTaskersAppliedInput, TaskUncheckedCreateWithoutTaskersAppliedInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskersAppliedInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskersAppliedInput, TaskUncheckedUpdateWithoutTaskersAppliedInput>
  }

  export type TaskUpdateWithoutTaskersAppliedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskPoster?: UserUpdateOneRequiredWithoutPostedTasksNestedInput
    taskerAssigned?: UserUpdateOneWithoutAssignedTasksNestedInput
    reviews?: ReviewUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskersAppliedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutTaskApplicationsInput = {
    update: XOR<UserUpdateWithoutTaskApplicationsInput, UserUncheckedUpdateWithoutTaskApplicationsInput>
    create: XOR<UserCreateWithoutTaskApplicationsInput, UserUncheckedCreateWithoutTaskApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskApplicationsInput, UserUncheckedUpdateWithoutTaskApplicationsInput>
  }

  export type UserUpdateWithoutTaskApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type TaskCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskPoster: UserCreateNestedOneWithoutPostedTasksInput
    taskerAssigned?: UserCreateNestedOneWithoutAssignedTasksInput
    taskersApplied?: TaskApplicationsCreateNestedManyWithoutTaskInput
    Payment?: PaymentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskersApplied?: TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutReviewsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutReviewsInput, TaskUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutReviewsInput = {
    update: XOR<TaskUpdateWithoutReviewsInput, TaskUncheckedUpdateWithoutReviewsInput>
    create: XOR<TaskCreateWithoutReviewsInput, TaskUncheckedCreateWithoutReviewsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutReviewsInput, TaskUncheckedUpdateWithoutReviewsInput>
  }

  export type TaskUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskPoster?: UserUpdateOneRequiredWithoutPostedTasksNestedInput
    taskerAssigned?: UserUpdateOneWithoutAssignedTasksNestedInput
    taskersApplied?: TaskApplicationsUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskersApplied?: TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutPaymentInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskPoster: UserCreateNestedOneWithoutPostedTasksInput
    taskerAssigned?: UserCreateNestedOneWithoutAssignedTasksInput
    taskersApplied?: TaskApplicationsCreateNestedManyWithoutTaskInput
    reviews?: ReviewCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutPaymentInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    taskersApplied?: TaskApplicationsUncheckedCreateNestedManyWithoutTaskInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutPaymentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutPaymentInput, TaskUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    username: string
    email: string
    phone?: string | null
    password?: string | null
    profilePicture?: string | null
    rating?: number
    tasksPosted?: number
    tasksCompleted?: number
    isTasker?: boolean
    authProvider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    postedTasks?: TaskUncheckedCreateNestedManyWithoutTaskPosterInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutTaskerAssignedInput
    taskApplications?: TaskApplicationsUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type TaskUpsertWithoutPaymentInput = {
    update: XOR<TaskUpdateWithoutPaymentInput, TaskUncheckedUpdateWithoutPaymentInput>
    create: XOR<TaskCreateWithoutPaymentInput, TaskUncheckedCreateWithoutPaymentInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutPaymentInput, TaskUncheckedUpdateWithoutPaymentInput>
  }

  export type TaskUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskPoster?: UserUpdateOneRequiredWithoutPostedTasksNestedInput
    taskerAssigned?: UserUpdateOneWithoutAssignedTasksNestedInput
    taskersApplied?: TaskApplicationsUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskersApplied?: TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    tasksPosted?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    isTasker?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedTasks?: TaskUncheckedUpdateManyWithoutTaskPosterNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutTaskerAssignedNestedInput
    taskApplications?: TaskApplicationsUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type TaskCreateManyTaskPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskerAssignedId?: string | null
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyTaskerAssignedInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    latitude?: number
    longitude?: number
    offer: number
    status?: $Enums.TaskStatus
    taskerRated?: boolean
    taskPosterRated?: boolean
    taskPosterId: string
    taskPayment?: $Enums.TaskPaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskApplicationsCreateManyUserInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    taskId: string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    revieweeId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyRevieweeInput = {
    id?: string
    reviewerId: string
    taskId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    taskId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutTaskPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskerAssigned?: UserUpdateOneWithoutAssignedTasksNestedInput
    taskersApplied?: TaskApplicationsUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskersApplied?: TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTaskPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskerAssignedId?: NullableStringFieldUpdateOperationsInput | string | null
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutTaskerAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskPoster?: UserUpdateOneRequiredWithoutPostedTasksNestedInput
    taskersApplied?: TaskApplicationsUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskerAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskersApplied?: TaskApplicationsUncheckedUpdateManyWithoutTaskNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTaskNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTaskerAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskerRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterRated?: BoolFieldUpdateOperationsInput | boolean
    taskPosterId?: StringFieldUpdateOperationsInput | string
    taskPayment?: EnumTaskPaymentStatusFieldUpdateOperationsInput | $Enums.TaskPaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskApplicationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    task?: TaskUpdateOneRequiredWithoutTaskersAppliedNestedInput
  }

  export type TaskApplicationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskApplicationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    task?: TaskUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    task?: TaskUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskApplicationsCreateManyTaskInput = {
    id?: string
    appliedAt?: Date | string
    status?: $Enums.TaskApplicationStatus
    userId: string
  }

  export type ReviewCreateManyTaskInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyTaskInput = {
    id?: string
    userId: string
    checkoutRequestId: string
    merchantRequestId?: string | null
    status?: $Enums.PaymentStatus
    amount: number
    paidAt?: Date | string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskApplicationsUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    user?: UserUpdateOneRequiredWithoutTaskApplicationsNestedInput
  }

  export type TaskApplicationsUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskApplicationsUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskApplicationStatusFieldUpdateOperationsInput | $Enums.TaskApplicationStatus
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkoutRequestId?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}