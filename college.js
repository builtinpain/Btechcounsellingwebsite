const colleges = [
  {
    image: "Bombay",
    name: "IIT BOMBAY",
   nirf: "2",
    location: "Mumbai",
    address: "Powai, Mumbai, Maharashtra 400076",
    svgLocation: "Maharashtra",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.6 Lakhs",
    avgpackage: "22",
    scholarshipAvailable: false,
   

  },
  {
    image: "Delhi",
    name: "IIT DELHI",
   nirf: "4",
    location: "New Delhi",
    address: "Hauz Khas, New Delhi 110016",
    svgLocation: "Delhi",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹9.3 Lakhs",
    avgpackage: "24 ",
    scholarshipAvailable: true,
  },
  {
    image: "Madras",
    name: "IIT MADRAS",
    nirf: "1",
    location: "Chennai",
    address: "Sardar Patel Road, Chennai, Tamil Nadu 600036",
    svgLocation: "Tamil Nadu",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.5 Lakhs",
    avgpackage: "22 ",
    scholarshipAvailable: true,
    topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Oracle", "Qualcomm"]

  },
  
  {
    image: "Roorke",
    name: "IIT ROORKEE",
   nirf: "6",
    location: "Roorkee",
    address: "Roorkee, Uttarakhand 247667",
    svgLocation: "Uttarakhand",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.1 Lakhs",
    avgpackage: "18 ",
    scholarshipAvailable: true
  },
  
  {
    image: "Jammu",
    name: "IIT JAMMU",
    nirf: "62",
    location: "Jammu",
    address: "Jagti, Jammu, Jammu & Kashmir 181221",
    svgLocation: "Jammu & Kashmir",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹9.7 Lakhs",
    avgpackage: "16 ",
    scholarshipAvailable: false
  },
  {
    image: "Hyderabad",
    name: "IIT HYDERABAD",
    nirf: "8",
    location: "Hyderabad",
    address: "Kandi, Sangareddy, Telangana 502285",
    svgLocation: "Telangana",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹11.9 Lakhs",
    avgpackage: "28 ",
    scholarshipAvailable: false
  },
  {
    image: "Goa",
    name: "IIT GOA",
   nirf: "16",
    location: "Goa",
    address: "Farmagudi, Ponda, Goa 403401",
    svgLocation: "Goa",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.0 Lakhs",
    avgpackage: "18 ",
    scholarshipAvailable: true
  },
  {
    image: "Guwhati",
    name: "IIT GUWAHATI",
    nirf: "7",
    location: "Guwahati",
    address: "Amingaon, Guwahati, Assam 781039",
    svgLocation: "Assam",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.4 Lakhs",
    avgpackage: "19 ",
    scholarshipAvailable: false
  }
  ,{
  image: 'Dtu',
  name: 'DTU',
  nirf: '29',
  location: 'Delhi',
  address: 'Shahbad Daulatpur, Bawana Road, New Delhi',
  ownership: 'Government',
  modeOfCounselling: 'JAC Delhi',
  svgLocation: 'Delhi',
  fees: '₹9.7 Lakhs',
  avgpackage: '15 ',
  scholarshipAvailable: true
},
{
  image: 'Nsut',
  name: 'NSUT',
  nirf: '57',
  location: 'Delhi',
  address: 'Sector 3, Dwarka, New Delhi',
  ownership: 'Government',
  modeOfCounselling: 'JAC Delhi',
  svgLocation: 'Delhi',
  fees: '₹9.5 Lakhs',
  avgpackage: '17 ',
  scholarshipAvailable: true
},
{
  image: 'Usict',
  name: 'USICT',
  nirf: '89',
  location: 'Delhi',
  address: 'Sector 16C, Dwarka, New Delhi',
  ownership: 'Government',
  modeOfCounselling: 'IPU Counselling',
  svgLocation: 'Delhi',
  fees: '₹5.7 Lakhs',
  avgpackage: '14 ',
  scholarshipAvailable: true
},
{
  image: 'Mait',
  name: 'MAIT',
  nirf: '250',
  location: 'Delhi',
  address: 'Rohini, New Delhi',
  ownership: 'Private',
  modeOfCounselling: 'IPU Counselling',
  svgLocation: 'Delhi',
  fees: '₹7.2 Lakhs',
  avgpackage: '8 ',
  scholarshipAvailable: true
},
{
  image: 'Msit',
  name: 'MSIT',
  nirf: '300',
  location: 'Delhi',
  address: 'Janakpuri, New Delhi',
  ownership: 'Private',
  modeOfCounselling: 'IPU Counselling',
  svgLocation: 'Delhi',
  fees: '₹7.0 Lakhs',
  avgpackage: '7.5 ',
  scholarshipAvailable: true
},
{
  image: 'Bpit',
  name: 'BPIT',
  nirf: '341',
  location: 'Delhi',
  address: 'Rohini, New Delhi',
  ownership: 'Private',
  modeOfCounselling: 'IPU Counselling',
  svgLocation: 'Delhi',
  fees: '₹6.8 Lakhs',
  avgpackage: '7 ',
  scholarshipAvailable: true
},

{
  image: 'Trichy',
  name: 'NIT TRICHY',
  nirf: '9',
  location: 'Tiruchirappalli',
  address: 'Tiruchirappalli, Tamil Nadu',
  ownership: 'Government',
  modeOfCounselling: 'JoSAA',
  svgLocation: 'Tamil Nadu',
  fees: '₹6.8 Lakhs',
  avgpackage: '16 ',
  scholarshipAvailable: true
},
{
  image: 'Surathkal',
  name: 'NIT SURATHKAL',
  nirf: '18',
  location: 'Mangaluru',
  address: 'Surathkal, Karnataka',
  ownership: 'Government',
  modeOfCounselling: 'JoSAA',
  svgLocation: 'Karnataka',
  fees: '₹6.7 Lakhs',
  avgpackage: '15 ',
  scholarshipAvailable: true
},
{
  image: 'Warangal',
  name: 'NIT WARANGAL',
  nirf: '28 ',
  location: 'Warangal',
  address: 'Warangal, Telangana',
  ownership: 'Government',
  modeOfCounselling: 'JoSAA',
  svgLocation: 'Telangana',
  fees: '₹6.6 Lakhs',
  avgpackage: '17 ',
  scholarshipAvailable: true
},
{
  image: 'Allahabad',
  name: 'MNNIT ALLAHABAD',
  nirf: '62',
  location: 'Prayagraj',
  address: 'Prayagraj, Uttar Pradesh',
  ownership: 'Government',
  modeOfCounselling: 'JoSAA',
  svgLocation: 'Uttar Pradesh',
  fees: '₹6.5 Lakhs',
  avgpackage: '14 ',
  scholarshipAvailable: true
},
{
    image: "Kanpur",
    name: "IIT KANPUR",
    nirf: '5',
    location: "Kanpur",
    address: "Kalyanpur, Kanpur, Uttar Pradesh 208016",
    svgLocation: "Uttar Pradesh",
    ownership: "Government",
    modeOfCounselling: "JoSAA",
    fees: "₹10.2 Lakhs",
    avgpackage: "26 ",
    scholarshipAvailable: false
  },
{
  image: "Kharagpur",
  name: "IIT KHARAGPUR",
  nirf: "5",
  location: "Kharagpur",
  address: "Kharagpur, West Bengal 721302",
  svgLocation: "West Bengal",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.8 Lakhs",
  avgpackage: "24",
  scholarshipAvailable: true
},
{
  image: "Bhu",
  name: "IIT BHU VARANASI",
  nirf: "10",
  location: "Varanasi",
  address: "Banaras Hindu University, Varanasi, Uttar Pradesh 221005",
  svgLocation: "Uttar Pradesh",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.4 Lakhs",
  avgpackage: "18",
  scholarshipAvailable: true
},
{
  image: "Dhanbad",
  name: "IIT (ISM) DHANBAD",
  nirf: "15",
  location: "Dhanbad",
  address: "Dhanbad, Jharkhand 826004",
  svgLocation: "Jharkhand",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.2 Lakhs",
  avgpackage: "17",
  scholarshipAvailable: true
},
{
  image: "Indore",
  name: "IIT INDORE",
  nirf: "16",
  location: "Indore",
  address: "Simrol, Indore, Madhya Pradesh 453552",
  svgLocation: "Madhya Pradesh",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.6 Lakhs",
  avgpackage: "25",
  scholarshipAvailable: true
},
{
  image: "Bhubaneswar",
  name: "IIT BHUBANESWAR",
  nirf: "54",
  location: "Bhubaneswar",
  address: "Argul, Khordha, Odisha 752050",
  svgLocation: "Odisha",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.1 Lakhs",
  avgpackage: "16",
  scholarshipAvailable: true
},
{
  image: "Gandhinagar",
  name: "IIT GANDHINAGAR",
  nirf: "18",
  location: "Gandhinagar",
  address: "Palaj, Gandhinagar, Gujarat 382355",
  svgLocation: "Gujarat",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.3 Lakhs",
  avgpackage: "20",
  scholarshipAvailable: true
},
{
  image: "Ropar",
  name: "IIT ROPAR",
  nirf: "22",
  location: "Rupnagar",
  address: "Rupnagar, Punjab 140001",
  svgLocation: "Punjab",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.3 Lakhs",
  avgpackage: "18",
  scholarshipAvailable: true
},
{
  image: "Jodhpur",
  name: "IIT JODHPUR",
  nirf: "30",
  location: "Jodhpur",
  address: "Karwar, Jodhpur, Rajasthan 342037",
  svgLocation: "Rajasthan",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.2 Lakhs",
  avgpackage: "19",
  scholarshipAvailable: true
},
{
  image: "Patna",
  name: "IIT PATNA",
  nirf: "34",
  location: "Patna",
  address: "Bihta, Patna, Bihar 801106",
  svgLocation: "Bihar",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.2 Lakhs",
  avgpackage: "19",
  scholarshipAvailable: true
},
{
  image: "Mandi",
  name: "IIT MANDI",
  nirf: "31",
  location: "Mandi",
  address: "Kamand, Mandi, Himachal Pradesh 175075",
  svgLocation: "Himachal Pradesh",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.0 Lakhs",
  avgpackage: "22",
  scholarshipAvailable: true
},
{
  image: "Tirupati",
  name: "IIT TIRUPATI",
  nirf: "59",
  location: "Tirupati",
  address: "Yerpedu, Tirupati, Andhra Pradesh 517619",
  svgLocation: "Andhra Pradesh",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.1 Lakhs",
  avgpackage: "15",
  scholarshipAvailable: true
},

{
  image: "Dharwad",
  name: "IIT DHARWAD",
  nirf: "93",
  location: "Dharwad",
  address: "Chikkamalligawad, Dharwad, Karnataka 580011",
  svgLocation: "Karnataka",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.0 Lakhs",
  avgpackage: "13",
  scholarshipAvailable: true
},
{
  image: "Bhilai",
  name: "IIT BHILAI",
  nirf: "73",
  location: "Bhilai",
  address: "Kutelabhata, Durg, Chhattisgarh 491002",
  svgLocation: "Chhattisgarh",
  ownership: "Government",
  modeOfCounselling: "JoSAA",
  fees: "₹10.0 Lakhs",
  avgpackage: "14",
  scholarshipAvailable: true
},
{
  image: "Vips",
  name: "VIPS",
  nirf: "400",
  location: "New Delhi",
  address: "AU Block, Outer Ring Road, Pitampura, New Delhi 110034",
  svgLocation: "Delhi",
  ownership: "Private",
  modeOfCounselling: "IPU Counselling",
  fees: "₹7.6 Lakhs",
  avgpackage: "7",
  scholarshipAvailable: true
},{
  image: "Ymca",
  name: "J.C. BOSE UST YMCA",
  nirf: "NR",
  location: "Faridabad",
  address: "Sector 6, Mathura Road, Faridabad, Haryana 121006",
  svgLocation: "Haryana",
  ownership: "Government",
  modeOfCounselling: "HSTES",
  fees: "₹4.8 Lakhs",
  avgpackage: "6.5",
  scholarshipAvailable: true,
  topRecruiters: [
    "Microsoft",
    "Amazon",
    "Samsung",
    "TCS",
    "Infosys",
    "Deloitte",
    "Accenture",
    "HCLTech"
  ]
}

];

