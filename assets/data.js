// apply for leaves
const Leave_type = [
  { id: "71", title: "Sick Leave" },
  { id: "5076", title: "Sick Leave Foreign" },
  { id: "62", title: "Casual Leave" },
  { id: "5069", title: "SA Annual Leave" },
  { id: "61", title: "Accident/Disability Leave" },
  { id: "68", title: "Preparatory to Retirement" },
  { id: "66", title: "Leave without Pay" },
  { id: "2064", title: "KW Privilege Leave" },
  { id: "3061", title: "KW Casual Leave" },
  { id: "5073", title: "SA Sick Leave" },
  { id: "5072", title: "SA Marriage Leave" },
  { id: "5067", title: "AE Sick Leave" },
  { id: "64", title: "Foreign Earned Leave" },
  { id: "65", title: "Joining Time Leave" },
  { id: "67", title: "Maternity Leave" },
  { id: "69", title: "Privilege Leave" },
  { id: "73", title: "Special Sick Leave" },
  { id: "2062", title: "KW Day Off" },
  { id: "5064", title: "AE Days Off" },
  { id: "63", title: "Days Off" },
  { id: "5071", title: "SA Leave Without Pay" },
  { id: "5074", title: "SA Special leave without Pay" },
  { id: "5063", title: "AE Annual Leave" },
  { id: "5075", title: "Days off Foreign" },
  { id: "70", title: "Quarantine Leave" },
  { id: "72", title: "Special Leave" },
  { id: "4061", title: "KW Sick Leave" },
  { id: "1061", title: "Optional Leave" },
  { id: "2063", title: "KW Maternity Leave" },
  { id: "2066", title: "KW Special Leave" },
  { id: "5070", title: "SA Days Off" },
  { id: "5065", title: "AE Leave Without Pay" },
  { id: "5066", title: "AE Maternity Leave" },
  { id: "5068", title: "AE Special Leave Without Pay" },
];

