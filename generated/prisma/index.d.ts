
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
 * Model PetPost
 * 
 */
export type PetPost = $Result.DefaultSelection<Prisma.$PetPostPayload>
/**
 * Model ImagePets
 * 
 */
export type ImagePets = $Result.DefaultSelection<Prisma.$ImagePetsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PetPostType: {
  ADOPTION: 'ADOPTION',
  LOST: 'LOST',
  FOUND: 'FOUND'
};

export type PetPostType = (typeof PetPostType)[keyof typeof PetPostType]


export const PostStatus: {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Species: {
  PERRO: 'PERRO',
  GATO: 'GATO',
  OTRO: 'OTRO'
};

export type Species = (typeof Species)[keyof typeof Species]

}

export type PetPostType = $Enums.PetPostType

export const PetPostType: typeof $Enums.PetPostType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Species = $Enums.Species

export const Species: typeof $Enums.Species

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
   * `prisma.petPost`: Exposes CRUD operations for the **PetPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetPosts
    * const petPosts = await prisma.petPost.findMany()
    * ```
    */
  get petPost(): Prisma.PetPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagePets`: Exposes CRUD operations for the **ImagePets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagePets
    * const imagePets = await prisma.imagePets.findMany()
    * ```
    */
  get imagePets(): Prisma.ImagePetsDelegate<ExtArgs, ClientOptions>;
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
    PetPost: 'PetPost',
    ImagePets: 'ImagePets'
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
      modelProps: "user" | "petPost" | "imagePets"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      PetPost: {
        payload: Prisma.$PetPostPayload<ExtArgs>
        fields: Prisma.PetPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          findFirst: {
            args: Prisma.PetPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          findMany: {
            args: Prisma.PetPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          create: {
            args: Prisma.PetPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          createMany: {
            args: Prisma.PetPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          delete: {
            args: Prisma.PetPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          update: {
            args: Prisma.PetPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          deleteMany: {
            args: Prisma.PetPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          upsert: {
            args: Prisma.PetPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          aggregate: {
            args: Prisma.PetPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetPost>
          }
          groupBy: {
            args: Prisma.PetPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetPostCountArgs<ExtArgs>
            result: $Utils.Optional<PetPostCountAggregateOutputType> | number
          }
        }
      }
      ImagePets: {
        payload: Prisma.$ImagePetsPayload<ExtArgs>
        fields: Prisma.ImagePetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagePetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagePetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          findFirst: {
            args: Prisma.ImagePetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagePetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          findMany: {
            args: Prisma.ImagePetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>[]
          }
          create: {
            args: Prisma.ImagePetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          createMany: {
            args: Prisma.ImagePetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagePetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>[]
          }
          delete: {
            args: Prisma.ImagePetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          update: {
            args: Prisma.ImagePetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          deleteMany: {
            args: Prisma.ImagePetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagePetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagePetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>[]
          }
          upsert: {
            args: Prisma.ImagePetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePetsPayload>
          }
          aggregate: {
            args: Prisma.ImagePetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagePets>
          }
          groupBy: {
            args: Prisma.ImagePetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagePetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagePetsCountArgs<ExtArgs>
            result: $Utils.Optional<ImagePetsCountAggregateOutputType> | number
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
    petPost?: PetPostOmit
    imagePets?: ImagePetsOmit
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
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetPostWhereInput
  }


  /**
   * Count Type PetPostCountOutputType
   */

  export type PetPostCountOutputType = {
    image: number
  }

  export type PetPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | PetPostCountOutputTypeCountImageArgs
  }

  // Custom InputTypes
  /**
   * PetPostCountOutputType without action
   */
  export type PetPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPostCountOutputType
     */
    select?: PetPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetPostCountOutputType without action
   */
  export type PetPostCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagePetsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isBlocked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isBlocked?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    isBlocked: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "isBlocked" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PetPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      isBlocked: boolean
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    where?: PetPostWhereInput
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    cursor?: PetPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
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
   * Model PetPost
   */

  export type AggregatePetPost = {
    _count: PetPostCountAggregateOutputType | null
    _min: PetPostMinAggregateOutputType | null
    _max: PetPostMaxAggregateOutputType | null
  }

  export type PetPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PetPostType | null
    species: $Enums.Species | null
    breed: string | null
    age: string | null
    location: string | null
    status: $Enums.PostStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PetPostType | null
    species: $Enums.Species | null
    breed: string | null
    age: string | null
    location: string | null
    status: $Enums.PostStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetPostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    species: number
    breed: number
    age: number
    location: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetPostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    species?: true
    breed?: true
    age?: true
    location?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetPostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    species?: true
    breed?: true
    age?: true
    location?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetPostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    species?: true
    breed?: true
    age?: true
    location?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetPost to aggregate.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetPosts
    **/
    _count?: true | PetPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetPostMaxAggregateInputType
  }

  export type GetPetPostAggregateType<T extends PetPostAggregateArgs> = {
        [P in keyof T & keyof AggregatePetPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetPost[P]>
      : GetScalarType<T[P], AggregatePetPost[P]>
  }




  export type PetPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetPostWhereInput
    orderBy?: PetPostOrderByWithAggregationInput | PetPostOrderByWithAggregationInput[]
    by: PetPostScalarFieldEnum[] | PetPostScalarFieldEnum
    having?: PetPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetPostCountAggregateInputType | true
    _min?: PetPostMinAggregateInputType
    _max?: PetPostMaxAggregateInputType
  }

  export type PetPostGroupByOutputType = {
    id: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed: string | null
    age: string | null
    location: string
    status: $Enums.PostStatus
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PetPostCountAggregateOutputType | null
    _min: PetPostMinAggregateOutputType | null
    _max: PetPostMaxAggregateOutputType | null
  }

  type GetPetPostGroupByPayload<T extends PetPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetPostGroupByOutputType[P]>
            : GetScalarType<T[P], PetPostGroupByOutputType[P]>
        }
      >
    >


  export type PetPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    species?: boolean
    breed?: boolean
    age?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | PetPost$imageArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PetPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    species?: boolean
    breed?: boolean
    age?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    species?: boolean
    breed?: boolean
    age?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    species?: boolean
    breed?: boolean
    age?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "species" | "breed" | "age" | "location" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["petPost"]>
  export type PetPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | PetPost$imageArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PetPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetPost"
    objects: {
      image: Prisma.$ImagePetsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: $Enums.PetPostType
      species: $Enums.Species
      breed: string | null
      age: string | null
      location: string
      status: $Enums.PostStatus
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["petPost"]>
    composites: {}
  }

  type PetPostGetPayload<S extends boolean | null | undefined | PetPostDefaultArgs> = $Result.GetResult<Prisma.$PetPostPayload, S>

  type PetPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetPostCountAggregateInputType | true
    }

  export interface PetPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetPost'], meta: { name: 'PetPost' } }
    /**
     * Find zero or one PetPost that matches the filter.
     * @param {PetPostFindUniqueArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetPostFindUniqueArgs>(args: SelectSubset<T, PetPostFindUniqueArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetPostFindUniqueOrThrowArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetPostFindUniqueOrThrowArgs>(args: SelectSubset<T, PetPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindFirstArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetPostFindFirstArgs>(args?: SelectSubset<T, PetPostFindFirstArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindFirstOrThrowArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetPostFindFirstOrThrowArgs>(args?: SelectSubset<T, PetPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetPosts
     * const petPosts = await prisma.petPost.findMany()
     * 
     * // Get first 10 PetPosts
     * const petPosts = await prisma.petPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petPostWithIdOnly = await prisma.petPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetPostFindManyArgs>(args?: SelectSubset<T, PetPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetPost.
     * @param {PetPostCreateArgs} args - Arguments to create a PetPost.
     * @example
     * // Create one PetPost
     * const PetPost = await prisma.petPost.create({
     *   data: {
     *     // ... data to create a PetPost
     *   }
     * })
     * 
     */
    create<T extends PetPostCreateArgs>(args: SelectSubset<T, PetPostCreateArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetPosts.
     * @param {PetPostCreateManyArgs} args - Arguments to create many PetPosts.
     * @example
     * // Create many PetPosts
     * const petPost = await prisma.petPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetPostCreateManyArgs>(args?: SelectSubset<T, PetPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetPosts and returns the data saved in the database.
     * @param {PetPostCreateManyAndReturnArgs} args - Arguments to create many PetPosts.
     * @example
     * // Create many PetPosts
     * const petPost = await prisma.petPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetPosts and only return the `id`
     * const petPostWithIdOnly = await prisma.petPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetPostCreateManyAndReturnArgs>(args?: SelectSubset<T, PetPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetPost.
     * @param {PetPostDeleteArgs} args - Arguments to delete one PetPost.
     * @example
     * // Delete one PetPost
     * const PetPost = await prisma.petPost.delete({
     *   where: {
     *     // ... filter to delete one PetPost
     *   }
     * })
     * 
     */
    delete<T extends PetPostDeleteArgs>(args: SelectSubset<T, PetPostDeleteArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetPost.
     * @param {PetPostUpdateArgs} args - Arguments to update one PetPost.
     * @example
     * // Update one PetPost
     * const petPost = await prisma.petPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetPostUpdateArgs>(args: SelectSubset<T, PetPostUpdateArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetPosts.
     * @param {PetPostDeleteManyArgs} args - Arguments to filter PetPosts to delete.
     * @example
     * // Delete a few PetPosts
     * const { count } = await prisma.petPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetPostDeleteManyArgs>(args?: SelectSubset<T, PetPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetPosts
     * const petPost = await prisma.petPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetPostUpdateManyArgs>(args: SelectSubset<T, PetPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetPosts and returns the data updated in the database.
     * @param {PetPostUpdateManyAndReturnArgs} args - Arguments to update many PetPosts.
     * @example
     * // Update many PetPosts
     * const petPost = await prisma.petPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetPosts and only return the `id`
     * const petPostWithIdOnly = await prisma.petPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetPostUpdateManyAndReturnArgs>(args: SelectSubset<T, PetPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetPost.
     * @param {PetPostUpsertArgs} args - Arguments to update or create a PetPost.
     * @example
     * // Update or create a PetPost
     * const petPost = await prisma.petPost.upsert({
     *   create: {
     *     // ... data to create a PetPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetPost we want to update
     *   }
     * })
     */
    upsert<T extends PetPostUpsertArgs>(args: SelectSubset<T, PetPostUpsertArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostCountArgs} args - Arguments to filter PetPosts to count.
     * @example
     * // Count the number of PetPosts
     * const count = await prisma.petPost.count({
     *   where: {
     *     // ... the filter for the PetPosts we want to count
     *   }
     * })
    **/
    count<T extends PetPostCountArgs>(
      args?: Subset<T, PetPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetPostAggregateArgs>(args: Subset<T, PetPostAggregateArgs>): Prisma.PrismaPromise<GetPetPostAggregateType<T>>

    /**
     * Group by PetPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostGroupByArgs} args - Group by arguments.
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
      T extends PetPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetPostGroupByArgs['orderBy'] }
        : { orderBy?: PetPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetPost model
   */
  readonly fields: PetPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends PetPost$imageArgs<ExtArgs> = {}>(args?: Subset<T, PetPost$imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PetPost model
   */
  interface PetPostFieldRefs {
    readonly id: FieldRef<"PetPost", 'String'>
    readonly title: FieldRef<"PetPost", 'String'>
    readonly description: FieldRef<"PetPost", 'String'>
    readonly type: FieldRef<"PetPost", 'PetPostType'>
    readonly species: FieldRef<"PetPost", 'Species'>
    readonly breed: FieldRef<"PetPost", 'String'>
    readonly age: FieldRef<"PetPost", 'String'>
    readonly location: FieldRef<"PetPost", 'String'>
    readonly status: FieldRef<"PetPost", 'PostStatus'>
    readonly userId: FieldRef<"PetPost", 'String'>
    readonly createdAt: FieldRef<"PetPost", 'DateTime'>
    readonly updatedAt: FieldRef<"PetPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PetPost findUnique
   */
  export type PetPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost findUniqueOrThrow
   */
  export type PetPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost findFirst
   */
  export type PetPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetPosts.
     */
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost findFirstOrThrow
   */
  export type PetPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetPosts.
     */
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost findMany
   */
  export type PetPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPosts to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost create
   */
  export type PetPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The data needed to create a PetPost.
     */
    data: XOR<PetPostCreateInput, PetPostUncheckedCreateInput>
  }

  /**
   * PetPost createMany
   */
  export type PetPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetPosts.
     */
    data: PetPostCreateManyInput | PetPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetPost createManyAndReturn
   */
  export type PetPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * The data used to create many PetPosts.
     */
    data: PetPostCreateManyInput | PetPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetPost update
   */
  export type PetPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The data needed to update a PetPost.
     */
    data: XOR<PetPostUpdateInput, PetPostUncheckedUpdateInput>
    /**
     * Choose, which PetPost to update.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost updateMany
   */
  export type PetPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetPosts.
     */
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyInput>
    /**
     * Filter which PetPosts to update
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to update.
     */
    limit?: number
  }

  /**
   * PetPost updateManyAndReturn
   */
  export type PetPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * The data used to update PetPosts.
     */
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyInput>
    /**
     * Filter which PetPosts to update
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetPost upsert
   */
  export type PetPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The filter to search for the PetPost to update in case it exists.
     */
    where: PetPostWhereUniqueInput
    /**
     * In case the PetPost found by the `where` argument doesn't exist, create a new PetPost with this data.
     */
    create: XOR<PetPostCreateInput, PetPostUncheckedCreateInput>
    /**
     * In case the PetPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetPostUpdateInput, PetPostUncheckedUpdateInput>
  }

  /**
   * PetPost delete
   */
  export type PetPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter which PetPost to delete.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost deleteMany
   */
  export type PetPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetPosts to delete
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to delete.
     */
    limit?: number
  }

  /**
   * PetPost.image
   */
  export type PetPost$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    where?: ImagePetsWhereInput
    orderBy?: ImagePetsOrderByWithRelationInput | ImagePetsOrderByWithRelationInput[]
    cursor?: ImagePetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagePetsScalarFieldEnum | ImagePetsScalarFieldEnum[]
  }

  /**
   * PetPost without action
   */
  export type PetPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
  }


  /**
   * Model ImagePets
   */

  export type AggregateImagePets = {
    _count: ImagePetsCountAggregateOutputType | null
    _avg: ImagePetsAvgAggregateOutputType | null
    _sum: ImagePetsSumAggregateOutputType | null
    _min: ImagePetsMinAggregateOutputType | null
    _max: ImagePetsMaxAggregateOutputType | null
  }

  export type ImagePetsAvgAggregateOutputType = {
    id: number | null
  }

  export type ImagePetsSumAggregateOutputType = {
    id: number | null
  }

  export type ImagePetsMinAggregateOutputType = {
    id: number | null
    url: string | null
    petPostId: string | null
  }

  export type ImagePetsMaxAggregateOutputType = {
    id: number | null
    url: string | null
    petPostId: string | null
  }

  export type ImagePetsCountAggregateOutputType = {
    id: number
    url: number
    petPostId: number
    _all: number
  }


  export type ImagePetsAvgAggregateInputType = {
    id?: true
  }

  export type ImagePetsSumAggregateInputType = {
    id?: true
  }

  export type ImagePetsMinAggregateInputType = {
    id?: true
    url?: true
    petPostId?: true
  }

  export type ImagePetsMaxAggregateInputType = {
    id?: true
    url?: true
    petPostId?: true
  }

  export type ImagePetsCountAggregateInputType = {
    id?: true
    url?: true
    petPostId?: true
    _all?: true
  }

  export type ImagePetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagePets to aggregate.
     */
    where?: ImagePetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePets to fetch.
     */
    orderBy?: ImagePetsOrderByWithRelationInput | ImagePetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagePetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagePets
    **/
    _count?: true | ImagePetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagePetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagePetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagePetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagePetsMaxAggregateInputType
  }

  export type GetImagePetsAggregateType<T extends ImagePetsAggregateArgs> = {
        [P in keyof T & keyof AggregateImagePets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagePets[P]>
      : GetScalarType<T[P], AggregateImagePets[P]>
  }




  export type ImagePetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagePetsWhereInput
    orderBy?: ImagePetsOrderByWithAggregationInput | ImagePetsOrderByWithAggregationInput[]
    by: ImagePetsScalarFieldEnum[] | ImagePetsScalarFieldEnum
    having?: ImagePetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagePetsCountAggregateInputType | true
    _avg?: ImagePetsAvgAggregateInputType
    _sum?: ImagePetsSumAggregateInputType
    _min?: ImagePetsMinAggregateInputType
    _max?: ImagePetsMaxAggregateInputType
  }

  export type ImagePetsGroupByOutputType = {
    id: number
    url: string
    petPostId: string
    _count: ImagePetsCountAggregateOutputType | null
    _avg: ImagePetsAvgAggregateOutputType | null
    _sum: ImagePetsSumAggregateOutputType | null
    _min: ImagePetsMinAggregateOutputType | null
    _max: ImagePetsMaxAggregateOutputType | null
  }

  type GetImagePetsGroupByPayload<T extends ImagePetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagePetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagePetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagePetsGroupByOutputType[P]>
            : GetScalarType<T[P], ImagePetsGroupByOutputType[P]>
        }
      >
    >


  export type ImagePetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    petPostId?: boolean
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagePets"]>

  export type ImagePetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    petPostId?: boolean
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagePets"]>

  export type ImagePetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    petPostId?: boolean
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagePets"]>

  export type ImagePetsSelectScalar = {
    id?: boolean
    url?: boolean
    petPostId?: boolean
  }

  export type ImagePetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "petPostId", ExtArgs["result"]["imagePets"]>
  export type ImagePetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }
  export type ImagePetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }
  export type ImagePetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petPost?: boolean | PetPostDefaultArgs<ExtArgs>
  }

  export type $ImagePetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImagePets"
    objects: {
      petPost: Prisma.$PetPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      petPostId: string
    }, ExtArgs["result"]["imagePets"]>
    composites: {}
  }

  type ImagePetsGetPayload<S extends boolean | null | undefined | ImagePetsDefaultArgs> = $Result.GetResult<Prisma.$ImagePetsPayload, S>

  type ImagePetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagePetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagePetsCountAggregateInputType | true
    }

  export interface ImagePetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImagePets'], meta: { name: 'ImagePets' } }
    /**
     * Find zero or one ImagePets that matches the filter.
     * @param {ImagePetsFindUniqueArgs} args - Arguments to find a ImagePets
     * @example
     * // Get one ImagePets
     * const imagePets = await prisma.imagePets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagePetsFindUniqueArgs>(args: SelectSubset<T, ImagePetsFindUniqueArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImagePets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagePetsFindUniqueOrThrowArgs} args - Arguments to find a ImagePets
     * @example
     * // Get one ImagePets
     * const imagePets = await prisma.imagePets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagePetsFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagePetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagePets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsFindFirstArgs} args - Arguments to find a ImagePets
     * @example
     * // Get one ImagePets
     * const imagePets = await prisma.imagePets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagePetsFindFirstArgs>(args?: SelectSubset<T, ImagePetsFindFirstArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagePets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsFindFirstOrThrowArgs} args - Arguments to find a ImagePets
     * @example
     * // Get one ImagePets
     * const imagePets = await prisma.imagePets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagePetsFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagePetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImagePets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagePets
     * const imagePets = await prisma.imagePets.findMany()
     * 
     * // Get first 10 ImagePets
     * const imagePets = await prisma.imagePets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagePetsWithIdOnly = await prisma.imagePets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagePetsFindManyArgs>(args?: SelectSubset<T, ImagePetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImagePets.
     * @param {ImagePetsCreateArgs} args - Arguments to create a ImagePets.
     * @example
     * // Create one ImagePets
     * const ImagePets = await prisma.imagePets.create({
     *   data: {
     *     // ... data to create a ImagePets
     *   }
     * })
     * 
     */
    create<T extends ImagePetsCreateArgs>(args: SelectSubset<T, ImagePetsCreateArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImagePets.
     * @param {ImagePetsCreateManyArgs} args - Arguments to create many ImagePets.
     * @example
     * // Create many ImagePets
     * const imagePets = await prisma.imagePets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagePetsCreateManyArgs>(args?: SelectSubset<T, ImagePetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImagePets and returns the data saved in the database.
     * @param {ImagePetsCreateManyAndReturnArgs} args - Arguments to create many ImagePets.
     * @example
     * // Create many ImagePets
     * const imagePets = await prisma.imagePets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImagePets and only return the `id`
     * const imagePetsWithIdOnly = await prisma.imagePets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagePetsCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagePetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImagePets.
     * @param {ImagePetsDeleteArgs} args - Arguments to delete one ImagePets.
     * @example
     * // Delete one ImagePets
     * const ImagePets = await prisma.imagePets.delete({
     *   where: {
     *     // ... filter to delete one ImagePets
     *   }
     * })
     * 
     */
    delete<T extends ImagePetsDeleteArgs>(args: SelectSubset<T, ImagePetsDeleteArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImagePets.
     * @param {ImagePetsUpdateArgs} args - Arguments to update one ImagePets.
     * @example
     * // Update one ImagePets
     * const imagePets = await prisma.imagePets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagePetsUpdateArgs>(args: SelectSubset<T, ImagePetsUpdateArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImagePets.
     * @param {ImagePetsDeleteManyArgs} args - Arguments to filter ImagePets to delete.
     * @example
     * // Delete a few ImagePets
     * const { count } = await prisma.imagePets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagePetsDeleteManyArgs>(args?: SelectSubset<T, ImagePetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagePets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagePets
     * const imagePets = await prisma.imagePets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagePetsUpdateManyArgs>(args: SelectSubset<T, ImagePetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagePets and returns the data updated in the database.
     * @param {ImagePetsUpdateManyAndReturnArgs} args - Arguments to update many ImagePets.
     * @example
     * // Update many ImagePets
     * const imagePets = await prisma.imagePets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImagePets and only return the `id`
     * const imagePetsWithIdOnly = await prisma.imagePets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagePetsUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagePetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImagePets.
     * @param {ImagePetsUpsertArgs} args - Arguments to update or create a ImagePets.
     * @example
     * // Update or create a ImagePets
     * const imagePets = await prisma.imagePets.upsert({
     *   create: {
     *     // ... data to create a ImagePets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagePets we want to update
     *   }
     * })
     */
    upsert<T extends ImagePetsUpsertArgs>(args: SelectSubset<T, ImagePetsUpsertArgs<ExtArgs>>): Prisma__ImagePetsClient<$Result.GetResult<Prisma.$ImagePetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImagePets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsCountArgs} args - Arguments to filter ImagePets to count.
     * @example
     * // Count the number of ImagePets
     * const count = await prisma.imagePets.count({
     *   where: {
     *     // ... the filter for the ImagePets we want to count
     *   }
     * })
    **/
    count<T extends ImagePetsCountArgs>(
      args?: Subset<T, ImagePetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagePetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagePets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagePetsAggregateArgs>(args: Subset<T, ImagePetsAggregateArgs>): Prisma.PrismaPromise<GetImagePetsAggregateType<T>>

    /**
     * Group by ImagePets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePetsGroupByArgs} args - Group by arguments.
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
      T extends ImagePetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagePetsGroupByArgs['orderBy'] }
        : { orderBy?: ImagePetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagePetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagePetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImagePets model
   */
  readonly fields: ImagePetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagePets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagePetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petPost<T extends PetPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetPostDefaultArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImagePets model
   */
  interface ImagePetsFieldRefs {
    readonly id: FieldRef<"ImagePets", 'Int'>
    readonly url: FieldRef<"ImagePets", 'String'>
    readonly petPostId: FieldRef<"ImagePets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImagePets findUnique
   */
  export type ImagePetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter, which ImagePets to fetch.
     */
    where: ImagePetsWhereUniqueInput
  }

  /**
   * ImagePets findUniqueOrThrow
   */
  export type ImagePetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter, which ImagePets to fetch.
     */
    where: ImagePetsWhereUniqueInput
  }

  /**
   * ImagePets findFirst
   */
  export type ImagePetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter, which ImagePets to fetch.
     */
    where?: ImagePetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePets to fetch.
     */
    orderBy?: ImagePetsOrderByWithRelationInput | ImagePetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagePets.
     */
    cursor?: ImagePetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagePets.
     */
    distinct?: ImagePetsScalarFieldEnum | ImagePetsScalarFieldEnum[]
  }

  /**
   * ImagePets findFirstOrThrow
   */
  export type ImagePetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter, which ImagePets to fetch.
     */
    where?: ImagePetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePets to fetch.
     */
    orderBy?: ImagePetsOrderByWithRelationInput | ImagePetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagePets.
     */
    cursor?: ImagePetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagePets.
     */
    distinct?: ImagePetsScalarFieldEnum | ImagePetsScalarFieldEnum[]
  }

  /**
   * ImagePets findMany
   */
  export type ImagePetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter, which ImagePets to fetch.
     */
    where?: ImagePetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePets to fetch.
     */
    orderBy?: ImagePetsOrderByWithRelationInput | ImagePetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagePets.
     */
    cursor?: ImagePetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePets.
     */
    skip?: number
    distinct?: ImagePetsScalarFieldEnum | ImagePetsScalarFieldEnum[]
  }

  /**
   * ImagePets create
   */
  export type ImagePetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * The data needed to create a ImagePets.
     */
    data: XOR<ImagePetsCreateInput, ImagePetsUncheckedCreateInput>
  }

  /**
   * ImagePets createMany
   */
  export type ImagePetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImagePets.
     */
    data: ImagePetsCreateManyInput | ImagePetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImagePets createManyAndReturn
   */
  export type ImagePetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * The data used to create many ImagePets.
     */
    data: ImagePetsCreateManyInput | ImagePetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagePets update
   */
  export type ImagePetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * The data needed to update a ImagePets.
     */
    data: XOR<ImagePetsUpdateInput, ImagePetsUncheckedUpdateInput>
    /**
     * Choose, which ImagePets to update.
     */
    where: ImagePetsWhereUniqueInput
  }

  /**
   * ImagePets updateMany
   */
  export type ImagePetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImagePets.
     */
    data: XOR<ImagePetsUpdateManyMutationInput, ImagePetsUncheckedUpdateManyInput>
    /**
     * Filter which ImagePets to update
     */
    where?: ImagePetsWhereInput
    /**
     * Limit how many ImagePets to update.
     */
    limit?: number
  }

  /**
   * ImagePets updateManyAndReturn
   */
  export type ImagePetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * The data used to update ImagePets.
     */
    data: XOR<ImagePetsUpdateManyMutationInput, ImagePetsUncheckedUpdateManyInput>
    /**
     * Filter which ImagePets to update
     */
    where?: ImagePetsWhereInput
    /**
     * Limit how many ImagePets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagePets upsert
   */
  export type ImagePetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * The filter to search for the ImagePets to update in case it exists.
     */
    where: ImagePetsWhereUniqueInput
    /**
     * In case the ImagePets found by the `where` argument doesn't exist, create a new ImagePets with this data.
     */
    create: XOR<ImagePetsCreateInput, ImagePetsUncheckedCreateInput>
    /**
     * In case the ImagePets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagePetsUpdateInput, ImagePetsUncheckedUpdateInput>
  }

  /**
   * ImagePets delete
   */
  export type ImagePetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
    /**
     * Filter which ImagePets to delete.
     */
    where: ImagePetsWhereUniqueInput
  }

  /**
   * ImagePets deleteMany
   */
  export type ImagePetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagePets to delete
     */
    where?: ImagePetsWhereInput
    /**
     * Limit how many ImagePets to delete.
     */
    limit?: number
  }

  /**
   * ImagePets without action
   */
  export type ImagePetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePets
     */
    select?: ImagePetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagePets
     */
    omit?: ImagePetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagePetsInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isBlocked: 'isBlocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PetPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    species: 'species',
    breed: 'breed',
    age: 'age',
    location: 'location',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetPostScalarFieldEnum = (typeof PetPostScalarFieldEnum)[keyof typeof PetPostScalarFieldEnum]


  export const ImagePetsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    petPostId: 'petPostId'
  };

  export type ImagePetsScalarFieldEnum = (typeof ImagePetsScalarFieldEnum)[keyof typeof ImagePetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PetPostType'
   */
  export type EnumPetPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetPostType'>
    


  /**
   * Reference to a field of type 'PetPostType[]'
   */
  export type ListEnumPetPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetPostType[]'>
    


  /**
   * Reference to a field of type 'Species'
   */
  export type EnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species'>
    


  /**
   * Reference to a field of type 'Species[]'
   */
  export type ListEnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PetPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PetPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PetPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PetPostWhereInput = {
    AND?: PetPostWhereInput | PetPostWhereInput[]
    OR?: PetPostWhereInput[]
    NOT?: PetPostWhereInput | PetPostWhereInput[]
    id?: StringFilter<"PetPost"> | string
    title?: StringFilter<"PetPost"> | string
    description?: StringFilter<"PetPost"> | string
    type?: EnumPetPostTypeFilter<"PetPost"> | $Enums.PetPostType
    species?: EnumSpeciesFilter<"PetPost"> | $Enums.Species
    breed?: StringNullableFilter<"PetPost"> | string | null
    age?: StringNullableFilter<"PetPost"> | string | null
    location?: StringFilter<"PetPost"> | string
    status?: EnumPostStatusFilter<"PetPost"> | $Enums.PostStatus
    userId?: StringFilter<"PetPost"> | string
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
    image?: ImagePetsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImagePetsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PetPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetPostWhereInput | PetPostWhereInput[]
    OR?: PetPostWhereInput[]
    NOT?: PetPostWhereInput | PetPostWhereInput[]
    title?: StringFilter<"PetPost"> | string
    description?: StringFilter<"PetPost"> | string
    type?: EnumPetPostTypeFilter<"PetPost"> | $Enums.PetPostType
    species?: EnumSpeciesFilter<"PetPost"> | $Enums.Species
    breed?: StringNullableFilter<"PetPost"> | string | null
    age?: StringNullableFilter<"PetPost"> | string | null
    location?: StringFilter<"PetPost"> | string
    status?: EnumPostStatusFilter<"PetPost"> | $Enums.PostStatus
    userId?: StringFilter<"PetPost"> | string
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
    image?: ImagePetsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PetPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetPostCountOrderByAggregateInput
    _max?: PetPostMaxOrderByAggregateInput
    _min?: PetPostMinOrderByAggregateInput
  }

  export type PetPostScalarWhereWithAggregatesInput = {
    AND?: PetPostScalarWhereWithAggregatesInput | PetPostScalarWhereWithAggregatesInput[]
    OR?: PetPostScalarWhereWithAggregatesInput[]
    NOT?: PetPostScalarWhereWithAggregatesInput | PetPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PetPost"> | string
    title?: StringWithAggregatesFilter<"PetPost"> | string
    description?: StringWithAggregatesFilter<"PetPost"> | string
    type?: EnumPetPostTypeWithAggregatesFilter<"PetPost"> | $Enums.PetPostType
    species?: EnumSpeciesWithAggregatesFilter<"PetPost"> | $Enums.Species
    breed?: StringNullableWithAggregatesFilter<"PetPost"> | string | null
    age?: StringNullableWithAggregatesFilter<"PetPost"> | string | null
    location?: StringWithAggregatesFilter<"PetPost"> | string
    status?: EnumPostStatusWithAggregatesFilter<"PetPost"> | $Enums.PostStatus
    userId?: StringWithAggregatesFilter<"PetPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PetPost"> | Date | string
  }

  export type ImagePetsWhereInput = {
    AND?: ImagePetsWhereInput | ImagePetsWhereInput[]
    OR?: ImagePetsWhereInput[]
    NOT?: ImagePetsWhereInput | ImagePetsWhereInput[]
    id?: IntFilter<"ImagePets"> | number
    url?: StringFilter<"ImagePets"> | string
    petPostId?: StringFilter<"ImagePets"> | string
    petPost?: XOR<PetPostScalarRelationFilter, PetPostWhereInput>
  }

  export type ImagePetsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    petPostId?: SortOrder
    petPost?: PetPostOrderByWithRelationInput
  }

  export type ImagePetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagePetsWhereInput | ImagePetsWhereInput[]
    OR?: ImagePetsWhereInput[]
    NOT?: ImagePetsWhereInput | ImagePetsWhereInput[]
    url?: StringFilter<"ImagePets"> | string
    petPostId?: StringFilter<"ImagePets"> | string
    petPost?: XOR<PetPostScalarRelationFilter, PetPostWhereInput>
  }, "id">

  export type ImagePetsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    petPostId?: SortOrder
    _count?: ImagePetsCountOrderByAggregateInput
    _avg?: ImagePetsAvgOrderByAggregateInput
    _max?: ImagePetsMaxOrderByAggregateInput
    _min?: ImagePetsMinOrderByAggregateInput
    _sum?: ImagePetsSumOrderByAggregateInput
  }

  export type ImagePetsScalarWhereWithAggregatesInput = {
    AND?: ImagePetsScalarWhereWithAggregatesInput | ImagePetsScalarWhereWithAggregatesInput[]
    OR?: ImagePetsScalarWhereWithAggregatesInput[]
    NOT?: ImagePetsScalarWhereWithAggregatesInput | ImagePetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImagePets"> | number
    url?: StringWithAggregatesFilter<"ImagePets"> | string
    petPostId?: StringWithAggregatesFilter<"ImagePets"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PetPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PetPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PetPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PetPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostCreateInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImagePetsCreateNestedManyWithoutPetPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PetPostUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImagePetsUncheckedCreateNestedManyWithoutPetPostInput
  }

  export type PetPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagePetsUpdateManyWithoutPetPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PetPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagePetsUncheckedUpdateManyWithoutPetPostNestedInput
  }

  export type PetPostCreateManyInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePetsCreateInput = {
    url: string
    petPost: PetPostCreateNestedOneWithoutImageInput
  }

  export type ImagePetsUncheckedCreateInput = {
    id?: number
    url: string
    petPostId: string
  }

  export type ImagePetsUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    petPost?: PetPostUpdateOneRequiredWithoutImageNestedInput
  }

  export type ImagePetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    petPostId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagePetsCreateManyInput = {
    id?: number
    url: string
    petPostId: string
  }

  export type ImagePetsUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagePetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    petPostId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PetPostListRelationFilter = {
    every?: PetPostWhereInput
    some?: PetPostWhereInput
    none?: PetPostWhereInput
  }

  export type PetPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPetPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostType | EnumPetPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostTypeFilter<$PrismaModel> | $Enums.PetPostType
  }

  export type EnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type ImagePetsListRelationFilter = {
    every?: ImagePetsWhereInput
    some?: ImagePetsWhereInput
    none?: ImagePetsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImagePetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPetPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostType | EnumPetPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetPostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPetPostTypeFilter<$PrismaModel>
  }

  export type EnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PetPostScalarRelationFilter = {
    is?: PetPostWhereInput
    isNot?: PetPostWhereInput
  }

  export type ImagePetsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    petPostId?: SortOrder
  }

  export type ImagePetsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImagePetsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    petPostId?: SortOrder
  }

  export type ImagePetsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    petPostId?: SortOrder
  }

  export type ImagePetsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type PetPostCreateNestedManyWithoutUserInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type PetPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutUserInput | PetPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutUserInput | PetPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutUserInput | PetPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type PetPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutUserInput | PetPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutUserInput | PetPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutUserInput | PetPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type ImagePetsCreateNestedManyWithoutPetPostInput = {
    create?: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput> | ImagePetsCreateWithoutPetPostInput[] | ImagePetsUncheckedCreateWithoutPetPostInput[]
    connectOrCreate?: ImagePetsCreateOrConnectWithoutPetPostInput | ImagePetsCreateOrConnectWithoutPetPostInput[]
    createMany?: ImagePetsCreateManyPetPostInputEnvelope
    connect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ImagePetsUncheckedCreateNestedManyWithoutPetPostInput = {
    create?: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput> | ImagePetsCreateWithoutPetPostInput[] | ImagePetsUncheckedCreateWithoutPetPostInput[]
    connectOrCreate?: ImagePetsCreateOrConnectWithoutPetPostInput | ImagePetsCreateOrConnectWithoutPetPostInput[]
    createMany?: ImagePetsCreateManyPetPostInputEnvelope
    connect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
  }

  export type EnumPetPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PetPostType
  }

  export type EnumSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.Species
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type ImagePetsUpdateManyWithoutPetPostNestedInput = {
    create?: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput> | ImagePetsCreateWithoutPetPostInput[] | ImagePetsUncheckedCreateWithoutPetPostInput[]
    connectOrCreate?: ImagePetsCreateOrConnectWithoutPetPostInput | ImagePetsCreateOrConnectWithoutPetPostInput[]
    upsert?: ImagePetsUpsertWithWhereUniqueWithoutPetPostInput | ImagePetsUpsertWithWhereUniqueWithoutPetPostInput[]
    createMany?: ImagePetsCreateManyPetPostInputEnvelope
    set?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    disconnect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    delete?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    connect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    update?: ImagePetsUpdateWithWhereUniqueWithoutPetPostInput | ImagePetsUpdateWithWhereUniqueWithoutPetPostInput[]
    updateMany?: ImagePetsUpdateManyWithWhereWithoutPetPostInput | ImagePetsUpdateManyWithWhereWithoutPetPostInput[]
    deleteMany?: ImagePetsScalarWhereInput | ImagePetsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ImagePetsUncheckedUpdateManyWithoutPetPostNestedInput = {
    create?: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput> | ImagePetsCreateWithoutPetPostInput[] | ImagePetsUncheckedCreateWithoutPetPostInput[]
    connectOrCreate?: ImagePetsCreateOrConnectWithoutPetPostInput | ImagePetsCreateOrConnectWithoutPetPostInput[]
    upsert?: ImagePetsUpsertWithWhereUniqueWithoutPetPostInput | ImagePetsUpsertWithWhereUniqueWithoutPetPostInput[]
    createMany?: ImagePetsCreateManyPetPostInputEnvelope
    set?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    disconnect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    delete?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    connect?: ImagePetsWhereUniqueInput | ImagePetsWhereUniqueInput[]
    update?: ImagePetsUpdateWithWhereUniqueWithoutPetPostInput | ImagePetsUpdateWithWhereUniqueWithoutPetPostInput[]
    updateMany?: ImagePetsUpdateManyWithWhereWithoutPetPostInput | ImagePetsUpdateManyWithWhereWithoutPetPostInput[]
    deleteMany?: ImagePetsScalarWhereInput | ImagePetsScalarWhereInput[]
  }

  export type PetPostCreateNestedOneWithoutImageInput = {
    create?: XOR<PetPostCreateWithoutImageInput, PetPostUncheckedCreateWithoutImageInput>
    connectOrCreate?: PetPostCreateOrConnectWithoutImageInput
    connect?: PetPostWhereUniqueInput
  }

  export type PetPostUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<PetPostCreateWithoutImageInput, PetPostUncheckedCreateWithoutImageInput>
    connectOrCreate?: PetPostCreateOrConnectWithoutImageInput
    upsert?: PetPostUpsertWithoutImageInput
    connect?: PetPostWhereUniqueInput
    update?: XOR<XOR<PetPostUpdateToOneWithWhereWithoutImageInput, PetPostUpdateWithoutImageInput>, PetPostUncheckedUpdateWithoutImageInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPetPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostType | EnumPetPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostTypeFilter<$PrismaModel> | $Enums.PetPostType
  }

  export type NestedEnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPetPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostType | EnumPetPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostType[] | ListEnumPetPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetPostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPetPostTypeFilter<$PrismaModel>
  }

  export type NestedEnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PetPostCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImagePetsCreateNestedManyWithoutPetPostInput
  }

  export type PetPostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImagePetsUncheckedCreateNestedManyWithoutPetPostInput
  }

  export type PetPostCreateOrConnectWithoutUserInput = {
    where: PetPostWhereUniqueInput
    create: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput>
  }

  export type PetPostCreateManyUserInputEnvelope = {
    data: PetPostCreateManyUserInput | PetPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PetPostUpsertWithWhereUniqueWithoutUserInput = {
    where: PetPostWhereUniqueInput
    update: XOR<PetPostUpdateWithoutUserInput, PetPostUncheckedUpdateWithoutUserInput>
    create: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput>
  }

  export type PetPostUpdateWithWhereUniqueWithoutUserInput = {
    where: PetPostWhereUniqueInput
    data: XOR<PetPostUpdateWithoutUserInput, PetPostUncheckedUpdateWithoutUserInput>
  }

  export type PetPostUpdateManyWithWhereWithoutUserInput = {
    where: PetPostScalarWhereInput
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyWithoutUserInput>
  }

  export type PetPostScalarWhereInput = {
    AND?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
    OR?: PetPostScalarWhereInput[]
    NOT?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
    id?: StringFilter<"PetPost"> | string
    title?: StringFilter<"PetPost"> | string
    description?: StringFilter<"PetPost"> | string
    type?: EnumPetPostTypeFilter<"PetPost"> | $Enums.PetPostType
    species?: EnumSpeciesFilter<"PetPost"> | $Enums.Species
    breed?: StringNullableFilter<"PetPost"> | string | null
    age?: StringNullableFilter<"PetPost"> | string | null
    location?: StringFilter<"PetPost"> | string
    status?: EnumPostStatusFilter<"PetPost"> | $Enums.PostStatus
    userId?: StringFilter<"PetPost"> | string
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
  }

  export type ImagePetsCreateWithoutPetPostInput = {
    url: string
  }

  export type ImagePetsUncheckedCreateWithoutPetPostInput = {
    id?: number
    url: string
  }

  export type ImagePetsCreateOrConnectWithoutPetPostInput = {
    where: ImagePetsWhereUniqueInput
    create: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput>
  }

  export type ImagePetsCreateManyPetPostInputEnvelope = {
    data: ImagePetsCreateManyPetPostInput | ImagePetsCreateManyPetPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ImagePetsUpsertWithWhereUniqueWithoutPetPostInput = {
    where: ImagePetsWhereUniqueInput
    update: XOR<ImagePetsUpdateWithoutPetPostInput, ImagePetsUncheckedUpdateWithoutPetPostInput>
    create: XOR<ImagePetsCreateWithoutPetPostInput, ImagePetsUncheckedCreateWithoutPetPostInput>
  }

  export type ImagePetsUpdateWithWhereUniqueWithoutPetPostInput = {
    where: ImagePetsWhereUniqueInput
    data: XOR<ImagePetsUpdateWithoutPetPostInput, ImagePetsUncheckedUpdateWithoutPetPostInput>
  }

  export type ImagePetsUpdateManyWithWhereWithoutPetPostInput = {
    where: ImagePetsScalarWhereInput
    data: XOR<ImagePetsUpdateManyMutationInput, ImagePetsUncheckedUpdateManyWithoutPetPostInput>
  }

  export type ImagePetsScalarWhereInput = {
    AND?: ImagePetsScalarWhereInput | ImagePetsScalarWhereInput[]
    OR?: ImagePetsScalarWhereInput[]
    NOT?: ImagePetsScalarWhereInput | ImagePetsScalarWhereInput[]
    id?: IntFilter<"ImagePets"> | number
    url?: StringFilter<"ImagePets"> | string
    petPostId?: StringFilter<"ImagePets"> | string
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostCreateWithoutImageInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PetPostUncheckedCreateWithoutImageInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetPostCreateOrConnectWithoutImageInput = {
    where: PetPostWhereUniqueInput
    create: XOR<PetPostCreateWithoutImageInput, PetPostUncheckedCreateWithoutImageInput>
  }

  export type PetPostUpsertWithoutImageInput = {
    update: XOR<PetPostUpdateWithoutImageInput, PetPostUncheckedUpdateWithoutImageInput>
    create: XOR<PetPostCreateWithoutImageInput, PetPostUncheckedCreateWithoutImageInput>
    where?: PetPostWhereInput
  }

  export type PetPostUpdateToOneWithWhereWithoutImageInput = {
    where?: PetPostWhereInput
    data: XOR<PetPostUpdateWithoutImageInput, PetPostUncheckedUpdateWithoutImageInput>
  }

  export type PetPostUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PetPostUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostCreateManyUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.PetPostType
    species: $Enums.Species
    breed?: string | null
    age?: string | null
    location: string
    status?: $Enums.PostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagePetsUpdateManyWithoutPetPostNestedInput
  }

  export type PetPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagePetsUncheckedUpdateManyWithoutPetPostNestedInput
  }

  export type PetPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPetPostTypeFieldUpdateOperationsInput | $Enums.PetPostType
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePetsCreateManyPetPostInput = {
    id?: number
    url: string
  }

  export type ImagePetsUpdateWithoutPetPostInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagePetsUncheckedUpdateWithoutPetPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagePetsUncheckedUpdateManyWithoutPetPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
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