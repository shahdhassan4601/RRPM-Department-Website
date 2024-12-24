import { defineStore } from "pinia";
import { ref } from "vue";
import { units as demoUnits, activities as demoActivities, scientificResearch as demoResearch} from "../utils/dataUtil"; // Import mock data

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
            units.value = await Promise.resolve(demoUnits);
            nextId.value = units.value.length + 1;
            activities.value = await Promise.resolve(demoActivities);
            research.value = await Promise.resolve(demoResearch);
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
            // Simulating API call
            const newUnitWithId = { ...newUnit, id: nextId.value++ }; // Generate unique ID
            units.value.push(newUnitWithId);
            return Promise.resolve(newUnitWithId); // Return the new unit
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
            const index = units.value.findIndex(
                (unit) => unit.id === updatedUnit.id
            );
            if (index !== -1) {
                units.value[index] = {
                    ...updatedUnit,
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
            const index = units.value.getUnitById(unitId);
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
        const result = activities.value.find((activity) => activity.id === activityId);
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
        // debugger
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
        // debugger
        const result = research.value.find((research) => research.id === ResearchId);
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
    }
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
        deleteResearch
    };
});
