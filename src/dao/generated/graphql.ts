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
