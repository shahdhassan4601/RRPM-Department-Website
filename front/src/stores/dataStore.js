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
            const unitsResponse = await axios.get("http://localhost:8000/data");
            units.value = unitsResponse.data;

            const activitiesResponse = await axios.get("http://localhost:8000/data");
            activities.value = activitiesResponse.data;

            const  researchResponse = await axios.get("http://localhost:8000/data");
            research.value =  researchResponse.data;

            // units.value = await Promise.resolve(demoUnits);

            nextId.value = units.value.length + 1;
            //activities.value = await Promise.resolve(demoActivities);
            //research.value = await Promise.resolve(demoResearch);
            //   debugger
        } catch (err) {
            error.value = "Failed to fetch units";
        } finally {
            loading.value = false;
        }
    };

    const addUnit = async (newUnit) => {
        // debugger
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
        // debugger
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const newActivityWithId = { ...newActivity, id: nextId.value++ }; // Generate unique ID
            //activities.value.push(newActivityWithId);
            //return Promise.resolve(newActivityWithId); // Return the new Activity

            newActivityWithId.hours.from_time =newActivityWithId.hours.from; 
            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/data",
                newActivityWithId
            );
            const addedActivity = response.data.activity; // Access the returned activity data
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
                `http://localhost:8000/data/${updatedActivity.id}`,
                updatedActivity
            );
            const upActivity = response.data.activity;
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
            
            await axios.delete(`http://localhost:8000/data/${activityId}`);
            
            
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
        // debugger
        loading.value = true;
        error.value = null;
        try {
            // Simulating API call
            const newResearchWithId = { ...newResearch, id: nextId.value++ }; // Generate unique ID
            //research.value.push(newResearchWithId);
            //return Promise.resolve(newResearchWithId); // Return the new Activity

            newResearchWithId.hours.from_time = newResearchWithId.hours.from; 
            // Simulating API call
            const response = await axios.post(
                "http://localhost:8000/data",
                newResearchWithId
            );
            const addedResearch = response.data.research; // Access the returned unit data
           research.value.push(addedResearch );
            return Promise.resolve(addedResearch ); // Return the new unit
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
                `http://localhost:8000/data/${updatedResearch.id}`,
                updatedResearch
            );
            const upresearch = response.data.research;
           
           
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
        // debugger
        const result = research.value.find(
            (research) => research.id === ResearchId
        );
        return result;
    };
    const deleteResearch = async (researchId) => {
        loading.value = true;
        error.value = null;
        try {
            
            await axios.delete(`http://localhost:8000/data/${researchId}`);
            
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
    // Return the reactive this and actions from the setup function
    return {
        units,
        loading,
        error,
        activities,
        research,
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
    };
});