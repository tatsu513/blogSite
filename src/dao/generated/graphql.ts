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
  categoryId: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryNodes = {
  __typename?: 'CategoryNodes';
  nodes: Array<Category>;
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

export type HomePostsNode = {
  __typename?: 'HomePostsNode';
  nodes: Array<ListPost>;
};

export type ListPageResults = {
  __typename?: 'ListPageResults';
  categories: Array<Category>;
  posts: Array<PostForList>;
};

export type ListPost = {
  __typename?: 'ListPost';
  categories: CategoryNodes;
  content: Scalars['String'];
  date: Scalars['String'];
  featuredImage: FeaturedImageNode;
  id: Scalars['String'];
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

export type PostForList = {
  __typename?: 'PostForList';
  category: Category;
  date: Scalars['String'];
  id: Scalars['ID'];
  mediaItemUrl: Scalars['String'];
  title: Scalars['String'];
};

export type PostPageResponse = {
  __typename?: 'PostPageResponse';
  post: GotPost;
};

export type Query = {
  __typename?: 'Query';
  postPage: Post;
  posts: HomePostsNode;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', posts: { __typename?: 'HomePostsNode', nodes: Array<{ __typename?: 'ListPost', id: string, title: string, content: string, date: string, featuredImage: { __typename?: 'FeaturedImageNode', node: { __typename?: 'MediaItemUrl', mediaItemUrl: string } }, categories: { __typename?: 'CategoryNodes', nodes: Array<{ __typename?: 'Category', categoryId: string, name: string }> } }> } };


export const HomePageDocument = gql`
    query homePage {
  posts {
    nodes {
      id
      title
      content
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories {
        nodes {
          categoryId
          name
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    homePage(variables?: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'homePage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;