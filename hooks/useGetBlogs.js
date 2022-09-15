import { gql, useQuery } from "@apollo/client";

const GET_BLOGS = gql`
  {
    posts {
      nodes {
        id
        title
        date
        contentType {
          node {
            description
          }
        }
        featuredImage {
          node {
            description
            mediaItemUrl
          }
        }
        authorId
        uri
      }
    }
  }
`;

const GET_BLOG = gql`
  query GETBLOG($id: ID!) {
    post(id: $id) {
      commentCount
      date
      featuredImage {
        node {
          author {
            node {
              name
              username
            }
          }
          mediaItemUrl
          uri
        }
      }
      uri
      content
      title
      id
      enqueuedStylesheets {
        nodes {
          src
        }
      }
    }
  }
`;

export const useGetBlogs = () => {
  const { error, loading, data } = useQuery(GET_BLOGS);

  return { error, loading, data };
};

export const useGetBlog = (id) => {
  const { error, loading, data } = useQuery(GET_BLOG, {
    variables: {
      id,
    },
  });

  return { error, loading, data };
};
