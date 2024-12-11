const app = Vue.createApp({
    data() {
      return {
        units: [
          {
            name: 'Unit 1 name',
            clinics: [
              { name: 'General practice', hours: '9:00 AM - 5:00 PM', services: 'Check-ups, Vaccinations' },
              { name: 'Pediatric care', hours: '9:00 AM - 5:00 PM', services: 'Immunizations, Check-ups' }
            ],
            activities: ['activity 1 name', 'activity 2', 'activity 3'],
            contact: { phone: '+1 (555) 123-4567', location: '123 Main St, Springfield' }
          },
          {
            name: 'Unit 2 name',
            clinics: [
              { name: 'Dental Care', hours: '9:00 AM - 6:00 PM', services: 'Teeth Cleaning, Fillings' },
              { name: 'Eye Care', hours: '10:00 AM - 4:00 PM', services: 'Eye Exams, Glasses Prescription' }
            ],
            activities: ['activity 1 name', 'activity 2', 'activity 3'],
            contact: { phone: '+1 (555) 765-4321', location: '456 Elm St, Metropolis' }
          }
        ]
      };
    }
  });
  
  app.mount("#app");