const LeaveReson = [
  {
    AbsAttTypeID: 61,
    typeName: [
      { id: "61", title: "Work Accident" },
      {
        id: "62",
        title: "Accident/Disability while going home from work",
      },
      { id: "63", title: "Work-related disease / Illness" },
      {
        id: "64",
        title: "Accident/Disability while coming to office from home",
      },
    ],
  },
  {
    AbsAttTypeID: 68,
    typeName: [{ id: "80", title: "Retirement Leave" }],
  },
  {
    AbsAttTypeID: 66,
    typeName: [
      { id: "72", title: "Continuation of Maternity Leave" },
      {
        id: "73",
        title: "Self-arranged secondment / gainful employment",
      },
      { id: "74", title: "Maternity Leave" },
      { id: "75", title: "Personal Exigency" },
      {
        id: "76",
        title: "Posting / transfer of spouse at other station.",
      },
      { id: "77", title: "Sickness / Sick Leave Continuation" },
      { id: "78", title: "Study" },
    ],
  },
  {
    AbsAttTypeID: 2064,
    typeName: [
      { id: "5065", title: "Personal work" },
      { id: "5066", title: "To see family" },
      { id: "5067", title: "To see sick family member" },
      { id: "5068", title: "To attend wedding" },
    ],
  },
  {
    AbsAttTypeID: 3061,
    typeName: [{ id: "6061", title: "Personal work" }],
  },
  {
    AbsAttTypeID: 5073,
    typeName: [
      { id: "8079", title: "Unwell/Fever" },
      { id: "8080", title: "Admitted" },
      { id: "8081", title: "Operation" },
    ],
  },
  {
    AbsAttTypeID: 5072,
    typeName: [{ id: "8078", title: "To attend wedding" }],
  },
  {
    AbsAttTypeID: 5067,
    typeName: [
      { id: "8069", title: "Unwell/Fever" },
      { id: "8070", title: "Admitted" },
      { id: "8071", title: "Operation" },
    ],
  },
  {
    AbsAttTypeID: 65,
    typeName: [
      { id: "70", title: "Settling In Leave" },
      { id: "71", title: "Permanent Transfer" },
    ],
  },
  {
    AbsAttTypeID: 67,
    typeName: [{ id: "79", title: "Maternity Leave" }],
  },
  {
    AbsAttTypeID: 69,
    typeName: [
      { id: "81", title: "Annual Leave" },
      { id: "82", title: "Curfew" },
      { id: "83", title: "Death of Close Relative" },
      { id: "84", title: "Detention by Law Enforcing Agency" },
      { id: "85", title: "Emergency" },
      { id: "86", title: "Sickness / Sick Leave Continuation" },
    ],
  },
  {
    AbsAttTypeID: 73,
    typeName: [
      { id: "97", title: "Hospitalization" },
      { id: "98", title: "Sickness / Sick Leave Continuation" },
      {
        id: "99",
        title: "Accident/Disability while coming to office from home",
      },
    ],
  },
  {
    AbsAttTypeID: 2062,
    typeName: [
      { id: "5062", title: "Personal work" },
      { id: "5063", title: "Rest Day" },
    ],
  },
  {
    AbsAttTypeID: 5064,
    typeName: [{ id: "8064", title: "Day Off" }],
  },
  {
    AbsAttTypeID: 63,
    typeName: [{ id: "68", title: "Day Off" }],
  },
  {
    AbsAttTypeID: 5071,
    typeName: [
      { id: "8075", title: "Emergency" },
      { id: "8076", title: "Education" },
      { id: "8077", title: "Care of sick family member/Treatment" },
    ],
  },
  {
    AbsAttTypeID: 5074,
    typeName: [
      { id: "8082", title: "Emergency" },
      { id: "8083", title: "Education" },
      { id: "8084", title: "Care of sick family member/Treatment" },
    ],
  },
  {
    AbsAttTypeID: 5063,
    typeName: [{ id: "8063", title: "Annual Leave" }],
  },
  {
    AbsAttTypeID: 5075,
    typeName: [{ id: "8086", title: "Day Off" }],
  },
  {
    AbsAttTypeID: 70,
    typeName: [{ id: "87", title: "Sick" }],
  },
  {
    AbsAttTypeID: 71,
    typeName: [
      { id: "88", title: "Work Accident" },
      { id: "89", title: "Cough and Cold" },
      { id: "90", title: "Fever" },
      { id: "91", title: "Hospitalization" },
      { id: "92", title: "Sick" },
    ],
  },
  {
    AbsAttTypeID: 72,
    typeName: [
      { id: "4061", title: "Others" },
      { id: "1061", title: "Sports" },
      { id: "93", title: "Accident" },
      { id: "94", title: "Iddat" },
      { id: "95", title: "Scouts / Rovers" },
      { id: "96", title: "Sickness / Sick Leave Continuation" },
    ],
  },
  {
    AbsAttTypeID: 4061,
    typeName: [
      { id: "7061", title: "Headache" },
      { id: "7062", title: "High Blood" },
      { id: "7063", title: "High Fever" },
    ],
  },
  {
    AbsAttTypeID: 1061,
    typeName: [
      { id: "3061", title: "Baisakhi" },
      { id: "3062", title: "Birthday of Guru Valmik Sawami Ji" },
      { id: "3063", title: "Birthday of Lord Zoroaster" },
      { id: "3064", title: "Basant Punchami" },
      { id: "3065", title: "Buddha Purnima" },
      { id: "3066", title: "Day after Easter" },
      { id: "3067", title: "Diwali" },
      { id: "3068", title: "Durga Pooja" },
      { id: "3069", title: "Dulhandi" },
      { id: "3070", title: "Dussehra" },
      { id: "3071", title: "Easter" },
      { id: "3072", title: "Eid-e-Rizwan" },
      { id: "3073", title: "Good Friday" },
      { id: "3074", title: "Guru Nanaks Birthday" },
      { id: "3075", title: "Holi" },
      { id: "3076", title: "Janam Ashtami" },
      { id: "3077", title: "Nauroze" },
      { id: "3078", title: "New Year Day" },
      { id: "3079", title: "Shivaratri" },
      { id: "9085", title: "26 December" },
    ],
  },
  {
    AbsAttTypeID: 5069,
    typeName: [{ id: "8073", title: "Annual Leave" }],
  },
  {
    AbsAttTypeID: 2063,
    typeName: [{ id: "5064", title: "Maternity Leave" }],
  },
  {
    AbsAttTypeID: 2066,
    typeName: [{ id: "5072", title: "Study" }],
  },
  {
    AbsAttTypeID: 5070,
    typeName: [{ id: "8074", title: "Day Off" }],
  },
  {
    AbsAttTypeID: 5065,
    typeName: [
      { id: "8065", title: "Emergency" },
      { id: "8066", title: "Education" },
      { id: "8067", title: "Care of sick family member/Treatment" },
    ],
  },
  {
    AbsAttTypeID: 5066,
    typeName: [{ id: "8068", title: "Maternity Leave" }],
  },
  {
    AbsAttTypeID: 5076,
    typeName: [
      { id: "8088", title: "Work Accident" },
      { id: "8089", title: "Cough and Cold" },
      { id: "8090", title: "Fever" },
      { id: "8091", title: "Hospitalization" },
      { id: "8092", title: "Sick" },
    ],
  },
  {
    AbsAttTypeID: 62,
    typeName: [
      { id: "65", title: "Personal Reason" },
      { id: "66", title: "Urgent Work" },
      { id: "67", title: "Emergency" },
    ],
  },
  {
    AbsAttTypeID: 5068,
    typeName: [{ id: "8072", title: "Hajj or Pilgrimage" }],
  },
];
//end

export { Leave_type, LeaveReson };
