import { GraphQLResolveInfo } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Categories = {
  __typename?: 'Categories';
  nodes: Array<CategoriesNode>;
};

export type CategoriesNode = {
  __typename?: 'CategoriesNode';
  name?: Maybe<Scalars['String']>;
};

export type FeaturedImageNode = {
  __typename?: 'FeaturedImageNode';
  node: MediaItemUrl;
};

export type GetPostResponse = {
  __typename?: 'GetPostResponse';
  post: GotPost;
};

export type GetPostsResponse = {
  __typename?: 'GetPostsResponse';
  posts: PostsNode;
};

export type GotPost = {
  __typename?: 'GotPost';
  categories: Categories;
  content: Scalars['String'];
  date: Scalars['String'];
  featuredImage: FeaturedImageNode;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MediaItemUrl = {
  __typename?: 'MediaItemUrl';
  mediaItemUrl: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  category: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['ID'];
  mediaItemUrl: Scalars['String'];
  title: Scalars['String'];
};

export type PostsNode = {
  __typename?: 'PostsNode';
  nodes: Array<GotPost>;
};

export type Query = {
  __typename?: 'Query';
  getPost: GetPostResponse;
  getPosts: GetPostsResponse;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Categories: ResolverTypeWrapper<Categories>;
  CategoriesNode: ResolverTypeWrapper<CategoriesNode>;
  FeaturedImageNode: ResolverTypeWrapper<FeaturedImageNode>;
  GetPostResponse: ResolverTypeWrapper<GetPostResponse>;
  GetPostsResponse: ResolverTypeWrapper<GetPostsResponse>;
  GotPost: ResolverTypeWrapper<GotPost>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  MediaItemUrl: ResolverTypeWrapper<MediaItemUrl>;
  Post: ResolverTypeWrapper<Post>;
  PostsNode: ResolverTypeWrapper<PostsNode>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Categories: Categories;
  CategoriesNode: CategoriesNode;
  FeaturedImageNode: FeaturedImageNode;
  GetPostResponse: GetPostResponse;
  GetPostsResponse: GetPostsResponse;
  GotPost: GotPost;
  ID: Scalars['ID'];
  MediaItemUrl: MediaItemUrl;
  Post: Post;
  PostsNode: PostsNode;
  Query: {};
  String: Scalars['String'];
};

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Categories'] = ResolversParentTypes['Categories']> = {
  nodes?: Resolver<Array<ResolversTypes['CategoriesNode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesNode'] = ResolversParentTypes['CategoriesNode']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeaturedImageNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeaturedImageNode'] = ResolversParentTypes['FeaturedImageNode']> = {
  node?: Resolver<ResolversTypes['MediaItemUrl'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetPostResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPostResponse'] = ResolversParentTypes['GetPostResponse']> = {
  post?: Resolver<ResolversTypes['GotPost'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetPostsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPostsResponse'] = ResolversParentTypes['GetPostsResponse']> = {
  posts?: Resolver<ResolversTypes['PostsNode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GotPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['GotPost'] = ResolversParentTypes['GotPost']> = {
  categories?: Resolver<ResolversTypes['Categories'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featuredImage?: Resolver<ResolversTypes['FeaturedImageNode'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaItemUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaItemUrl'] = ResolversParentTypes['MediaItemUrl']> = {
  mediaItemUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mediaItemUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsNode'] = ResolversParentTypes['PostsNode']> = {
  nodes?: Resolver<Array<ResolversTypes['GotPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPost?: Resolver<ResolversTypes['GetPostResponse'], ParentType, ContextType>;
  getPosts?: Resolver<ResolversTypes['GetPostsResponse'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Categories?: CategoriesResolvers<ContextType>;
  CategoriesNode?: CategoriesNodeResolvers<ContextType>;
  FeaturedImageNode?: FeaturedImageNodeResolvers<ContextType>;
  GetPostResponse?: GetPostResponseResolvers<ContextType>;
  GetPostsResponse?: GetPostsResponseResolvers<ContextType>;
  GotPost?: GotPostResolvers<ContextType>;
  MediaItemUrl?: MediaItemUrlResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostsNode?: PostsNodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};




export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;