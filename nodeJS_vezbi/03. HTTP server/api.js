const people = [
  {
    name: "Sasko",
    age: 36,
  },
  {
    name: "Kiril",
    age: 33,
  },
  {
    name: "Tino",
    age: 33,
  },
];

const greetings = [
  { get: "GET - Добредојдовте" },
  { post: "POST - Го обработуваме вашето барање" },
  { put: "PUT - Го ажурираме вашето барање" },
  { delete: "DELETE - Го бришеме ресурсот" },
];

module.exports = { people, greetings };
