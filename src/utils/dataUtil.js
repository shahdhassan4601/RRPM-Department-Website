// Mock Data
export const units = [
    {
        id: 1,
        name: "Main Medical Center",
        address: "123 Main St, City",
        hours: { from: "08:00", to: "18:00" },
        working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        phone_number: "123-456-7890",
        clinics: [
            {
                id: 101,
                name: "Cardiology Clinic",
                hours: { from: "08:00", to: "16:00" },
                services: ["Heart Surgery", "Cath Lab"],
            },
            {
                id: 102,
                name: "Dermatology Clinic",
                hours: { from: "08:00", to: "16:00" },
                services: ["Heart Surgery", "Cath Lab"],
            },
        ],
    },
    {
        id: 2,
        name: "Downtown Health Center",
        address: "456 Downtown Ave, City",
        hours: { from: "08:00", to: "18:00" },
        working_days: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        phone_number: "987-654-3210",
        clinics: [
            {
                id: 103,
                name: "Pediatrics Clinic",
                hours: { from: "08:00", to: "16:00" },
                services: ["Heart Surgery", "Cath Lab"],
            },
        ],
    },
    {
        id: 3,
        name: "Uptown Medical Plaza",
        address: "789 Uptown Blvd, City",
        hours: { from: "08:00", to: "18:00" },
        working_days: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sunday",
        ],
        phone_number: "555-123-4567",
        clinics: [
            {
                id: 104,
                name: "Orthopedics Clinic",
                hours: { from: "08:00", to: "16:00" },
                services: ["Heart Surgery", "Cath Lab"],
            },
        ],
    },
];

export const activities = [
    {
        id: 1,
        title: "Health Awareness Campaign",
        startDate: "2024-01-01",
        endDate: "2024-01-03",
        startTime: "09:00",
        endTime: "16:00",
        location: "City Square",
        status: "upcoming",
        summary: "A campaign to promote health awareness.",
        detailedDescription:
            "This campaign includes free medical checkups and educational talks.",
        unit_id: 1,
        files: [
            { media_id: 1, path: "/media/campaign.jpg" },
            { media_id: 2, path: "/media/campaign_flyer.pdf" },
        ],
        keywords: ["health", "awareness"],
    },
    {
        id: 2,
        title: "Free Eye Checkup Camp",
        startDate: "2023-02-15",
        endDate: "2023-02-16",
        startTime: "10:00",
        endTime: "15:00",
        location: "Community Hall",
        status: "completed",
        summary: "Providing free eye checkups to the public.",
        detailedDescription:
            "Eye specialists will be available for consultations and eye tests.",
        unit_id: 2,
        files: [{ media_id: 3, path: "/media/eye_checkup.jpg" }],
        keywords: ["health", "awareness"],
    },
    {
        id: 3,
        title: "Nutrition Workshop",
        startDate: "2024-03-10",
        endDate: "2024-03-10",
        startTime: "14:00",
        endTime: "17:00",
        location: "Health Center Auditorium",
        status: "ongoing",
        summary: "A workshop on healthy eating habits.",
        detailedDescription:
            "Dieticians will share tips on balanced diets and nutritional plans.",
        unit_id: 3,
        files: [{ media_id: 4, path: "/media/nutrition.jpg" }],
        keywords: ["health", "awareness"],
    },
];

export const scientificResearch = [
    {
        id: 1,
        title: "Advancements in Cardiology",
        publicationDate: "2023-11-20",
        organization: "Medical Research Institute",
        content: "Detailed research on the latest advancements in cardiology.",
        authors: [{ id: 1, name: "Dr. John Doe" }],
        keywords: ["diabetes", "management"],
        files: [{ id: 5, path: "/media/diabetes_study.pdf" }],
    },
    {
        id: 2,
        title: "Innovations in Diabetes Management",
        publicationDate: "2023-10-15",
        organization: "Diabetes Research Group",
        content:
            "A comprehensive study on the latest innovations in managing diabetes.",
        authors: [{ id: 1, name: "Dr. John Doe" }],
        keywords: ["diabetes", "management"],
        files: [{ id: 5, path: "/media/diabetes_study.pdf" }],
    },
    {
        id: 3,
        title: "Innovations in Orthopedics Medicine",
        publicationDate: "2024-5-15",
        organization: "Othopedics Research Group",
        content:
            "A comprehensive study on the latest innovations in orthopedics medicines.",
        authors: [{ id: 1, name: "Dr. John Doe" }],
        keywords: ["diabetes", "management"],
        files: [{ id: 5, path: "/media/diabetes_study.pdf" }],
    },
];

export const admins = [
    {
        username: "admin1",
        password: "hashedpassword123",
    },
    {
        username: "admin2",
        password: "hashedpassword456",
    },
    {
        username: "superadmin",
        password: "supersecurehash789",
    },
];

// fetch data from APIs using axios
