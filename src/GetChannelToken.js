import { gql, useMutation } from "@apollo/client";

/**
<Login />
</>* login(username: String!, password: String!, rememberMe: Boolean):
 */

const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ... on CurrentUser {
        channels {
          token
        }
      }
    }
  }
`;

export default function GetChannelToken() {
  const [mutateFunction, { ...rest }] = useMutation(LOGIN);

  return (
    <button
      onClick={() =>
        mutateFunction({
          variables: { username: "superadmin", password: "superadmin" },
        })
      }
    >
      GetChannelToken
    </button>
  );
}
