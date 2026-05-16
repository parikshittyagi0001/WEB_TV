let getstartedBtn = document.querySelector('#getstarted-btn');
let icon = document.querySelector('#lessthanicon');
let body = document.querySelector('body');
let mainHeading = document.querySelector('#netflix-main-heading');

let ques1 = document.querySelector('#page-6-question-1');
let ques2 = document.querySelector('#page-6-question-2');
let ques3 = document.querySelector('#page-6-question-3');
let ques4 = document.querySelector('#page-6-question-4');
let ques5 = document.querySelector('#page-6-question-5');
let ques6 = document.querySelector('#page-6-question-6');

let ques1Icon = document.querySelector('#page-6-question-1 i');
let ques1NewIcon = document.createElement('i');
let ques2Icon = document.querySelector('#page-6-question-2 i');
let ques2NewIcon = document.createElement('i');
let ques3Icon = document.querySelector('#page-6-question-3 i');
let ques3NewIcon = document.createElement('i');
let ques4Icon = document.querySelector('#page-6-question-4 i');
let ques4NewIcon = document.createElement('i');
let ques5Icon = document.querySelector('#page-6-question-5 i');
let ques5NewIcon = document.createElement('i');
let ques6Icon = document.querySelector('#page-6-question-6 i');
let ques6NewIcon = document.createElement('i');

let ans1 = document.createElement('div');
let ans2 = document.createElement('div');
let ans3 = document.createElement('div');
let ans4 = document.createElement('div');
let ans5 = document.createElement('div');
let ans6 = document.createElement('div');
let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;

let styling = function () {
    icon.style.backgroundColor = "rgb(255, 0, 0, 0.1)";
    icon.style.transitionDuration = "0.3s";
}

let ques1Ans = function () {
    if(a % 2 == 0) {
        ans1.innerHTML = "WebTV is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";

        ques1Icon.remove();
        ques1NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques1NewIcon.style.color = '#ffffff';
        ques1.insertAdjacentElement('beforeend',ques1NewIcon);

        ans1.setAttribute('id','page-6-ans-1');
        ques1.insertAdjacentElement('afterend',ans1);
    } else {
        ans1.remove();
        ques1NewIcon.remove();
        ques1Icon.setAttribute('class','fa-solid fa-plus');
        ques1Icon.style.color = '#ffffff';
        ques1.insertAdjacentElement('beforeend',ques1Icon);
    }
    a++;
}
let ques2Ans = function () {
    if(b % 2 == 0) {
        ans2.innerHTML = "Watch WebTV on your smartphone, tablet, Smart TV, laptop, or streaming device. No extra costs, no contracts.";

        ques2Icon.remove();
        ques2NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques2NewIcon.style.color = '#ffffff';
        ques2.insertAdjacentElement('beforeend',ques2NewIcon);

        ans2.setAttribute('id','page-6-ans-2');
        ques2.insertAdjacentElement('afterend',ans2);
    } else {
        ans2.remove();
        ques2NewIcon.remove();
        ques2Icon.setAttribute('class','fa-solid fa-plus');
        ques2Icon.style.color = '#ffffff';
        ques2.insertAdjacentElement('beforeend',ques2Icon);
    }
    b++;
}
let ques3Ans = function () {
    if(c % 2 == 0) {
        ans3.innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at WebTV.com from your personal computer or on any internet-connected device that offers the WebTV app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take WebTV with you anywhere.";

        ques3Icon.remove();
        ques3NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques3NewIcon.style.color = '#ffffff';
        ques3.insertAdjacentElement('beforeend',ques3NewIcon);

        ans3.setAttribute('id','page-6-ans-3');
        ques3.insertAdjacentElement('afterend',ans3);
    } else {
        ans3.remove();
        ques3NewIcon.remove();
        ques3Icon.setAttribute('class','fa-solid fa-plus');
        ques3Icon.style.color = '#ffffff';
        ques3.insertAdjacentElement('beforeend',ques3Icon);
    }
    c++;
}
let ques4Ans = function () {
    if(d % 2 == 0) {
        ans4.innerHTML = "WebTV is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.";

        ques4Icon.remove();
        ques4NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques4NewIcon.style.color = '#ffffff';
        ques4.insertAdjacentElement('beforeend',ques4NewIcon);

        ans4.setAttribute('id','page-6-ans-4');
        ques4.insertAdjacentElement('afterend',ans4);
    } else {
        ans4.remove();
        ques4NewIcon.remove();
        ques4Icon.setAttribute('class','fa-solid fa-plus');
        ques4Icon.style.color = '#ffffff';
        ques4.insertAdjacentElement('beforeend',ques4Icon);
    }
    d++;
}
let ques5Ans = function () {
    if(e % 2 == 0) {
        ans5.innerHTML = "WebTV has an extensive library of feature films, documentaries, TV shows, anime, award-winning WebTV originals, and more. Watch as much as you want, anytime you want.";

        ques5Icon.remove();
        ques5NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques5NewIcon.style.color = '#ffffff';
        ques5.insertAdjacentElement('beforeend',ques5NewIcon);

        ans5.setAttribute('id','page-6-ans-5');
        ques5.insertAdjacentElement('afterend',ans5);
    } else {
        ans5.remove();

        ques5NewIcon.remove();
        ques5Icon.setAttribute('class','fa-solid fa-plus');
        ques5Icon.style.color = '#ffffff';
        ques5.insertAdjacentElement('beforeend',ques5Icon);
    }
    e++;
}
let ques6Ans = function () {
    if(f % 2 == 0) {
        ans6.innerHTML = "The WebTV Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.";

        ques6Icon.remove();
        ques6NewIcon.setAttribute('class','fa-solid fa-xmark');
        ques6NewIcon.style.color = '#ffffff';
        ques6.insertAdjacentElement('beforeend',ques6NewIcon);

        ans6.setAttribute('id','page-6-ans-6');
        ques6.insertAdjacentElement('afterend',ans6);
    } else {
        ans6.remove();

        ques6NewIcon.remove();
        ques6Icon.setAttribute('class','fa-solid fa-plus');
        ques6Icon.style.color = '#ffffff';
        ques6.insertAdjacentElement('beforeend',ques6Icon);
    }
    f++;
}

getstartedBtn.addEventListener('mouseenter',styling);

ques1.addEventListener('click',ques1Ans);
ques2.addEventListener('click',ques2Ans);
ques3.addEventListener('click',ques3Ans);
ques4.addEventListener('click',ques4Ans);
ques5.addEventListener('click',ques5Ans);
ques6.addEventListener('click',ques6Ans);

let delay = 500;

let string = mainHeading.innerText;
mainHeading.innerText = '';

for(let i = 0; i<string.length; i++) {
    delay = delay+100;
    setTimeout(()=>{
        mainHeading.innerHTML = mainHeading.innerHTML + string[i];
    },delay);
};