import shortId from "shortid";
import { faker } from "@faker-js/faker";

export const dummyUser = (data) => ({
  ...data,
  name: "지현 님",
  id: 1,
  Posts: [{ id: 1 }],
});

export const createDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        name: faker.name.fullName(),
      },
      Content: faker.lorem.paragraph(),
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            name: faker.name.fullName(),
          },
          Content: faker.lorem.sentence(),
        },
      ],
    }));

export const dummyPost = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    name: "망고",
  },
  Content: data,
  Comments: [],
});

export const dummyComment = (data) => ({
  CommentId: shortId.generate(),
  User: {
    userId: 1,
    name: "망고",
  },
  Content: data,
});
