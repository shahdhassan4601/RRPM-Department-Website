new Vue({
    el: '#home',
    data: {
      units: [
        { id: 1, name: 'Unit 1', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Unit 2', image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Unit 3', image: 'https://via.placeholder.com/100' }
      ],
      activities: [
        { id: 1, title: 'Annual medical conference', date: 'August 15, 2025', description: 'Join us for our annual conference featuring leading experts in various medical fields.' },
        { id: 2, title: 'Community health fair', date: 'August 15, 2025', description: 'Join us for our community health fair with leading experts in various medical fields.' }
      ],
      insights: [
        { id: 1, title: 'Anim sint Lorem exceptur commodo', date: 'Oct 10, 2022', image: 'https://via.placeholder.com/100' },
        { id: 2, title: 'Adipiscing elit proident in elit magna deser', date: 'Oct 12, 2022', image: 'https://via.placeholder.com/100' },
        { id: 3, title: 'Lorem Ipsum Placeholder', date: 'Oct 15, 2022', image: 'https://via.placeholder.com/100' }
      ]
    },
    components: {
      'Header': {
        template: '<header><h1>RRPM Department Header</h1></header>'
      },
      'Footer': {
        template: '<footer><p>&copy; 2024 RRPM Medical Center. All rights reserved.</p></footer>'
      }
    },
    mounted() {
      // You can add any initialization logic here if needed
    }
  });
  