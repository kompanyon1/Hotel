'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Texts', [{
       description: 'corp1',
       mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
         unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.`,
          createdAt: new Date(),
          updatedAt: new Date(),
     },{
      description: 'corp2',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp1room1',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp1room2',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp1room3',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp1room4',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp2room1',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp2room2',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp2room3',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'corp2room4',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    },{
      description: 'homeText',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.`,
         createdAt: new Date(),
          updatedAt: new Date(),
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Texts', null, {})
  }
};
