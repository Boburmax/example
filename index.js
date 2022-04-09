// Uzunligi 5 dan kam bolgan so'zni chiqaring 
const cars = ['mers', 'bmw', 'Volswagen']
// Hammasini kichkina harf bn chiqaring 
let names = ['SamAr','MuhaMMad','AziZ']
//Tarkibida birorta raqam bormi bilish uchun 
const data = [4,'a', 'b']
// Tarkibidagi har bir harf mi bilish uchun 
const arr = [4,'a', 'b']
//Summasini chiqaring 
const number = [4, 2, 8, 4]
//bowidagi qiymati 10 bolsin 
const number1 = [4, 2, 8, 4]
//objectni massivga o'giring
const object = {
  samar: 'person',
  yusuf: 'person',
  dog: 'animal',
  cat: 'animal'
}
//nmp ni ulash uchun nmala kerak va qanaqa kodni qayerga yozish kerak
Github     git status
 
git init | git config --global user.email "zebonisso1998@gmail.com" | git add -A | git commit -m ''
git push --set-upstream origin master

agar githubdan tortgan proyektda qowimcha modulla o'rnagan bolsa git ga kirirb proyektga papkaga kiramiz va 'npm install' ni teramiz
json-server ni ornatish uchun npm install json-server --save-dev
npm init -y 
npx json-server _____

 Resources
  http://localhost:3000/menu |  http://localhost:3000/requests
  Home
  http://localhost:3000
			Work with server
stringify nima qiladi
parse nma qiladi

//hamma formalani olamiz
//message object 
//forms ni hammasini postdataga beramiz
//postData function 
//formni qabul qilsin
//form ga hodisa qowamiz
//perezagrtuzakni oldini olamiz
//statusMessage yaratamiz
//unga bowlangich text
//statusMessage ni ulaymiz
//request yasaymiz
//ochamiz, sozlaymiz
//formData yasaymiz va u ham forni qabul qiladi
//yangi bow object
//formDataga qabul qilgan formni qiyamtalrini objectga beramiz
//yangi json objectdan json formatga otkazamiz
//jsonni requestga yuboramiz
//requestga hodisa qowamiz
//agar status 200 bolsa log qil requestni 
//statusMessage ga qiymat ber
//form ani reset
//statusMessage ni yangila 
//bomasa statusMessage ga qiymat ber 
		Foydalanuvchi bn chiroyli muloqot qilish
 showThanksmodal funcksiya:
	prevModalDialog ga modal__dialog ni olamiz
	prevModalDialog ga hide class qowamiz
	openModal()
	thanksModal div element yaratamiz
	thanksModalga modal__dialog class qowamiz
	thanksModalga dynamic html yozamiz:
		`modal__content=> modal__close (data-close)=> modal__title ${message}`
	modal ni thanksModal ga ulaymiz
	setTimeout(4 sekundda):
		thanksModal olib tawlaymiz
		prevModalDialog ga show classni qowamiz
		prevModalDialog ga hide classni olib tawlaymiz
		closeModal()

			Fetch ishlatilishi
fetch('server yoziladi', {
	metodimiz
	qaysindan malumotlani oladi
	keyin datani text ga o'giramiz
	keyin {
	 data ni console ga chiqar
	 message.success ni 
	 message ni ochir
	}
	bizda xatolik bolsa(callback) (catch)
	neytral holatda(finally)
})	

object ni massivga o'girish uchun:

Fetch data => data.json()  -- bazani json ga o'qirish 

async - xoxlagan 
sync - bir chekkadan

		Serverdan ma'lumotlani olish
	Funksiyasi
konstanta getResource async url qabul qilib callback
konst res kut fetch ni url ni olsin
agar res ok bolmasa Error ni otib chiqar(throw)
qaytar kut res.json()

getResource (url)
keyin data ga callback
data ni har biridagi hususiyatlarini olamiz(destruktizatsiya) callback
yangi CarCard(hususiyatla, parentselsector).render()
	
Serverdan kelganini qanaqa qilib text/json ga o'giramiz

const getResource = async (url) => {
    const res = await fetch(url)

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()q
  };





getResource('http://localhost:3000/menu')
  .then(data => {
    data.forEach(({img, altimg, title, descr, price}) => {
      new CarCard(img, altimg, title, descr, price, '.menu .container').render()
    })
  })
