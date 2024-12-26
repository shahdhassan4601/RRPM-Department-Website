import { defineStore } from "pinia";
import { ref } from "vue";
import {
    units as demoUnits,
    activities as demoActivities,
    scientificResearch as demoResearch,
    scientificResearch,
} from "../utils/dataUtil"; // Import mock units
import axios from "axios";
export const useDataStore = defineStore("unitsStore", () => {
    // Define reactive this using reactive() or ref()

    const units = ref([]);
    const activities = ref([]);
    const research = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const token = ref(null);
    const nextUnitId = ref(1);
    const nextActivitiesId = ref(1);
    const nextResearchId = ref(1);
    const isLoggedIn = ref(false);

    // Define actions inside the setup function
    const fetch = async () => {
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            // Fetching units units using Axios
            const unitsResponse = await axios.get(
                "http://localhost:8000/units"
            );
            units.value = unitsResponse.data;

            const activitiesResponse = await axios.get(
                "http://localhost:8000/activities"
            );
            activities.value = activitiesResponse.data;

            const  researchResponse = await axios.get("http://localhost:8000/research");
            research.value =  researchResponse.data;

            nextUnitId.value = units.value.length + 1;
            nextActivitiesId.value = activities.value.length + 1;
            nextResearchId.value = research.value.length + 1;
            
            // units.value = await Promise.resolve(demoUnits);
            // activities.value = await Promise.resolve(demoActivities);
            // research.value = await Promise.resolve(demoResearch);
            //   debugger
        } catch (err) {
            error.value = "Failed to fetch units";
        } finally {
            loading.value = false;
        }
    };

    const addUnit = async (newUnit) => {
        loading.value = true;
        error.value = null;
        try {
            const newUnitWithId = { ...newUnit, id: nextUnitId.value++ }; // Generate unique ID
            newUnitWithId.hours.from_time = newUnitWithId.hours.from;
            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/units",
                newUnitWithId
            );
            const addedUnit = response.data.unit; // Access the returned unit units
            units.value.push(addedUnit);
            return Promise.resolve(addedUnit); // Return the new unit
        } catch (err) {
            error.value = "Failed to add unit";
        } finally {
            loading.value = false;
        }
    };

    const updateUnit = async (updatedUnit) => {
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const response = await axios.put(
                `http://localhost:8000/units/${updatedUnit.id}`,
                updatedUnit
            );
            const upUnit = response.data.unit;
            const index = units.value.findIndex(
                (unit) => unit.id === upUnit.id
            );
            if (index !== -1) {
                units.value[index] = {
                    ...upUnit,
                };
                return Promise.resolve(units.value[index]); // Return the updated unit
            } else {
                throw new Error("Unit not found");
            }
        } catch (err) {
            error.value = "Failed to update unit";
        } finally {
            loading.value = false;
        }
    };

    const getUnitById = (unitId) => {
        // debugger
        const result = units.value.find((unit) => unit.id === unitId);
        return result;
    };
    const deleteUnit = async (unitId) => {
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            await axios.delete(`http://localhost:8000/units/${unitId}`);
            const index = units.value.findIndex((unit) => unit.id === unitId);
            if (index !== -1) {
                units.value.splice(index, 1);
                return Promise.resolve(); // Return success
            } else {
                throw new Error("Unit not found");
            }
        } catch (err) {
            error.value = "Failed to delete unit";
        } finally {
            loading.value = false;
        }
    };

    const addActivity = async (newActivity) => {
        debugger
        loading.value = true;
        error.value = null;
        try {
            
            // Simulating API call
            const newActivityWithId = { ...newActivity, id: nextActivitiesId.value++ }; // Generate unique ID
            //activities.value.push(newActivityWithId);
            //return Promise.resolve(newActivityWithId); // Return the new Activity

            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/activities",
                newActivityWithId
            );
            const addedActivity = response.data.activity; // Access the returned activity units
            activities.value.push(addedActivity);
            return Promise.resolve(addedActivity);
        } catch (err) {
            error.value = "Failed to add Activity";
        } finally {
            loading.value = false;
        }
    };

    const updateActivity = async (updatedActivity) => {
        loading.value = true;
        error.value = null;
        try {
            //const index = activities.value.findIndex(
            //(activity) => activity.id === updatedActivity.id

            // Simulating API call
            const response = await axios.put(
                `http://localhost:8000/activities/${updatedActivity.id}`,
                updatedActivity
            );
            const upActivity = response.units.activity;
            const index = activities.value.findIndex(
                (activity) => activity.id === upActivity.id
            );

            if (index !== -1) {
                activities.value[index] = {
                    ...upActivity,
                };
                return Promise.resolve(activities.value[index]); // Return the updated unit
            } else {
                throw new Error("activity not found");
            }
        } catch (err) {
            error.value = "Failed to update activity";
        } finally {
            loading.value = false;
        }
    };

    const getActivityById = (activityId) => {
        // debugger
        const result = activities.value.find(
            (activity) => activity.id === activityId
        );
        return result;
    };

    const deleteActivity = async (activityId) => {
        loading.value = true;
        error.value = null;
        try {
            await axios.delete(
                `http://localhost:8000/activities/${activityId}`
            );

            const index = activities.value.findIndex(
                (activity) => activity.id === activityId
            );
            if (index !== -1) {
                activities.value.splice(index, 1);
                return Promise.resolve(); // Return success
            } else {
                throw new Error("activity not found");
            }
        } catch (err) {
            error.value = "Failed to delete activity";
        } finally {
            loading.value = false;
        }
    };

    const addResearch = async (newResearch) => {
        debugger
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const newResearchWithId = { ...newResearch, id: nextResearchId.value++ }; // Generate unique ID
            //research.value.push(newResearchWithId);
            //return Promise.resolve(newResearchWithId); // Return the new Activity

            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/research",
                newResearchWithId
            );
            const addedResearch = response.data.research; // Access the returned unit units
            research.value.push(addedResearch);
            return Promise.resolve(addedResearch); // Return the new unit
        } catch (err) {
            error.value = "Failed to add Research";
        } finally {
            loading.value = false;
        }
    };

    const updateResearch = async (updatedResearch) => {
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const response = await axios.put(
                `http://localhost:8000/research/${updatedResearch.id}`,
                updatedResearch
            );
            const upresearch = response.units.research;

            const index = research.value.findIndex(
                (research) => research.id === upresearch.id
            );
            if (index !== -1) {
                scientificResearch.value[index] = {
                    ...upresearch,
                };
                return Promise.resolve(research.value[index]); // Return the updated unit
            } else {
                throw new Error("Research not found");
            }
        } catch (err) {
            error.value = "Failed to update Research";
        } finally {
            loading.value = false;
        }
    };

    const getResearchById = (ResearchId) => {
        debugger
        const result = research.value.find(
            (research) => research.id === ResearchId
        );
        return result;
    };
    const deleteResearch = async (researchId) => {
        loading.value = true;
        error.value = null;
        try {
            await axios.delete(`http://localhost:8000/research/${researchId}`);

            const index = research.value.findIndex(
                (research) => research.id === researchId
            );
            if (index !== -1) {
                research.value.splice(index, 1);
                return Promise.resolve(); // Return success
            } else {
                throw new Error("research not found");
            }
        } catch (err) {
            error.value = "Failed to delete research";
        } finally {
            loading.value = false;
        }
    };
    const login = async (user) => {
        try {
            debugger
            const response = await axios.post(
                "http://localhost:8000/token",
                new URLSearchParams(user), // Convert to URL-encoded format
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            
            token.value = response.data.access_token;
            isLoggedIn.value = true;
            console.log("Login successful:", token.value);
        } catch (error) {
            if (error.response) {
                // send error response not print it
                return error.response.data.detail;
                // console.error("Login failed:", error.response.data.detail);
            } else {
                console.error("Error:", error.message);
            }
        }
    };

    
    const logout = async () => {
        token.value = null;
    };
    const signup = async (user) => {
        await axios.post("http://localhost:8000/signup", {
            username: user.username,
            password: user.password,
        });
    };
    // Return the reactive this and actions from the setup function
    return {
        units,
        loading,
        error,
        activities,
        research,
        token,
        fetch,
        addUnit,
        updateUnit,
        getUnitById,
        deleteUnit,
        addActivity,
        updateActivity,
        getActivityById,
        deleteActivity,
        addResearch,
        updateResearch,
        getResearchById,
        deleteResearch,
        login,
        logout,
        signup,
    };
});
