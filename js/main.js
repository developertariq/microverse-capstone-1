const speakers = [
  {
    image: './image/speaker_01.png',
    name: 'Yochai Benkler',
    work: 'Harvard Law School Professor',
    description: 'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    image: './image/speaker_02.png',
    name: 'Kilnam Chon',
    work: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    description: 'It opened the Internet era in earnest by developing Asia\'s first internet protocol network SDN and leading the nation\'s first dedicated line Internet connection in 1990.',
  },
  {
    image: './image/speaker_03.png',
    name: 'Sohyeong Noh',
    work: 'Art Center Nabi Director, CC Korea Director',
    description: 'As the author of Digital Art, Art of Our Time, he opened Art Center Nabi, the first digital art institution in Korea in 2000, and is currently in office.',
  },
  {
    image: './image/speaker_04.png',
    name: 'Julia Reda',
    work: 'Representative of the Young Pirates of Europe',
    description: 'European integration and young people\'s participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Union\'s copyright law in July.',
  },
  {
    image: './image/speaker_05.png',
    name: 'Lila Tretikov',
    work: 'Secretary General of the Wikimedia Foundation',
    description: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half the world\'s population.',
  },
  {
    image: './image/speaker_06.png',
    name: 'Ryan Merkley',
    work: 'Creative Commons CEO, former Mozilla Foundation COO',
    description: 'He led the open source project at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const speakerlist = document.createElement('div');
speakerlist.classList.add('speaker_list');
speakers.forEach((speaker) => {
  const speakerdiv = document.createElement('div');
  speakerdiv.classList.add('speaker');

  const imgdiv = document.createElement('div');
  imgdiv.classList.add('speaker_image');
  const img = document.createElement('img');
  img.setAttribute('src', speaker.image);
  img.setAttribute('alt', speaker.name);
  imgdiv.appendChild(img);
  speakerdiv.appendChild(imgdiv);

  const infodiv = document.createElement('div');
  infodiv.classList.add('speaker_info');

  const namediv = document.createElement('div');
  namediv.classList.add('main_name');
  namediv.innerText = speaker.name;
  infodiv.appendChild(namediv);

  const workdiv = document.createElement('div');
  workdiv.classList.add('work');
  workdiv.innerText = speaker.work;
  infodiv.appendChild(workdiv);

  const linediv = document.createElement('div');
  linediv.classList.add('guide_line');
  infodiv.appendChild(linediv);

  const descdiv = document.createElement('div');
  descdiv.classList.add('speaker_description');
  descdiv.innerText = speaker.description;
  infodiv.appendChild(descdiv);
  speakerdiv.appendChild(infodiv);

  speakerlist.appendChild(speakerdiv);
});

const section = document.createElement('section');
const speakerheading = document.createElement('h1');
speakerheading.classList.add('normal');
speakerheading.innerText = 'Featured Speakers';
section.appendChild(speakerheading);

const textline = document.createElement('div');
textline.classList.add('text_underline');
section.appendChild(textline);
section.appendChild(speakerlist);

const morespeaker = document.createElement('div');
morespeaker.classList.add('see_more_speaker');

const seebutton = document.createElement('button');
seebutton.id = 'seemore';
seebutton.innerText = 'More ';
const btnspan = document.createElement('span');
btnspan.classList.add('fas', 'cc_color');

const downbtn = document.createElement('i');
downbtn.classList.add('fas', 'fa-angle-down');
btnspan.appendChild(downbtn);
seebutton.appendChild(btnspan);

const hidebutton = document.createElement('button');
hidebutton.id = 'hidemore';
hidebutton.innerText = 'Hide ';

const upbtnspan = document.createElement('span');
upbtnspan.classList.add('fas', 'cc_color');

const upbtn = document.createElement('i');
upbtn.classList.add('fas', 'fa-angle-up');
upbtnspan.appendChild(upbtn);
hidebutton.appendChild(upbtnspan);

morespeaker.appendChild(seebutton);
morespeaker.appendChild(hidebutton);

const featuredspeaker = document.getElementById('speakers_section');
if (featuredspeaker != null) {
  featuredspeaker.appendChild(section);
  featuredspeaker.appendChild(morespeaker);
}

const seemore = document.querySelector('#seemore');
const hidemore = document.querySelector('#hidemore');

const spClass3 = document.querySelector('.speaker:nth-child(3)');
const spClass4 = document.querySelector('.speaker:nth-child(4)');
const spClass5 = document.querySelector('.speaker:nth-child(5)');
const spClass6 = document.querySelector('.speaker:nth-child(6)');

if (seemore != null) {
  seemore.addEventListener('click', () => {
    spClass3.style.display = 'flex';
    spClass4.style.display = 'flex';
    spClass5.style.display = 'flex';
    spClass6.style.display = 'flex';

    seemore.style.display = 'none';
    hidemore.style.display = 'block';
  });
}
if (hidemore != null) {
  hidemore.addEventListener('click', () => {
    spClass3.style.display = 'none';
    spClass4.style.display = 'none';
    spClass5.style.display = 'none';
    spClass6.style.display = 'none';

    seemore.style.display = 'block';
    hidemore.style.display = 'none';
  });
}

document.getElementById('mobile_menu_btn').addEventListener('click', () => {
  const mobileMenuBack = document.querySelector('#mobile_menu_back');
  mobileMenuBack.height = document.querySelector('body').height;
  mobileMenuBack.classList.toggle('hide');
});

document.getElementById('close_mobile_menu').addEventListener('click', () => {
  document.getElementById('mobile_menu_back').classList.toggle('hide');
});

const homepagepartner = document.getElementById('home_partner_section');
const homepagefooter = document.getElementById('home_footer_section');

const aboutpagepartner = document.getElementById('about_partner_section');
const aboutpagefooter = document.getElementById('about_footer_section');

if (window.matchMedia('(max-width: 767px)').matches) {
  if (homepagepartner != null) {
    homepagepartner.classList.add('hide');
    homepagepartner.classList.remove('show');
  }
  if (homepagefooter != null) {
    homepagefooter.classList.add('hide');
  }

  if (aboutpagefooter != null) {
    aboutpagefooter.classList.remove('footer_black');
  }
  if (aboutpagepartner != null) {
    aboutpagepartner.classList.add('show');
    aboutpagepartner.classList.remove('hide');
  }
} else {
  if (homepagefooter != null) {
    homepagefooter.classList.add('show');
  }

  if (homepagepartner != null) {
    homepagepartner.classList.add('show');
    homepagepartner.classList.remove('hide');
  }

  if (aboutpagefooter != null) {
    aboutpagefooter.querySelector('#cck_logo').setAttribute('src', './image/logo_cck_w_208x35.png');
    aboutpagefooter.classList.add('footer_black');
  }

  if (aboutpagepartner != null) {
    aboutpagepartner.classList.add('hide');
    aboutpagepartner.classList.remove('show');
  }
}
