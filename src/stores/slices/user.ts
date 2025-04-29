import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# Hello 👋\nI’m Likith Shet—a creator at ❤️ heart, blending 🧑🏻‍💻code with 
  creativity to craft seamless digital experiences. What you're seeing here is my version of a [Typora](https://typora.io/)-inspired writing space,Built on top of [Milkdown](https://milkdown.dev/), 
  an open-source WYSIWYG markdown editor where simplicity meets functionality.
  Dive in, explore, and let your ideas flow effortlessly!`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
