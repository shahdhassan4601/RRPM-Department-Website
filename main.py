from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
import uvicorn
from fastapi import HTTPException

# Models for data representation
class Hours(BaseModel):
    from_time: str
    to: str

class Clinic(BaseModel):
    id: int
    name: str
    hours: Hours
    services: List[str]

class Unit(BaseModel):
    id: int
    name: str
    address: str
    hours: Hours
    working_days: List[str]
    phone_number: str
    clinics: List[Clinic]

class Activity(BaseModel):
    id: int
    title: str
    startDate: str
    endDate: str
    startTime: str
    endTime: str
    location: str
    status: str
    summary: str
    detailedDescription: str
    unit_id: int
    files: List[dict]
    keywords: List[str]

class Research(BaseModel):
    id: int
    title: str
    publicationDate: str
    organization: str
    content: str
    authors: List[dict]
    keywords: List[str]
    files: List[dict]

class Admin(BaseModel):
    username: str
    password: str

# FastAPI app setup
app = FastAPI()

# Allow all origins for testing purposes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data (converted from your JavaScript datautil)
mock_data: List[Unit] = [
    Unit(
        id=1,
        name="Main Medical Center",
        address="123 Main St, City",
        hours=Hours(from_time="08:00", to="18:00"),
        working_days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        phone_number="123-456-7890",
        clinics=[
            Clinic(
                id=101,
                name="Cardiology Clinic",
                hours=Hours(from_time="08:00", to="16:00"),
                services=["Heart Surgery", "Cath Lab"]
            ),
            Clinic(
                id=102,
                name="Dermatology Clinic",
                hours=Hours(from_time="08:00", to="16:00"),
                services=["Heart Surgery", "Cath Lab"]
            ),
        ]
    ),
    Unit(
        id=2,
        name="Downtown Health Center",
        address="456 Downtown Ave, City",
        hours=Hours(from_time="08:00", to="18:00"),
        working_days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        phone_number="987-654-3210",
        clinics=[
            Clinic(
                id=103,
                name="Pediatrics Clinic",
                hours=Hours(from_time="08:00", to="16:00"),
                services=["Heart Surgery", "Cath Lab"]
            ),
        ]
    ),
    Unit(
        id=3,
        name="Uptown Medical Plaza",
        address="789 Uptown Blvd, City",
        hours=Hours(from_time="08:00", to="18:00"),
        working_days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        phone_number="555-123-4567",
        clinics=[
            Clinic(
                id=104,
                name="Orthopedics Clinic",
                hours=Hours(from_time="08:00", to="16:00"),
                services=["Heart Surgery", "Cath Lab"]
            ),
        ]
    ),
]

# Additional data
mock_activities: List[Activity] = [
    Activity(
        id=1,
        title="Health Awareness Campaign",
        startDate="2024-01-01",
        endDate="2024-01-03",
        startTime="09:00",
        endTime="16:00",
        location="City Square",
        status="upcoming",
        summary="A campaign to promote health awareness.",
        detailedDescription="This campaign includes free medical checkups and educational talks.",
        unit_id=1,
        files=[{"media_id": 1, "path": "/media/campaign.jpg"}, {"media_id": 2, "path": "/media/campaign_flyer.pdf"}],
        keywords=["health", "awareness"]
    ),
    Activity(
        id=2,
        title="Free Eye Checkup Camp",
        startDate="2023-02-15",
        endDate="2023-02-16",
        startTime="10:00",
        endTime="15:00",
        location="Community Hall",
        status="completed",
        summary="Providing free eye checkups to the public.",
        detailedDescription="Eye specialists will be available for consultations and eye tests.",
        unit_id=2,
        files=[{"media_id": 3, "path": "/media/eye_checkup.jpg"}],
        keywords=["health", "awareness"]
    ),
    Activity(
        id=3,
        title="Nutrition Workshop",
        startDate="2024-03-10",
        endDate="2024-03-10",
        startTime="14:00",
        endTime="17:00",
        location="Health Center Auditorium",
        status="ongoing",
        summary="A workshop on healthy eating habits.",
        detailedDescription="Dieticians will share tips on balanced diets and nutritional plans.",
        unit_id=3,
        files=[{"media_id": 4, "path": "/media/nutrition.jpg"}],
        keywords=["health", "awareness"]
    ),
]

