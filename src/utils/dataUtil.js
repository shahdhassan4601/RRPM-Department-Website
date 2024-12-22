// Mock Data
export let units = [
    {
      unit_id: 1,
      name: "Main Medical Center",
      address: "123 Main St, City",
      working_hours_start: "08:00",
      working_hours_end: "18:00",
      working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      phone_number: "123-456-7890",
      clinics: [
        {
          clinic_id: 101,
          clinic_name: "Cardiology Clinic",
          working_hours_start: "08:00",
          working_hours_end: "16:00",
          units_id: 1,
          services: [
            { service_id: 1, name: "Heart Checkup", unit_id: 1 },
            { service_id: 2, name: "ECG", unit_id: 1 },
          ],
        },
        {
          clinic_id: 102,
          clinic_name: "Dermatology Clinic",
          working_hours_start: "09:00",
          working_hours_end: "17:00",
          units_id: 1,
          services: [
            { service_id: 3, name: "Skin Allergy Test", unit_id: 1 },
            { service_id: 4, name: "Acne Treatment", unit_id: 1 },
          ],
        },
      ],
    },
    {
      unit_id: 2,
      name: "Downtown Health Center",
      address: "456 Downtown Ave, City",
      working_hours_start: "09:00",
      working_hours_end: "17:00",
      working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      phone_number: "987-654-3210",
      clinics: [
        {
          clinic_id: 103,
          clinic_name: "Pediatrics Clinic",
          working_hours_start: "10:00",
          working_hours_end: "16:00",
          units_id: 2,
          services: [
            { service_id: 5, name: "Child Vaccination", unit_id: 2 },
            { service_id: 6, name: "Growth Monitoring", unit_id: 2 },
          ],
        },
      ],
    },
    {
      unit_id: 3,
      name: "Uptown Medical Plaza",
      address: "789 Uptown Blvd, City",
      working_hours_start: "08:00",
      working_hours_end: "20:00",
      working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
      phone_number: "555-123-4567",
      clinics: [
        {
          clinic_id: 104,
          clinic_name: "Orthopedics Clinic",
          working_hours_start: "09:00",
          working_hours_end: "18:00",
          units_id: 3,
          services: [
            { service_id: 7, name: "Bone Density Test", unit_id: 3 },
            { service_id: 8, name: "Joint Replacement Consultation", unit_id: 3 },
          ],
        },
      ],
    },
  ];
  
  export let activities = [
    {
      activity_id: 1,
      title: "Health Awareness Campaign",
      date_start: "2024-01-01",
      date_end: "2024-01-03",
      time_start: "09:00",
      time_end: "16:00",
      location: "City Square",
      status: "upcoming",
      summary: "A campaign to promote health awareness.",
      description: "This campaign includes free medical checkups and educational talks.",
      unit_id: 1,
      media: [
        { media_id: 1, path: "/media/campaign.jpg" },
        { media_id: 2, path: "/media/campaign_flyer.pdf" },
      ],
      keywords: [
        { keyword_id: 1, keyword: "health" },
        { keyword_id: 2, keyword: "awareness" },
      ],
    },
    {
      activity_id: 2,
      title: "Free Eye Checkup Camp",
      date_start: "2024-02-15",
      date_end: "2024-02-16",
      time_start: "10:00",
      time_end: "15:00",
      location: "Community Hall",
      status: "upcoming",
      summary: "Providing free eye checkups to the public.",
      description: "Eye specialists will be available for consultations and eye tests.",
      unit_id: 2,
      media: [
        { media_id: 3, path: "/media/eye_checkup.jpg" },
      ],
      keywords: [
        { keyword_id: 3, keyword: "eye" },
        { keyword_id: 4, keyword: "checkup" },
      ],
    },
    {
      activity_id: 3,
      title: "Nutrition Workshop",
      date_start: "2024-03-10",
      date_end: "2024-03-10",
      time_start: "14:00",
      time_end: "17:00",
      location: "Health Center Auditorium",
      status: "ongoing",
      summary: "A workshop on healthy eating habits.",
      description: "Dieticians will share tips on balanced diets and nutritional plans.",
      unit_id: 3,
      media: [
        { media_id: 4, path: "/media/nutrition.jpg" },
      ],
      keywords: [
        { keyword_id: 5, keyword: "nutrition" },
        { keyword_id: 6, keyword: "diet" },
      ],
    },
  ];
  
  export let scientificResearch = [
    {
      SR_id: 1,
      title: "Advancements in Cardiology",
      publishing_date: "2023-11-20",
      organization: "Medical Research Institute",
      content: "Detailed research on the latest advancements in cardiology.",
      authors: [
        { author_id: 1, name: "Dr. John Smith" },
        { author_id: 2, name: "Dr. Alice Johnson" },
      ],
      keywords: [
        { keyword_id: 3, keyword: "cardiology" },
        { keyword_id: 4, keyword: "research" },
      ],
      media: [
        { media_id: 2, path: "/media/research.pdf" },
      ],
    },
    {
      SR_id: 2,
      title: "Innovations in Diabetes Management",
      publishing_date: "2023-10-15",
      organization: "Diabetes Research Group",
      content: "A comprehensive study on the latest innovations in managing diabetes.",
      authors: [
        { author_id: 3, name: "Dr. Michael Brown" },
      ],
      keywords: [
        { keyword_id: 7, keyword: "diabetes" },
        { keyword_id: 8, keyword: "management" },
      ],
      media: [
        { media_id: 5, path: "/media/diabetes_study.pdf" },
      ],
    },
    {
      SR_id: 3,
      title: "Innovations in Orthopedics Medicine",
      publishing_date: "2024-5-15",
      organization: "Othopedics Research Group",
      content: "A comprehensive study on the latest innovations in orthopedics medicines.",
      authors: [
        { author_id: 3, name: "Dr. Robert Davis" },
      ],
      keywords: [
        { keyword_id: 7, keyword: "othopedics" },
        { keyword_id: 8, keyword: "medicine" },
      ],
      media: [
        { media_id: 5, path: "/media/diabetes_study.pdf" },
      ],
    },
  ];
  
  export let admins = [
    {
      username: "admin1",
      password_hash: "hashedpassword123",
    },
    {
      username: "admin2",
      password_hash: "hashedpassword456",
    },
    {
      username: "superadmin",
      password_hash: "supersecurehash789",
    },
  ];
  
  // Utility Functions
  
  // --- CRUD Functions for Units ---
  export function createUnit(unit) {
    unit.unit_id = units.length ? units[units.length - 1].unit_id + 1 : 1;
    units.push(unit);
    return unit;
  }
  
  export function getUnits() {
    return units;
  }
  
  export function getUnitById(unitId) {
    return units.find((unit) => unit.unit_id === unitId) || null;
  }
  
  export function updateUnit(unitId, updatedData) {
    const index = units.findIndex((unit) => unit.unit_id === unitId);
    if (index === -1) return null;
    units[index] = { ...units[index], ...updatedData };
    return units[index];
  }
  
  export function deleteUnit(unitId) {
    const index = units.findIndex((unit) => unit.unit_id === unitId);
    if (index === -1) return false;
    units.splice(index, 1);
    return true;
  }
  
  // --- CRUD Functions for Activities ---
  export function createActivity(activity) {
    activity.activity_id = activities.length ? activities[activities.length - 1].activity_id + 1 : 1;
    activities.push(activity);
    return activity;
  }
  
  export function getActivities() {
    return activities;
  }
  
  export function getActivitiesByUnitId(unitId) {
    return activities.filter((activity) => activity.unit_id === unitId);
}

