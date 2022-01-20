const universities = [
    {
      web_pages: ["http://www.aauj.edu/"],
      name: "Arab American University - Jenin",
      alpha_two_code: "PS",
      state_province: "Jenin",
      domains: ["aauj.edu"],
      country: "Palestine, State of",
      description:
        "Arab American University – AAUP is the first private university in Palestine. AAUP was founded in the year 2000 and it provides BA, MA and PhD degree programs. The main campus is located near Talfit at the south of Jenin Governorate, and the other campus is located in AlReehan area in Ramallah and AlBireh Governorate.",
      url: "https://rb.gy/0snmvu",
    },
    {
      web_pages: ["http://www.alaqsa.edu.ps/"],
      name: "Al-Aqsa University",
      alpha_two_code: "PS",
      state_province: "Khan Younis",
      domains: ["alaqsa.edu.ps"],
      country: "Palestine, State of",
      description:
        "Al-Aqsa University is a Palestinian university established in 1955 in the Gaza Strip, Palestine. Established in 1955 as the first higher education institution, Alaqsa University is the oldest governmental higher education institution.",
      url: "https://rb.gy/gxkrro",
    },
    {
      web_pages: ["http://www.alazhar.edu.ps/"],
      name: "Al-Azhar University of Gaza",
      alpha_two_code: "PS",
      state_province: "Gaza",
      domains: ["alazhar.edu.ps"],
      country: "Palestine, State of",
      description:
        "Al-Azhar University – Gaza, often abbreviated AUG, is a Palestinian, public, non-profit and independent higher education institution. During the first intifada, the Palestinian Leader Yasser Arafat issued a decree in September 1991 to establish a Palestinian national university",
      url: "https://rb.gy/afp2jx",
    },
    {
      web_pages: ["http://www.alquds.edu/"],
      name: "Al-Quds University - The Arab University in Jerusalem",
      alpha_two_code: "PS",
      state_province: "Jerusalem",
      domains: ["alquds.edu"],
      country: "Palestine, State of",
      description:
        "Al-Quds University is a Palestinian university with campuses in Jerusalem, Abu Dis, and al-Bireh. It was founded in 1984, but its official constitution was written in 1993 when Mohammed Nusseibeh, its first chancellor and chancellor of the College of Science and Technology, announced its formation.",
      url: "https://rb.gy/o52ufi",
    },
    {
      web_pages: ["http://www.bethlehem.edu/"],
      name: "Bethlehem University",
      alpha_two_code: "PS",
      state_province: "Bethlehem",
      domains: ["bethlehem.edu"],
      country: "Palestine, State of",
      description:
        "Bethlehem University is a Catholic university in Bethlehem, Palestine. It is the first university founded in the Occupied Palestinian Territories and the West Bank. ",
      url: "https://rb.gy/v0k94c",
    },
    {
      web_pages: ["http://www.birzeit.edu/"],
      name: "Birzeit University",
      alpha_two_code: "PS",
      state_province: "Ramallah",
      domains: ["birzeit.edu"],
      country: "Palestine, State of",
      description:
        "Birzeit University is a public university in the West Bank, registered by the Ministry of Social Affairs as charitable organization. It is accredited by the Ministry of Higher Education and located in Birzeit, West Bank, near Ramallah.",
      url: "https://rb.gy/2wumgv",
    },
    {
      web_pages: ["http://www.hebron.edu/"],
      name: "Hebron University",
      alpha_two_code: "PS",
      state_province: "Hebron",
      domains: ["hebron.edu"],
      country: "Palestine, State of",
      description:
        "Hebron University is a non profit, public university in the city of Hebron, West Bank. It has an undergraduate enrollment of more than ten thousand students.",
      url: "https://rb.gy/2lcjr0",
    },
    {
      web_pages: ["http://www.iugaza.edu.ps/"],
      name: "Islamic University of Gaza",
      alpha_two_code: "PS",
      state_province: "Gaza",
      domains: ["iugaza.edu.ps"],
      country: "Palestine, State of",
      description:
        "The Islamic University of Gaza, also known as IUG and IU Gaza, is an independent Palestinian university established in 1978 in Gaza City. The university has eleven faculties capable of awarding BA, BSc, MA, MSc, MBBS, diplomas and higher diplomas",
      url: "https://i.imgur.com/L4mv0a5.jpg",
    },
    {
      web_pages: ["http://www.najah.edu/"],
      name: "An-Najah National University",
      alpha_two_code: "PS",
      state_province: "Nablus",
      domains: ["najah.edu"],
      country: "Palestine, State of",
      description:
        "An-Najah National University is a Palestinian non-governmental public university governed by a board of trustees. It is located in Nablus, in the northern West Bank. The university has 22,000 students and 300 professors in 19 faculties. It is the largest Palestinian university.",
      url: "https://rb.gy/csuict",
    },
    {
      web_pages: ["http://www.ppu.edu/"],
      name: "Palestine Polytechnic University",
      alpha_two_code: "PS",
      state_province: "Hebron",
      domains: ["ppu.edu"],
      country: "Palestine, State of",
      description:
        "Palestine Polytechnic University is a university located in Hebron, West Bank, Palestine. The school was founded in 1978 by the University Graduates Union, a non-profit organization in Hebron. Enrolment in 2007 exceeded 5000 students",
      url: "https://rb.gy/mw0w7p",
    },
    {
      web_pages: ["http://www.ptcdb.edu.ps/"],
      name: "Palestine Technical College-Dier Elbalah",
      alpha_two_code: "PS",
      state_province: "Dier Elbalah",
      domains: ["ptcdb.edu.ps"],
      country: "Palestine, State of",
      description:
        "The Palestine Technical College is a university technical college in Deir El-Balah, Gaza Strip, Palestine. The college offers bachelor degree programs and 2-year associate degrees in technical education at the post-secondary level, as well as programmers for different target groups through continuing education. Wikipedia",
      url: "https://rb.gy/xtddq3",
    },
    {
      web_pages: ["http://www.ptuk.edu.ps/"],
      name: "Palestine Technical University - Kadoorie",
      alpha_two_code: "PS",
      state_province: "Tulkarm",
      domains: ["ptuk.edu.ps"],
      country: "Palestine, State of",
      description:
        "Palestine Technical University - Kadoorie is an agricultural college located in Tulkarm, in the northern West Bank. The college was inaugurated in 1930 after the British Government had received a bequest from the Iraqi-born Jewish philanthropist Sir Ellis Kadoorie.",
      url: "https://rb.gy/dh7oj4",
    },
    {
      web_pages: ["http://www.qou.edu/"],
      name: "Al-Quds Open University",
      alpha_two_code: "PS",
      state_province: "Rafah",
      domains: ["qou.edu"],
      country: "Palestine, State of",
      description:
        "Rafah Branch is the first higher educational institution established in Rafah; it was officially opened in 2000 to serve the Governorate and the nearby areas. The Number of the enrolled students in the academic year 2015/2016 reached (2050) students.",
      url: "https://rb.gy/u0ipek",
    },
    {
      web_pages: ["http://www.ucas.edu.ps/"],
      name: "University College of Applied Sciences",
      alpha_two_code: "PS",
      state_province: "Gaza",
      domains: ["ucas.edu.ps"],
      country: "Palestine, State of",
      description:
        "University College of Applied Sciences is a technical college in Gaza founded in 1998. It offers 40 majors in engineering, health, technology, administration, education and the humanities. The school has a student population of 6,000. The main campus is in Gaza City. Females make up 50% of the student body.",
      url: "https://rb.gy/cngoyq",
    },
    {
      web_pages: ["http://www.uou.edu.ps/"],
      name: "Ummah University",
      alpha_two_code: "PS",
      state_province: "Gaza",
      domains: ["uou.edu.ps"],
      country: "Palestine, State of",
      description:
        "Umma University is an educational institution established in Palestine in 2008. It is a registered company according to the Palestinian law of 1929.",
      url: "https://rb.gy/dl2yci",
    },
    {
      web_pages: ["http://www.up.edu.ps/"],
      name: "University of Palestine",
      alpha_two_code: "PS",
      state_province: "Al-Zahra",
      domains: ["up.edu.ps"],
      country: "Palestine, State of",
      description:
        "University of Palestine is a Palestinian private institution of higher education located in Al-Zahra. The university was established in 2005. Each specialization has a supervisory committee of lecturers.",
      url: "https://rb.gy/oivzya",
    },
  ];
  
  export default universities;