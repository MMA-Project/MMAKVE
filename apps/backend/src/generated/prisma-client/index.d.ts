
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
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model QuestAssignment
 * 
 */
export type QuestAssignment = $Result.DefaultSelection<Prisma.$QuestAssignmentPayload>
/**
 * Model Adventurer
 * 
 */
export type Adventurer = $Result.DefaultSelection<Prisma.$AdventurerPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Guild
 * 
 */
export type Guild = $Result.DefaultSelection<Prisma.$GuildPayload>
/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model ItemOnQuestAssignment
 * 
 */
export type ItemOnQuestAssignment = $Result.DefaultSelection<Prisma.$ItemOnQuestAssignmentPayload>
/**
 * Model ItemOnGuild
 * 
 */
export type ItemOnGuild = $Result.DefaultSelection<Prisma.$ItemOnGuildPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdventurerType: {
  ARCHER: 'ARCHER',
  BARBARIAN: 'BARBARIAN',
  PALADIN: 'PALADIN',
  ARCANE_MAGE: 'ARCANE_MAGE',
  PRIEST: 'PRIEST',
  GEOMANCER: 'GEOMANCER',
  ALCHEMIST: 'ALCHEMIST',
  BLACKSMITH: 'BLACKSMITH',
  ENCHANTER: 'ENCHANTER',
  MESSENGER: 'MESSENGER'
};

export type AdventurerType = (typeof AdventurerType)[keyof typeof AdventurerType]


export const Role: {
  AVENTURIER: 'AVENTURIER',
  ASSISTANT: 'ASSISTANT',
  CLIENT: 'CLIENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type QuestStatus = (typeof QuestStatus)[keyof typeof QuestStatus]


export const AdventurerStatus: {
  AVAILABLE: 'AVAILABLE',
  ON_QUEST: 'ON_QUEST',
  INJURED: 'INJURED',
  DEAD: 'DEAD',
  RETIRED: 'RETIRED'
};

export type AdventurerStatus = (typeof AdventurerStatus)[keyof typeof AdventurerStatus]


export const ItemType: {
  WEAPON: 'WEAPON',
  EQUIPMENT: 'EQUIPMENT',
  POTION: 'POTION',
  MISC: 'MISC'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]


export const ItemRarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY'
};

export type ItemRarity = (typeof ItemRarity)[keyof typeof ItemRarity]

}

export type AdventurerType = $Enums.AdventurerType

export const AdventurerType: typeof $Enums.AdventurerType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestStatus = $Enums.QuestStatus

export const QuestStatus: typeof $Enums.QuestStatus

export type AdventurerStatus = $Enums.AdventurerStatus

export const AdventurerStatus: typeof $Enums.AdventurerStatus

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

export type ItemRarity = $Enums.ItemRarity