const recruitersData = {
  "IIT BOMBAY": ["Google","Microsoft","Amazon","Apple","Goldman Sachs","Texas Instruments"],
  "IIT DELHI": ["Google","Microsoft","Amazon","Adobe","Oracle","Qualcomm"],
  "IIT MADRAS": ["Google","Microsoft","Amazon","Uber","Cisco","Intel"],
  "IIT KANPUR": ["Google","Microsoft","Amazon","Samsung","Oracle","Adobe"],
  "IIT ROORKEE": ["Google","Amazon","Microsoft","Goldman Sachs","Oracle","Adobe"],
  "IIT RAIPUR": ["TCS","Infosys","Accenture","Wipro","Capgemini","L&T"],
  "IIT JAMMU": ["TCS","Infosys","Accenture","Capgemini","Wipro","HCL"],
  "IIT HYDERABAD": ["Google","Microsoft","Amazon","Apple","Qualcomm","NVIDIA"],
  "IIT GOA": ["Amazon","Microsoft","Infosys","TCS","Intel","Accenture"],
  "IIT GUWAHATI": ["Google","Microsoft","Amazon","Oracle","Samsung","Adobe"],

  "DTU": ["Google","Microsoft","Amazon","Adobe","ZS Associates","Deloitte"],
  "NSUT": ["Google","Microsoft","Amazon","Adobe","Samsung","Paytm"],
  "USICT": ["Amazon","Adobe","TCS","Infosys","Accenture","Cognizant"],
  "MAIT": ["TCS","Infosys","Accenture","Capgemini","Cognizant","Wipro"],
  "MSIT": ["TCS","Infosys","Accenture","Capgemini","Wipro","HCL"],
  "BPIT": ["TCS","Infosys","Accenture","Wipro","Cognizant","Tech Mahindra"],
  "BVCOE": ["TCS","Infosys","Accenture","Capgemini","Tech Mahindra","HCL"],

  "NIT TRICHY": ["Google","Microsoft","Amazon","Oracle","Intel","Qualcomm"],
  "NIT SURATHKAL": ["Google","Microsoft","Amazon","NVIDIA","Intel","Oracle"],
  "NIT WARANGAL": ["Google","Microsoft","Amazon","Oracle","Adobe","Samsung"],
  "MNNIT ALLAHABAD": ["Amazon","Microsoft","Adobe","Oracle","Goldman Sachs","Samsung"],
  'J.C. BOSE UST YMCA':["Adobe",
  "Amazon",
  "Google",
  "Samsung",
  "Microsoft",
  "Flipkart",
  "KPMG",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "HCLTech"]
};


