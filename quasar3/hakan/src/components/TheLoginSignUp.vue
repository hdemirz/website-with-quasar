<template>
<div class="q-pa-md" style="max-width: 500px;" >

 <q-tabs

       v-model="tab"
       dense
       class=" text-black q-pa-xls"
       active-color="red"
       indicator-color="red"

     >
       <q-tab name="Giriş" label="Giriş"></q-tab>
       <q-tab name="Kayıt Ol" label="Kayıt Ol"></q-tab>
     </q-tabs>

   <q-separator color=dark></q-separator>

 <q-tab-panels v-model="tab" animated>
 <q-tab-panel name="Giriş">
   <q-form class="q-gutter-md">
     <q-input
       color=black
       v-model="Email"
       label="*Eposta"
     ></q-input>

     <q-input
        color=black
        v-model="sifre"
        label="*Parola"
        :type="isPwd ? 'sifre' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>

        </q-input>

     <q-card-section class="text-right q-mx-none q-my-none q-px-none q-py-none">
           <a href="#" style="color:black;" class="text-black-0">Parolanızı mı unuttunuz</a>
         </q-card-section>

     <div class="q-mt-xsq-mx-none q-my-none q-px-none q-py-none">
     <div class="q-gutter-sm">
     <q-checkbox v-model="selection" val="red" label="Beni Hatırla" color="red" />
     </div>
     </div>


     <div>
       <q-btn @click='signup' label="Giriş" type="Giriş" color="red"></q-btn>
     </div>
   </q-form>

 <q-card-section class="text-left q-mx-xs q-my-xs q-px-xs q-py-xs">

  <a href="#" style="color:black;" class="text-black-0">Hesabınız yok mu? Şimdi bir tane oluşturun</a>

         </q-card-section>
   </q-tab-panel>

   <q-tab-panel name="Kayıt Ol">
     <q-input color=dark v-model="isim" label="Adınız"></q-input>
     <q-input color=dark v-model="soyisim" label="Soyadınız"></q-input>
     <q-input color=dark v-model="mail" label="E-Mail"></q-input>
     <q-input color=dark v-model="tel" label="Cep Telefonu"></q-input>
     <q-input
        color=black
        v-model="sifre"
        label="*Parola"
        :type="isPwd ? 'sifre' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>

        </q-input>
     <h1 class="text-subtitle2">Parola Gereksinimleri</h1>
     <ul class="text-left">
     <li >Minumum 6 karakter</li>
     <li>En az bir büyük harf</li>
     <li>En az bir küçük harf</li>
     <li>En az bir sayı</li>
     <li>En az bir özel karakter (! @ # $ % &)</li>
  </ul>
     <div class="q-gutter-y-xs">
     <div>
     <q-checkbox v-model="selection" val="red" label="Üyelik Sözleşmesini ve Kişisel Verilerimin Korunması'nı ve Aydınlatma Metnini okudum, kabul ediyorum" color="red" />
     </div>

     <div>
     <q-checkbox v-model="selectiona" val="red" label="Kampanyalar ile ilgili eposta mesajlarını almak istiyorum ve Sms ile özel indirimlerden haberdar olmak istiyorum, Açık Rıza Metnini,okudum kabul ediyorum." color="red" />
     </div>

     <div>
       <q-btn @click="kaydol" label="Giriş" type="Giriş" color="red"></q-btn>
     </div>
     </div>
     </q-tab-panel>

    </q-tab-panels>

 </div>
</template>

<script>
import { ref } from 'vue'
import { useMyStore } from 'src/stores/pinia';


export default {
  setup () {
    const parola = ref('');
    const isim = ref('');
    const soyisim = ref('');
    const mail = ref('');
    const tel = ref('');
    const myStore = useMyStore();
    const kaydol = async () => {
      try {
        const payload = {
          isim: isim.value,
          soyisim: soyisim.value,
          mail: mail.value,
          tel: tel.value,
          parola: parola.value,
        };
        await myStore.signup(payload);
      } catch (error) {
      }
    };

return {
  isim,
  soyisim,
  mail,
  tel,
  parola,
  myStore,
  isPwd: ref(true),
  tab: ref('mails'),
  kaydol,
}
  }
}
</script>
