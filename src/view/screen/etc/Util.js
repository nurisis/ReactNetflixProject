import faker from 'faker';

// crete random user data
export const randomUsers = (count = 10) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      key: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    });
  }

  return arr;
};

// 오름차순 정렬
export function sortAscending(list, keyword) {
  return list.sort(function (a, b) {
    return a[keyword] - b[keyword];
  });
};

// 내림차순 정렬
export function sortDescending(list, keyword) {
  return list.sort(function (a, b) {
    return b[keyword] - a[keyword];
  });
};