const root = document.getElementById("root");

function getCollege(data) {
    // root.innerHTML = "";

    data.forEach((college) => {

        const card = document.createElement("div");
        card.className = "college-card";
        card.innerHTML = `
            <img src="./Collegeimage/${college.image}.jpg" class="college-img">

            <div class="college-info">
                <h2>${college.name}</h2>

                <p><strong>NIRF:</strong> ${college.nirf}</p>

                <p><strong>Location:</strong> ${college.location}</p>

                <p><strong>Address:</strong> ${college.address}</p>

                <p><strong>Ownership:</strong> ${college.ownership}</p>

                <p><strong>Counselling:</strong> ${college.modeOfCounselling}</p>

                <p><strong>Fees:</strong> ${college.fees}</p>

                <p><strong>Average Package:</strong> ${college.avgpackage}LPA</p>

                <p>
                    <strong>Scholarship:</strong>
                    ${college.scholarshipAvailable ? "✅ Available" : "❌ Not Available"}
                </p>

                <h3>Top Recruiters</h3>

                <div class="recruiters">
                    ${(recruitersData[college.name] || [])
                        .map(company => `<span>${company}</span>`)
                        .join("")}
                </div>

            </div>
        `;

        root.appendChild(card);
    });
}

getCollege(colleges);