export const ItemRarity: typeof $Enums.ItemRarity

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questAssignment`: Exposes CRUD operations for the **QuestAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestAssignments
    * const questAssignments = await prisma.questAssignment.findMany()
    * ```
    */
  get questAssignment(): Prisma.QuestAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adventurer`: Exposes CRUD operations for the **Adventurer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adventurers
    * const adventurers = await prisma.adventurer.findMany()
    * ```
    */
  get adventurer(): Prisma.AdventurerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guild`: Exposes CRUD operations for the **Guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.GuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemOnQuestAssignment`: Exposes CRUD operations for the **ItemOnQuestAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemOnQuestAssignments
    * const itemOnQuestAssignments = await prisma.itemOnQuestAssignment.findMany()
    * ```
    */
  get itemOnQuestAssignment(): Prisma.ItemOnQuestAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemOnGuild`: Exposes CRUD operations for the **ItemOnGuild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemOnGuilds
    * const itemOnGuilds = await prisma.itemOnGuild.findMany()
    * ```
    */
  get itemOnGuild(): Prisma.ItemOnGuildDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    Quest: 'Quest',
    QuestAssignment: 'QuestAssignment',
    Adventurer: 'Adventurer',
    Item: 'Item',
    Guild: 'Guild',
    Bank: 'Bank',
    Transaction: 'Transaction',
    ItemOnQuestAssignment: 'ItemOnQuestAssignment',
    ItemOnGuild: 'ItemOnGuild'
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
      modelProps: "user" | "quest" | "questAssignment" | "adventurer" | "item" | "guild" | "bank" | "transaction" | "itemOnQuestAssignment" | "itemOnGuild"
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
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      QuestAssignment: {
        payload: Prisma.$QuestAssignmentPayload<ExtArgs>
        fields: Prisma.QuestAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          findFirst: {
            args: Prisma.QuestAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          findMany: {
            args: Prisma.QuestAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>[]
          }
          create: {
            args: Prisma.QuestAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          createMany: {
            args: Prisma.QuestAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>[]
          }
          delete: {
            args: Prisma.QuestAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          update: {
            args: Prisma.QuestAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.QuestAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.QuestAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestAssignmentPayload>
          }
          aggregate: {
            args: Prisma.QuestAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestAssignment>
          }
          groupBy: {
            args: Prisma.QuestAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<QuestAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Adventurer: {
        payload: Prisma.$AdventurerPayload<ExtArgs>
        fields: Prisma.AdventurerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdventurerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdventurerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          findFirst: {
            args: Prisma.AdventurerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdventurerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          findMany: {
            args: Prisma.AdventurerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>[]
          }
          create: {
            args: Prisma.AdventurerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          createMany: {
            args: Prisma.AdventurerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdventurerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>[]
          }
          delete: {
            args: Prisma.AdventurerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          update: {
            args: Prisma.AdventurerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          deleteMany: {
            args: Prisma.AdventurerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdventurerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdventurerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>[]
          }
          upsert: {
            args: Prisma.AdventurerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdventurerPayload>
          }
          aggregate: {
            args: Prisma.AdventurerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdventurer>
          }
          groupBy: {
            args: Prisma.AdventurerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdventurerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdventurerCountArgs<ExtArgs>
            result: $Utils.Optional<AdventurerCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Guild: {
        payload: Prisma.$GuildPayload<ExtArgs>
        fields: Prisma.GuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findFirst: {
            args: Prisma.GuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findMany: {
            args: Prisma.GuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          create: {
            args: Prisma.GuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          createMany: {
            args: Prisma.GuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          delete: {
            args: Prisma.GuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          update: {
            args: Prisma.GuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          deleteMany: {
            args: Prisma.GuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          upsert: {
            args: Prisma.GuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.GuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      ItemOnQuestAssignment: {
        payload: Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>
        fields: Prisma.ItemOnQuestAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemOnQuestAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemOnQuestAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ItemOnQuestAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemOnQuestAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          findMany: {
            args: Prisma.ItemOnQuestAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>[]
          }
          create: {
            args: Prisma.ItemOnQuestAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          createMany: {
            args: Prisma.ItemOnQuestAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemOnQuestAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ItemOnQuestAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          update: {
            args: Prisma.ItemOnQuestAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ItemOnQuestAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemOnQuestAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemOnQuestAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ItemOnQuestAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnQuestAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ItemOnQuestAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemOnQuestAssignment>
          }
          groupBy: {
            args: Prisma.ItemOnQuestAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemOnQuestAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemOnQuestAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ItemOnQuestAssignmentCountAggregateOutputType> | number
          }
        }
      }
      ItemOnGuild: {
        payload: Prisma.$ItemOnGuildPayload<ExtArgs>
        fields: Prisma.ItemOnGuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemOnGuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemOnGuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          findFirst: {
            args: Prisma.ItemOnGuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemOnGuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          findMany: {
            args: Prisma.ItemOnGuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>[]
          }
          create: {
            args: Prisma.ItemOnGuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          createMany: {
            args: Prisma.ItemOnGuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemOnGuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>[]
          }
          delete: {
            args: Prisma.ItemOnGuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          update: {
            args: Prisma.ItemOnGuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          deleteMany: {
            args: Prisma.ItemOnGuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemOnGuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemOnGuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>[]
          }
          upsert: {
            args: Prisma.ItemOnGuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOnGuildPayload>
          }
          aggregate: {
            args: Prisma.ItemOnGuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemOnGuild>
          }
          groupBy: {
            args: Prisma.ItemOnGuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemOnGuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemOnGuildCountArgs<ExtArgs>
            result: $Utils.Optional<ItemOnGuildCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    quest?: QuestOmit
    questAssignment?: QuestAssignmentOmit
    adventurer?: AdventurerOmit
    item?: ItemOmit
    guild?: GuildOmit
    bank?: BankOmit
    transaction?: TransactionOmit
    itemOnQuestAssignment?: ItemOnQuestAssignmentOmit
    itemOnGuild?: ItemOnGuildOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    assignments: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | QuestCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestAssignmentWhereInput
  }


  /**
   * Count Type QuestAssignmentCountOutputType
   */

  export type QuestAssignmentCountOutputType = {
    items: number
  }

  export type QuestAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuestAssignmentCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * QuestAssignmentCountOutputType without action
   */
  export type QuestAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignmentCountOutputType
     */
    select?: QuestAssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestAssignmentCountOutputType without action
   */
  export type QuestAssignmentCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnQuestAssignmentWhereInput
  }


  /**
   * Count Type AdventurerCountOutputType
   */

  export type AdventurerCountOutputType = {
    assignments: number
  }

  export type AdventurerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | AdventurerCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * AdventurerCountOutputType without action
   */
  export type AdventurerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdventurerCountOutputType
     */
    select?: AdventurerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdventurerCountOutputType without action
   */
  export type AdventurerCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestAssignmentWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    questAssignments: number
    guilds: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questAssignments?: boolean | ItemCountOutputTypeCountQuestAssignmentsArgs
    guilds?: boolean | ItemCountOutputTypeCountGuildsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountQuestAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnQuestAssignmentWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnGuildWhereInput
  }


  /**
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    adventurers: number
    inventory: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurers?: boolean | GuildCountOutputTypeCountAdventurersArgs
    inventory?: boolean | GuildCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildCountOutputType
     */
    select?: GuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountAdventurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdventurerWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnGuildWhereInput
  }


  /**
   * Count Type BankCountOutputType
   */

  export type BankCountOutputType = {
    history: number
  }

  export type BankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | BankCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCountOutputType
     */
    select?: BankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
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
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    adventurerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    adventurerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    adventurerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    adventurerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    adventurerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    adventurerId?: true
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
    username: string
    password: string
    role: $Enums.Role
    createdAt: Date
    adventurerId: string | null
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
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    adventurerId?: boolean
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    adventurerId?: boolean
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    adventurerId?: boolean
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    adventurerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "adventurerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurer?: boolean | User$adventurerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      adventurer: Prisma.$AdventurerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      role: $Enums.Role
      createdAt: Date
      adventurerId: string | null
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
    adventurer<T extends User$adventurerArgs<ExtArgs> = {}>(args?: Subset<T, User$adventurerArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly adventurerId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.adventurer
   */
  export type User$adventurerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    where?: AdventurerWhereInput
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
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    reward: number | null
    estimatedDuration: number | null
    xpRequired: number | null
  }

  export type QuestSumAggregateOutputType = {
    reward: number | null
    estimatedDuration: number | null
    xpRequired: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    reward: number | null
    status: $Enums.QuestStatus | null
    estimatedDuration: number | null
    startDate: Date | null
    endDate: Date | null
    xpRequired: number | null
    createdBy: string | null
  }

  export type QuestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    reward: number | null
    status: $Enums.QuestStatus | null
    estimatedDuration: number | null
    startDate: Date | null
    endDate: Date | null
    xpRequired: number | null
    createdBy: string | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    deadline: number
    reward: number
    status: number
    estimatedDuration: number
    startDate: number
    endDate: number
    requiredProfiles: number
    xpRequired: number
    createdBy: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    reward?: true
    estimatedDuration?: true
    xpRequired?: true
  }

  export type QuestSumAggregateInputType = {
    reward?: true
    estimatedDuration?: true
    xpRequired?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    reward?: true
    status?: true
    estimatedDuration?: true
    startDate?: true
    endDate?: true
    xpRequired?: true
    createdBy?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    reward?: true
    status?: true
    estimatedDuration?: true
    startDate?: true
    endDate?: true
    xpRequired?: true
    createdBy?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    reward?: true
    status?: true
    estimatedDuration?: true
    startDate?: true
    endDate?: true
    requiredProfiles?: true
    xpRequired?: true
    createdBy?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: string
    title: string
    description: string
    deadline: Date
    reward: number
    status: $Enums.QuestStatus
    estimatedDuration: number
    startDate: Date | null
    endDate: Date | null
    requiredProfiles: $Enums.AdventurerType[]
    xpRequired: number | null
    createdBy: string
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    reward?: boolean
    status?: boolean
    estimatedDuration?: boolean
    startDate?: boolean
    endDate?: boolean
    requiredProfiles?: boolean
    xpRequired?: boolean
    createdBy?: boolean
    assignments?: boolean | Quest$assignmentsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    reward?: boolean
    status?: boolean
    estimatedDuration?: boolean
    startDate?: boolean
    endDate?: boolean
    requiredProfiles?: boolean
    xpRequired?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    reward?: boolean
    status?: boolean
    estimatedDuration?: boolean
    startDate?: boolean
    endDate?: boolean
    requiredProfiles?: boolean
    xpRequired?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    reward?: boolean
    status?: boolean
    estimatedDuration?: boolean
    startDate?: boolean
    endDate?: boolean
    requiredProfiles?: boolean
    xpRequired?: boolean
    createdBy?: boolean
  }

  export type QuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "deadline" | "reward" | "status" | "estimatedDuration" | "startDate" | "endDate" | "requiredProfiles" | "xpRequired" | "createdBy", ExtArgs["result"]["quest"]>
  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Quest$assignmentsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      assignments: Prisma.$QuestAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      deadline: Date
      reward: number
      status: $Enums.QuestStatus
      estimatedDuration: number
      startDate: Date | null
      endDate: Date | null
      requiredProfiles: $Enums.AdventurerType[]
      xpRequired: number | null
      createdBy: string
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {QuestCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests and returns the data updated in the database.
     * @param {QuestUpdateManyAndReturnArgs} args - Arguments to update many Quests.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
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
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Quest$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quest model
   */
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'String'>
    readonly title: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly deadline: FieldRef<"Quest", 'DateTime'>
    readonly reward: FieldRef<"Quest", 'Int'>
    readonly status: FieldRef<"Quest", 'QuestStatus'>
    readonly estimatedDuration: FieldRef<"Quest", 'Int'>
    readonly startDate: FieldRef<"Quest", 'DateTime'>
    readonly endDate: FieldRef<"Quest", 'DateTime'>
    readonly requiredProfiles: FieldRef<"Quest", 'AdventurerType[]'>
    readonly xpRequired: FieldRef<"Quest", 'Int'>
    readonly createdBy: FieldRef<"Quest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest createManyAndReturn
   */
  export type QuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest updateManyAndReturn
   */
  export type QuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to delete.
     */
    limit?: number
  }

  /**
   * Quest.assignments
   */
  export type Quest$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    where?: QuestAssignmentWhereInput
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    cursor?: QuestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestAssignmentScalarFieldEnum | QuestAssignmentScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model QuestAssignment
   */

  export type AggregateQuestAssignment = {
    _count: QuestAssignmentCountAggregateOutputType | null
    _min: QuestAssignmentMinAggregateOutputType | null
    _max: QuestAssignmentMaxAggregateOutputType | null
  }

  export type QuestAssignmentMinAggregateOutputType = {
    id: string | null
    adventurerId: string | null
    questId: string | null
  }

  export type QuestAssignmentMaxAggregateOutputType = {
    id: string | null
    adventurerId: string | null
    questId: string | null
  }

  export type QuestAssignmentCountAggregateOutputType = {
    id: number
    adventurerId: number
    questId: number
    _all: number
  }


  export type QuestAssignmentMinAggregateInputType = {
    id?: true
    adventurerId?: true
    questId?: true
  }

  export type QuestAssignmentMaxAggregateInputType = {
    id?: true
    adventurerId?: true
    questId?: true
  }

  export type QuestAssignmentCountAggregateInputType = {
    id?: true
    adventurerId?: true
    questId?: true
    _all?: true
  }

  export type QuestAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestAssignment to aggregate.
     */
    where?: QuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestAssignments to fetch.
     */
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestAssignments
    **/
    _count?: true | QuestAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestAssignmentMaxAggregateInputType
  }

  export type GetQuestAssignmentAggregateType<T extends QuestAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestAssignment[P]>
      : GetScalarType<T[P], AggregateQuestAssignment[P]>
  }




  export type QuestAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestAssignmentWhereInput
    orderBy?: QuestAssignmentOrderByWithAggregationInput | QuestAssignmentOrderByWithAggregationInput[]
    by: QuestAssignmentScalarFieldEnum[] | QuestAssignmentScalarFieldEnum
    having?: QuestAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestAssignmentCountAggregateInputType | true
    _min?: QuestAssignmentMinAggregateInputType
    _max?: QuestAssignmentMaxAggregateInputType
  }

  export type QuestAssignmentGroupByOutputType = {
    id: string
    adventurerId: string
    questId: string
    _count: QuestAssignmentCountAggregateOutputType | null
    _min: QuestAssignmentMinAggregateOutputType | null
    _max: QuestAssignmentMaxAggregateOutputType | null
  }

  type GetQuestAssignmentGroupByPayload<T extends QuestAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], QuestAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type QuestAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adventurerId?: boolean
    questId?: boolean
    items?: boolean | QuestAssignment$itemsArgs<ExtArgs>
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    _count?: boolean | QuestAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questAssignment"]>

  export type QuestAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adventurerId?: boolean
    questId?: boolean
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questAssignment"]>

  export type QuestAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adventurerId?: boolean
    questId?: boolean
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questAssignment"]>

  export type QuestAssignmentSelectScalar = {
    id?: boolean
    adventurerId?: boolean
    questId?: boolean
  }

  export type QuestAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adventurerId" | "questId", ExtArgs["result"]["questAssignment"]>
  export type QuestAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuestAssignment$itemsArgs<ExtArgs>
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    _count?: boolean | QuestAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }
  export type QuestAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurer?: boolean | AdventurerDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }

  export type $QuestAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestAssignment"
    objects: {
      items: Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>[]
      adventurer: Prisma.$AdventurerPayload<ExtArgs>
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adventurerId: string
      questId: string
    }, ExtArgs["result"]["questAssignment"]>
    composites: {}
  }

  type QuestAssignmentGetPayload<S extends boolean | null | undefined | QuestAssignmentDefaultArgs> = $Result.GetResult<Prisma.$QuestAssignmentPayload, S>

  type QuestAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestAssignmentCountAggregateInputType | true
    }

  export interface QuestAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestAssignment'], meta: { name: 'QuestAssignment' } }
    /**
     * Find zero or one QuestAssignment that matches the filter.
     * @param {QuestAssignmentFindUniqueArgs} args - Arguments to find a QuestAssignment
     * @example
     * // Get one QuestAssignment
     * const questAssignment = await prisma.questAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestAssignmentFindUniqueArgs>(args: SelectSubset<T, QuestAssignmentFindUniqueArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestAssignmentFindUniqueOrThrowArgs} args - Arguments to find a QuestAssignment
     * @example
     * // Get one QuestAssignment
     * const questAssignment = await prisma.questAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentFindFirstArgs} args - Arguments to find a QuestAssignment
     * @example
     * // Get one QuestAssignment
     * const questAssignment = await prisma.questAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestAssignmentFindFirstArgs>(args?: SelectSubset<T, QuestAssignmentFindFirstArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentFindFirstOrThrowArgs} args - Arguments to find a QuestAssignment
     * @example
     * // Get one QuestAssignment
     * const questAssignment = await prisma.questAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestAssignments
     * const questAssignments = await prisma.questAssignment.findMany()
     * 
     * // Get first 10 QuestAssignments
     * const questAssignments = await prisma.questAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questAssignmentWithIdOnly = await prisma.questAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestAssignmentFindManyArgs>(args?: SelectSubset<T, QuestAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestAssignment.
     * @param {QuestAssignmentCreateArgs} args - Arguments to create a QuestAssignment.
     * @example
     * // Create one QuestAssignment
     * const QuestAssignment = await prisma.questAssignment.create({
     *   data: {
     *     // ... data to create a QuestAssignment
     *   }
     * })
     * 
     */
    create<T extends QuestAssignmentCreateArgs>(args: SelectSubset<T, QuestAssignmentCreateArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestAssignments.
     * @param {QuestAssignmentCreateManyArgs} args - Arguments to create many QuestAssignments.
     * @example
     * // Create many QuestAssignments
     * const questAssignment = await prisma.questAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestAssignmentCreateManyArgs>(args?: SelectSubset<T, QuestAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestAssignments and returns the data saved in the database.
     * @param {QuestAssignmentCreateManyAndReturnArgs} args - Arguments to create many QuestAssignments.
     * @example
     * // Create many QuestAssignments
     * const questAssignment = await prisma.questAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestAssignments and only return the `id`
     * const questAssignmentWithIdOnly = await prisma.questAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestAssignment.
     * @param {QuestAssignmentDeleteArgs} args - Arguments to delete one QuestAssignment.
     * @example
     * // Delete one QuestAssignment
     * const QuestAssignment = await prisma.questAssignment.delete({
     *   where: {
     *     // ... filter to delete one QuestAssignment
     *   }
     * })
     * 
     */
    delete<T extends QuestAssignmentDeleteArgs>(args: SelectSubset<T, QuestAssignmentDeleteArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestAssignment.
     * @param {QuestAssignmentUpdateArgs} args - Arguments to update one QuestAssignment.
     * @example
     * // Update one QuestAssignment
     * const questAssignment = await prisma.questAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestAssignmentUpdateArgs>(args: SelectSubset<T, QuestAssignmentUpdateArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestAssignments.
     * @param {QuestAssignmentDeleteManyArgs} args - Arguments to filter QuestAssignments to delete.
     * @example
     * // Delete a few QuestAssignments
     * const { count } = await prisma.questAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestAssignmentDeleteManyArgs>(args?: SelectSubset<T, QuestAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestAssignments
     * const questAssignment = await prisma.questAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestAssignmentUpdateManyArgs>(args: SelectSubset<T, QuestAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestAssignments and returns the data updated in the database.
     * @param {QuestAssignmentUpdateManyAndReturnArgs} args - Arguments to update many QuestAssignments.
     * @example
     * // Update many QuestAssignments
     * const questAssignment = await prisma.questAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestAssignments and only return the `id`
     * const questAssignmentWithIdOnly = await prisma.questAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestAssignment.
     * @param {QuestAssignmentUpsertArgs} args - Arguments to update or create a QuestAssignment.
     * @example
     * // Update or create a QuestAssignment
     * const questAssignment = await prisma.questAssignment.upsert({
     *   create: {
     *     // ... data to create a QuestAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestAssignment we want to update
     *   }
     * })
     */
    upsert<T extends QuestAssignmentUpsertArgs>(args: SelectSubset<T, QuestAssignmentUpsertArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentCountArgs} args - Arguments to filter QuestAssignments to count.
     * @example
     * // Count the number of QuestAssignments
     * const count = await prisma.questAssignment.count({
     *   where: {
     *     // ... the filter for the QuestAssignments we want to count
     *   }
     * })
    **/
    count<T extends QuestAssignmentCountArgs>(
      args?: Subset<T, QuestAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestAssignmentAggregateArgs>(args: Subset<T, QuestAssignmentAggregateArgs>): Prisma.PrismaPromise<GetQuestAssignmentAggregateType<T>>

    /**
     * Group by QuestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAssignmentGroupByArgs} args - Group by arguments.
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
      T extends QuestAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: QuestAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestAssignment model
   */
  readonly fields: QuestAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends QuestAssignment$itemsArgs<ExtArgs> = {}>(args?: Subset<T, QuestAssignment$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adventurer<T extends AdventurerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdventurerDefaultArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestAssignment model
   */
  interface QuestAssignmentFieldRefs {
    readonly id: FieldRef<"QuestAssignment", 'String'>
    readonly adventurerId: FieldRef<"QuestAssignment", 'String'>
    readonly questId: FieldRef<"QuestAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestAssignment findUnique
   */
  export type QuestAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestAssignment to fetch.
     */
    where: QuestAssignmentWhereUniqueInput
  }

  /**
   * QuestAssignment findUniqueOrThrow
   */
  export type QuestAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestAssignment to fetch.
     */
    where: QuestAssignmentWhereUniqueInput
  }

  /**
   * QuestAssignment findFirst
   */
  export type QuestAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestAssignment to fetch.
     */
    where?: QuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestAssignments to fetch.
     */
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestAssignments.
     */
    cursor?: QuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestAssignments.
     */
    distinct?: QuestAssignmentScalarFieldEnum | QuestAssignmentScalarFieldEnum[]
  }

  /**
   * QuestAssignment findFirstOrThrow
   */
  export type QuestAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestAssignment to fetch.
     */
    where?: QuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestAssignments to fetch.
     */
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestAssignments.
     */
    cursor?: QuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestAssignments.
     */
    distinct?: QuestAssignmentScalarFieldEnum | QuestAssignmentScalarFieldEnum[]
  }

  /**
   * QuestAssignment findMany
   */
  export type QuestAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestAssignments to fetch.
     */
    where?: QuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestAssignments to fetch.
     */
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestAssignments.
     */
    cursor?: QuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestAssignments.
     */
    skip?: number
    distinct?: QuestAssignmentScalarFieldEnum | QuestAssignmentScalarFieldEnum[]
  }

  /**
   * QuestAssignment create
   */
  export type QuestAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestAssignment.
     */
    data: XOR<QuestAssignmentCreateInput, QuestAssignmentUncheckedCreateInput>
  }

  /**
   * QuestAssignment createMany
   */
  export type QuestAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestAssignments.
     */
    data: QuestAssignmentCreateManyInput | QuestAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestAssignment createManyAndReturn
   */
  export type QuestAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many QuestAssignments.
     */
    data: QuestAssignmentCreateManyInput | QuestAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestAssignment update
   */
  export type QuestAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestAssignment.
     */
    data: XOR<QuestAssignmentUpdateInput, QuestAssignmentUncheckedUpdateInput>
    /**
     * Choose, which QuestAssignment to update.
     */
    where: QuestAssignmentWhereUniqueInput
  }

  /**
   * QuestAssignment updateMany
   */
  export type QuestAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestAssignments.
     */
    data: XOR<QuestAssignmentUpdateManyMutationInput, QuestAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which QuestAssignments to update
     */
    where?: QuestAssignmentWhereInput
    /**
     * Limit how many QuestAssignments to update.
     */
    limit?: number
  }

  /**
   * QuestAssignment updateManyAndReturn
   */
  export type QuestAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update QuestAssignments.
     */
    data: XOR<QuestAssignmentUpdateManyMutationInput, QuestAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which QuestAssignments to update
     */
    where?: QuestAssignmentWhereInput
    /**
     * Limit how many QuestAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestAssignment upsert
   */
  export type QuestAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestAssignment to update in case it exists.
     */
    where: QuestAssignmentWhereUniqueInput
    /**
     * In case the QuestAssignment found by the `where` argument doesn't exist, create a new QuestAssignment with this data.
     */
    create: XOR<QuestAssignmentCreateInput, QuestAssignmentUncheckedCreateInput>
    /**
     * In case the QuestAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestAssignmentUpdateInput, QuestAssignmentUncheckedUpdateInput>
  }

  /**
   * QuestAssignment delete
   */
  export type QuestAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter which QuestAssignment to delete.
     */
    where: QuestAssignmentWhereUniqueInput
  }

  /**
   * QuestAssignment deleteMany
   */
  export type QuestAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestAssignments to delete
     */
    where?: QuestAssignmentWhereInput
    /**
     * Limit how many QuestAssignments to delete.
     */
    limit?: number
  }

  /**
   * QuestAssignment.items
   */
  export type QuestAssignment$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    where?: ItemOnQuestAssignmentWhereInput
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOnQuestAssignmentScalarFieldEnum | ItemOnQuestAssignmentScalarFieldEnum[]
  }

  /**
   * QuestAssignment without action
   */
  export type QuestAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Adventurer
   */

  export type AggregateAdventurer = {
    _count: AdventurerCountAggregateOutputType | null
    _avg: AdventurerAvgAggregateOutputType | null
    _sum: AdventurerSumAggregateOutputType | null
    _min: AdventurerMinAggregateOutputType | null
    _max: AdventurerMaxAggregateOutputType | null
  }

  export type AdventurerAvgAggregateOutputType = {
    xp: number | null
  }

  export type AdventurerSumAggregateOutputType = {
    xp: number | null
  }

  export type AdventurerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AdventurerType | null
    status: $Enums.AdventurerStatus | null
    xp: number | null
    guildId: string | null
  }

  export type AdventurerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AdventurerType | null
    status: $Enums.AdventurerStatus | null
    xp: number | null
    guildId: string | null
  }

  export type AdventurerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    xp: number
    guildId: number
    _all: number
  }


  export type AdventurerAvgAggregateInputType = {
    xp?: true
  }

  export type AdventurerSumAggregateInputType = {
    xp?: true
  }

  export type AdventurerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    xp?: true
    guildId?: true
  }

  export type AdventurerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    xp?: true
    guildId?: true
  }

  export type AdventurerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    xp?: true
    guildId?: true
    _all?: true
  }

  export type AdventurerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adventurer to aggregate.
     */
    where?: AdventurerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adventurers to fetch.
     */
    orderBy?: AdventurerOrderByWithRelationInput | AdventurerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdventurerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adventurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adventurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adventurers
    **/
    _count?: true | AdventurerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdventurerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdventurerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdventurerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdventurerMaxAggregateInputType
  }

  export type GetAdventurerAggregateType<T extends AdventurerAggregateArgs> = {
        [P in keyof T & keyof AggregateAdventurer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdventurer[P]>
      : GetScalarType<T[P], AggregateAdventurer[P]>
  }




  export type AdventurerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdventurerWhereInput
    orderBy?: AdventurerOrderByWithAggregationInput | AdventurerOrderByWithAggregationInput[]
    by: AdventurerScalarFieldEnum[] | AdventurerScalarFieldEnum
    having?: AdventurerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdventurerCountAggregateInputType | true
    _avg?: AdventurerAvgAggregateInputType
    _sum?: AdventurerSumAggregateInputType
    _min?: AdventurerMinAggregateInputType
    _max?: AdventurerMaxAggregateInputType
  }

  export type AdventurerGroupByOutputType = {
    id: string
    name: string
    type: $Enums.AdventurerType
    status: $Enums.AdventurerStatus
    xp: number
    guildId: string
    _count: AdventurerCountAggregateOutputType | null
    _avg: AdventurerAvgAggregateOutputType | null
    _sum: AdventurerSumAggregateOutputType | null
    _min: AdventurerMinAggregateOutputType | null
    _max: AdventurerMaxAggregateOutputType | null
  }

  type GetAdventurerGroupByPayload<T extends AdventurerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdventurerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdventurerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdventurerGroupByOutputType[P]>
            : GetScalarType<T[P], AdventurerGroupByOutputType[P]>
        }
      >
    >


  export type AdventurerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    xp?: boolean
    guildId?: boolean
    assignments?: boolean | Adventurer$assignmentsArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | Adventurer$userArgs<ExtArgs>
    _count?: boolean | AdventurerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adventurer"]>

  export type AdventurerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    xp?: boolean
    guildId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adventurer"]>

  export type AdventurerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    xp?: boolean
    guildId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adventurer"]>

  export type AdventurerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    xp?: boolean
    guildId?: boolean
  }

  export type AdventurerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "xp" | "guildId", ExtArgs["result"]["adventurer"]>
  export type AdventurerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Adventurer$assignmentsArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    user?: boolean | Adventurer$userArgs<ExtArgs>
    _count?: boolean | AdventurerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdventurerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type AdventurerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $AdventurerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adventurer"
    objects: {
      assignments: Prisma.$QuestAssignmentPayload<ExtArgs>[]
      guild: Prisma.$GuildPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.AdventurerType
      status: $Enums.AdventurerStatus
      xp: number
      guildId: string
    }, ExtArgs["result"]["adventurer"]>
    composites: {}
  }

  type AdventurerGetPayload<S extends boolean | null | undefined | AdventurerDefaultArgs> = $Result.GetResult<Prisma.$AdventurerPayload, S>

  type AdventurerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdventurerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdventurerCountAggregateInputType | true
    }

  export interface AdventurerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adventurer'], meta: { name: 'Adventurer' } }
    /**
     * Find zero or one Adventurer that matches the filter.
     * @param {AdventurerFindUniqueArgs} args - Arguments to find a Adventurer
     * @example
     * // Get one Adventurer
     * const adventurer = await prisma.adventurer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdventurerFindUniqueArgs>(args: SelectSubset<T, AdventurerFindUniqueArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adventurer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdventurerFindUniqueOrThrowArgs} args - Arguments to find a Adventurer
     * @example
     * // Get one Adventurer
     * const adventurer = await prisma.adventurer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdventurerFindUniqueOrThrowArgs>(args: SelectSubset<T, AdventurerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adventurer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerFindFirstArgs} args - Arguments to find a Adventurer
     * @example
     * // Get one Adventurer
     * const adventurer = await prisma.adventurer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdventurerFindFirstArgs>(args?: SelectSubset<T, AdventurerFindFirstArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adventurer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerFindFirstOrThrowArgs} args - Arguments to find a Adventurer
     * @example
     * // Get one Adventurer
     * const adventurer = await prisma.adventurer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdventurerFindFirstOrThrowArgs>(args?: SelectSubset<T, AdventurerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adventurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adventurers
     * const adventurers = await prisma.adventurer.findMany()
     * 
     * // Get first 10 Adventurers
     * const adventurers = await prisma.adventurer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adventurerWithIdOnly = await prisma.adventurer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdventurerFindManyArgs>(args?: SelectSubset<T, AdventurerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adventurer.
     * @param {AdventurerCreateArgs} args - Arguments to create a Adventurer.
     * @example
     * // Create one Adventurer
     * const Adventurer = await prisma.adventurer.create({
     *   data: {
     *     // ... data to create a Adventurer
     *   }
     * })
     * 
     */
    create<T extends AdventurerCreateArgs>(args: SelectSubset<T, AdventurerCreateArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adventurers.
     * @param {AdventurerCreateManyArgs} args - Arguments to create many Adventurers.
     * @example
     * // Create many Adventurers
     * const adventurer = await prisma.adventurer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdventurerCreateManyArgs>(args?: SelectSubset<T, AdventurerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adventurers and returns the data saved in the database.
     * @param {AdventurerCreateManyAndReturnArgs} args - Arguments to create many Adventurers.
     * @example
     * // Create many Adventurers
     * const adventurer = await prisma.adventurer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adventurers and only return the `id`
     * const adventurerWithIdOnly = await prisma.adventurer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdventurerCreateManyAndReturnArgs>(args?: SelectSubset<T, AdventurerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adventurer.
     * @param {AdventurerDeleteArgs} args - Arguments to delete one Adventurer.
     * @example
     * // Delete one Adventurer
     * const Adventurer = await prisma.adventurer.delete({
     *   where: {
     *     // ... filter to delete one Adventurer
     *   }
     * })
     * 
     */
    delete<T extends AdventurerDeleteArgs>(args: SelectSubset<T, AdventurerDeleteArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adventurer.
     * @param {AdventurerUpdateArgs} args - Arguments to update one Adventurer.
     * @example
     * // Update one Adventurer
     * const adventurer = await prisma.adventurer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdventurerUpdateArgs>(args: SelectSubset<T, AdventurerUpdateArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adventurers.
     * @param {AdventurerDeleteManyArgs} args - Arguments to filter Adventurers to delete.
     * @example
     * // Delete a few Adventurers
     * const { count } = await prisma.adventurer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdventurerDeleteManyArgs>(args?: SelectSubset<T, AdventurerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adventurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adventurers
     * const adventurer = await prisma.adventurer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdventurerUpdateManyArgs>(args: SelectSubset<T, AdventurerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adventurers and returns the data updated in the database.
     * @param {AdventurerUpdateManyAndReturnArgs} args - Arguments to update many Adventurers.
     * @example
     * // Update many Adventurers
     * const adventurer = await prisma.adventurer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adventurers and only return the `id`
     * const adventurerWithIdOnly = await prisma.adventurer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdventurerUpdateManyAndReturnArgs>(args: SelectSubset<T, AdventurerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adventurer.
     * @param {AdventurerUpsertArgs} args - Arguments to update or create a Adventurer.
     * @example
     * // Update or create a Adventurer
     * const adventurer = await prisma.adventurer.upsert({
     *   create: {
     *     // ... data to create a Adventurer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adventurer we want to update
     *   }
     * })
     */
    upsert<T extends AdventurerUpsertArgs>(args: SelectSubset<T, AdventurerUpsertArgs<ExtArgs>>): Prisma__AdventurerClient<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adventurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerCountArgs} args - Arguments to filter Adventurers to count.
     * @example
     * // Count the number of Adventurers
     * const count = await prisma.adventurer.count({
     *   where: {
     *     // ... the filter for the Adventurers we want to count
     *   }
     * })
    **/
    count<T extends AdventurerCountArgs>(
      args?: Subset<T, AdventurerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdventurerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adventurer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdventurerAggregateArgs>(args: Subset<T, AdventurerAggregateArgs>): Prisma.PrismaPromise<GetAdventurerAggregateType<T>>

    /**
     * Group by Adventurer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdventurerGroupByArgs} args - Group by arguments.
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
      T extends AdventurerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdventurerGroupByArgs['orderBy'] }
        : { orderBy?: AdventurerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdventurerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdventurerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adventurer model
   */
  readonly fields: AdventurerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adventurer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdventurerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Adventurer$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Adventurer$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Adventurer$userArgs<ExtArgs> = {}>(args?: Subset<T, Adventurer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adventurer model
   */
  interface AdventurerFieldRefs {
    readonly id: FieldRef<"Adventurer", 'String'>
    readonly name: FieldRef<"Adventurer", 'String'>
    readonly type: FieldRef<"Adventurer", 'AdventurerType'>
    readonly status: FieldRef<"Adventurer", 'AdventurerStatus'>
    readonly xp: FieldRef<"Adventurer", 'Int'>
    readonly guildId: FieldRef<"Adventurer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Adventurer findUnique
   */
  export type AdventurerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter, which Adventurer to fetch.
     */
    where: AdventurerWhereUniqueInput
  }

  /**
   * Adventurer findUniqueOrThrow
   */
  export type AdventurerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter, which Adventurer to fetch.
     */
    where: AdventurerWhereUniqueInput
  }

  /**
   * Adventurer findFirst
   */
  export type AdventurerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter, which Adventurer to fetch.
     */
    where?: AdventurerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adventurers to fetch.
     */
    orderBy?: AdventurerOrderByWithRelationInput | AdventurerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adventurers.
     */
    cursor?: AdventurerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adventurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adventurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adventurers.
     */
    distinct?: AdventurerScalarFieldEnum | AdventurerScalarFieldEnum[]
  }

  /**
   * Adventurer findFirstOrThrow
   */
  export type AdventurerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter, which Adventurer to fetch.
     */
    where?: AdventurerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adventurers to fetch.
     */
    orderBy?: AdventurerOrderByWithRelationInput | AdventurerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adventurers.
     */
    cursor?: AdventurerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adventurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adventurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adventurers.
     */
    distinct?: AdventurerScalarFieldEnum | AdventurerScalarFieldEnum[]
  }

  /**
   * Adventurer findMany
   */
  export type AdventurerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter, which Adventurers to fetch.
     */
    where?: AdventurerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adventurers to fetch.
     */
    orderBy?: AdventurerOrderByWithRelationInput | AdventurerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adventurers.
     */
    cursor?: AdventurerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adventurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adventurers.
     */
    skip?: number
    distinct?: AdventurerScalarFieldEnum | AdventurerScalarFieldEnum[]
  }

  /**
   * Adventurer create
   */
  export type AdventurerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * The data needed to create a Adventurer.
     */
    data: XOR<AdventurerCreateInput, AdventurerUncheckedCreateInput>
  }

  /**
   * Adventurer createMany
   */
  export type AdventurerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adventurers.
     */
    data: AdventurerCreateManyInput | AdventurerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adventurer createManyAndReturn
   */
  export type AdventurerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * The data used to create many Adventurers.
     */
    data: AdventurerCreateManyInput | AdventurerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adventurer update
   */
  export type AdventurerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * The data needed to update a Adventurer.
     */
    data: XOR<AdventurerUpdateInput, AdventurerUncheckedUpdateInput>
    /**
     * Choose, which Adventurer to update.
     */
    where: AdventurerWhereUniqueInput
  }

  /**
   * Adventurer updateMany
   */
  export type AdventurerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adventurers.
     */
    data: XOR<AdventurerUpdateManyMutationInput, AdventurerUncheckedUpdateManyInput>
    /**
     * Filter which Adventurers to update
     */
    where?: AdventurerWhereInput
    /**
     * Limit how many Adventurers to update.
     */
    limit?: number
  }

  /**
   * Adventurer updateManyAndReturn
   */
  export type AdventurerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * The data used to update Adventurers.
     */
    data: XOR<AdventurerUpdateManyMutationInput, AdventurerUncheckedUpdateManyInput>
    /**
     * Filter which Adventurers to update
     */
    where?: AdventurerWhereInput
    /**
     * Limit how many Adventurers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adventurer upsert
   */
  export type AdventurerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * The filter to search for the Adventurer to update in case it exists.
     */
    where: AdventurerWhereUniqueInput
    /**
     * In case the Adventurer found by the `where` argument doesn't exist, create a new Adventurer with this data.
     */
    create: XOR<AdventurerCreateInput, AdventurerUncheckedCreateInput>
    /**
     * In case the Adventurer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdventurerUpdateInput, AdventurerUncheckedUpdateInput>
  }

  /**
   * Adventurer delete
   */
  export type AdventurerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    /**
     * Filter which Adventurer to delete.
     */
    where: AdventurerWhereUniqueInput
  }

  /**
   * Adventurer deleteMany
   */
  export type AdventurerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adventurers to delete
     */
    where?: AdventurerWhereInput
    /**
     * Limit how many Adventurers to delete.
     */
    limit?: number
  }

  /**
   * Adventurer.assignments
   */
  export type Adventurer$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestAssignment
     */
    select?: QuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestAssignment
     */
    omit?: QuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestAssignmentInclude<ExtArgs> | null
    where?: QuestAssignmentWhereInput
    orderBy?: QuestAssignmentOrderByWithRelationInput | QuestAssignmentOrderByWithRelationInput[]
    cursor?: QuestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestAssignmentScalarFieldEnum | QuestAssignmentScalarFieldEnum[]
  }

  /**
   * Adventurer.user
   */
  export type Adventurer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Adventurer without action
   */
  export type AdventurerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    durability: number | null
    price: number | null
  }

  export type ItemSumAggregateOutputType = {
    durability: number | null
    price: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    durability: number | null
    price: number | null
    type: $Enums.ItemType | null
    stats: string | null
    rarity: $Enums.ItemRarity | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    durability: number | null
    price: number | null
    type: $Enums.ItemType | null
    stats: string | null
    rarity: $Enums.ItemRarity | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    durability: number
    price: number
    type: number
    stats: number
    rarity: number
    profiles: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    durability?: true
    price?: true
  }

  export type ItemSumAggregateInputType = {
    durability?: true
    price?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    price?: true
    type?: true
    stats?: true
    rarity?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    price?: true
    type?: true
    stats?: true
    rarity?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    price?: true
    type?: true
    stats?: true
    rarity?: true
    profiles?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats: string | null
    rarity: $Enums.ItemRarity
    profiles: $Enums.AdventurerType[]
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    price?: boolean
    type?: boolean
    stats?: boolean
    rarity?: boolean
    profiles?: boolean
    questAssignments?: boolean | Item$questAssignmentsArgs<ExtArgs>
    guilds?: boolean | Item$guildsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    price?: boolean
    type?: boolean
    stats?: boolean
    rarity?: boolean
    profiles?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    price?: boolean
    type?: boolean
    stats?: boolean
    rarity?: boolean
    profiles?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    price?: boolean
    type?: boolean
    stats?: boolean
    rarity?: boolean
    profiles?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "durability" | "price" | "type" | "stats" | "rarity" | "profiles", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questAssignments?: boolean | Item$questAssignmentsArgs<ExtArgs>
    guilds?: boolean | Item$guildsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      questAssignments: Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>[]
      guilds: Prisma.$ItemOnGuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      durability: number
      price: number
      type: $Enums.ItemType
      stats: string | null
      rarity: $Enums.ItemRarity
      profiles: $Enums.AdventurerType[]
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questAssignments<T extends Item$questAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Item$questAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guilds<T extends Item$guildsArgs<ExtArgs> = {}>(args?: Subset<T, Item$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly durability: FieldRef<"Item", 'Int'>
    readonly price: FieldRef<"Item", 'Int'>
    readonly type: FieldRef<"Item", 'ItemType'>
    readonly stats: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'ItemRarity'>
    readonly profiles: FieldRef<"Item", 'AdventurerType[]'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.questAssignments
   */
  export type Item$questAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    where?: ItemOnQuestAssignmentWhereInput
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOnQuestAssignmentScalarFieldEnum | ItemOnQuestAssignmentScalarFieldEnum[]
  }

  /**
   * Item.guilds
   */
  export type Item$guildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    where?: ItemOnGuildWhereInput
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    cursor?: ItemOnGuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOnGuildScalarFieldEnum | ItemOnGuildScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildMinAggregateOutputType = {
    id: string | null
    name: string | null
    bankId: string | null
  }

  export type GuildMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bankId: string | null
  }

  export type GuildCountAggregateOutputType = {
    id: number
    name: number
    bankId: number
    _all: number
  }


  export type GuildMinAggregateInputType = {
    id?: true
    name?: true
    bankId?: true
  }

  export type GuildMaxAggregateInputType = {
    id?: true
    name?: true
    bankId?: true
  }

  export type GuildCountAggregateInputType = {
    id?: true
    name?: true
    bankId?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guild to aggregate.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type GuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithAggregationInput | GuildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: GuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    id: string
    name: string
    bankId: string
    _count: GuildCountAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends GuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type GuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankId?: boolean
    adventurers?: boolean | Guild$adventurersArgs<ExtArgs>
    bank?: boolean | Guild$bankArgs<ExtArgs>
    inventory?: boolean | Guild$inventoryArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankId?: boolean
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankId?: boolean
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectScalar = {
    id?: boolean
    name?: boolean
    bankId?: boolean
  }

  export type GuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bankId", ExtArgs["result"]["guild"]>
  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adventurers?: boolean | Guild$adventurersArgs<ExtArgs>
    bank?: boolean | Guild$bankArgs<ExtArgs>
    inventory?: boolean | Guild$inventoryArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      adventurers: Prisma.$AdventurerPayload<ExtArgs>[]
      bank: Prisma.$BankPayload<ExtArgs> | null
      inventory: Prisma.$ItemOnGuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bankId: string
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type GuildGetPayload<S extends boolean | null | undefined | GuildDefaultArgs> = $Result.GetResult<Prisma.$GuildPayload, S>

  type GuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface GuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guild'], meta: { name: 'Guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {GuildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildFindUniqueArgs>(args: SelectSubset<T, GuildFindUniqueArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildFindFirstArgs>(args?: SelectSubset<T, GuildFindFirstArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildWithIdOnly = await prisma.guild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildFindManyArgs>(args?: SelectSubset<T, GuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guild.
     * @param {GuildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends GuildCreateArgs>(args: SelectSubset<T, GuildCreateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guilds.
     * @param {GuildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildCreateManyArgs>(args?: SelectSubset<T, GuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guilds and returns the data saved in the database.
     * @param {GuildCreateManyAndReturnArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guild.
     * @param {GuildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends GuildDeleteArgs>(args: SelectSubset<T, GuildDeleteArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guild.
     * @param {GuildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUpdateArgs>(args: SelectSubset<T, GuildUpdateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guilds.
     * @param {GuildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildDeleteManyArgs>(args?: SelectSubset<T, GuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUpdateManyArgs>(args: SelectSubset<T, GuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds and returns the data updated in the database.
     * @param {GuildUpdateManyAndReturnArgs} args - Arguments to update many Guilds.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuildUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guild.
     * @param {GuildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends GuildUpsertArgs>(args: SelectSubset<T, GuildUpsertArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildCountArgs>(
      args?: Subset<T, GuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildGroupByArgs} args - Group by arguments.
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
      T extends GuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildGroupByArgs['orderBy'] }
        : { orderBy?: GuildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guild model
   */
  readonly fields: GuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adventurers<T extends Guild$adventurersArgs<ExtArgs> = {}>(args?: Subset<T, Guild$adventurersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdventurerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bank<T extends Guild$bankArgs<ExtArgs> = {}>(args?: Subset<T, Guild$bankArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory<T extends Guild$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Guild$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guild model
   */
  interface GuildFieldRefs {
    readonly id: FieldRef<"Guild", 'String'>
    readonly name: FieldRef<"Guild", 'String'>
    readonly bankId: FieldRef<"Guild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guild findUnique
   */
  export type GuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findUniqueOrThrow
   */
  export type GuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findFirst
   */
  export type GuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findFirstOrThrow
   */
  export type GuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findMany
   */
  export type GuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild create
   */
  export type GuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Guild.
     */
    data: XOR<GuildCreateInput, GuildUncheckedCreateInput>
  }

  /**
   * Guild createMany
   */
  export type GuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild createManyAndReturn
   */
  export type GuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild update
   */
  export type GuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Guild.
     */
    data: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
    /**
     * Choose, which Guild to update.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild updateMany
   */
  export type GuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guild updateManyAndReturn
   */
  export type GuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guild upsert
   */
  export type GuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Guild to update in case it exists.
     */
    where: GuildWhereUniqueInput
    /**
     * In case the Guild found by the `where` argument doesn't exist, create a new Guild with this data.
     */
    create: XOR<GuildCreateInput, GuildUncheckedCreateInput>
    /**
     * In case the Guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
  }

  /**
   * Guild delete
   */
  export type GuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter which Guild to delete.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild deleteMany
   */
  export type GuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to delete.
     */
    limit?: number
  }

  /**
   * Guild.adventurers
   */
  export type Guild$adventurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adventurer
     */
    select?: AdventurerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adventurer
     */
    omit?: AdventurerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdventurerInclude<ExtArgs> | null
    where?: AdventurerWhereInput
    orderBy?: AdventurerOrderByWithRelationInput | AdventurerOrderByWithRelationInput[]
    cursor?: AdventurerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdventurerScalarFieldEnum | AdventurerScalarFieldEnum[]
  }

  /**
   * Guild.bank
   */
  export type Guild$bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    where?: BankWhereInput
  }

  /**
   * Guild.inventory
   */
  export type Guild$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    where?: ItemOnGuildWhereInput
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    cursor?: ItemOnGuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOnGuildScalarFieldEnum | ItemOnGuildScalarFieldEnum[]
  }

  /**
   * Guild without action
   */
  export type GuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
  }


  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankAvgAggregateOutputType = {
    amount: number | null
  }

  export type BankSumAggregateOutputType = {
    amount: number | null
  }

  export type BankMinAggregateOutputType = {
    id: string | null
    amount: number | null
    guildId: string | null
  }

  export type BankMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    guildId: string | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    amount: number
    guildId: number
    _all: number
  }


  export type BankAvgAggregateInputType = {
    amount?: true
  }

  export type BankSumAggregateInputType = {
    amount?: true
  }

  export type BankMinAggregateInputType = {
    id?: true
    amount?: true
    guildId?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    amount?: true
    guildId?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    amount?: true
    guildId?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _avg?: BankAvgAggregateInputType
    _sum?: BankSumAggregateInputType
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: string
    amount: number
    guildId: string
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    guildId?: boolean
    history?: boolean | Bank$historyArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    guildId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    guildId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectScalar = {
    id?: boolean
    amount?: boolean
    guildId?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "guildId", ExtArgs["result"]["bank"]>
  export type BankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Bank$historyArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }
  export type BankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {
      history: Prisma.$TransactionPayload<ExtArgs>[]
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      guildId: string
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks and returns the data saved in the database.
     * @param {BankCreateManyAndReturnArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankCreateManyAndReturnArgs>(args?: SelectSubset<T, BankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks and returns the data updated in the database.
     * @param {BankUpdateManyAndReturnArgs} args - Arguments to update many Banks.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.updateManyAndReturn({
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
    updateManyAndReturn<T extends BankUpdateManyAndReturnArgs>(args: SelectSubset<T, BankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
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
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends Bank$historyArgs<ExtArgs> = {}>(args?: Subset<T, Bank$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'String'>
    readonly amount: FieldRef<"Bank", 'Int'>
    readonly guildId: FieldRef<"Bank", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank createManyAndReturn
   */
  export type BankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank updateManyAndReturn
   */
  export type BankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank.history
   */
  export type Bank$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    name: string | null
    bankId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    name: string | null
    bankId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    name: number
    bankId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    name?: true
    bankId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    name?: true
    bankId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    name?: true
    bankId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    amount: number
    date: Date
    name: string
    bankId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    name?: boolean
    bankId?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    name?: boolean
    bankId?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    name?: boolean
    bankId?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    name?: boolean
    bankId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "name" | "bankId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      bank: Prisma.$BankPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      name: string
      bankId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends BankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankDefaultArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly name: FieldRef<"Transaction", 'String'>
    readonly bankId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model ItemOnQuestAssignment
   */

  export type AggregateItemOnQuestAssignment = {
    _count: ItemOnQuestAssignmentCountAggregateOutputType | null
    _min: ItemOnQuestAssignmentMinAggregateOutputType | null
    _max: ItemOnQuestAssignmentMaxAggregateOutputType | null
  }

  export type ItemOnQuestAssignmentMinAggregateOutputType = {
    questAssignmentId: string | null
    itemId: string | null
  }

  export type ItemOnQuestAssignmentMaxAggregateOutputType = {
    questAssignmentId: string | null
    itemId: string | null
  }

  export type ItemOnQuestAssignmentCountAggregateOutputType = {
    questAssignmentId: number
    itemId: number
    _all: number
  }


  export type ItemOnQuestAssignmentMinAggregateInputType = {
    questAssignmentId?: true
    itemId?: true
  }

  export type ItemOnQuestAssignmentMaxAggregateInputType = {
    questAssignmentId?: true
    itemId?: true
  }

  export type ItemOnQuestAssignmentCountAggregateInputType = {
    questAssignmentId?: true
    itemId?: true
    _all?: true
  }

  export type ItemOnQuestAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOnQuestAssignment to aggregate.
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnQuestAssignments to fetch.
     */
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnQuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnQuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemOnQuestAssignments
    **/
    _count?: true | ItemOnQuestAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemOnQuestAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemOnQuestAssignmentMaxAggregateInputType
  }

  export type GetItemOnQuestAssignmentAggregateType<T extends ItemOnQuestAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateItemOnQuestAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemOnQuestAssignment[P]>
      : GetScalarType<T[P], AggregateItemOnQuestAssignment[P]>
  }




  export type ItemOnQuestAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnQuestAssignmentWhereInput
    orderBy?: ItemOnQuestAssignmentOrderByWithAggregationInput | ItemOnQuestAssignmentOrderByWithAggregationInput[]
    by: ItemOnQuestAssignmentScalarFieldEnum[] | ItemOnQuestAssignmentScalarFieldEnum
    having?: ItemOnQuestAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemOnQuestAssignmentCountAggregateInputType | true
    _min?: ItemOnQuestAssignmentMinAggregateInputType
    _max?: ItemOnQuestAssignmentMaxAggregateInputType
  }

  export type ItemOnQuestAssignmentGroupByOutputType = {
    questAssignmentId: string
    itemId: string
    _count: ItemOnQuestAssignmentCountAggregateOutputType | null
    _min: ItemOnQuestAssignmentMinAggregateOutputType | null
    _max: ItemOnQuestAssignmentMaxAggregateOutputType | null
  }

  type GetItemOnQuestAssignmentGroupByPayload<T extends ItemOnQuestAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemOnQuestAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemOnQuestAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemOnQuestAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ItemOnQuestAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ItemOnQuestAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questAssignmentId?: boolean
    itemId?: boolean
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnQuestAssignment"]>

  export type ItemOnQuestAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questAssignmentId?: boolean
    itemId?: boolean
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnQuestAssignment"]>

  export type ItemOnQuestAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questAssignmentId?: boolean
    itemId?: boolean
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnQuestAssignment"]>

  export type ItemOnQuestAssignmentSelectScalar = {
    questAssignmentId?: boolean
    itemId?: boolean
  }

  export type ItemOnQuestAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questAssignmentId" | "itemId", ExtArgs["result"]["itemOnQuestAssignment"]>
  export type ItemOnQuestAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemOnQuestAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemOnQuestAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questAssignment?: boolean | QuestAssignmentDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemOnQuestAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemOnQuestAssignment"
    objects: {
      questAssignment: Prisma.$QuestAssignmentPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      questAssignmentId: string
      itemId: string
    }, ExtArgs["result"]["itemOnQuestAssignment"]>
    composites: {}
  }

  type ItemOnQuestAssignmentGetPayload<S extends boolean | null | undefined | ItemOnQuestAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload, S>

  type ItemOnQuestAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemOnQuestAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemOnQuestAssignmentCountAggregateInputType | true
    }

  export interface ItemOnQuestAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemOnQuestAssignment'], meta: { name: 'ItemOnQuestAssignment' } }
    /**
     * Find zero or one ItemOnQuestAssignment that matches the filter.
     * @param {ItemOnQuestAssignmentFindUniqueArgs} args - Arguments to find a ItemOnQuestAssignment
     * @example
     * // Get one ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemOnQuestAssignmentFindUniqueArgs>(args: SelectSubset<T, ItemOnQuestAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemOnQuestAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemOnQuestAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ItemOnQuestAssignment
     * @example
     * // Get one ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemOnQuestAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemOnQuestAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOnQuestAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentFindFirstArgs} args - Arguments to find a ItemOnQuestAssignment
     * @example
     * // Get one ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemOnQuestAssignmentFindFirstArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentFindFirstArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOnQuestAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentFindFirstOrThrowArgs} args - Arguments to find a ItemOnQuestAssignment
     * @example
     * // Get one ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemOnQuestAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemOnQuestAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemOnQuestAssignments
     * const itemOnQuestAssignments = await prisma.itemOnQuestAssignment.findMany()
     * 
     * // Get first 10 ItemOnQuestAssignments
     * const itemOnQuestAssignments = await prisma.itemOnQuestAssignment.findMany({ take: 10 })
     * 
     * // Only select the `questAssignmentId`
     * const itemOnQuestAssignmentWithQuestAssignmentIdOnly = await prisma.itemOnQuestAssignment.findMany({ select: { questAssignmentId: true } })
     * 
     */
    findMany<T extends ItemOnQuestAssignmentFindManyArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemOnQuestAssignment.
     * @param {ItemOnQuestAssignmentCreateArgs} args - Arguments to create a ItemOnQuestAssignment.
     * @example
     * // Create one ItemOnQuestAssignment
     * const ItemOnQuestAssignment = await prisma.itemOnQuestAssignment.create({
     *   data: {
     *     // ... data to create a ItemOnQuestAssignment
     *   }
     * })
     * 
     */
    create<T extends ItemOnQuestAssignmentCreateArgs>(args: SelectSubset<T, ItemOnQuestAssignmentCreateArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemOnQuestAssignments.
     * @param {ItemOnQuestAssignmentCreateManyArgs} args - Arguments to create many ItemOnQuestAssignments.
     * @example
     * // Create many ItemOnQuestAssignments
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemOnQuestAssignmentCreateManyArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemOnQuestAssignments and returns the data saved in the database.
     * @param {ItemOnQuestAssignmentCreateManyAndReturnArgs} args - Arguments to create many ItemOnQuestAssignments.
     * @example
     * // Create many ItemOnQuestAssignments
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemOnQuestAssignments and only return the `questAssignmentId`
     * const itemOnQuestAssignmentWithQuestAssignmentIdOnly = await prisma.itemOnQuestAssignment.createManyAndReturn({
     *   select: { questAssignmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemOnQuestAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemOnQuestAssignment.
     * @param {ItemOnQuestAssignmentDeleteArgs} args - Arguments to delete one ItemOnQuestAssignment.
     * @example
     * // Delete one ItemOnQuestAssignment
     * const ItemOnQuestAssignment = await prisma.itemOnQuestAssignment.delete({
     *   where: {
     *     // ... filter to delete one ItemOnQuestAssignment
     *   }
     * })
     * 
     */
    delete<T extends ItemOnQuestAssignmentDeleteArgs>(args: SelectSubset<T, ItemOnQuestAssignmentDeleteArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemOnQuestAssignment.
     * @param {ItemOnQuestAssignmentUpdateArgs} args - Arguments to update one ItemOnQuestAssignment.
     * @example
     * // Update one ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemOnQuestAssignmentUpdateArgs>(args: SelectSubset<T, ItemOnQuestAssignmentUpdateArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemOnQuestAssignments.
     * @param {ItemOnQuestAssignmentDeleteManyArgs} args - Arguments to filter ItemOnQuestAssignments to delete.
     * @example
     * // Delete a few ItemOnQuestAssignments
     * const { count } = await prisma.itemOnQuestAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemOnQuestAssignmentDeleteManyArgs>(args?: SelectSubset<T, ItemOnQuestAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOnQuestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemOnQuestAssignments
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemOnQuestAssignmentUpdateManyArgs>(args: SelectSubset<T, ItemOnQuestAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOnQuestAssignments and returns the data updated in the database.
     * @param {ItemOnQuestAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ItemOnQuestAssignments.
     * @example
     * // Update many ItemOnQuestAssignments
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemOnQuestAssignments and only return the `questAssignmentId`
     * const itemOnQuestAssignmentWithQuestAssignmentIdOnly = await prisma.itemOnQuestAssignment.updateManyAndReturn({
     *   select: { questAssignmentId: true },
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
    updateManyAndReturn<T extends ItemOnQuestAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemOnQuestAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemOnQuestAssignment.
     * @param {ItemOnQuestAssignmentUpsertArgs} args - Arguments to update or create a ItemOnQuestAssignment.
     * @example
     * // Update or create a ItemOnQuestAssignment
     * const itemOnQuestAssignment = await prisma.itemOnQuestAssignment.upsert({
     *   create: {
     *     // ... data to create a ItemOnQuestAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemOnQuestAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ItemOnQuestAssignmentUpsertArgs>(args: SelectSubset<T, ItemOnQuestAssignmentUpsertArgs<ExtArgs>>): Prisma__ItemOnQuestAssignmentClient<$Result.GetResult<Prisma.$ItemOnQuestAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemOnQuestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentCountArgs} args - Arguments to filter ItemOnQuestAssignments to count.
     * @example
     * // Count the number of ItemOnQuestAssignments
     * const count = await prisma.itemOnQuestAssignment.count({
     *   where: {
     *     // ... the filter for the ItemOnQuestAssignments we want to count
     *   }
     * })
    **/
    count<T extends ItemOnQuestAssignmentCountArgs>(
      args?: Subset<T, ItemOnQuestAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemOnQuestAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemOnQuestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemOnQuestAssignmentAggregateArgs>(args: Subset<T, ItemOnQuestAssignmentAggregateArgs>): Prisma.PrismaPromise<GetItemOnQuestAssignmentAggregateType<T>>

    /**
     * Group by ItemOnQuestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnQuestAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ItemOnQuestAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemOnQuestAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ItemOnQuestAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemOnQuestAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemOnQuestAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemOnQuestAssignment model
   */
  readonly fields: ItemOnQuestAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemOnQuestAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemOnQuestAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questAssignment<T extends QuestAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestAssignmentDefaultArgs<ExtArgs>>): Prisma__QuestAssignmentClient<$Result.GetResult<Prisma.$QuestAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemOnQuestAssignment model
   */
  interface ItemOnQuestAssignmentFieldRefs {
    readonly questAssignmentId: FieldRef<"ItemOnQuestAssignment", 'String'>
    readonly itemId: FieldRef<"ItemOnQuestAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemOnQuestAssignment findUnique
   */
  export type ItemOnQuestAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnQuestAssignment to fetch.
     */
    where: ItemOnQuestAssignmentWhereUniqueInput
  }

  /**
   * ItemOnQuestAssignment findUniqueOrThrow
   */
  export type ItemOnQuestAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnQuestAssignment to fetch.
     */
    where: ItemOnQuestAssignmentWhereUniqueInput
  }

  /**
   * ItemOnQuestAssignment findFirst
   */
  export type ItemOnQuestAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnQuestAssignment to fetch.
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnQuestAssignments to fetch.
     */
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOnQuestAssignments.
     */
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnQuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnQuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOnQuestAssignments.
     */
    distinct?: ItemOnQuestAssignmentScalarFieldEnum | ItemOnQuestAssignmentScalarFieldEnum[]
  }

  /**
   * ItemOnQuestAssignment findFirstOrThrow
   */
  export type ItemOnQuestAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnQuestAssignment to fetch.
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnQuestAssignments to fetch.
     */
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOnQuestAssignments.
     */
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnQuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnQuestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOnQuestAssignments.
     */
    distinct?: ItemOnQuestAssignmentScalarFieldEnum | ItemOnQuestAssignmentScalarFieldEnum[]
  }

  /**
   * ItemOnQuestAssignment findMany
   */
  export type ItemOnQuestAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnQuestAssignments to fetch.
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnQuestAssignments to fetch.
     */
    orderBy?: ItemOnQuestAssignmentOrderByWithRelationInput | ItemOnQuestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemOnQuestAssignments.
     */
    cursor?: ItemOnQuestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnQuestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnQuestAssignments.
     */
    skip?: number
    distinct?: ItemOnQuestAssignmentScalarFieldEnum | ItemOnQuestAssignmentScalarFieldEnum[]
  }

  /**
   * ItemOnQuestAssignment create
   */
  export type ItemOnQuestAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemOnQuestAssignment.
     */
    data: XOR<ItemOnQuestAssignmentCreateInput, ItemOnQuestAssignmentUncheckedCreateInput>
  }

  /**
   * ItemOnQuestAssignment createMany
   */
  export type ItemOnQuestAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemOnQuestAssignments.
     */
    data: ItemOnQuestAssignmentCreateManyInput | ItemOnQuestAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemOnQuestAssignment createManyAndReturn
   */
  export type ItemOnQuestAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ItemOnQuestAssignments.
     */
    data: ItemOnQuestAssignmentCreateManyInput | ItemOnQuestAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOnQuestAssignment update
   */
  export type ItemOnQuestAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemOnQuestAssignment.
     */
    data: XOR<ItemOnQuestAssignmentUpdateInput, ItemOnQuestAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ItemOnQuestAssignment to update.
     */
    where: ItemOnQuestAssignmentWhereUniqueInput
  }

  /**
   * ItemOnQuestAssignment updateMany
   */
  export type ItemOnQuestAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemOnQuestAssignments.
     */
    data: XOR<ItemOnQuestAssignmentUpdateManyMutationInput, ItemOnQuestAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ItemOnQuestAssignments to update
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * Limit how many ItemOnQuestAssignments to update.
     */
    limit?: number
  }

  /**
   * ItemOnQuestAssignment updateManyAndReturn
   */
  export type ItemOnQuestAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ItemOnQuestAssignments.
     */
    data: XOR<ItemOnQuestAssignmentUpdateManyMutationInput, ItemOnQuestAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ItemOnQuestAssignments to update
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * Limit how many ItemOnQuestAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOnQuestAssignment upsert
   */
  export type ItemOnQuestAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemOnQuestAssignment to update in case it exists.
     */
    where: ItemOnQuestAssignmentWhereUniqueInput
    /**
     * In case the ItemOnQuestAssignment found by the `where` argument doesn't exist, create a new ItemOnQuestAssignment with this data.
     */
    create: XOR<ItemOnQuestAssignmentCreateInput, ItemOnQuestAssignmentUncheckedCreateInput>
    /**
     * In case the ItemOnQuestAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemOnQuestAssignmentUpdateInput, ItemOnQuestAssignmentUncheckedUpdateInput>
  }

  /**
   * ItemOnQuestAssignment delete
   */
  export type ItemOnQuestAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ItemOnQuestAssignment to delete.
     */
    where: ItemOnQuestAssignmentWhereUniqueInput
  }

  /**
   * ItemOnQuestAssignment deleteMany
   */
  export type ItemOnQuestAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOnQuestAssignments to delete
     */
    where?: ItemOnQuestAssignmentWhereInput
    /**
     * Limit how many ItemOnQuestAssignments to delete.
     */
    limit?: number
  }

  /**
   * ItemOnQuestAssignment without action
   */
  export type ItemOnQuestAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnQuestAssignment
     */
    select?: ItemOnQuestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnQuestAssignment
     */
    omit?: ItemOnQuestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnQuestAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ItemOnGuild
   */

  export type AggregateItemOnGuild = {
    _count: ItemOnGuildCountAggregateOutputType | null
    _min: ItemOnGuildMinAggregateOutputType | null
    _max: ItemOnGuildMaxAggregateOutputType | null
  }

  export type ItemOnGuildMinAggregateOutputType = {
    guildId: string | null
    itemId: string | null
  }

  export type ItemOnGuildMaxAggregateOutputType = {
    guildId: string | null
    itemId: string | null
  }

  export type ItemOnGuildCountAggregateOutputType = {
    guildId: number
    itemId: number
    _all: number
  }


  export type ItemOnGuildMinAggregateInputType = {
    guildId?: true
    itemId?: true
  }

  export type ItemOnGuildMaxAggregateInputType = {
    guildId?: true
    itemId?: true
  }

  export type ItemOnGuildCountAggregateInputType = {
    guildId?: true
    itemId?: true
    _all?: true
  }

  export type ItemOnGuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOnGuild to aggregate.
     */
    where?: ItemOnGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnGuilds to fetch.
     */
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemOnGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemOnGuilds
    **/
    _count?: true | ItemOnGuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemOnGuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemOnGuildMaxAggregateInputType
  }

  export type GetItemOnGuildAggregateType<T extends ItemOnGuildAggregateArgs> = {
        [P in keyof T & keyof AggregateItemOnGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemOnGuild[P]>
      : GetScalarType<T[P], AggregateItemOnGuild[P]>
  }




  export type ItemOnGuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOnGuildWhereInput
    orderBy?: ItemOnGuildOrderByWithAggregationInput | ItemOnGuildOrderByWithAggregationInput[]
    by: ItemOnGuildScalarFieldEnum[] | ItemOnGuildScalarFieldEnum
    having?: ItemOnGuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemOnGuildCountAggregateInputType | true
    _min?: ItemOnGuildMinAggregateInputType
    _max?: ItemOnGuildMaxAggregateInputType
  }

  export type ItemOnGuildGroupByOutputType = {
    guildId: string
    itemId: string
    _count: ItemOnGuildCountAggregateOutputType | null
    _min: ItemOnGuildMinAggregateOutputType | null
    _max: ItemOnGuildMaxAggregateOutputType | null
  }

  type GetItemOnGuildGroupByPayload<T extends ItemOnGuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemOnGuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemOnGuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemOnGuildGroupByOutputType[P]>
            : GetScalarType<T[P], ItemOnGuildGroupByOutputType[P]>
        }
      >
    >


  export type ItemOnGuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    itemId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnGuild"]>

  export type ItemOnGuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    itemId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnGuild"]>

  export type ItemOnGuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    itemId?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOnGuild"]>

  export type ItemOnGuildSelectScalar = {
    guildId?: boolean
    itemId?: boolean
  }

  export type ItemOnGuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "itemId", ExtArgs["result"]["itemOnGuild"]>
  export type ItemOnGuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemOnGuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemOnGuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemOnGuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemOnGuild"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      itemId: string
    }, ExtArgs["result"]["itemOnGuild"]>
    composites: {}
  }

  type ItemOnGuildGetPayload<S extends boolean | null | undefined | ItemOnGuildDefaultArgs> = $Result.GetResult<Prisma.$ItemOnGuildPayload, S>

  type ItemOnGuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemOnGuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemOnGuildCountAggregateInputType | true
    }

  export interface ItemOnGuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemOnGuild'], meta: { name: 'ItemOnGuild' } }
    /**
     * Find zero or one ItemOnGuild that matches the filter.
     * @param {ItemOnGuildFindUniqueArgs} args - Arguments to find a ItemOnGuild
     * @example
     * // Get one ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemOnGuildFindUniqueArgs>(args: SelectSubset<T, ItemOnGuildFindUniqueArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemOnGuild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemOnGuildFindUniqueOrThrowArgs} args - Arguments to find a ItemOnGuild
     * @example
     * // Get one ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemOnGuildFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemOnGuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOnGuild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildFindFirstArgs} args - Arguments to find a ItemOnGuild
     * @example
     * // Get one ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemOnGuildFindFirstArgs>(args?: SelectSubset<T, ItemOnGuildFindFirstArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOnGuild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildFindFirstOrThrowArgs} args - Arguments to find a ItemOnGuild
     * @example
     * // Get one ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemOnGuildFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemOnGuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemOnGuilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemOnGuilds
     * const itemOnGuilds = await prisma.itemOnGuild.findMany()
     * 
     * // Get first 10 ItemOnGuilds
     * const itemOnGuilds = await prisma.itemOnGuild.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const itemOnGuildWithGuildIdOnly = await prisma.itemOnGuild.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends ItemOnGuildFindManyArgs>(args?: SelectSubset<T, ItemOnGuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemOnGuild.
     * @param {ItemOnGuildCreateArgs} args - Arguments to create a ItemOnGuild.
     * @example
     * // Create one ItemOnGuild
     * const ItemOnGuild = await prisma.itemOnGuild.create({
     *   data: {
     *     // ... data to create a ItemOnGuild
     *   }
     * })
     * 
     */
    create<T extends ItemOnGuildCreateArgs>(args: SelectSubset<T, ItemOnGuildCreateArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemOnGuilds.
     * @param {ItemOnGuildCreateManyArgs} args - Arguments to create many ItemOnGuilds.
     * @example
     * // Create many ItemOnGuilds
     * const itemOnGuild = await prisma.itemOnGuild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemOnGuildCreateManyArgs>(args?: SelectSubset<T, ItemOnGuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemOnGuilds and returns the data saved in the database.
     * @param {ItemOnGuildCreateManyAndReturnArgs} args - Arguments to create many ItemOnGuilds.
     * @example
     * // Create many ItemOnGuilds
     * const itemOnGuild = await prisma.itemOnGuild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemOnGuilds and only return the `guildId`
     * const itemOnGuildWithGuildIdOnly = await prisma.itemOnGuild.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemOnGuildCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemOnGuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemOnGuild.
     * @param {ItemOnGuildDeleteArgs} args - Arguments to delete one ItemOnGuild.
     * @example
     * // Delete one ItemOnGuild
     * const ItemOnGuild = await prisma.itemOnGuild.delete({
     *   where: {
     *     // ... filter to delete one ItemOnGuild
     *   }
     * })
     * 
     */
    delete<T extends ItemOnGuildDeleteArgs>(args: SelectSubset<T, ItemOnGuildDeleteArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemOnGuild.
     * @param {ItemOnGuildUpdateArgs} args - Arguments to update one ItemOnGuild.
     * @example
     * // Update one ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemOnGuildUpdateArgs>(args: SelectSubset<T, ItemOnGuildUpdateArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemOnGuilds.
     * @param {ItemOnGuildDeleteManyArgs} args - Arguments to filter ItemOnGuilds to delete.
     * @example
     * // Delete a few ItemOnGuilds
     * const { count } = await prisma.itemOnGuild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemOnGuildDeleteManyArgs>(args?: SelectSubset<T, ItemOnGuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOnGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemOnGuilds
     * const itemOnGuild = await prisma.itemOnGuild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemOnGuildUpdateManyArgs>(args: SelectSubset<T, ItemOnGuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOnGuilds and returns the data updated in the database.
     * @param {ItemOnGuildUpdateManyAndReturnArgs} args - Arguments to update many ItemOnGuilds.
     * @example
     * // Update many ItemOnGuilds
     * const itemOnGuild = await prisma.itemOnGuild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemOnGuilds and only return the `guildId`
     * const itemOnGuildWithGuildIdOnly = await prisma.itemOnGuild.updateManyAndReturn({
     *   select: { guildId: true },
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
    updateManyAndReturn<T extends ItemOnGuildUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemOnGuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemOnGuild.
     * @param {ItemOnGuildUpsertArgs} args - Arguments to update or create a ItemOnGuild.
     * @example
     * // Update or create a ItemOnGuild
     * const itemOnGuild = await prisma.itemOnGuild.upsert({
     *   create: {
     *     // ... data to create a ItemOnGuild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemOnGuild we want to update
     *   }
     * })
     */
    upsert<T extends ItemOnGuildUpsertArgs>(args: SelectSubset<T, ItemOnGuildUpsertArgs<ExtArgs>>): Prisma__ItemOnGuildClient<$Result.GetResult<Prisma.$ItemOnGuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemOnGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildCountArgs} args - Arguments to filter ItemOnGuilds to count.
     * @example
     * // Count the number of ItemOnGuilds
     * const count = await prisma.itemOnGuild.count({
     *   where: {
     *     // ... the filter for the ItemOnGuilds we want to count
     *   }
     * })
    **/
    count<T extends ItemOnGuildCountArgs>(
      args?: Subset<T, ItemOnGuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemOnGuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemOnGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemOnGuildAggregateArgs>(args: Subset<T, ItemOnGuildAggregateArgs>): Prisma.PrismaPromise<GetItemOnGuildAggregateType<T>>

    /**
     * Group by ItemOnGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOnGuildGroupByArgs} args - Group by arguments.
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
      T extends ItemOnGuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemOnGuildGroupByArgs['orderBy'] }
        : { orderBy?: ItemOnGuildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemOnGuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemOnGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemOnGuild model
   */
  readonly fields: ItemOnGuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemOnGuild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemOnGuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemOnGuild model
   */
  interface ItemOnGuildFieldRefs {
    readonly guildId: FieldRef<"ItemOnGuild", 'String'>
    readonly itemId: FieldRef<"ItemOnGuild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemOnGuild findUnique
   */
  export type ItemOnGuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnGuild to fetch.
     */
    where: ItemOnGuildWhereUniqueInput
  }

  /**
   * ItemOnGuild findUniqueOrThrow
   */
  export type ItemOnGuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnGuild to fetch.
     */
    where: ItemOnGuildWhereUniqueInput
  }

  /**
   * ItemOnGuild findFirst
   */
  export type ItemOnGuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnGuild to fetch.
     */
    where?: ItemOnGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnGuilds to fetch.
     */
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOnGuilds.
     */
    cursor?: ItemOnGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOnGuilds.
     */
    distinct?: ItemOnGuildScalarFieldEnum | ItemOnGuildScalarFieldEnum[]
  }

  /**
   * ItemOnGuild findFirstOrThrow
   */
  export type ItemOnGuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnGuild to fetch.
     */
    where?: ItemOnGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnGuilds to fetch.
     */
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOnGuilds.
     */
    cursor?: ItemOnGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOnGuilds.
     */
    distinct?: ItemOnGuildScalarFieldEnum | ItemOnGuildScalarFieldEnum[]
  }

  /**
   * ItemOnGuild findMany
   */
  export type ItemOnGuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter, which ItemOnGuilds to fetch.
     */
    where?: ItemOnGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOnGuilds to fetch.
     */
    orderBy?: ItemOnGuildOrderByWithRelationInput | ItemOnGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemOnGuilds.
     */
    cursor?: ItemOnGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOnGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOnGuilds.
     */
    skip?: number
    distinct?: ItemOnGuildScalarFieldEnum | ItemOnGuildScalarFieldEnum[]
  }

  /**
   * ItemOnGuild create
   */
  export type ItemOnGuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemOnGuild.
     */
    data: XOR<ItemOnGuildCreateInput, ItemOnGuildUncheckedCreateInput>
  }

  /**
   * ItemOnGuild createMany
   */
  export type ItemOnGuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemOnGuilds.
     */
    data: ItemOnGuildCreateManyInput | ItemOnGuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemOnGuild createManyAndReturn
   */
  export type ItemOnGuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * The data used to create many ItemOnGuilds.
     */
    data: ItemOnGuildCreateManyInput | ItemOnGuildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOnGuild update
   */
  export type ItemOnGuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemOnGuild.
     */
    data: XOR<ItemOnGuildUpdateInput, ItemOnGuildUncheckedUpdateInput>
    /**
     * Choose, which ItemOnGuild to update.
     */
    where: ItemOnGuildWhereUniqueInput
  }

  /**
   * ItemOnGuild updateMany
   */
  export type ItemOnGuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemOnGuilds.
     */
    data: XOR<ItemOnGuildUpdateManyMutationInput, ItemOnGuildUncheckedUpdateManyInput>
    /**
     * Filter which ItemOnGuilds to update
     */
    where?: ItemOnGuildWhereInput
    /**
     * Limit how many ItemOnGuilds to update.
     */
    limit?: number
  }

  /**
   * ItemOnGuild updateManyAndReturn
   */
  export type ItemOnGuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * The data used to update ItemOnGuilds.
     */
    data: XOR<ItemOnGuildUpdateManyMutationInput, ItemOnGuildUncheckedUpdateManyInput>
    /**
     * Filter which ItemOnGuilds to update
     */
    where?: ItemOnGuildWhereInput
    /**
     * Limit how many ItemOnGuilds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOnGuild upsert
   */
  export type ItemOnGuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemOnGuild to update in case it exists.
     */
    where: ItemOnGuildWhereUniqueInput
    /**
     * In case the ItemOnGuild found by the `where` argument doesn't exist, create a new ItemOnGuild with this data.
     */
    create: XOR<ItemOnGuildCreateInput, ItemOnGuildUncheckedCreateInput>
    /**
     * In case the ItemOnGuild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemOnGuildUpdateInput, ItemOnGuildUncheckedUpdateInput>
  }

  /**
   * ItemOnGuild delete
   */
  export type ItemOnGuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
    /**
     * Filter which ItemOnGuild to delete.
     */
    where: ItemOnGuildWhereUniqueInput
  }

  /**
   * ItemOnGuild deleteMany
   */
  export type ItemOnGuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOnGuilds to delete
     */
    where?: ItemOnGuildWhereInput
    /**
     * Limit how many ItemOnGuilds to delete.
     */
    limit?: number
  }

  /**
   * ItemOnGuild without action
   */
  export type ItemOnGuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOnGuild
     */
    select?: ItemOnGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOnGuild
     */
    omit?: ItemOnGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOnGuildInclude<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    adventurerId: 'adventurerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    reward: 'reward',
    status: 'status',
    estimatedDuration: 'estimatedDuration',
    startDate: 'startDate',
    endDate: 'endDate',
    requiredProfiles: 'requiredProfiles',
    xpRequired: 'xpRequired',
    createdBy: 'createdBy'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const QuestAssignmentScalarFieldEnum: {
    id: 'id',
    adventurerId: 'adventurerId',
    questId: 'questId'
  };

  export type QuestAssignmentScalarFieldEnum = (typeof QuestAssignmentScalarFieldEnum)[keyof typeof QuestAssignmentScalarFieldEnum]


  export const AdventurerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    xp: 'xp',
    guildId: 'guildId'
  };

  export type AdventurerScalarFieldEnum = (typeof AdventurerScalarFieldEnum)[keyof typeof AdventurerScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    durability: 'durability',
    price: 'price',
    type: 'type',
    stats: 'stats',
    rarity: 'rarity',
    profiles: 'profiles'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bankId: 'bankId'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const BankScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    guildId: 'guildId'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    name: 'name',
    bankId: 'bankId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ItemOnQuestAssignmentScalarFieldEnum: {
    questAssignmentId: 'questAssignmentId',
    itemId: 'itemId'
  };

  export type ItemOnQuestAssignmentScalarFieldEnum = (typeof ItemOnQuestAssignmentScalarFieldEnum)[keyof typeof ItemOnQuestAssignmentScalarFieldEnum]


  export const ItemOnGuildScalarFieldEnum: {
    guildId: 'guildId',
    itemId: 'itemId'
  };

  export type ItemOnGuildScalarFieldEnum = (typeof ItemOnGuildScalarFieldEnum)[keyof typeof ItemOnGuildScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'QuestStatus'
   */
  export type EnumQuestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestStatus'>
    


  /**
   * Reference to a field of type 'QuestStatus[]'
   */
  export type ListEnumQuestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestStatus[]'>
    


  /**
   * Reference to a field of type 'AdventurerType[]'
   */
  export type ListEnumAdventurerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdventurerType[]'>
    


  /**
   * Reference to a field of type 'AdventurerType'
   */
  export type EnumAdventurerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdventurerType'>
    


  /**
   * Reference to a field of type 'AdventurerStatus'
   */
  export type EnumAdventurerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdventurerStatus'>
    


  /**
   * Reference to a field of type 'AdventurerStatus[]'
   */
  export type ListEnumAdventurerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdventurerStatus[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'ItemRarity'
   */
  export type EnumItemRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemRarity'>
    


  /**
   * Reference to a field of type 'ItemRarity[]'
   */
  export type ListEnumItemRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemRarity[]'>
    


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
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    adventurerId?: StringNullableFilter<"User"> | string | null
    adventurer?: XOR<AdventurerNullableScalarRelationFilter, AdventurerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    adventurerId?: SortOrderInput | SortOrder
    adventurer?: AdventurerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    adventurerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    adventurer?: XOR<AdventurerNullableScalarRelationFilter, AdventurerWhereInput> | null
  }, "id" | "username" | "adventurerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    adventurerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    adventurerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    deadline?: DateTimeFilter<"Quest"> | Date | string
    reward?: IntFilter<"Quest"> | number
    status?: EnumQuestStatusFilter<"Quest"> | $Enums.QuestStatus
    estimatedDuration?: IntFilter<"Quest"> | number
    startDate?: DateTimeNullableFilter<"Quest"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Quest"> | Date | string | null
    requiredProfiles?: EnumAdventurerTypeNullableListFilter<"Quest">
    xpRequired?: IntNullableFilter<"Quest"> | number | null
    createdBy?: StringFilter<"Quest"> | string
    assignments?: QuestAssignmentListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    estimatedDuration?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    requiredProfiles?: SortOrder
    xpRequired?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    assignments?: QuestAssignmentOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    deadline?: DateTimeFilter<"Quest"> | Date | string
    reward?: IntFilter<"Quest"> | number
    status?: EnumQuestStatusFilter<"Quest"> | $Enums.QuestStatus
    estimatedDuration?: IntFilter<"Quest"> | number
    startDate?: DateTimeNullableFilter<"Quest"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Quest"> | Date | string | null
    requiredProfiles?: EnumAdventurerTypeNullableListFilter<"Quest">
    xpRequired?: IntNullableFilter<"Quest"> | number | null
    createdBy?: StringFilter<"Quest"> | string
    assignments?: QuestAssignmentListRelationFilter
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    estimatedDuration?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    requiredProfiles?: SortOrder
    xpRequired?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quest"> | string
    title?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringWithAggregatesFilter<"Quest"> | string
    deadline?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
    reward?: IntWithAggregatesFilter<"Quest"> | number
    status?: EnumQuestStatusWithAggregatesFilter<"Quest"> | $Enums.QuestStatus
    estimatedDuration?: IntWithAggregatesFilter<"Quest"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"Quest"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Quest"> | Date | string | null
    requiredProfiles?: EnumAdventurerTypeNullableListFilter<"Quest">
    xpRequired?: IntNullableWithAggregatesFilter<"Quest"> | number | null
    createdBy?: StringWithAggregatesFilter<"Quest"> | string
  }

  export type QuestAssignmentWhereInput = {
    AND?: QuestAssignmentWhereInput | QuestAssignmentWhereInput[]
    OR?: QuestAssignmentWhereInput[]
    NOT?: QuestAssignmentWhereInput | QuestAssignmentWhereInput[]
    id?: StringFilter<"QuestAssignment"> | string
    adventurerId?: StringFilter<"QuestAssignment"> | string
    questId?: StringFilter<"QuestAssignment"> | string
    items?: ItemOnQuestAssignmentListRelationFilter
    adventurer?: XOR<AdventurerScalarRelationFilter, AdventurerWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }

  export type QuestAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    adventurerId?: SortOrder
    questId?: SortOrder
    items?: ItemOnQuestAssignmentOrderByRelationAggregateInput
    adventurer?: AdventurerOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
  }

  export type QuestAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestAssignmentWhereInput | QuestAssignmentWhereInput[]
    OR?: QuestAssignmentWhereInput[]
    NOT?: QuestAssignmentWhereInput | QuestAssignmentWhereInput[]
    adventurerId?: StringFilter<"QuestAssignment"> | string
    questId?: StringFilter<"QuestAssignment"> | string
    items?: ItemOnQuestAssignmentListRelationFilter
    adventurer?: XOR<AdventurerScalarRelationFilter, AdventurerWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }, "id">

  export type QuestAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    adventurerId?: SortOrder
    questId?: SortOrder
    _count?: QuestAssignmentCountOrderByAggregateInput
    _max?: QuestAssignmentMaxOrderByAggregateInput
    _min?: QuestAssignmentMinOrderByAggregateInput
  }

  export type QuestAssignmentScalarWhereWithAggregatesInput = {
    AND?: QuestAssignmentScalarWhereWithAggregatesInput | QuestAssignmentScalarWhereWithAggregatesInput[]
    OR?: QuestAssignmentScalarWhereWithAggregatesInput[]
    NOT?: QuestAssignmentScalarWhereWithAggregatesInput | QuestAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestAssignment"> | string
    adventurerId?: StringWithAggregatesFilter<"QuestAssignment"> | string
    questId?: StringWithAggregatesFilter<"QuestAssignment"> | string
  }

  export type AdventurerWhereInput = {
    AND?: AdventurerWhereInput | AdventurerWhereInput[]
    OR?: AdventurerWhereInput[]
    NOT?: AdventurerWhereInput | AdventurerWhereInput[]
    id?: StringFilter<"Adventurer"> | string
    name?: StringFilter<"Adventurer"> | string
    type?: EnumAdventurerTypeFilter<"Adventurer"> | $Enums.AdventurerType
    status?: EnumAdventurerStatusFilter<"Adventurer"> | $Enums.AdventurerStatus
    xp?: IntFilter<"Adventurer"> | number
    guildId?: StringFilter<"Adventurer"> | string
    assignments?: QuestAssignmentListRelationFilter
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AdventurerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    xp?: SortOrder
    guildId?: SortOrder
    assignments?: QuestAssignmentOrderByRelationAggregateInput
    guild?: GuildOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AdventurerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdventurerWhereInput | AdventurerWhereInput[]
    OR?: AdventurerWhereInput[]
    NOT?: AdventurerWhereInput | AdventurerWhereInput[]
    name?: StringFilter<"Adventurer"> | string
    type?: EnumAdventurerTypeFilter<"Adventurer"> | $Enums.AdventurerType
    status?: EnumAdventurerStatusFilter<"Adventurer"> | $Enums.AdventurerStatus
    xp?: IntFilter<"Adventurer"> | number
    guildId?: StringFilter<"Adventurer"> | string
    assignments?: QuestAssignmentListRelationFilter
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AdventurerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    xp?: SortOrder
    guildId?: SortOrder
    _count?: AdventurerCountOrderByAggregateInput
    _avg?: AdventurerAvgOrderByAggregateInput
    _max?: AdventurerMaxOrderByAggregateInput
    _min?: AdventurerMinOrderByAggregateInput
    _sum?: AdventurerSumOrderByAggregateInput
  }

  export type AdventurerScalarWhereWithAggregatesInput = {
    AND?: AdventurerScalarWhereWithAggregatesInput | AdventurerScalarWhereWithAggregatesInput[]
    OR?: AdventurerScalarWhereWithAggregatesInput[]
    NOT?: AdventurerScalarWhereWithAggregatesInput | AdventurerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adventurer"> | string
    name?: StringWithAggregatesFilter<"Adventurer"> | string
    type?: EnumAdventurerTypeWithAggregatesFilter<"Adventurer"> | $Enums.AdventurerType
    status?: EnumAdventurerStatusWithAggregatesFilter<"Adventurer"> | $Enums.AdventurerStatus
    xp?: IntWithAggregatesFilter<"Adventurer"> | number
    guildId?: StringWithAggregatesFilter<"Adventurer"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    durability?: IntFilter<"Item"> | number
    price?: IntFilter<"Item"> | number
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    stats?: StringNullableFilter<"Item"> | string | null
    rarity?: EnumItemRarityFilter<"Item"> | $Enums.ItemRarity
    profiles?: EnumAdventurerTypeNullableListFilter<"Item">
    questAssignments?: ItemOnQuestAssignmentListRelationFilter
    guilds?: ItemOnGuildListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    price?: SortOrder
    type?: SortOrder
    stats?: SortOrderInput | SortOrder
    rarity?: SortOrder
    profiles?: SortOrder
    questAssignments?: ItemOnQuestAssignmentOrderByRelationAggregateInput
    guilds?: ItemOnGuildOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    durability?: IntFilter<"Item"> | number
    price?: IntFilter<"Item"> | number
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    stats?: StringNullableFilter<"Item"> | string | null
    rarity?: EnumItemRarityFilter<"Item"> | $Enums.ItemRarity
    profiles?: EnumAdventurerTypeNullableListFilter<"Item">
    questAssignments?: ItemOnQuestAssignmentListRelationFilter
    guilds?: ItemOnGuildListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    price?: SortOrder
    type?: SortOrder
    stats?: SortOrderInput | SortOrder
    rarity?: SortOrder
    profiles?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    durability?: IntWithAggregatesFilter<"Item"> | number
    price?: IntWithAggregatesFilter<"Item"> | number
    type?: EnumItemTypeWithAggregatesFilter<"Item"> | $Enums.ItemType
    stats?: StringNullableWithAggregatesFilter<"Item"> | string | null
    rarity?: EnumItemRarityWithAggregatesFilter<"Item"> | $Enums.ItemRarity
    profiles?: EnumAdventurerTypeNullableListFilter<"Item">
  }

  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    id?: StringFilter<"Guild"> | string
    name?: StringFilter<"Guild"> | string
    bankId?: StringFilter<"Guild"> | string
    adventurers?: AdventurerListRelationFilter
    bank?: XOR<BankNullableScalarRelationFilter, BankWhereInput> | null
    inventory?: ItemOnGuildListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
    adventurers?: AdventurerOrderByRelationAggregateInput
    bank?: BankOrderByWithRelationInput
    inventory?: ItemOnGuildOrderByRelationAggregateInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bankId?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    name?: StringFilter<"Guild"> | string
    adventurers?: AdventurerListRelationFilter
    bank?: XOR<BankNullableScalarRelationFilter, BankWhereInput> | null
    inventory?: ItemOnGuildListRelationFilter
  }, "id" | "bankId">

  export type GuildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guild"> | string
    name?: StringWithAggregatesFilter<"Guild"> | string
    bankId?: StringWithAggregatesFilter<"Guild"> | string
  }

  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: StringFilter<"Bank"> | string
    amount?: IntFilter<"Bank"> | number
    guildId?: StringFilter<"Bank"> | string
    history?: TransactionListRelationFilter
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    guildId?: SortOrder
    history?: TransactionOrderByRelationAggregateInput
    guild?: GuildOrderByWithRelationInput
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    amount?: IntFilter<"Bank"> | number
    history?: TransactionListRelationFilter
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
  }, "id" | "guildId">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    guildId?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _avg?: BankAvgOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
    _sum?: BankSumOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bank"> | string
    amount?: IntWithAggregatesFilter<"Bank"> | number
    guildId?: StringWithAggregatesFilter<"Bank"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    name?: StringFilter<"Transaction"> | string
    bankId?: StringFilter<"Transaction"> | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
    bank?: BankOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    name?: StringFilter<"Transaction"> | string
    bankId?: StringFilter<"Transaction"> | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    name?: StringWithAggregatesFilter<"Transaction"> | string
    bankId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type ItemOnQuestAssignmentWhereInput = {
    AND?: ItemOnQuestAssignmentWhereInput | ItemOnQuestAssignmentWhereInput[]
    OR?: ItemOnQuestAssignmentWhereInput[]
    NOT?: ItemOnQuestAssignmentWhereInput | ItemOnQuestAssignmentWhereInput[]
    questAssignmentId?: StringFilter<"ItemOnQuestAssignment"> | string
    itemId?: StringFilter<"ItemOnQuestAssignment"> | string
    questAssignment?: XOR<QuestAssignmentScalarRelationFilter, QuestAssignmentWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemOnQuestAssignmentOrderByWithRelationInput = {
    questAssignmentId?: SortOrder
    itemId?: SortOrder
    questAssignment?: QuestAssignmentOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ItemOnQuestAssignmentWhereUniqueInput = Prisma.AtLeast<{
    questAssignmentId_itemId?: ItemOnQuestAssignmentQuestAssignmentIdItemIdCompoundUniqueInput
    AND?: ItemOnQuestAssignmentWhereInput | ItemOnQuestAssignmentWhereInput[]
    OR?: ItemOnQuestAssignmentWhereInput[]
    NOT?: ItemOnQuestAssignmentWhereInput | ItemOnQuestAssignmentWhereInput[]
    questAssignmentId?: StringFilter<"ItemOnQuestAssignment"> | string
    itemId?: StringFilter<"ItemOnQuestAssignment"> | string
    questAssignment?: XOR<QuestAssignmentScalarRelationFilter, QuestAssignmentWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "questAssignmentId_itemId">

  export type ItemOnQuestAssignmentOrderByWithAggregationInput = {
    questAssignmentId?: SortOrder
    itemId?: SortOrder
    _count?: ItemOnQuestAssignmentCountOrderByAggregateInput
    _max?: ItemOnQuestAssignmentMaxOrderByAggregateInput
    _min?: ItemOnQuestAssignmentMinOrderByAggregateInput
  }

  export type ItemOnQuestAssignmentScalarWhereWithAggregatesInput = {
    AND?: ItemOnQuestAssignmentScalarWhereWithAggregatesInput | ItemOnQuestAssignmentScalarWhereWithAggregatesInput[]
    OR?: ItemOnQuestAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ItemOnQuestAssignmentScalarWhereWithAggregatesInput | ItemOnQuestAssignmentScalarWhereWithAggregatesInput[]
    questAssignmentId?: StringWithAggregatesFilter<"ItemOnQuestAssignment"> | string
    itemId?: StringWithAggregatesFilter<"ItemOnQuestAssignment"> | string
  }

  export type ItemOnGuildWhereInput = {
    AND?: ItemOnGuildWhereInput | ItemOnGuildWhereInput[]
    OR?: ItemOnGuildWhereInput[]
    NOT?: ItemOnGuildWhereInput | ItemOnGuildWhereInput[]
    guildId?: StringFilter<"ItemOnGuild"> | string
    itemId?: StringFilter<"ItemOnGuild"> | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemOnGuildOrderByWithRelationInput = {
    guildId?: SortOrder
    itemId?: SortOrder
    guild?: GuildOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ItemOnGuildWhereUniqueInput = Prisma.AtLeast<{
    guildId_itemId?: ItemOnGuildGuildIdItemIdCompoundUniqueInput
    AND?: ItemOnGuildWhereInput | ItemOnGuildWhereInput[]
    OR?: ItemOnGuildWhereInput[]
    NOT?: ItemOnGuildWhereInput | ItemOnGuildWhereInput[]
    guildId?: StringFilter<"ItemOnGuild"> | string
    itemId?: StringFilter<"ItemOnGuild"> | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "guildId_itemId">

  export type ItemOnGuildOrderByWithAggregationInput = {
    guildId?: SortOrder
    itemId?: SortOrder
    _count?: ItemOnGuildCountOrderByAggregateInput
    _max?: ItemOnGuildMaxOrderByAggregateInput
    _min?: ItemOnGuildMinOrderByAggregateInput
  }

  export type ItemOnGuildScalarWhereWithAggregatesInput = {
    AND?: ItemOnGuildScalarWhereWithAggregatesInput | ItemOnGuildScalarWhereWithAggregatesInput[]
    OR?: ItemOnGuildScalarWhereWithAggregatesInput[]
    NOT?: ItemOnGuildScalarWhereWithAggregatesInput | ItemOnGuildScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"ItemOnGuild"> | string
    itemId?: StringWithAggregatesFilter<"ItemOnGuild"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    adventurer?: AdventurerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    adventurerId?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adventurer?: AdventurerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adventurerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    adventurerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adventurerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestCreateInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    reward: number
    status?: $Enums.QuestStatus
    estimatedDuration: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    requiredProfiles?: QuestCreaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: number | null
    createdBy: string
    assignments?: QuestAssignmentCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    reward: number
    status?: $Enums.QuestStatus
    estimatedDuration: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    requiredProfiles?: QuestCreaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: number | null
    createdBy: string
    assignments?: QuestAssignmentUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    assignments?: QuestAssignmentUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    assignments?: QuestAssignmentUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    reward: number
    status?: $Enums.QuestStatus
    estimatedDuration: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    requiredProfiles?: QuestCreaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: number | null
    createdBy: string
  }

  export type QuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type QuestAssignmentCreateInput = {
    id?: string
    items?: ItemOnQuestAssignmentCreateNestedManyWithoutQuestAssignmentInput
    adventurer: AdventurerCreateNestedOneWithoutAssignmentsInput
    quest: QuestCreateNestedOneWithoutAssignmentsInput
  }

  export type QuestAssignmentUncheckedCreateInput = {
    id?: string
    adventurerId: string
    questId: string
    items?: ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutQuestAssignmentInput
  }

  export type QuestAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUpdateManyWithoutQuestAssignmentNestedInput
    adventurer?: AdventurerUpdateOneRequiredWithoutAssignmentsNestedInput
    quest?: QuestUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type QuestAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurerId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentNestedInput
  }

  export type QuestAssignmentCreateManyInput = {
    id?: string
    adventurerId: string
    questId: string
  }

  export type QuestAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuestAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurerId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
  }

  export type AdventurerCreateInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    assignments?: QuestAssignmentCreateNestedManyWithoutAdventurerInput
    guild: GuildCreateNestedOneWithoutAdventurersInput
    user?: UserCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    guildId: string
    assignments?: QuestAssignmentUncheckedCreateNestedManyWithoutAdventurerInput
    user?: UserUncheckedCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    assignments?: QuestAssignmentUpdateManyWithoutAdventurerNestedInput
    guild?: GuildUpdateOneRequiredWithoutAdventurersNestedInput
    user?: UserUpdateOneWithoutAdventurerNestedInput
  }

  export type AdventurerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    assignments?: QuestAssignmentUncheckedUpdateManyWithoutAdventurerNestedInput
    user?: UserUncheckedUpdateOneWithoutAdventurerNestedInput
  }

  export type AdventurerCreateManyInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    guildId: string
  }

  export type AdventurerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type AdventurerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentCreateNestedManyWithoutItemInput
    guilds?: ItemOnGuildCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutItemInput
    guilds?: ItemOnGuildUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUpdateManyWithoutItemNestedInput
    guilds?: ItemOnGuildUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUncheckedUpdateManyWithoutItemNestedInput
    guilds?: ItemOnGuildUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
  }

  export type GuildCreateInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerCreateNestedManyWithoutGuildInput
    bank?: BankCreateNestedOneWithoutGuildInput
    inventory?: ItemOnGuildCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerUncheckedCreateNestedManyWithoutGuildInput
    bank?: BankUncheckedCreateNestedOneWithoutGuildInput
    inventory?: ItemOnGuildUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUpdateManyWithoutGuildNestedInput
    bank?: BankUpdateOneWithoutGuildNestedInput
    inventory?: ItemOnGuildUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUncheckedUpdateManyWithoutGuildNestedInput
    bank?: BankUncheckedUpdateOneWithoutGuildNestedInput
    inventory?: ItemOnGuildUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    id?: string
    name: string
    bankId: string
  }

  export type GuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type BankCreateInput = {
    id?: string
    amount: number
    history?: TransactionCreateNestedManyWithoutBankInput
    guild: GuildCreateNestedOneWithoutBankInput
  }

  export type BankUncheckedCreateInput = {
    id?: string
    amount: number
    guildId: string
    history?: TransactionUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    history?: TransactionUpdateManyWithoutBankNestedInput
    guild?: GuildUpdateOneRequiredWithoutBankNestedInput
  }

  export type BankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    history?: TransactionUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankCreateManyInput = {
    id?: string
    amount: number
    guildId: string
  }

  export type BankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
    bank: BankCreateNestedOneWithoutHistoryInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
    bankId: string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: BankUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
    bankId: string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentCreateInput = {
    questAssignment: QuestAssignmentCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutQuestAssignmentsInput
  }

  export type ItemOnQuestAssignmentUncheckedCreateInput = {
    questAssignmentId: string
    itemId: string
  }

  export type ItemOnQuestAssignmentUpdateInput = {
    questAssignment?: QuestAssignmentUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutQuestAssignmentsNestedInput
  }

  export type ItemOnQuestAssignmentUncheckedUpdateInput = {
    questAssignmentId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentCreateManyInput = {
    questAssignmentId: string
    itemId: string
  }

  export type ItemOnQuestAssignmentUpdateManyMutationInput = {

  }

  export type ItemOnQuestAssignmentUncheckedUpdateManyInput = {
    questAssignmentId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnGuildCreateInput = {
    guild: GuildCreateNestedOneWithoutInventoryInput
    item: ItemCreateNestedOneWithoutGuildsInput
  }

  export type ItemOnGuildUncheckedCreateInput = {
    guildId: string
    itemId: string
  }

  export type ItemOnGuildUpdateInput = {
    guild?: GuildUpdateOneRequiredWithoutInventoryNestedInput
    item?: ItemUpdateOneRequiredWithoutGuildsNestedInput
  }

  export type ItemOnGuildUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnGuildCreateManyInput = {
    guildId: string
    itemId: string
  }

  export type ItemOnGuildUpdateManyMutationInput = {

  }

  export type ItemOnGuildUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
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

  export type AdventurerNullableScalarRelationFilter = {
    is?: AdventurerWhereInput | null
    isNot?: AdventurerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    adventurerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    adventurerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    adventurerId?: SortOrder
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

  export type EnumQuestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusFilter<$PrismaModel> | $Enums.QuestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAdventurerTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.AdventurerType | EnumAdventurerTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuestAssignmentListRelationFilter = {
    every?: QuestAssignmentWhereInput
    some?: QuestAssignmentWhereInput
    none?: QuestAssignmentWhereInput
  }

  export type QuestAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    estimatedDuration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    requiredProfiles?: SortOrder
    xpRequired?: SortOrder
    createdBy?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    reward?: SortOrder
    estimatedDuration?: SortOrder
    xpRequired?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    estimatedDuration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    xpRequired?: SortOrder
    createdBy?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    estimatedDuration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    xpRequired?: SortOrder
    createdBy?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    reward?: SortOrder
    estimatedDuration?: SortOrder
    xpRequired?: SortOrder
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

  export type EnumQuestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ItemOnQuestAssignmentListRelationFilter = {
    every?: ItemOnQuestAssignmentWhereInput
    some?: ItemOnQuestAssignmentWhereInput
    none?: ItemOnQuestAssignmentWhereInput
  }

  export type AdventurerScalarRelationFilter = {
    is?: AdventurerWhereInput
    isNot?: AdventurerWhereInput
  }

  export type QuestScalarRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type ItemOnQuestAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    adventurerId?: SortOrder
    questId?: SortOrder
  }

  export type QuestAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    adventurerId?: SortOrder
    questId?: SortOrder
  }

  export type QuestAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    adventurerId?: SortOrder
    questId?: SortOrder
  }

  export type EnumAdventurerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerType | EnumAdventurerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerTypeFilter<$PrismaModel> | $Enums.AdventurerType
  }

  export type EnumAdventurerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerStatus | EnumAdventurerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerStatusFilter<$PrismaModel> | $Enums.AdventurerStatus
  }

  export type GuildScalarRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdventurerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    xp?: SortOrder
    guildId?: SortOrder
  }

  export type AdventurerAvgOrderByAggregateInput = {
    xp?: SortOrder
  }

  export type AdventurerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    xp?: SortOrder
    guildId?: SortOrder
  }

  export type AdventurerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    xp?: SortOrder
    guildId?: SortOrder
  }

  export type AdventurerSumOrderByAggregateInput = {
    xp?: SortOrder
  }

  export type EnumAdventurerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerType | EnumAdventurerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdventurerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdventurerTypeFilter<$PrismaModel>
    _max?: NestedEnumAdventurerTypeFilter<$PrismaModel>
  }

  export type EnumAdventurerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerStatus | EnumAdventurerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdventurerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdventurerStatusFilter<$PrismaModel>
    _max?: NestedEnumAdventurerStatusFilter<$PrismaModel>
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type EnumItemRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemRarity | EnumItemRarityFieldRefInput<$PrismaModel>
    in?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumItemRarityFilter<$PrismaModel> | $Enums.ItemRarity
  }

  export type ItemOnGuildListRelationFilter = {
    every?: ItemOnGuildWhereInput
    some?: ItemOnGuildWhereInput
    none?: ItemOnGuildWhereInput
  }

  export type ItemOnGuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    price?: SortOrder
    type?: SortOrder
    stats?: SortOrder
    rarity?: SortOrder
    profiles?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    durability?: SortOrder
    price?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    price?: SortOrder
    type?: SortOrder
    stats?: SortOrder
    rarity?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    price?: SortOrder
    type?: SortOrder
    stats?: SortOrder
    rarity?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    durability?: SortOrder
    price?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type EnumItemRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemRarity | EnumItemRarityFieldRefInput<$PrismaModel>
    in?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumItemRarityWithAggregatesFilter<$PrismaModel> | $Enums.ItemRarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemRarityFilter<$PrismaModel>
    _max?: NestedEnumItemRarityFilter<$PrismaModel>
  }

  export type AdventurerListRelationFilter = {
    every?: AdventurerWhereInput
    some?: AdventurerWhereInput
    none?: AdventurerWhereInput
  }

  export type BankNullableScalarRelationFilter = {
    is?: BankWhereInput | null
    isNot?: BankWhereInput | null
  }

  export type AdventurerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    guildId?: SortOrder
  }

  export type BankAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    guildId?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    guildId?: SortOrder
  }

  export type BankSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BankScalarRelationFilter = {
    is?: BankWhereInput
    isNot?: BankWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    name?: SortOrder
    bankId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type QuestAssignmentScalarRelationFilter = {
    is?: QuestAssignmentWhereInput
    isNot?: QuestAssignmentWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemOnQuestAssignmentQuestAssignmentIdItemIdCompoundUniqueInput = {
    questAssignmentId: string
    itemId: string
  }

  export type ItemOnQuestAssignmentCountOrderByAggregateInput = {
    questAssignmentId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemOnQuestAssignmentMaxOrderByAggregateInput = {
    questAssignmentId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemOnQuestAssignmentMinOrderByAggregateInput = {
    questAssignmentId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemOnGuildGuildIdItemIdCompoundUniqueInput = {
    guildId: string
    itemId: string
  }

  export type ItemOnGuildCountOrderByAggregateInput = {
    guildId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemOnGuildMaxOrderByAggregateInput = {
    guildId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemOnGuildMinOrderByAggregateInput = {
    guildId?: SortOrder
    itemId?: SortOrder
  }

  export type AdventurerCreateNestedOneWithoutUserInput = {
    create?: XOR<AdventurerCreateWithoutUserInput, AdventurerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdventurerCreateOrConnectWithoutUserInput
    connect?: AdventurerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdventurerUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdventurerCreateWithoutUserInput, AdventurerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdventurerCreateOrConnectWithoutUserInput
    upsert?: AdventurerUpsertWithoutUserInput
    disconnect?: AdventurerWhereInput | boolean
    delete?: AdventurerWhereInput | boolean
    connect?: AdventurerWhereUniqueInput
    update?: XOR<XOR<AdventurerUpdateToOneWithWhereWithoutUserInput, AdventurerUpdateWithoutUserInput>, AdventurerUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuestCreaterequiredProfilesInput = {
    set: $Enums.AdventurerType[]
  }

  export type QuestAssignmentCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput> | QuestAssignmentCreateWithoutQuestInput[] | QuestAssignmentUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutQuestInput | QuestAssignmentCreateOrConnectWithoutQuestInput[]
    createMany?: QuestAssignmentCreateManyQuestInputEnvelope
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
  }

  export type QuestAssignmentUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput> | QuestAssignmentCreateWithoutQuestInput[] | QuestAssignmentUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutQuestInput | QuestAssignmentCreateOrConnectWithoutQuestInput[]
    createMany?: QuestAssignmentCreateManyQuestInputEnvelope
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumQuestStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuestUpdaterequiredProfilesInput = {
    set?: $Enums.AdventurerType[]
    push?: $Enums.AdventurerType | $Enums.AdventurerType[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestAssignmentUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput> | QuestAssignmentCreateWithoutQuestInput[] | QuestAssignmentUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutQuestInput | QuestAssignmentCreateOrConnectWithoutQuestInput[]
    upsert?: QuestAssignmentUpsertWithWhereUniqueWithoutQuestInput | QuestAssignmentUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestAssignmentCreateManyQuestInputEnvelope
    set?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    disconnect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    delete?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    update?: QuestAssignmentUpdateWithWhereUniqueWithoutQuestInput | QuestAssignmentUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestAssignmentUpdateManyWithWhereWithoutQuestInput | QuestAssignmentUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
  }

  export type QuestAssignmentUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput> | QuestAssignmentCreateWithoutQuestInput[] | QuestAssignmentUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutQuestInput | QuestAssignmentCreateOrConnectWithoutQuestInput[]
    upsert?: QuestAssignmentUpsertWithWhereUniqueWithoutQuestInput | QuestAssignmentUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestAssignmentCreateManyQuestInputEnvelope
    set?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    disconnect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    delete?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    update?: QuestAssignmentUpdateWithWhereUniqueWithoutQuestInput | QuestAssignmentUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestAssignmentUpdateManyWithWhereWithoutQuestInput | QuestAssignmentUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
  }

  export type ItemOnQuestAssignmentCreateNestedManyWithoutQuestAssignmentInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput> | ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput | ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput[]
    createMany?: ItemOnQuestAssignmentCreateManyQuestAssignmentInputEnvelope
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
  }

  export type AdventurerCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<AdventurerCreateWithoutAssignmentsInput, AdventurerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AdventurerCreateOrConnectWithoutAssignmentsInput
    connect?: AdventurerWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<QuestCreateWithoutAssignmentsInput, QuestUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutAssignmentsInput
    connect?: QuestWhereUniqueInput
  }

  export type ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutQuestAssignmentInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput> | ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput | ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput[]
    createMany?: ItemOnQuestAssignmentCreateManyQuestAssignmentInputEnvelope
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
  }

  export type ItemOnQuestAssignmentUpdateManyWithoutQuestAssignmentNestedInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput> | ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput | ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput[]
    upsert?: ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutQuestAssignmentInput[]
    createMany?: ItemOnQuestAssignmentCreateManyQuestAssignmentInputEnvelope
    set?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    disconnect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    delete?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    update?: ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutQuestAssignmentInput[]
    updateMany?: ItemOnQuestAssignmentUpdateManyWithWhereWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpdateManyWithWhereWithoutQuestAssignmentInput[]
    deleteMany?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
  }

  export type AdventurerUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<AdventurerCreateWithoutAssignmentsInput, AdventurerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AdventurerCreateOrConnectWithoutAssignmentsInput
    upsert?: AdventurerUpsertWithoutAssignmentsInput
    connect?: AdventurerWhereUniqueInput
    update?: XOR<XOR<AdventurerUpdateToOneWithWhereWithoutAssignmentsInput, AdventurerUpdateWithoutAssignmentsInput>, AdventurerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type QuestUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<QuestCreateWithoutAssignmentsInput, QuestUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutAssignmentsInput
    upsert?: QuestUpsertWithoutAssignmentsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutAssignmentsInput, QuestUpdateWithoutAssignmentsInput>, QuestUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentNestedInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput> | ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput | ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput[]
    upsert?: ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutQuestAssignmentInput[]
    createMany?: ItemOnQuestAssignmentCreateManyQuestAssignmentInputEnvelope
    set?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    disconnect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    delete?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    update?: ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutQuestAssignmentInput[]
    updateMany?: ItemOnQuestAssignmentUpdateManyWithWhereWithoutQuestAssignmentInput | ItemOnQuestAssignmentUpdateManyWithWhereWithoutQuestAssignmentInput[]
    deleteMany?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
  }

  export type QuestAssignmentCreateNestedManyWithoutAdventurerInput = {
    create?: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput> | QuestAssignmentCreateWithoutAdventurerInput[] | QuestAssignmentUncheckedCreateWithoutAdventurerInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutAdventurerInput | QuestAssignmentCreateOrConnectWithoutAdventurerInput[]
    createMany?: QuestAssignmentCreateManyAdventurerInputEnvelope
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
  }

  export type GuildCreateNestedOneWithoutAdventurersInput = {
    create?: XOR<GuildCreateWithoutAdventurersInput, GuildUncheckedCreateWithoutAdventurersInput>
    connectOrCreate?: GuildCreateOrConnectWithoutAdventurersInput
    connect?: GuildWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdventurerInput = {
    create?: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdventurerInput
    connect?: UserWhereUniqueInput
  }

  export type QuestAssignmentUncheckedCreateNestedManyWithoutAdventurerInput = {
    create?: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput> | QuestAssignmentCreateWithoutAdventurerInput[] | QuestAssignmentUncheckedCreateWithoutAdventurerInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutAdventurerInput | QuestAssignmentCreateOrConnectWithoutAdventurerInput[]
    createMany?: QuestAssignmentCreateManyAdventurerInputEnvelope
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutAdventurerInput = {
    create?: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdventurerInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAdventurerTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdventurerType
  }

  export type EnumAdventurerStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdventurerStatus
  }

  export type QuestAssignmentUpdateManyWithoutAdventurerNestedInput = {
    create?: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput> | QuestAssignmentCreateWithoutAdventurerInput[] | QuestAssignmentUncheckedCreateWithoutAdventurerInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutAdventurerInput | QuestAssignmentCreateOrConnectWithoutAdventurerInput[]
    upsert?: QuestAssignmentUpsertWithWhereUniqueWithoutAdventurerInput | QuestAssignmentUpsertWithWhereUniqueWithoutAdventurerInput[]
    createMany?: QuestAssignmentCreateManyAdventurerInputEnvelope
    set?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    disconnect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    delete?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    update?: QuestAssignmentUpdateWithWhereUniqueWithoutAdventurerInput | QuestAssignmentUpdateWithWhereUniqueWithoutAdventurerInput[]
    updateMany?: QuestAssignmentUpdateManyWithWhereWithoutAdventurerInput | QuestAssignmentUpdateManyWithWhereWithoutAdventurerInput[]
    deleteMany?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
  }

  export type GuildUpdateOneRequiredWithoutAdventurersNestedInput = {
    create?: XOR<GuildCreateWithoutAdventurersInput, GuildUncheckedCreateWithoutAdventurersInput>
    connectOrCreate?: GuildCreateOrConnectWithoutAdventurersInput
    upsert?: GuildUpsertWithoutAdventurersInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutAdventurersInput, GuildUpdateWithoutAdventurersInput>, GuildUncheckedUpdateWithoutAdventurersInput>
  }

  export type UserUpdateOneWithoutAdventurerNestedInput = {
    create?: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdventurerInput
    upsert?: UserUpsertWithoutAdventurerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdventurerInput, UserUpdateWithoutAdventurerInput>, UserUncheckedUpdateWithoutAdventurerInput>
  }

  export type QuestAssignmentUncheckedUpdateManyWithoutAdventurerNestedInput = {
    create?: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput> | QuestAssignmentCreateWithoutAdventurerInput[] | QuestAssignmentUncheckedCreateWithoutAdventurerInput[]
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutAdventurerInput | QuestAssignmentCreateOrConnectWithoutAdventurerInput[]
    upsert?: QuestAssignmentUpsertWithWhereUniqueWithoutAdventurerInput | QuestAssignmentUpsertWithWhereUniqueWithoutAdventurerInput[]
    createMany?: QuestAssignmentCreateManyAdventurerInputEnvelope
    set?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    disconnect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    delete?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    connect?: QuestAssignmentWhereUniqueInput | QuestAssignmentWhereUniqueInput[]
    update?: QuestAssignmentUpdateWithWhereUniqueWithoutAdventurerInput | QuestAssignmentUpdateWithWhereUniqueWithoutAdventurerInput[]
    updateMany?: QuestAssignmentUpdateManyWithWhereWithoutAdventurerInput | QuestAssignmentUpdateManyWithWhereWithoutAdventurerInput[]
    deleteMany?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutAdventurerNestedInput = {
    create?: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdventurerInput
    upsert?: UserUpsertWithoutAdventurerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdventurerInput, UserUpdateWithoutAdventurerInput>, UserUncheckedUpdateWithoutAdventurerInput>
  }

  export type ItemCreateprofilesInput = {
    set: $Enums.AdventurerType[]
  }

  export type ItemOnQuestAssignmentCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput> | ItemOnQuestAssignmentCreateWithoutItemInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutItemInput | ItemOnQuestAssignmentCreateOrConnectWithoutItemInput[]
    createMany?: ItemOnQuestAssignmentCreateManyItemInputEnvelope
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
  }

  export type ItemOnGuildCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput> | ItemOnGuildCreateWithoutItemInput[] | ItemOnGuildUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutItemInput | ItemOnGuildCreateOrConnectWithoutItemInput[]
    createMany?: ItemOnGuildCreateManyItemInputEnvelope
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
  }

  export type ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput> | ItemOnQuestAssignmentCreateWithoutItemInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutItemInput | ItemOnQuestAssignmentCreateOrConnectWithoutItemInput[]
    createMany?: ItemOnQuestAssignmentCreateManyItemInputEnvelope
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
  }

  export type ItemOnGuildUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput> | ItemOnGuildCreateWithoutItemInput[] | ItemOnGuildUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutItemInput | ItemOnGuildCreateOrConnectWithoutItemInput[]
    createMany?: ItemOnGuildCreateManyItemInputEnvelope
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type EnumItemRarityFieldUpdateOperationsInput = {
    set?: $Enums.ItemRarity
  }

  export type ItemUpdateprofilesInput = {
    set?: $Enums.AdventurerType[]
    push?: $Enums.AdventurerType | $Enums.AdventurerType[]
  }

  export type ItemOnQuestAssignmentUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput> | ItemOnQuestAssignmentCreateWithoutItemInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutItemInput | ItemOnQuestAssignmentCreateOrConnectWithoutItemInput[]
    upsert?: ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutItemInput | ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemOnQuestAssignmentCreateManyItemInputEnvelope
    set?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    disconnect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    delete?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    update?: ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutItemInput | ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemOnQuestAssignmentUpdateManyWithWhereWithoutItemInput | ItemOnQuestAssignmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
  }

  export type ItemOnGuildUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput> | ItemOnGuildCreateWithoutItemInput[] | ItemOnGuildUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutItemInput | ItemOnGuildCreateOrConnectWithoutItemInput[]
    upsert?: ItemOnGuildUpsertWithWhereUniqueWithoutItemInput | ItemOnGuildUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemOnGuildCreateManyItemInputEnvelope
    set?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    disconnect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    delete?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    update?: ItemOnGuildUpdateWithWhereUniqueWithoutItemInput | ItemOnGuildUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemOnGuildUpdateManyWithWhereWithoutItemInput | ItemOnGuildUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
  }

  export type ItemOnQuestAssignmentUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput> | ItemOnQuestAssignmentCreateWithoutItemInput[] | ItemOnQuestAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnQuestAssignmentCreateOrConnectWithoutItemInput | ItemOnQuestAssignmentCreateOrConnectWithoutItemInput[]
    upsert?: ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutItemInput | ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemOnQuestAssignmentCreateManyItemInputEnvelope
    set?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    disconnect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    delete?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    connect?: ItemOnQuestAssignmentWhereUniqueInput | ItemOnQuestAssignmentWhereUniqueInput[]
    update?: ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutItemInput | ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemOnQuestAssignmentUpdateManyWithWhereWithoutItemInput | ItemOnQuestAssignmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
  }

  export type ItemOnGuildUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput> | ItemOnGuildCreateWithoutItemInput[] | ItemOnGuildUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutItemInput | ItemOnGuildCreateOrConnectWithoutItemInput[]
    upsert?: ItemOnGuildUpsertWithWhereUniqueWithoutItemInput | ItemOnGuildUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemOnGuildCreateManyItemInputEnvelope
    set?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    disconnect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    delete?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    update?: ItemOnGuildUpdateWithWhereUniqueWithoutItemInput | ItemOnGuildUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemOnGuildUpdateManyWithWhereWithoutItemInput | ItemOnGuildUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
  }

  export type AdventurerCreateNestedManyWithoutGuildInput = {
    create?: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput> | AdventurerCreateWithoutGuildInput[] | AdventurerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AdventurerCreateOrConnectWithoutGuildInput | AdventurerCreateOrConnectWithoutGuildInput[]
    createMany?: AdventurerCreateManyGuildInputEnvelope
    connect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
  }

  export type BankCreateNestedOneWithoutGuildInput = {
    create?: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
    connectOrCreate?: BankCreateOrConnectWithoutGuildInput
    connect?: BankWhereUniqueInput
  }

  export type ItemOnGuildCreateNestedManyWithoutGuildInput = {
    create?: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput> | ItemOnGuildCreateWithoutGuildInput[] | ItemOnGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutGuildInput | ItemOnGuildCreateOrConnectWithoutGuildInput[]
    createMany?: ItemOnGuildCreateManyGuildInputEnvelope
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
  }

  export type AdventurerUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput> | AdventurerCreateWithoutGuildInput[] | AdventurerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AdventurerCreateOrConnectWithoutGuildInput | AdventurerCreateOrConnectWithoutGuildInput[]
    createMany?: AdventurerCreateManyGuildInputEnvelope
    connect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
  }

  export type BankUncheckedCreateNestedOneWithoutGuildInput = {
    create?: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
    connectOrCreate?: BankCreateOrConnectWithoutGuildInput
    connect?: BankWhereUniqueInput
  }

  export type ItemOnGuildUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput> | ItemOnGuildCreateWithoutGuildInput[] | ItemOnGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutGuildInput | ItemOnGuildCreateOrConnectWithoutGuildInput[]
    createMany?: ItemOnGuildCreateManyGuildInputEnvelope
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
  }

  export type AdventurerUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput> | AdventurerCreateWithoutGuildInput[] | AdventurerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AdventurerCreateOrConnectWithoutGuildInput | AdventurerCreateOrConnectWithoutGuildInput[]
    upsert?: AdventurerUpsertWithWhereUniqueWithoutGuildInput | AdventurerUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AdventurerCreateManyGuildInputEnvelope
    set?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    disconnect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    delete?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    connect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    update?: AdventurerUpdateWithWhereUniqueWithoutGuildInput | AdventurerUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AdventurerUpdateManyWithWhereWithoutGuildInput | AdventurerUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AdventurerScalarWhereInput | AdventurerScalarWhereInput[]
  }

  export type BankUpdateOneWithoutGuildNestedInput = {
    create?: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
    connectOrCreate?: BankCreateOrConnectWithoutGuildInput
    upsert?: BankUpsertWithoutGuildInput
    disconnect?: BankWhereInput | boolean
    delete?: BankWhereInput | boolean
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutGuildInput, BankUpdateWithoutGuildInput>, BankUncheckedUpdateWithoutGuildInput>
  }

  export type ItemOnGuildUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput> | ItemOnGuildCreateWithoutGuildInput[] | ItemOnGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutGuildInput | ItemOnGuildCreateOrConnectWithoutGuildInput[]
    upsert?: ItemOnGuildUpsertWithWhereUniqueWithoutGuildInput | ItemOnGuildUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ItemOnGuildCreateManyGuildInputEnvelope
    set?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    disconnect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    delete?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    update?: ItemOnGuildUpdateWithWhereUniqueWithoutGuildInput | ItemOnGuildUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ItemOnGuildUpdateManyWithWhereWithoutGuildInput | ItemOnGuildUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
  }

  export type AdventurerUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput> | AdventurerCreateWithoutGuildInput[] | AdventurerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AdventurerCreateOrConnectWithoutGuildInput | AdventurerCreateOrConnectWithoutGuildInput[]
    upsert?: AdventurerUpsertWithWhereUniqueWithoutGuildInput | AdventurerUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AdventurerCreateManyGuildInputEnvelope
    set?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    disconnect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    delete?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    connect?: AdventurerWhereUniqueInput | AdventurerWhereUniqueInput[]
    update?: AdventurerUpdateWithWhereUniqueWithoutGuildInput | AdventurerUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AdventurerUpdateManyWithWhereWithoutGuildInput | AdventurerUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AdventurerScalarWhereInput | AdventurerScalarWhereInput[]
  }

  export type BankUncheckedUpdateOneWithoutGuildNestedInput = {
    create?: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
    connectOrCreate?: BankCreateOrConnectWithoutGuildInput
    upsert?: BankUpsertWithoutGuildInput
    disconnect?: BankWhereInput | boolean
    delete?: BankWhereInput | boolean
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutGuildInput, BankUpdateWithoutGuildInput>, BankUncheckedUpdateWithoutGuildInput>
  }

  export type ItemOnGuildUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput> | ItemOnGuildCreateWithoutGuildInput[] | ItemOnGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ItemOnGuildCreateOrConnectWithoutGuildInput | ItemOnGuildCreateOrConnectWithoutGuildInput[]
    upsert?: ItemOnGuildUpsertWithWhereUniqueWithoutGuildInput | ItemOnGuildUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ItemOnGuildCreateManyGuildInputEnvelope
    set?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    disconnect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    delete?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    connect?: ItemOnGuildWhereUniqueInput | ItemOnGuildWhereUniqueInput[]
    update?: ItemOnGuildUpdateWithWhereUniqueWithoutGuildInput | ItemOnGuildUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ItemOnGuildUpdateManyWithWhereWithoutGuildInput | ItemOnGuildUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutBankInput = {
    create?: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput> | TransactionCreateWithoutBankInput[] | TransactionUncheckedCreateWithoutBankInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBankInput | TransactionCreateOrConnectWithoutBankInput[]
    createMany?: TransactionCreateManyBankInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type GuildCreateNestedOneWithoutBankInput = {
    create?: XOR<GuildCreateWithoutBankInput, GuildUncheckedCreateWithoutBankInput>
    connectOrCreate?: GuildCreateOrConnectWithoutBankInput
    connect?: GuildWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput> | TransactionCreateWithoutBankInput[] | TransactionUncheckedCreateWithoutBankInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBankInput | TransactionCreateOrConnectWithoutBankInput[]
    createMany?: TransactionCreateManyBankInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutBankNestedInput = {
    create?: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput> | TransactionCreateWithoutBankInput[] | TransactionUncheckedCreateWithoutBankInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBankInput | TransactionCreateOrConnectWithoutBankInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBankInput | TransactionUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: TransactionCreateManyBankInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBankInput | TransactionUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBankInput | TransactionUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GuildUpdateOneRequiredWithoutBankNestedInput = {
    create?: XOR<GuildCreateWithoutBankInput, GuildUncheckedCreateWithoutBankInput>
    connectOrCreate?: GuildCreateOrConnectWithoutBankInput
    upsert?: GuildUpsertWithoutBankInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutBankInput, GuildUpdateWithoutBankInput>, GuildUncheckedUpdateWithoutBankInput>
  }

  export type TransactionUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput> | TransactionCreateWithoutBankInput[] | TransactionUncheckedCreateWithoutBankInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBankInput | TransactionCreateOrConnectWithoutBankInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBankInput | TransactionUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: TransactionCreateManyBankInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBankInput | TransactionUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBankInput | TransactionUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BankCreateNestedOneWithoutHistoryInput = {
    create?: XOR<BankCreateWithoutHistoryInput, BankUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: BankCreateOrConnectWithoutHistoryInput
    connect?: BankWhereUniqueInput
  }

  export type BankUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<BankCreateWithoutHistoryInput, BankUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: BankCreateOrConnectWithoutHistoryInput
    upsert?: BankUpsertWithoutHistoryInput
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutHistoryInput, BankUpdateWithoutHistoryInput>, BankUncheckedUpdateWithoutHistoryInput>
  }

  export type QuestAssignmentCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuestAssignmentCreateWithoutItemsInput, QuestAssignmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutItemsInput
    connect?: QuestAssignmentWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutQuestAssignmentsInput = {
    create?: XOR<ItemCreateWithoutQuestAssignmentsInput, ItemUncheckedCreateWithoutQuestAssignmentsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutQuestAssignmentsInput
    connect?: ItemWhereUniqueInput
  }

  export type QuestAssignmentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuestAssignmentCreateWithoutItemsInput, QuestAssignmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuestAssignmentCreateOrConnectWithoutItemsInput
    upsert?: QuestAssignmentUpsertWithoutItemsInput
    connect?: QuestAssignmentWhereUniqueInput
    update?: XOR<XOR<QuestAssignmentUpdateToOneWithWhereWithoutItemsInput, QuestAssignmentUpdateWithoutItemsInput>, QuestAssignmentUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutQuestAssignmentsNestedInput = {
    create?: XOR<ItemCreateWithoutQuestAssignmentsInput, ItemUncheckedCreateWithoutQuestAssignmentsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutQuestAssignmentsInput
    upsert?: ItemUpsertWithoutQuestAssignmentsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutQuestAssignmentsInput, ItemUpdateWithoutQuestAssignmentsInput>, ItemUncheckedUpdateWithoutQuestAssignmentsInput>
  }

  export type GuildCreateNestedOneWithoutInventoryInput = {
    create?: XOR<GuildCreateWithoutInventoryInput, GuildUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: GuildCreateOrConnectWithoutInventoryInput
    connect?: GuildWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutGuildsInput = {
    create?: XOR<ItemCreateWithoutGuildsInput, ItemUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutGuildsInput
    connect?: ItemWhereUniqueInput
  }

  export type GuildUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<GuildCreateWithoutInventoryInput, GuildUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: GuildCreateOrConnectWithoutInventoryInput
    upsert?: GuildUpsertWithoutInventoryInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutInventoryInput, GuildUpdateWithoutInventoryInput>, GuildUncheckedUpdateWithoutInventoryInput>
  }

  export type ItemUpdateOneRequiredWithoutGuildsNestedInput = {
    create?: XOR<ItemCreateWithoutGuildsInput, ItemUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutGuildsInput
    upsert?: ItemUpsertWithoutGuildsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutGuildsInput, ItemUpdateWithoutGuildsInput>, ItemUncheckedUpdateWithoutGuildsInput>
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

  export type NestedEnumQuestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusFilter<$PrismaModel> | $Enums.QuestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestStatus | EnumQuestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestStatus[] | ListEnumQuestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAdventurerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerType | EnumAdventurerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerTypeFilter<$PrismaModel> | $Enums.AdventurerType
  }

  export type NestedEnumAdventurerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerStatus | EnumAdventurerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerStatusFilter<$PrismaModel> | $Enums.AdventurerStatus
  }

  export type NestedEnumAdventurerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerType | EnumAdventurerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerType[] | ListEnumAdventurerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdventurerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdventurerTypeFilter<$PrismaModel>
    _max?: NestedEnumAdventurerTypeFilter<$PrismaModel>
  }

  export type NestedEnumAdventurerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdventurerStatus | EnumAdventurerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdventurerStatus[] | ListEnumAdventurerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdventurerStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdventurerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdventurerStatusFilter<$PrismaModel>
    _max?: NestedEnumAdventurerStatusFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemRarity | EnumItemRarityFieldRefInput<$PrismaModel>
    in?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumItemRarityFilter<$PrismaModel> | $Enums.ItemRarity
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedEnumItemRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemRarity | EnumItemRarityFieldRefInput<$PrismaModel>
    in?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemRarity[] | ListEnumItemRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumItemRarityWithAggregatesFilter<$PrismaModel> | $Enums.ItemRarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemRarityFilter<$PrismaModel>
    _max?: NestedEnumItemRarityFilter<$PrismaModel>
  }

  export type AdventurerCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    assignments?: QuestAssignmentCreateNestedManyWithoutAdventurerInput
    guild: GuildCreateNestedOneWithoutAdventurersInput
  }

  export type AdventurerUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    guildId: string
    assignments?: QuestAssignmentUncheckedCreateNestedManyWithoutAdventurerInput
  }

  export type AdventurerCreateOrConnectWithoutUserInput = {
    where: AdventurerWhereUniqueInput
    create: XOR<AdventurerCreateWithoutUserInput, AdventurerUncheckedCreateWithoutUserInput>
  }

  export type AdventurerUpsertWithoutUserInput = {
    update: XOR<AdventurerUpdateWithoutUserInput, AdventurerUncheckedUpdateWithoutUserInput>
    create: XOR<AdventurerCreateWithoutUserInput, AdventurerUncheckedCreateWithoutUserInput>
    where?: AdventurerWhereInput
  }

  export type AdventurerUpdateToOneWithWhereWithoutUserInput = {
    where?: AdventurerWhereInput
    data: XOR<AdventurerUpdateWithoutUserInput, AdventurerUncheckedUpdateWithoutUserInput>
  }

  export type AdventurerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    assignments?: QuestAssignmentUpdateManyWithoutAdventurerNestedInput
    guild?: GuildUpdateOneRequiredWithoutAdventurersNestedInput
  }

  export type AdventurerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    assignments?: QuestAssignmentUncheckedUpdateManyWithoutAdventurerNestedInput
  }

  export type QuestAssignmentCreateWithoutQuestInput = {
    id?: string
    items?: ItemOnQuestAssignmentCreateNestedManyWithoutQuestAssignmentInput
    adventurer: AdventurerCreateNestedOneWithoutAssignmentsInput
  }

  export type QuestAssignmentUncheckedCreateWithoutQuestInput = {
    id?: string
    adventurerId: string
    items?: ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutQuestAssignmentInput
  }

  export type QuestAssignmentCreateOrConnectWithoutQuestInput = {
    where: QuestAssignmentWhereUniqueInput
    create: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput>
  }

  export type QuestAssignmentCreateManyQuestInputEnvelope = {
    data: QuestAssignmentCreateManyQuestInput | QuestAssignmentCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type QuestAssignmentUpsertWithWhereUniqueWithoutQuestInput = {
    where: QuestAssignmentWhereUniqueInput
    update: XOR<QuestAssignmentUpdateWithoutQuestInput, QuestAssignmentUncheckedUpdateWithoutQuestInput>
    create: XOR<QuestAssignmentCreateWithoutQuestInput, QuestAssignmentUncheckedCreateWithoutQuestInput>
  }

  export type QuestAssignmentUpdateWithWhereUniqueWithoutQuestInput = {
    where: QuestAssignmentWhereUniqueInput
    data: XOR<QuestAssignmentUpdateWithoutQuestInput, QuestAssignmentUncheckedUpdateWithoutQuestInput>
  }

  export type QuestAssignmentUpdateManyWithWhereWithoutQuestInput = {
    where: QuestAssignmentScalarWhereInput
    data: XOR<QuestAssignmentUpdateManyMutationInput, QuestAssignmentUncheckedUpdateManyWithoutQuestInput>
  }

  export type QuestAssignmentScalarWhereInput = {
    AND?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
    OR?: QuestAssignmentScalarWhereInput[]
    NOT?: QuestAssignmentScalarWhereInput | QuestAssignmentScalarWhereInput[]
    id?: StringFilter<"QuestAssignment"> | string
    adventurerId?: StringFilter<"QuestAssignment"> | string
    questId?: StringFilter<"QuestAssignment"> | string
  }

  export type ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput = {
    item: ItemCreateNestedOneWithoutQuestAssignmentsInput
  }

  export type ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput = {
    itemId: string
  }

  export type ItemOnQuestAssignmentCreateOrConnectWithoutQuestAssignmentInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    create: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput>
  }

  export type ItemOnQuestAssignmentCreateManyQuestAssignmentInputEnvelope = {
    data: ItemOnQuestAssignmentCreateManyQuestAssignmentInput | ItemOnQuestAssignmentCreateManyQuestAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type AdventurerCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    guild: GuildCreateNestedOneWithoutAdventurersInput
    user?: UserCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    guildId: string
    user?: UserUncheckedCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerCreateOrConnectWithoutAssignmentsInput = {
    where: AdventurerWhereUniqueInput
    create: XOR<AdventurerCreateWithoutAssignmentsInput, AdventurerUncheckedCreateWithoutAssignmentsInput>
  }

  export type QuestCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    reward: number
    status?: $Enums.QuestStatus
    estimatedDuration: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    requiredProfiles?: QuestCreaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: number | null
    createdBy: string
  }

  export type QuestUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    reward: number
    status?: $Enums.QuestStatus
    estimatedDuration: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    requiredProfiles?: QuestCreaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: number | null
    createdBy: string
  }

  export type QuestCreateOrConnectWithoutAssignmentsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutAssignmentsInput, QuestUncheckedCreateWithoutAssignmentsInput>
  }

  export type ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutQuestAssignmentInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    update: XOR<ItemOnQuestAssignmentUpdateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedUpdateWithoutQuestAssignmentInput>
    create: XOR<ItemOnQuestAssignmentCreateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedCreateWithoutQuestAssignmentInput>
  }

  export type ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutQuestAssignmentInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    data: XOR<ItemOnQuestAssignmentUpdateWithoutQuestAssignmentInput, ItemOnQuestAssignmentUncheckedUpdateWithoutQuestAssignmentInput>
  }

  export type ItemOnQuestAssignmentUpdateManyWithWhereWithoutQuestAssignmentInput = {
    where: ItemOnQuestAssignmentScalarWhereInput
    data: XOR<ItemOnQuestAssignmentUpdateManyMutationInput, ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentInput>
  }

  export type ItemOnQuestAssignmentScalarWhereInput = {
    AND?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
    OR?: ItemOnQuestAssignmentScalarWhereInput[]
    NOT?: ItemOnQuestAssignmentScalarWhereInput | ItemOnQuestAssignmentScalarWhereInput[]
    questAssignmentId?: StringFilter<"ItemOnQuestAssignment"> | string
    itemId?: StringFilter<"ItemOnQuestAssignment"> | string
  }

  export type AdventurerUpsertWithoutAssignmentsInput = {
    update: XOR<AdventurerUpdateWithoutAssignmentsInput, AdventurerUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<AdventurerCreateWithoutAssignmentsInput, AdventurerUncheckedCreateWithoutAssignmentsInput>
    where?: AdventurerWhereInput
  }

  export type AdventurerUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: AdventurerWhereInput
    data: XOR<AdventurerUpdateWithoutAssignmentsInput, AdventurerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AdventurerUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    guild?: GuildUpdateOneRequiredWithoutAdventurersNestedInput
    user?: UserUpdateOneWithoutAdventurerNestedInput
  }

  export type AdventurerUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutAdventurerNestedInput
  }

  export type QuestUpsertWithoutAssignmentsInput = {
    update: XOR<QuestUpdateWithoutAssignmentsInput, QuestUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<QuestCreateWithoutAssignmentsInput, QuestUncheckedCreateWithoutAssignmentsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutAssignmentsInput, QuestUncheckedUpdateWithoutAssignmentsInput>
  }

  export type QuestUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: IntFieldUpdateOperationsInput | number
    status?: EnumQuestStatusFieldUpdateOperationsInput | $Enums.QuestStatus
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requiredProfiles?: QuestUpdaterequiredProfilesInput | $Enums.AdventurerType[]
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type QuestAssignmentCreateWithoutAdventurerInput = {
    id?: string
    items?: ItemOnQuestAssignmentCreateNestedManyWithoutQuestAssignmentInput
    quest: QuestCreateNestedOneWithoutAssignmentsInput
  }

  export type QuestAssignmentUncheckedCreateWithoutAdventurerInput = {
    id?: string
    questId: string
    items?: ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutQuestAssignmentInput
  }

  export type QuestAssignmentCreateOrConnectWithoutAdventurerInput = {
    where: QuestAssignmentWhereUniqueInput
    create: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput>
  }

  export type QuestAssignmentCreateManyAdventurerInputEnvelope = {
    data: QuestAssignmentCreateManyAdventurerInput | QuestAssignmentCreateManyAdventurerInput[]
    skipDuplicates?: boolean
  }

  export type GuildCreateWithoutAdventurersInput = {
    id?: string
    name: string
    bankId: string
    bank?: BankCreateNestedOneWithoutGuildInput
    inventory?: ItemOnGuildCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutAdventurersInput = {
    id?: string
    name: string
    bankId: string
    bank?: BankUncheckedCreateNestedOneWithoutGuildInput
    inventory?: ItemOnGuildUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutAdventurersInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutAdventurersInput, GuildUncheckedCreateWithoutAdventurersInput>
  }

  export type UserCreateWithoutAdventurerInput = {
    id?: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAdventurerInput = {
    id?: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAdventurerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
  }

  export type QuestAssignmentUpsertWithWhereUniqueWithoutAdventurerInput = {
    where: QuestAssignmentWhereUniqueInput
    update: XOR<QuestAssignmentUpdateWithoutAdventurerInput, QuestAssignmentUncheckedUpdateWithoutAdventurerInput>
    create: XOR<QuestAssignmentCreateWithoutAdventurerInput, QuestAssignmentUncheckedCreateWithoutAdventurerInput>
  }

  export type QuestAssignmentUpdateWithWhereUniqueWithoutAdventurerInput = {
    where: QuestAssignmentWhereUniqueInput
    data: XOR<QuestAssignmentUpdateWithoutAdventurerInput, QuestAssignmentUncheckedUpdateWithoutAdventurerInput>
  }

  export type QuestAssignmentUpdateManyWithWhereWithoutAdventurerInput = {
    where: QuestAssignmentScalarWhereInput
    data: XOR<QuestAssignmentUpdateManyMutationInput, QuestAssignmentUncheckedUpdateManyWithoutAdventurerInput>
  }

  export type GuildUpsertWithoutAdventurersInput = {
    update: XOR<GuildUpdateWithoutAdventurersInput, GuildUncheckedUpdateWithoutAdventurersInput>
    create: XOR<GuildCreateWithoutAdventurersInput, GuildUncheckedCreateWithoutAdventurersInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutAdventurersInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutAdventurersInput, GuildUncheckedUpdateWithoutAdventurersInput>
  }

  export type GuildUpdateWithoutAdventurersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    bank?: BankUpdateOneWithoutGuildNestedInput
    inventory?: ItemOnGuildUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutAdventurersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    bank?: BankUncheckedUpdateOneWithoutGuildNestedInput
    inventory?: ItemOnGuildUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type UserUpsertWithoutAdventurerInput = {
    update: XOR<UserUpdateWithoutAdventurerInput, UserUncheckedUpdateWithoutAdventurerInput>
    create: XOR<UserCreateWithoutAdventurerInput, UserUncheckedCreateWithoutAdventurerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdventurerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdventurerInput, UserUncheckedUpdateWithoutAdventurerInput>
  }

  export type UserUpdateWithoutAdventurerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAdventurerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemOnQuestAssignmentCreateWithoutItemInput = {
    questAssignment: QuestAssignmentCreateNestedOneWithoutItemsInput
  }

  export type ItemOnQuestAssignmentUncheckedCreateWithoutItemInput = {
    questAssignmentId: string
  }

  export type ItemOnQuestAssignmentCreateOrConnectWithoutItemInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    create: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput>
  }

  export type ItemOnQuestAssignmentCreateManyItemInputEnvelope = {
    data: ItemOnQuestAssignmentCreateManyItemInput | ItemOnQuestAssignmentCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemOnGuildCreateWithoutItemInput = {
    guild: GuildCreateNestedOneWithoutInventoryInput
  }

  export type ItemOnGuildUncheckedCreateWithoutItemInput = {
    guildId: string
  }

  export type ItemOnGuildCreateOrConnectWithoutItemInput = {
    where: ItemOnGuildWhereUniqueInput
    create: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput>
  }

  export type ItemOnGuildCreateManyItemInputEnvelope = {
    data: ItemOnGuildCreateManyItemInput | ItemOnGuildCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemOnQuestAssignmentUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    update: XOR<ItemOnQuestAssignmentUpdateWithoutItemInput, ItemOnQuestAssignmentUncheckedUpdateWithoutItemInput>
    create: XOR<ItemOnQuestAssignmentCreateWithoutItemInput, ItemOnQuestAssignmentUncheckedCreateWithoutItemInput>
  }

  export type ItemOnQuestAssignmentUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemOnQuestAssignmentWhereUniqueInput
    data: XOR<ItemOnQuestAssignmentUpdateWithoutItemInput, ItemOnQuestAssignmentUncheckedUpdateWithoutItemInput>
  }

  export type ItemOnQuestAssignmentUpdateManyWithWhereWithoutItemInput = {
    where: ItemOnQuestAssignmentScalarWhereInput
    data: XOR<ItemOnQuestAssignmentUpdateManyMutationInput, ItemOnQuestAssignmentUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemOnGuildUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemOnGuildWhereUniqueInput
    update: XOR<ItemOnGuildUpdateWithoutItemInput, ItemOnGuildUncheckedUpdateWithoutItemInput>
    create: XOR<ItemOnGuildCreateWithoutItemInput, ItemOnGuildUncheckedCreateWithoutItemInput>
  }

  export type ItemOnGuildUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemOnGuildWhereUniqueInput
    data: XOR<ItemOnGuildUpdateWithoutItemInput, ItemOnGuildUncheckedUpdateWithoutItemInput>
  }

  export type ItemOnGuildUpdateManyWithWhereWithoutItemInput = {
    where: ItemOnGuildScalarWhereInput
    data: XOR<ItemOnGuildUpdateManyMutationInput, ItemOnGuildUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemOnGuildScalarWhereInput = {
    AND?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
    OR?: ItemOnGuildScalarWhereInput[]
    NOT?: ItemOnGuildScalarWhereInput | ItemOnGuildScalarWhereInput[]
    guildId?: StringFilter<"ItemOnGuild"> | string
    itemId?: StringFilter<"ItemOnGuild"> | string
  }

  export type AdventurerCreateWithoutGuildInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    assignments?: QuestAssignmentCreateNestedManyWithoutAdventurerInput
    user?: UserCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerUncheckedCreateWithoutGuildInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
    assignments?: QuestAssignmentUncheckedCreateNestedManyWithoutAdventurerInput
    user?: UserUncheckedCreateNestedOneWithoutAdventurerInput
  }

  export type AdventurerCreateOrConnectWithoutGuildInput = {
    where: AdventurerWhereUniqueInput
    create: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput>
  }

  export type AdventurerCreateManyGuildInputEnvelope = {
    data: AdventurerCreateManyGuildInput | AdventurerCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type BankCreateWithoutGuildInput = {
    id?: string
    amount: number
    history?: TransactionCreateNestedManyWithoutBankInput
  }

  export type BankUncheckedCreateWithoutGuildInput = {
    id?: string
    amount: number
    history?: TransactionUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankCreateOrConnectWithoutGuildInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
  }

  export type ItemOnGuildCreateWithoutGuildInput = {
    item: ItemCreateNestedOneWithoutGuildsInput
  }

  export type ItemOnGuildUncheckedCreateWithoutGuildInput = {
    itemId: string
  }

  export type ItemOnGuildCreateOrConnectWithoutGuildInput = {
    where: ItemOnGuildWhereUniqueInput
    create: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput>
  }

  export type ItemOnGuildCreateManyGuildInputEnvelope = {
    data: ItemOnGuildCreateManyGuildInput | ItemOnGuildCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type AdventurerUpsertWithWhereUniqueWithoutGuildInput = {
    where: AdventurerWhereUniqueInput
    update: XOR<AdventurerUpdateWithoutGuildInput, AdventurerUncheckedUpdateWithoutGuildInput>
    create: XOR<AdventurerCreateWithoutGuildInput, AdventurerUncheckedCreateWithoutGuildInput>
  }

  export type AdventurerUpdateWithWhereUniqueWithoutGuildInput = {
    where: AdventurerWhereUniqueInput
    data: XOR<AdventurerUpdateWithoutGuildInput, AdventurerUncheckedUpdateWithoutGuildInput>
  }

  export type AdventurerUpdateManyWithWhereWithoutGuildInput = {
    where: AdventurerScalarWhereInput
    data: XOR<AdventurerUpdateManyMutationInput, AdventurerUncheckedUpdateManyWithoutGuildInput>
  }

  export type AdventurerScalarWhereInput = {
    AND?: AdventurerScalarWhereInput | AdventurerScalarWhereInput[]
    OR?: AdventurerScalarWhereInput[]
    NOT?: AdventurerScalarWhereInput | AdventurerScalarWhereInput[]
    id?: StringFilter<"Adventurer"> | string
    name?: StringFilter<"Adventurer"> | string
    type?: EnumAdventurerTypeFilter<"Adventurer"> | $Enums.AdventurerType
    status?: EnumAdventurerStatusFilter<"Adventurer"> | $Enums.AdventurerStatus
    xp?: IntFilter<"Adventurer"> | number
    guildId?: StringFilter<"Adventurer"> | string
  }

  export type BankUpsertWithoutGuildInput = {
    update: XOR<BankUpdateWithoutGuildInput, BankUncheckedUpdateWithoutGuildInput>
    create: XOR<BankCreateWithoutGuildInput, BankUncheckedCreateWithoutGuildInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutGuildInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutGuildInput, BankUncheckedUpdateWithoutGuildInput>
  }

  export type BankUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    history?: TransactionUpdateManyWithoutBankNestedInput
  }

  export type BankUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    history?: TransactionUncheckedUpdateManyWithoutBankNestedInput
  }

  export type ItemOnGuildUpsertWithWhereUniqueWithoutGuildInput = {
    where: ItemOnGuildWhereUniqueInput
    update: XOR<ItemOnGuildUpdateWithoutGuildInput, ItemOnGuildUncheckedUpdateWithoutGuildInput>
    create: XOR<ItemOnGuildCreateWithoutGuildInput, ItemOnGuildUncheckedCreateWithoutGuildInput>
  }

  export type ItemOnGuildUpdateWithWhereUniqueWithoutGuildInput = {
    where: ItemOnGuildWhereUniqueInput
    data: XOR<ItemOnGuildUpdateWithoutGuildInput, ItemOnGuildUncheckedUpdateWithoutGuildInput>
  }

  export type ItemOnGuildUpdateManyWithWhereWithoutGuildInput = {
    where: ItemOnGuildScalarWhereInput
    data: XOR<ItemOnGuildUpdateManyMutationInput, ItemOnGuildUncheckedUpdateManyWithoutGuildInput>
  }

  export type TransactionCreateWithoutBankInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
  }

  export type TransactionUncheckedCreateWithoutBankInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
  }

  export type TransactionCreateOrConnectWithoutBankInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput>
  }

  export type TransactionCreateManyBankInputEnvelope = {
    data: TransactionCreateManyBankInput | TransactionCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type GuildCreateWithoutBankInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerCreateNestedManyWithoutGuildInput
    inventory?: ItemOnGuildCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutBankInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerUncheckedCreateNestedManyWithoutGuildInput
    inventory?: ItemOnGuildUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutBankInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutBankInput, GuildUncheckedCreateWithoutBankInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutBankInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBankInput, TransactionUncheckedUpdateWithoutBankInput>
    create: XOR<TransactionCreateWithoutBankInput, TransactionUncheckedCreateWithoutBankInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBankInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBankInput, TransactionUncheckedUpdateWithoutBankInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBankInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBankInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    name?: StringFilter<"Transaction"> | string
    bankId?: StringFilter<"Transaction"> | string
  }

  export type GuildUpsertWithoutBankInput = {
    update: XOR<GuildUpdateWithoutBankInput, GuildUncheckedUpdateWithoutBankInput>
    create: XOR<GuildCreateWithoutBankInput, GuildUncheckedCreateWithoutBankInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutBankInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutBankInput, GuildUncheckedUpdateWithoutBankInput>
  }

  export type GuildUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUpdateManyWithoutGuildNestedInput
    inventory?: ItemOnGuildUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUncheckedUpdateManyWithoutGuildNestedInput
    inventory?: ItemOnGuildUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type BankCreateWithoutHistoryInput = {
    id?: string
    amount: number
    guild: GuildCreateNestedOneWithoutBankInput
  }

  export type BankUncheckedCreateWithoutHistoryInput = {
    id?: string
    amount: number
    guildId: string
  }

  export type BankCreateOrConnectWithoutHistoryInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutHistoryInput, BankUncheckedCreateWithoutHistoryInput>
  }

  export type BankUpsertWithoutHistoryInput = {
    update: XOR<BankUpdateWithoutHistoryInput, BankUncheckedUpdateWithoutHistoryInput>
    create: XOR<BankCreateWithoutHistoryInput, BankUncheckedCreateWithoutHistoryInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutHistoryInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutHistoryInput, BankUncheckedUpdateWithoutHistoryInput>
  }

  export type BankUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    guild?: GuildUpdateOneRequiredWithoutBankNestedInput
  }

  export type BankUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestAssignmentCreateWithoutItemsInput = {
    id?: string
    adventurer: AdventurerCreateNestedOneWithoutAssignmentsInput
    quest: QuestCreateNestedOneWithoutAssignmentsInput
  }

  export type QuestAssignmentUncheckedCreateWithoutItemsInput = {
    id?: string
    adventurerId: string
    questId: string
  }

  export type QuestAssignmentCreateOrConnectWithoutItemsInput = {
    where: QuestAssignmentWhereUniqueInput
    create: XOR<QuestAssignmentCreateWithoutItemsInput, QuestAssignmentUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutQuestAssignmentsInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    guilds?: ItemOnGuildCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutQuestAssignmentsInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    guilds?: ItemOnGuildUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutQuestAssignmentsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutQuestAssignmentsInput, ItemUncheckedCreateWithoutQuestAssignmentsInput>
  }

  export type QuestAssignmentUpsertWithoutItemsInput = {
    update: XOR<QuestAssignmentUpdateWithoutItemsInput, QuestAssignmentUncheckedUpdateWithoutItemsInput>
    create: XOR<QuestAssignmentCreateWithoutItemsInput, QuestAssignmentUncheckedCreateWithoutItemsInput>
    where?: QuestAssignmentWhereInput
  }

  export type QuestAssignmentUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuestAssignmentWhereInput
    data: XOR<QuestAssignmentUpdateWithoutItemsInput, QuestAssignmentUncheckedUpdateWithoutItemsInput>
  }

  export type QuestAssignmentUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurer?: AdventurerUpdateOneRequiredWithoutAssignmentsNestedInput
    quest?: QuestUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type QuestAssignmentUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurerId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutQuestAssignmentsInput = {
    update: XOR<ItemUpdateWithoutQuestAssignmentsInput, ItemUncheckedUpdateWithoutQuestAssignmentsInput>
    create: XOR<ItemCreateWithoutQuestAssignmentsInput, ItemUncheckedCreateWithoutQuestAssignmentsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutQuestAssignmentsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutQuestAssignmentsInput, ItemUncheckedUpdateWithoutQuestAssignmentsInput>
  }

  export type ItemUpdateWithoutQuestAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    guilds?: ItemOnGuildUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutQuestAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    guilds?: ItemOnGuildUncheckedUpdateManyWithoutItemNestedInput
  }

  export type GuildCreateWithoutInventoryInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerCreateNestedManyWithoutGuildInput
    bank?: BankCreateNestedOneWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    bankId: string
    adventurers?: AdventurerUncheckedCreateNestedManyWithoutGuildInput
    bank?: BankUncheckedCreateNestedOneWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutInventoryInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutInventoryInput, GuildUncheckedCreateWithoutInventoryInput>
  }

  export type ItemCreateWithoutGuildsInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutGuildsInput = {
    id?: string
    name: string
    description: string
    durability: number
    price: number
    type: $Enums.ItemType
    stats?: string | null
    rarity?: $Enums.ItemRarity
    profiles?: ItemCreateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutGuildsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutGuildsInput, ItemUncheckedCreateWithoutGuildsInput>
  }

  export type GuildUpsertWithoutInventoryInput = {
    update: XOR<GuildUpdateWithoutInventoryInput, GuildUncheckedUpdateWithoutInventoryInput>
    create: XOR<GuildCreateWithoutInventoryInput, GuildUncheckedCreateWithoutInventoryInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutInventoryInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutInventoryInput, GuildUncheckedUpdateWithoutInventoryInput>
  }

  export type GuildUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUpdateManyWithoutGuildNestedInput
    bank?: BankUpdateOneWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    adventurers?: AdventurerUncheckedUpdateManyWithoutGuildNestedInput
    bank?: BankUncheckedUpdateOneWithoutGuildNestedInput
  }

  export type ItemUpsertWithoutGuildsInput = {
    update: XOR<ItemUpdateWithoutGuildsInput, ItemUncheckedUpdateWithoutGuildsInput>
    create: XOR<ItemCreateWithoutGuildsInput, ItemUncheckedCreateWithoutGuildsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutGuildsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutGuildsInput, ItemUncheckedUpdateWithoutGuildsInput>
  }

  export type ItemUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    stats?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumItemRarityFieldUpdateOperationsInput | $Enums.ItemRarity
    profiles?: ItemUpdateprofilesInput | $Enums.AdventurerType[]
    questAssignments?: ItemOnQuestAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type QuestAssignmentCreateManyQuestInput = {
    id?: string
    adventurerId: string
  }

  export type QuestAssignmentUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUpdateManyWithoutQuestAssignmentNestedInput
    adventurer?: AdventurerUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type QuestAssignmentUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurerId?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentNestedInput
  }

  export type QuestAssignmentUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    adventurerId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentCreateManyQuestAssignmentInput = {
    itemId: string
  }

  export type ItemOnQuestAssignmentUpdateWithoutQuestAssignmentInput = {
    item?: ItemUpdateOneRequiredWithoutQuestAssignmentsNestedInput
  }

  export type ItemOnQuestAssignmentUncheckedUpdateWithoutQuestAssignmentInput = {
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentInput = {
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestAssignmentCreateManyAdventurerInput = {
    id?: string
    questId: string
  }

  export type QuestAssignmentUpdateWithoutAdventurerInput = {
    id?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUpdateManyWithoutQuestAssignmentNestedInput
    quest?: QuestUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type QuestAssignmentUncheckedUpdateWithoutAdventurerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    items?: ItemOnQuestAssignmentUncheckedUpdateManyWithoutQuestAssignmentNestedInput
  }

  export type QuestAssignmentUncheckedUpdateManyWithoutAdventurerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentCreateManyItemInput = {
    questAssignmentId: string
  }

  export type ItemOnGuildCreateManyItemInput = {
    guildId: string
  }

  export type ItemOnQuestAssignmentUpdateWithoutItemInput = {
    questAssignment?: QuestAssignmentUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemOnQuestAssignmentUncheckedUpdateWithoutItemInput = {
    questAssignmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnQuestAssignmentUncheckedUpdateManyWithoutItemInput = {
    questAssignmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnGuildUpdateWithoutItemInput = {
    guild?: GuildUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type ItemOnGuildUncheckedUpdateWithoutItemInput = {
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnGuildUncheckedUpdateManyWithoutItemInput = {
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AdventurerCreateManyGuildInput = {
    id?: string
    name: string
    type: $Enums.AdventurerType
    status?: $Enums.AdventurerStatus
    xp?: number
  }

  export type ItemOnGuildCreateManyGuildInput = {
    itemId: string
  }

  export type AdventurerUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    assignments?: QuestAssignmentUpdateManyWithoutAdventurerNestedInput
    user?: UserUpdateOneWithoutAdventurerNestedInput
  }

  export type AdventurerUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
    assignments?: QuestAssignmentUncheckedUpdateManyWithoutAdventurerNestedInput
    user?: UserUncheckedUpdateOneWithoutAdventurerNestedInput
  }

  export type AdventurerUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAdventurerTypeFieldUpdateOperationsInput | $Enums.AdventurerType
    status?: EnumAdventurerStatusFieldUpdateOperationsInput | $Enums.AdventurerStatus
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOnGuildUpdateWithoutGuildInput = {
    item?: ItemUpdateOneRequiredWithoutGuildsNestedInput
  }

  export type ItemOnGuildUncheckedUpdateWithoutGuildInput = {
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOnGuildUncheckedUpdateManyWithoutGuildInput = {
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyBankInput = {
    id?: string
    amount: number
    date: Date | string
    name: string
  }

  export type TransactionUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
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