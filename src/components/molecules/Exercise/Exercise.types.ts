export type SubCategory = {
  id: number;
  title: string;
};

export type ExerciseProps = {
  id: number;
  category: "cardio" | "strength";
  title: string;
  description?: string;
  subcategories?: SubCategory[];
};

export const exercises: ExerciseProps[] = [
  {
    id: 1,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
    subcategories: [
      { id: 1, title: "bicep" },
      { id: 2, title: "chest" },
      { id: 1, title: "tricep" },
    ],
  },

  {
    id: 2,
    category: "cardio",
    title: "Chest press",
    description: "lslsllalsllsslla",
  },
  {
    id: 3,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllsslla",
    subcategories: [
      { id: 1, title: "bicep" },
      { id: 2, title: "chest" },
      { id: 1, title: "tricep" },
      { id: 2, title: "chest" },
      { id: 1, title: "tricep" },
    ],
  },
  {
    id: 4,
    category: "cardio",
    title: "Chest press",
    description: "lslsllalsllsslla",
  },
  {
    id: 1,
    category: "cardio",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },

  {
    id: 1,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },
  {
    id: 1,
    category: "cardio",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },
  {
    id: 1,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },
  {
    id: 1,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },
  {
    id: 1,
    category: "strength",
    title: "Chest press",
    description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
  },
];
