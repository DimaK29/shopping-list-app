import { initialLists } from "../data";

const MODE = process.env.REACT_APP_API_MODE || "mock";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";


let mockLists = JSON.parse(JSON.stringify(initialLists));

const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const mockApi = {
  async fetchLists() {
    await wait();
    return mockLists;
  },

  async createList(date, itemNames) {
    await wait();

    const newList = {
      id: `l${Date.now()}`,
      date,
      items: itemNames.map((name, index) => ({
        id: `i${Date.now()}-${index}`,
        name,
        done: false,
      })),
    };

    mockLists = [...mockLists, newList];
    return newList;
  },

  async deleteList(id) {
    await wait();
    mockLists = mockLists.filter((l) => l.id !== id);
  },

  async toggleItem(listId, itemId) {
    await wait();

    mockLists = mockLists.map((l) =>
      l.id !== listId
        ? l
        : {
            ...l,
            items: l.items.map((it) =>
              it.id === itemId ? { ...it, done: !it.done } : it
            ),
          }
    );

    return mockLists.find((l) => l.id === listId);
  },

  async deleteItem(listId, itemId) {
    await wait();

    mockLists = mockLists.map((l) =>
      l.id !== listId
        ? l
        : { ...l, items: l.items.filter((i) => i.id !== itemId) }
    );

    return mockLists.find((l) => l.id === listId);
  },
};


const realApi = {
  async fetchLists() {
    const res = await fetch(`${API_URL}/lists`);
    if (!res.ok) throw new Error("Failed to load lists");
    return res.json();
  },

  async createList(date, itemNames) {
    const body = {
      date,
      items: itemNames.map((name) => ({ name, done: false })),
    };

    const res = await fetch(`${API_URL}/lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Failed to create list");
    return res.json();
  },

  async deleteList(id) {
    const res = await fetch(`${API_URL}/lists/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete list");
  },

  async toggleItem(listId, itemId) {
    const res = await fetch(
      `${API_URL}/lists/${listId}/items/${itemId}/toggle`,
      {
        method: "PATCH",
      }
    );

    if (!res.ok) throw new Error("Failed to toggle item");
    return res.json();
  },

  async deleteItem(listId, itemId) {
    const res = await fetch(
      `${API_URL}/lists/${listId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) throw new Error("Failed to delete item");
    return res.json();
  },
};


const api = MODE === "real" ? realApi : mockApi;

export const fetchLists = (...args) => api.fetchLists(...args);
export const createList = (...args) => api.createList(...args);
export const deleteList = (...args) => api.deleteList(...args);
export const toggleItem = (...args) => api.toggleItem(...args);
export const deleteItem = (...args) => api.deleteItem(...args);