mock_research: List[Research] = [
    Research(
        id=1,
        title="Advancements in Cardiology",
        publicationDate="2023-11-20",
        organization="Medical Research Institute",
        content="Detailed research on the latest advancements in cardiology.",
        authors=[{"id": 1, "name": "Dr. John Doe"}],
        keywords=["cardiology", "advancements"],
        files=[{"id": 5, "path": "/media/cardiology_study.pdf"}]
    ),
    Research(
        id=2,
        title="Innovations in Diabetes Management",
        publicationDate="2023-10-15",
        organization="Diabetes Research Group",
        content="A comprehensive study on the latest innovations in managing diabetes.",
        authors=[{"id": 1, "name": "Dr. John Doe"}],
        keywords=["diabetes", "management"],
        files=[{"id": 5, "path": "/media/diabetes_study.pdf"}]
    ),
    Research(
        id=3,
        title="Innovations in Orthopedics Medicine",
        publicationDate="2024-05-15",
        organization="Orthopedics Research Group",
        content="A comprehensive study on the latest innovations in orthopedics medicines.",
        authors=[{"id": 1, "name": "Dr. John Doe"}],
        keywords=["orthopedics", "innovations"],
        files=[{"id": 5, "path": "/media/orthopedics_study.pdf"}]
    ),
]

mock_admins: List[Admin] = [
    Admin(username="admin", password="adminadmin")
]

# Endpoints
@app.get("/units")
async def get_data():
    return JSONResponse(content=[x.model_dump() for x in mock_data])

@app.get("/activities")
async def get_activities():
    return JSONResponse(content=[x.model_dump() for x in mock_activities])

@app.get("/research")
async def get_research():
    return JSONResponse(content=[x.model_dump() for x in mock_research])

# CRUD functions for Units
@app.post("/units", status_code=201)
async def add_unit(unit: Unit):
    if any(u.id == unit.id for u in mock_data):
        raise HTTPException(status_code=400, detail="Unit with this ID already exists.")
    mock_data.append(unit)
    return {"message": "Unit added successfully.", "unit": unit.model_dump()}

@app.put("/units/{unit_id}")
async def update_unit(unit_id: int, updated_unit: Unit):
    for index, unit in enumerate(mock_data):
        if unit.id == unit_id:
            mock_data[index] = updated_unit
            return {"message": "Unit updated successfully.", "unit": updated_unit.model_dump()}
    raise HTTPException(status_code=404, detail="Unit not found.")

@app.delete("/units/{unit_id}")
async def delete_unit(unit_id: int):
    for index, unit in enumerate(mock_data):
        if unit.id == unit_id:
            del mock_data[index]
            return {"message": "Unit deleted successfully."}
    raise HTTPException(status_code=404, detail="Unit not found.")

# CRUD functions for Activities
@app.post("/activities", status_code=201)
async def add_activity(activity: Activity):
    if any(a.id == activity.id for a in mock_activities):
        raise HTTPException(status_code=400, detail="Activity with this ID already exists.")
    mock_activities.append(activity)
    return {"message": "Activity added successfully.", "activity": activity.model_dump()}

@app.put("/activities/{activity_id}")
async def update_activity(activity_id: int, updated_activity: Activity):
    for index, activity in enumerate(mock_activities):
        if activity.id == activity_id:
            mock_activities[index] = updated_activity
            return {"message": "Activity updated successfully.", "activity": updated_activity.model_dump()}
    raise HTTPException(status_code=404, detail="Activity not found.")

@app.delete("/activities/{activity_id}")
async def delete_activity(activity_id: int):
    for index, activity in enumerate(mock_activities):
        if activity.id == activity_id:
            del mock_activities[index]
            return {"message": "Activity deleted successfully."}
    raise HTTPException(status_code=404, detail="Activity not found.")

# CRUD functions for Scientific Research
@app.post("/research", status_code=201)
async def add_research(research: Research):
    if any(r.id == research.id for r in mock_research):
        raise HTTPException(status_code=400, detail="Research with this ID already exists.")
    mock_research.append(research)
    return {"message": "Research added successfully.", "research": research.model_dump()}

@app.put("/research/{research_id}")
async def update_research(research_id: int, updated_research: Research):
    for index, research in enumerate(mock_research):
        if research.id == research_id:
            mock_research[index] = updated_research
            return {"message": "Research updated successfully.", "research": updated_research.model_dump()}
    raise HTTPException(status_code=404, detail="Research not found.")

@app.delete("/research/{research_id}")
async def delete_research(research_id: int):
    for index, research in enumerate(mock_research):
        if research.id == research_id:
            del mock_research[index]
            return {"message": "Research deleted successfully."}
    raise HTTPException(status_code=404, detail="Research not found.")

# Run the app
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
