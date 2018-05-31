export const UPDATE_USER = "UPDATE_USER";
export const EDIT_USER = "EDIT_USER";
//TODO: ANA ÇEKME METODU ÇALIŞINCA, APIYE GETCURRENTUSER ÇAĞRISI YAPILIR
//TODO: GELEN USER BURAYA GÖNDERİLİR, BURADA DA USER STATE'I GÜNCELLENİR.

export const updateUser = () => ({
  type: UPDATE_USER
  //FETCHES 1 USER
});

export const editUser = (
  userFullName,
  userCity,
  userOldPw,
  usernewPw,
  userConfirmPw
) => ({
  type: EDIT_USER,
  userFullName,
  userCity,
  userOldPw,
  usernewPw,
  userConfirmPw
  //TODO: Profilde kaydet deyince, API'a put user çağrısı yapılır bu verilerle.
  //:TODO: DAHA SONRA, YUKARIDAKİ GET CURRENTUSER ÇAĞRILIR VE CURRENTUSER STATE'I GÜNCELLENİR.
});

//TODO: APIYE BIZIM ACTIONLARIMIZDAN GELEN VERİLERLE ÇAĞRI YAPIYORUZ
