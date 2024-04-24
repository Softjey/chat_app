export interface Message {
  id: number;
  text: string;
  sentTime: string;
}

export interface MessageGroup {
  id: number;
  sender: string;
  messages: Message[];
}

export const messageGroups: MessageGroup[] = [
  {
    id: 1,
    sender: "Alice",
    messages: [
      { id: 1, text: "Hello", sentTime: "2024-04-22T08:00:00Z" },
      { id: 2, text: "How are you?", sentTime: "2024-04-22T08:02:00Z" },
    ],
  },
  {
    id: 2,
    sender: "Bob",
    messages: [
      {
        id: 3,
        text: "Hi, good to hear from you!",
        sentTime: "2024-04-22T08:05:00Z",
      },
      {
        id: 4,
        text: "I'm doing well, thanks!",
        sentTime: "2024-04-22T08:06:00Z",
      },
    ],
  },
  {
    id: 3,
    sender: "Alice",
    messages: [
      {
        id: 5,
        text: "What are you up to today?",
        sentTime: "2024-04-22T08:10:00Z",
      },
    ],
  },
  {
    id: 4,
    sender: "Bob",
    messages: [
      {
        id: 6,
        text: "Just working on some projects. How about you?",
        sentTime: "2024-04-22T08:15:00Z",
      },
      {
        id: 7,
        text: "Do you have plans for the weekend?",
        sentTime: "2024-04-22T08:17:00Z",
      },
    ],
  },
  {
    id: 5,
    sender: "Alice",
    messages: [
      {
        id: 8,
        text: "Not much, just relaxing and reading a book.",
        sentTime: "2024-04-22T08:20:00Z",
      },
      {
        id: 9,
        text: "No plans yet for the weekend. Maybe just take it easy.",
        sentTime: "2024-04-22T08:25:00Z",
      },
    ],
  },
  {
    id: 6,
    sender: "Bob",
    messages: [
      {
        id: 10,
        text: "Sounds like a nice plan!",
        sentTime: "2024-04-22T08:30:00Z",
      },
    ],
  },
  {
    id: 7,
    sender: "Alice",
    messages: [
      {
        id: 11,
        text: "Yes, really needed some downtime.",
        sentTime: "2024-04-22T08:35:00Z",
      },
      {
        id: 12,
        text: "How's your project going?",
        sentTime: "2024-04-22T08:40:00Z",
      },
    ],
  },
  {
    id: 8,
    sender: "Bob",
    messages: [
      {
        id: 13,
        text: "It's going well, just a bit more to wrap up.",
        sentTime: "2024-04-22T08:45:00Z",
      },
      {
        id: 14,
        text: "Thanks for asking!",
        sentTime: "2024-04-22T08:47:00Z",
      },
    ],
  },
  {
    id: 9,
    sender: "Alice",
    messages: [
      {
        id: 15,
        text: "Anytime! Glad to hear it's almost done.",
        sentTime: "2024-04-22T08:50:00Z",
      },
    ],
  },
  {
    id: 10,
    sender: "Bob",
    messages: [
      {
        id: 16,
        text: "What book are you reading?",
        sentTime: "2024-04-22T08:55:00Z",
      },
    ],
  },
  {
    id: 11,
    sender: "Alice",
    messages: [
      {
        id: 17,
        text: "It's a novel called 'The Winds of Change'. Really captivating!",
        sentTime: "2024-04-22T09:00:00Z",
      },
    ],
  },
  {
    id: 12,
    sender: "Bob",
    messages: [
      {
        id: 18,
        text: "Sounds interesting! Would you recommend it?",
        sentTime: "2024-04-22T09:05:00Z",
      },
    ],
  },
  {
    id: 13,
    sender: "Alice",
    messages: [
      {
        id: 19,
        text: "Absolutely, I think you'd like it too.",
        sentTime: "2024-04-22T09:10:00Z",
      },
    ],
  },
  {
    id: 14,
    sender: "Bob",
    messages: [
      {
        id: 20,
        text: "I'll add it to my list then. Thanks!",
        sentTime: "2024-04-22T09:15:00Z",
      },
    ],
  },
  {
    id: 15,
    sender: "Alice",
    messages: [
      {
        id: 21,
        text: "Looking forward to hearing your thoughts on it!",
        sentTime: "2024-04-22T09:20:00Z",
      },
    ],
  },
  {
    id: 16,
    sender: "Bob",
    messages: [
      {
        id: 22,
        text: "Will do! By the way, have you watched the new movie released last week?",
        sentTime: "2024-04-22T09:25:00Z",
      },
    ],
  },
  {
    id: 17,
    sender: "Alice",
    messages: [
      {
        id: 23,
        text: "Not yet, but I plan to. Heard good things about it.",
        sentTime: "2024-04-22T09:30:00Z",
      },
    ],
  },
  {
    id: 18,
    sender: "Bob",
    messages: [
      {
        id: 24,
        text: "Same here, maybe we could go together?",
        sentTime: "2024-04-22T09:35:00Z",
      },
    ],
  },
  {
    id: 19,
    sender: "Alice",
    messages: [
      {
        id: 25,
        text: "That sounds like a great idea! Let's plan for this weekend.",
        sentTime: "2024-04-22T09:40:00Z",
      },
    ],
  },
  {
    id: 20,
    sender: "Bob",
    messages: [
      {
        id: 26,
        text: "Perfect, I'll check the showtimes and get back to you.",
        sentTime: "2024-04-22T09:45:00Z",
      },
    ],
  },
  {
    id: 21,
    sender: "Alice",
    messages: [
      {
        id: 27,
        text: "Great! Looking forward to it.",
        sentTime: "2024-04-22T09:50:00Z",
      },
    ],
  },
];
