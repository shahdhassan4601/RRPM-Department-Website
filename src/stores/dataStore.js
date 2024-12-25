import { defineStore } from "pinia";
import { ref } from "vue";
import {
    units as demoUnits,
    activities as demoActivities,
    scientificResearch as demoResearch,
    scientificResearch,
} from "../utils/dataUtil"; // Import mock data
import axios from "axios";
export const useDataStore = defineStore("dataStore", () => {
    // Define reactive this using reactive() or ref()

    const units = ref([]);
    const activities = ref([]);
    const research = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const nextId = ref(1);

    // Define actions inside the setup function
    const fetch = async () => {
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            // Fetching units data using Axios
            const unitsResponse = await axios.get("http://localhost/webproject/FetchUnits.php");
            units.value = unitsResponse.data.units;

            const activitiesResponse = await axios.get("http://localhost/webproject/FetchActivities.php");
            activities.value = activitiesResponse.data.activities;

            const  researchResponse = await axios.get("http://localhost/webproject/FetchSRs.php");
            research.value =  researchResponse.data.scientificResearch;

            
            nextId.value = units.value.length + 1;
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
            const newUnitWithId = { ...newUnit, id: nextId.value++ }; // Generate unique ID
            newUnitWithId.hours.from_time = newUnitWithId.hours.from;
            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/data",
                newUnitWithId
            );
            const addedUnit = response.data.unit; // Access the returned unit data
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
                `http://localhost:8000/data/${updatedUnit.id}`,
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
            await axios.delete(`http://localhost:8000/data/${unitId}`);
            // const response = await fetch(`http://localhost:8000/data/${unitId}`, {
            //     method: "DELETE",
            // });
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
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const newActivityWithId = { ...newActivity, id: nextId.value++ }; // Generate unique ID
            activities.value.push(newActivityWithId);
            return Promise.resolve(newActivityWithId); // Return the new Activity
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
            const index = activities.value.findIndex(
                (activity) => activity.id === updatedActivity.id
            );
            if (index !== -1) {
                activities.value[index] = {
                    ...updatedActivity,
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
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const newResearchWithId = { ...newResearch, id: nextId.value++ }; // Generate unique ID
            research.value.push(newResearchWithId);
            return Promise.resolve(newResearchWithId); // Return the new Activity
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
            const index = activities.value.findIndex(
                (research) => research.id === updatedResearch.id
            );
            if (index !== -1) {
                research.value[index] = {
                    ...updatedResearch,
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
        const result = research.value.find(
            (research) => research.id === ResearchId
        );
        return result;
    };
    const deleteResearch = async (researchId) => {
        loading.value = true;
        error.value = null;
        try {
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
        debugger;
        const response = await axios.post("http://localhost:8000/login", {
            username: user.username,
            password: user.password,
        });
        token.value = response.data.token;
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