function handleclick(e){
 const filter= colleges.filter((search)=>{
    return search.name.toLocaleLowerCase().includes(input.value.toLocaleLowerCase());
  })
  const root = document.getElementById("root");
    root.textContent = "";
    console.log(filter)
    getCollege(filter);

}


const input=document.getElementById('inp')
input.addEventListener('input',handleclick)

const scholarship=document.getElementById('ship')
scholarship.addEventListener('click',()=>{
  const available=colleges.filter((scholar)=>scholar.scholarshipAvailable==true)
  const root = document.getElementById("root");
    root.textContent = "";
    getCollege(available);
})


const nirf=document.getElementById('nirf')
nirf.addEventListener('click',()=>{
  // const rank=colleges.filter((ranking)=>ranking.sort((a,b)=>b.(nirf)-(a.Number(nirf))))
  const rank=colleges.sort((a,b)=>Number(a.nirf)-Number(b.nirf))
  console.log(rank);
   const root = document.getElementById("root");
    root.textContent = "";
    getCollege(rank);
})

const avgpackage=document.getElementById('avg')
avgpackage.addEventListener('click',()=>{
  const pack=colleges.sort((a,b)=>Number(b.avgpackage)-Number(a.avgpackage))
  const root = document.getElementById("root");
    root.textContent = "";
    getCollege(pack);
})


const reset=document.getElementById('r')
reset.addEventListener('click',()=>{
  const root = document.getElementById("root");
    root.textContent = "";
    
  getCollege(colleges);
})

// const arr=[10,20,30,40];
// const sorting=arr.sort((a,b)=>b-a);
// console.log(sorting);




