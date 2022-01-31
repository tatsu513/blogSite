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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryIds = {
  __typename?: 'CategoryIds';
  categoryId: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryNodes = {
  __typename?: 'CategoryNodes';
  nodes: Array<Category>;
};

export type CategoryPostData = {
  __typename?: 'CategoryPostData';
  categoryId: Scalars['ID'];
  name: Scalars['String'];
  posts: PostsNodes;
};

export type CategoryPostNodes = {
  __typename?: 'CategoryPostNodes';
  nodes: Array<CategoryPostData>;
};

export type FeaturedImageNode = {
  __typename?: 'FeaturedImageNode';
  node: MediaItemUrl;
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

export type PostData = {
  __typename?: 'PostData';
  categories: CategoryNodes;
  date: Scalars['String'];
  featuredImage: FeaturedImageNode;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type PostPageResponse = {
  __typename?: 'PostPageResponse';
  post: GotPost;
};

export type PostWithCategoryId = {
  __typename?: 'PostWithCategoryId';
  categoryId: Scalars['ID'];
  posts: Array<Posts>;
};

export type Posts = {
  __typename?: 'Posts';
  category: Category;
  date: Scalars['String'];
  id: Scalars['ID'];
  mediaItemUrl: Scalars['String'];
  title: Scalars['String'];
};

export type PostsNodes = {
  __typename?: 'PostsNodes';
  nodes: Array<PostData>;
};

export type PostsPageData = {
  __typename?: 'PostsPageData';
  categories: Array<Category>;
  postsWidthCategoryId: Array<PostWithCategoryId>;
};

export type PostsPageResponse = {
  __typename?: 'PostsPageResponse';
  categories: CategoryPostNodes;
};

export type Query = {
  __typename?: 'Query';
  postPage: Post;
  postsPage: Array<PostWithCategoryId>;
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
  Category: ResolverTypeWrapper<Category>;
  CategoryIds: ResolverTypeWrapper<CategoryIds>;
  CategoryNodes: ResolverTypeWrapper<CategoryNodes>;
  CategoryPostData: ResolverTypeWrapper<CategoryPostData>;
  CategoryPostNodes: ResolverTypeWrapper<CategoryPostNodes>;
  FeaturedImageNode: ResolverTypeWrapper<FeaturedImageNode>;
  GotPost: ResolverTypeWrapper<GotPost>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  MediaItemUrl: ResolverTypeWrapper<MediaItemUrl>;
  Post: ResolverTypeWrapper<Post>;
  PostData: ResolverTypeWrapper<PostData>;
  PostPageResponse: ResolverTypeWrapper<PostPageResponse>;
  PostWithCategoryId: ResolverTypeWrapper<PostWithCategoryId>;
  Posts: ResolverTypeWrapper<Posts>;
  PostsNodes: ResolverTypeWrapper<PostsNodes>;
  PostsPageData: ResolverTypeWrapper<PostsPageData>;
  PostsPageResponse: ResolverTypeWrapper<PostsPageResponse>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Categories: Categories;
  CategoriesNode: CategoriesNode;
  Category: Category;
  CategoryIds: CategoryIds;
  CategoryNodes: CategoryNodes;
  CategoryPostData: CategoryPostData;
  CategoryPostNodes: CategoryPostNodes;
  FeaturedImageNode: FeaturedImageNode;
  GotPost: GotPost;
  ID: Scalars['ID'];
  MediaItemUrl: MediaItemUrl;
  Post: Post;
  PostData: PostData;
  PostPageResponse: PostPageResponse;
  PostWithCategoryId: PostWithCategoryId;
  Posts: Posts;
  PostsNodes: PostsNodes;
  PostsPageData: PostsPageData;
  PostsPageResponse: PostsPageResponse;
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

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryIds'] = ResolversParentTypes['CategoryIds']> = {
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryNodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryNodes'] = ResolversParentTypes['CategoryNodes']> = {
  nodes?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPostDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPostData'] = ResolversParentTypes['CategoryPostData']> = {
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<ResolversTypes['PostsNodes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPostNodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPostNodes'] = ResolversParentTypes['CategoryPostNodes']> = {
  nodes?: Resolver<Array<ResolversTypes['CategoryPostData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeaturedImageNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeaturedImageNode'] = ResolversParentTypes['FeaturedImageNode']> = {
  node?: Resolver<ResolversTypes['MediaItemUrl'], ParentType, ContextType>;
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

export type PostDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostData'] = ResolversParentTypes['PostData']> = {
  categories?: Resolver<ResolversTypes['CategoryNodes'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featuredImage?: Resolver<ResolversTypes['FeaturedImageNode'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPageResponse'] = ResolversParentTypes['PostPageResponse']> = {
  post?: Resolver<ResolversTypes['GotPost'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostWithCategoryIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostWithCategoryId'] = ResolversParentTypes['PostWithCategoryId']> = {
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Posts'] = ResolversParentTypes['Posts']> = {
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mediaItemUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsNodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsNodes'] = ResolversParentTypes['PostsNodes']> = {
  nodes?: Resolver<Array<ResolversTypes['PostData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsPageDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsPageData'] = ResolversParentTypes['PostsPageData']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  postsWidthCategoryId?: Resolver<Array<ResolversTypes['PostWithCategoryId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsPageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsPageResponse'] = ResolversParentTypes['PostsPageResponse']> = {
  categories?: Resolver<ResolversTypes['CategoryPostNodes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  postPage?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postsPage?: Resolver<Array<ResolversTypes['PostWithCategoryId']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Categories?: CategoriesResolvers<ContextType>;
  CategoriesNode?: CategoriesNodeResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryIds?: CategoryIdsResolvers<ContextType>;
  CategoryNodes?: CategoryNodesResolvers<ContextType>;
  CategoryPostData?: CategoryPostDataResolvers<ContextType>;
  CategoryPostNodes?: CategoryPostNodesResolvers<ContextType>;
  FeaturedImageNode?: FeaturedImageNodeResolvers<ContextType>;
  GotPost?: GotPostResolvers<ContextType>;
  MediaItemUrl?: MediaItemUrlResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostData?: PostDataResolvers<ContextType>;
  PostPageResponse?: PostPageResponseResolvers<ContextType>;
  PostWithCategoryId?: PostWithCategoryIdResolvers<ContextType>;
  Posts?: PostsResolvers<ContextType>;
  PostsNodes?: PostsNodesResolvers<ContextType>;
  PostsPageData?: PostsPageDataResolvers<ContextType>;
  PostsPageResponse?: PostsPageResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};




export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;