export function getActivityById(activityId) {
  return activities.find((activity) => activity.activity_id === activityId) || null;
}

export function updateActivity(activityId, updatedData) {
  const index = activities.findIndex((activity) => activity.activity_id === activityId);
  if (index === -1) return null;
  activities[index] = { ...activities[index], ...updatedData };
  return activities[index];
}

export function deleteActivity(activityId) {
  const index = activities.findIndex((activity) => activity.activity_id === activityId);
  if (index === -1) return false;
  activities.splice(index, 1);
  return true;
}

// --- CRUD Functions for Scientific Research ---
export function createScientificResearch(research) {
  research.SR_id = scientificResearch.length
    ? scientificResearch[scientificResearch.length - 1].SR_id + 1
    : 1;
  scientificResearch.push(research);
  return research;
}

export function getScientificResearch() {
  return scientificResearch;
}

export function getScientificResearchById(SRId) {
  return scientificResearch.find((research) => research.SR_id === SRId) || null;
}

export function updateScientificResearch(SRId, updatedData) {
  const index = scientificResearch.findIndex((research) => research.SR_id === SRId);
  if (index === -1) return null;
  scientificResearch[index] = { ...scientificResearch[index], ...updatedData };
  return scientificResearch[index];
}

export function deleteScientificResearch(SRId) {
  const index = scientificResearch.findIndex((research) => research.SR_id === SRId);
  if (index === -1) return false;
  scientificResearch.splice(index, 1);
  return true;
}

// --- CRUD Functions for Admins ---
export function createAdmin(admin) {
  admins.push(admin);
  return admin;
}

export function getAdmins() {
  return admins;
}

export function getAdminByUsername(username) {
  return admins.find((admin) => admin.username === username) || null;
}

export function updateAdmin(username, updatedData) {
  const index = admins.findIndex((admin) => admin.username === username);
  if (index === -1) return null;
  admins[index] = { ...admins[index], ...updatedData };
  return admins[index];
}

export function deleteAdmin(username) {
  const index = admins.findIndex((admin) => admin.username === username);
  if (index === -1) return false;
  admins.splice(index, 1);
  return true;
}

  