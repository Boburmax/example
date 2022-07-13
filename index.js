// Uzunligi 5 dan kam bolgan so'zni chiqaring 
const cars = ['mers', 'bmw', 'Volswagen']
const arr = car.filter(item => item.length < 5)
// Hammasini kichkina harf bn chiqaring 
let names = ['SamAr','MuhaMMad','AziZ']
names = names.map(item => item.toLowerCase()
//Tarkibida birorta raqam bormi bilish uchun 
const data = [4,'a', 'b']
console.log(data.every((item) => typeOf item === 'number' ))
// Tarkibidagi har bir harf mi bilish uchun 
const arr = [4,'a', 'b']
console.log(arr.every(item => typeOf(item) === 'number') 
//Summasini chiqaring 
const number = [4, 2, 8, 4]
const res = number.reduce((last, fir ) => last + fir, 0)
//bowidagi qiymati 10 bolsin 
const number1 = [4, 2, 8, 4]
//objectni massivga o'giring
const object = {
  samar: 'person',
  yusuf: 'person',
  dog: 'animal',
  cat: 'animal'
}

node pacakage manager  - nmp
devDependencies - dasturlash muhit i uchun qaram
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

		Local storage
localStorage ga yangi qiymat ber

localStorage dan qiymat ol 

localStorage dan qiymatni ochirish

localStorage dan hamma narsani ochirish

localStorage ga car ni yuklang
const car = {
	name: 'mers',
	price: 30000 }

checkbox checked algoritmini tuzing

		Regular expression
string dagi biror belgi/harf ni alamwtirish
qaysi metod bn ishlatiladi
\d nmani bajaradi
\w nmani bajaradi
\s nmani bajaradi

Slider 

slides, next, prev, current, total larni olamiz, 
slideIndex = 1 deb olamiz
showSlides(slideIndex)
agar slides ni uzubligi 10 dan kihcik bolsa total ni yozuvi 0 va slides ni uzunligiga ten
bolmasa slides ni uzunligiga teng

function showSLides (val)
agar val katta slides ni uzunligi slideIndex 1 ga teng boladi
agar val 1 dan kichkina bolsa slideIndex slides ni uzunligiga teng boladi
	slides ni har bittasini displayda korinmasin
	slides ni 1 chisi displayda korinsin
agar slides ni uzunligi 10 dan kichik bolsa current ni yozuvi 0 va slides ni uzunligiga ten
bolmasa slideIndex ga teng bolsin
function plusSlides (val) 
showSLides ga slideIndex += val
--------------------------------
next click boganda plusSlides ga beramiz 1 ni
prev click boganda plusSlides ga beramiz -1 ni


		Answer
 axios.get('http://localhost:3000/menu')
      .then(res => {
        res.data.forEach(({img, altimg, title, descr, price}) => {
          new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
        })
      })



  // Form
  const forms = document.querySelectorAll('form')

  forms.forEach((form) => {
    bindPostData(form)
  })

  const msg = {
    loading: 'img/spinner.svg',
    success: "Thank's for submitting our form",
    failure: 'Something went wrong',
  }

  async function postData(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })

    return await res.json()
  }

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const statusMessage = document.createElement('img')
      statusMessage.src = msg.loading
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `
      form.insertAdjacentElement('afterend', statusMessage)

      const formData = new FormData(form)

      const json = JSON.stringify(Object.fromEntries(formData.entries()))

      postData('http://localhost:3000/request', json)
        .then((data) => {
          console.log(data)
          showThanksModal(msg.success)
          statusMessage.remove()
        })
        .catch(() => {
          showThanksModal(msg.failure)
        })
        .finally(() => {
          form.reset()
        })
    })
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog')

    prevModalDialog.classList.add('hide')
    openModal()

    const thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `

    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      prevModalDialog.classList.add('show')
      prevModalDialog.classList.remove('hide')
      closeModal()
    }, 4000)
  }
		
		
		
		
		
		
		/////////////////////////////////////////////////
		
___.replace(/./g, '*'))			\*, \&,\ , 
'08-07-2021'.replace(/-/g, ':'))
if(localStorage.getItem('isChecked')) {
    checkbox.checked = true
}
checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')) { 
        localStorage.removeItem('isChecked')
    } else {
        localStorage.setItem('isChecked', true)
    }
})

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
