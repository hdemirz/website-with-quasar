import { defineStore } from 'pinia';
import { db } from 'src/boot/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface User {
  isim: string; soyisim: string; mail: string; tel: string; parola: string;

}
export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async kaydol(payload: User) {

        const docRef = await addDoc(collection(db, 'users'), payload);
        this.setUser(payload);
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
