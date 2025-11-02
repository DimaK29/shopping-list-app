export const currentUser = { id: "u1", name: "Mario", role: "owner", avatar: "/avatar1.png" };

export const members = [
  { id: "u1", name: "Mario", role: "owner", avatar: "/avatar1.png" },
  { id: "u2", name: "Anna", role: "member", avatar: "/avatar2.png" },
  { id: "u3", name: "Mike", role: "member", avatar: "/avatar3.png" },
  { id: "u4", name: "Tom",  role: "member", avatar: "/avatar4.png" },
];

export const initialLists = [
  {
    id: "l1",
    date: "17.10.2024",
    items: [
      { id: "i1", name: "Milk", done: false },
      { id: "i2", name: "Bread", done: true },
      { id: "i3", name: "Eggs", done: false },
    ],
  },
  {
    id: "l2",
    date: "15.10.2024",
    items: [
      { id: "i4", name: "Apples", done: false },
      { id: "i5", name: "Rice", done: false },
    ],
  },
  {
    id: "l3",
    date: "11.10.2025",
    items: [
      { id: "i6", name: "Batteries", done: true },
      { id: "i7", name: "USB cable", done: false },
    ],
  },
];